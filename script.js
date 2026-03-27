const canvas = document.getElementById('simulationCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let core;
const asteroids = [];
const stars = [];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Reset core position on resize
    core = new Particle(width / 2, height / 2, 0, 0, 40, '#FFD700', 5000, true);
    
    // Generate stars
    stars.length = 0;
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            alpha: Math.random()
        });
    }
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
    }

    mult(n) {
        this.x *= n;
        this.y *= n;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        const m = this.mag();
        if (m !== 0) {
            this.mult(1 / m);
        }
    }
    
    dist(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Particle {
    constructor(x, y, vx, vy, radius, color, mass, isCore = false) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(vx, vy);
        this.acc = new Vector(0, 0);
        this.radius = radius;
        this.color = color;
        this.mass = mass;
        this.isCore = isCore;
    }

    applyForce(force) {
        const f = new Vector(force.x, force.y);
        f.mult(1 / this.mass);
        this.acc.add(f);
    }

    update() {
        if (this.isCore) return; // Core doesn't move

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0); // Reset acceleration
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        
        if (this.isCore) {
            // Glowing effect for core
            ctx.shadowBlur = 50;
            ctx.shadowColor = this.color;
            ctx.fillStyle = this.color;
        } else {
            ctx.shadowBlur = 0;
            ctx.fillStyle = this.color;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
        ctx.closePath();
    }
    
    checkCollision(other) {
        const d = this.pos.dist(other.pos);
        if (d < this.radius + other.radius) {
            // Simple elastic collision response (approximate) or merge
            // For this sim, let's just make them bounce off simple
            
            // Resolve overlap
             const overlap = (this.radius + other.radius) - d;
             const dx = this.pos.x - other.pos.x;
             const dy = this.pos.y - other.pos.y;
             
             // Normal vector
             const normal = new Vector(dx, dy);
             normal.normalize();
             
             // Move apart
             if (!this.isCore && !other.isCore) {
                 const move = new Vector(normal.x, normal.y);
                 move.mult(overlap / 2);
                 this.pos.add(move);
                 const otherMove = new Vector(normal.x, normal.y);
                 otherMove.mult(-overlap / 2);
                 other.pos.add(otherMove);
             } else if (!this.isCore && other.isCore) {
                // If hitting core, reset/die or bounce? Let's bounce
                 const move = new Vector(normal.x, normal.y);
                 move.mult(overlap);
                 this.pos.add(move);
             }


            // Velocity reflection (simplified)
            // v' = v - 2 * (v . n) * n
            
            // Relative velocity
            // This is a bit complex for a simple "bumping" sim, let's just reverse velocity component along normal
            // Or better, standard elastic collision 1D along normal
            
            // For simplicity and stability in this specific "fun" sim:
            // strong damping on collision
        }
    }
}

function calculateGravity(p1, p2) {
    const G = 0.5; // Gravitational constant for this world
    const force = new Vector(p2.pos.x - p1.pos.x, p2.pos.y - p1.pos.y);
    const distance = Math.max(force.mag(), p1.radius + p2.radius); // Constrain distance to avoid singularity
    force.normalize();
    
    const strength = (G * p1.mass * p2.mass) / (distance * distance);
    force.mult(strength);
    return force;
}

function spawnAsteroid(x, y) {
    const radius = Math.random() * 5 + 3; // 3 to 8
    const mass = radius * 2;
    // Random bright color
    const hue = Math.floor(Math.random() * 360);
    const color = `hsl(${hue}, 70%, 60%)`;
    
    // Orbital velocity calculation (approximate for circular orbit)
    // v = sqrt(GM/r)
    // We want velocity perpendicular to the radius vector
    
    const rVector = new Vector(core.pos.x - x, core.pos.y - y);
    const r = rVector.mag();
    const vMag = Math.sqrt((0.5 * core.mass) / r); // G=0.5
    
    // Perpendicular vector (-y, x) or (y, -x)
    let v = new Vector(-rVector.y, rVector.x); 
    v.normalize();
    v.mult(vMag);
    
    // Add some randomness
    v.x += (Math.random() - 0.5) * 0.5;
    v.y += (Math.random() - 0.5) * 0.5;

    asteroids.push(new Particle(x, y, v.x, v.y, radius, color, mass));
}

window.addEventListener('resize', resize);
window.addEventListener('mousedown', (e) => {
    spawnAsteroid(e.clientX, e.clientY);
});

// Animation loop
function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw stars
    ctx.fillStyle = 'white';
    for (const star of stars) {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.globalAlpha = 1.0;

    // Physics Update
    for (const asteroid of asteroids) {
        // Gravity from core
        const f = calculateGravity(asteroid, core);
        asteroid.applyForce(f);
        
        // Gravity from other asteroids (optional, maybe too expensive/chaotic for "simple")
        // Let's skip asteroid-asteroid gravity for performance and cleaner orbits, 
        // focus on Core gravity.
        
        asteroid.update();
    }
    
    // Collision handling
    for (let i = 0; i < asteroids.length; i++) {
        // Check collision with core
        const distToCore = asteroids[i].pos.dist(core.pos);
        if (distToCore < asteroids[i].radius + core.radius) {
             // Absorb logic or Bounce? 
             // "Crash/Absorb" is visually cleaner for "falling into sun"
             // Let's remove asteroid if it hits core
             asteroids.splice(i, 1);
             i--;
             // Maybe increase core size slightly?
             if (core.radius < 100) core.radius += 0.2;
             continue;
        }
        
        // Check collision with other asteroids (O(N^2) - be careful if many particles)
        // Optimization: only check if few particles
        if (asteroids.length < 200) {
            for (let j = i + 1; j < asteroids.length; j++) {
                // strict collision logic needed here
                // For now, let's just ignore or simple bounce
                // Implementing full elastic bounce is verbose, let's just skip for this "random color asteroid" request
                // unless they overlap too much
            }
        }
    }

    // Draw
    core.draw();
    for (const asteroid of asteroids) {
        asteroid.draw();
    }

    requestAnimationFrame(animate);
}

// Init
resize();
animate();
