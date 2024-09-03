/*import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}*/

function createStara() {
    const container = document.querySelector("body");

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const maxRadius = Math.min(window.innerWidth, window.innerHeight) / 2; 

    for (let i = 0; i < 7000; i++) {
        const stara = document.createElement("div");
        stara.className = "stara";
        stara.style.width = "1.15px"; 
        stara.style.height = "1.15px"; 
        stara.style.backgroundColor = "white"; 
        stara.style.position = "absolute"; 
        stara.style.borderRadius = "50%"; 

        const angle = Math.random() * 2 * Math.PI; 
        const radius = Math.random() * maxRadius * (1 - Math.pow(Math.random(), 2)); 

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        stara.style.left = `${x}px`;  
        stara.style.top = `${y}px`;   

        container.appendChild(stara);
    }
}

createStara();

function createStar(){
    const container = document.querySelector("body");
    for(let i=0; i < 1000; i++){
        const star = document.createElement("div");
star.className = "star";
star.style.width = "1px"
star.style.height = "1px"

star.style.top = Math.random() * 100 + "%";
star.style.left = Math.random() * 100 + "%";

container.appendChild(star);
    }
}

createStar();

function createStars() {
    const container = document.querySelector("body");

    // Create an additional 2,000 stars
    for (let i = 0; i < 1500; i++) {
        const stars = document.createElement("div");
        stars.className = "stars";
        stars.style.width = "1.1px"; // Size of the star
        stars.style.height = "1.1px"; // Size of the star
        stars.style.backgroundColor = "white"; // Color of the star
        stars.style.position = "absolute"; // Ensure it’s positioned absolutely

        // Position the star randomly
        stars.style.bottom = Math.random() * 100 + "%";
        stars.style.right = Math.random() * 100 + "%";

        container.appendChild(stars);
    }
}

createStars();

function createStarss() {
    const container = document.querySelector("body");

    for (let i = 0; i < 700; i++) {
        const starss = document.createElement("div");
        starss.className = "starss";
        starss.style.width = "1.15px"; // Size of the star
        starss.style.height = "1.15px"; // Size of the star
        starss.style.backgroundColor = "red"; // Color of the star
        starss.style.position = "absolute"; // Ensure it’s positioned absolutely

        // Position the star randomly
        starss.style.bottom = Math.random() * 100 + "%";
        starss.style.left = Math.random() * 100 + "%";

        container.appendChild(starss);
    }
}

createStarss();

function createStarssb() {
    const container = document.querySelector("body");

    for (let i = 0; i < 700; i++) {
        const starssb = document.createElement("div");
        starssb.className = "starssb";
        starssb.style.width = "1.19px"; // Size of the star
        starssb.style.height = "1.19px"; // Size of the star
        starssb.style.backgroundColor = "blue"; // Color of the star
        starssb.style.position = "absolute"; // Ensure it’s positioned absolutely

        // Position the star randomly
        starssb.style.top = Math.random() * 100 + "%";
        starssb.style.right = Math.random() * 100 + "%";

        container.appendChild(starssb);
    }
}

createStarssb();

//now big size moving stars

function createStarsb() {
    const container = document.querySelector("body");

    for (let i = 0; i < 5; i++) {
        const starsb = document.createElement("div");
        starsb.className = "starsb";
        starsb.style.width = "5px"; // Size of the star
        starsb.style.height = "5px"; // Size of the star
        starsb.style.backgroundColor = "blue"; // Color of the star
        starsb.style.position = "absolute"; // Ensure it’s positioned absolutely

        // Position the star randomly
        starsb.style.top = Math.random() * 100 + "%";
        starsb.style.right = Math.random() * 100 + "%";

        container.appendChild(starsb);
    }
}

createStarsb();

function createStarsw() {
    const container = document.querySelector("body");

    for (let i = 0; i < 10; i++) {
        const starsw = document.createElement("div");
        starsw.className = "starsw";
        starsw.style.width = "5px"; // Size of the star
        starsw.style.height = "5px"; // Size of the star
        starsw.style.backgroundColor = "white"; // Color of the star
        starsw.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsw.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsw.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsw);
    }
}

createStarsw();

function createStarsy() {
    const container = document.querySelector("body");

    for (let i = 0; i < 10; i++) {
        const starsy = document.createElement("div");
        starsy.className = "starsy";
        starsy.style.width = "5px"; // Size of the star
        starsy.style.height = "5px"; // Size of the star
        starsy.style.backgroundColor = "yellow"; // Color of the star
        starsy.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsy.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsy.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsy);
    }
}

createStarsy();

function createStarsr() {
    const container = document.querySelector("body");

    for (let i = 0; i < 5; i++) {
        const starsr = document.createElement("div");
        starsr.className = "starsr";
        starsr.style.width = "5px"; // Size of the star
        starsr.style.height = "5px"; // Size of the star
        starsr.style.backgroundColor = "red"; // Color of the star
        starsr.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsr.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsr.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsr);
    }
}

createStarsr();

//now for small size moving star

function createStarsrs() {
    const container = document.querySelector("body");

    for (let i = 0; i < 20; i++) {
        const starsrs = document.createElement("div");
        starsrs.className = "starsrs";
        starsrs.style.width = "px"; // Size of the star
        starsrs.style.height = "2px"; // Size of the star
        starsrs.style.backgroundColor = "red"; // Color of the star
        starsrs.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsrs.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsrs.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsrs);
    }
}

createStarsrs();

function createStarsbs() {
    const container = document.querySelector("body");

    for (let i = 0; i < 20; i++) {
        const starsbs = document.createElement("div");
        starsbs.className = "starsbs";
        starsbs.style.width = "2px"; // Size of the star
        starsbs.style.height = "2px"; // Size of the star
        starsbs.style.backgroundColor = "blue"; // Color of the star
        starsbs.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsbs.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsbs.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsbs);
    }
}

createStarsys();

function createStarsys() {
    const container = document.querySelector("body");

    for (let i = 0; i < 20; i++) {
        const starsys = document.createElement("div");
        starsys.className = "starsys";
        starsys.style.width = "2px"; // Size of the star
        starsys.style.height = "2px"; // Size of the star
        starsys.style.backgroundColor = "yellow"; // Color of the star
        starsys.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsys.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsys.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsys);
    }
}

createStarsys();

function createStarsws() {
    const container = document.querySelector("body");

    for (let i = 0; i < 20; i++) {
        const starsws = document.createElement("div");
        starsws.className = "starsws";
        starsws.style.width = "2px"; // Size of the star
        starsws.style.height = "2px"; // Size of the star
        starsws.style.backgroundColor = "white"; // Color of the star
        starsws.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsws.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsws.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsws);
    }
}

createStarsws();

//now very big size moving star 

function createStarswss() {
    const container = document.querySelector("body");

    for (let i = 0; i < 15; i++) {
        const starswss = document.createElement("div");
        starswss.className = "starswss";
        starswss.style.width = "6.5px"; // Size of the star
        starswss.style.height = "6.5px"; // Size of the star
        starswss.style.backgroundColor = "white"; // Color of the star
        starswss.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starswss.style.top = Math.random() * 100 + "%"; // Random vertical position
        starswss.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starswss);
    }
}

createStarswss();

function createStarsyss() {
    const container = document.querySelector("body");

    for (let i = 0; i < 13; i++) {
        const starsyss = document.createElement("div");
        starsyss.className = "starsyss";
        starsyss.style.width = "6.5px"; // Size of the star
        starsyss.style.height = "6.5px"; // Size of the star
        starsyss.style.backgroundColor = "yellow"; // Color of the star
        starsyss.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsyss.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsyss.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsyss);
    }
}

createStarsyss();

function createStarsbss() {
    const container = document.querySelector("body");

    for (let i = 0; i < 4; i++) {
        const starsbss = document.createElement("div");
        starsbss.className = "starsbss";
        starsbss.style.width = "6.5px"; // Size of the star
        starsbss.style.height = "6.5px"; // Size of the star
        starsbss.style.backgroundColor = "blue"; // Color of the star
        starsbss.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsbss.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsbss.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsbss);
    }
}

createStarsbss();

function createStarsrss() {
    const container = document.querySelector("body");

    for (let i = 0; i < 4; i++) {
        const starsrss = document.createElement("div");
        starsrss.className = "starsrss";
        starsrss.style.width = "6.5px"; // Size of the star
        starsrss.style.height = "6.5px"; // Size of the star
        starsrss.style.backgroundColor = "red"; // Color of the star
        starsrss.style.position = "absolute";
        // Position the star randomly on the Y-axis
        starsrss.style.top = Math.random() * 100 + "%"; // Random vertical position
        starsrss.style.right = Math.random() * 100 + "%"; // Start slightly off the left edge

        container.appendChild(starsrss);
    }
}

createStarsrss();

//creating 3d solar system
 
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import starsTexture from './images/stars.jpg';
import sunTexture from './images/sun.jpg';
import mercuryTexture from './images/mercury.jpg';
import venusTexture from './images/venus.jpg';
import earthTexture from './images/earth.jpg';
import marsTexture from './images/mars.jpg';
import jupiterTexture from './images/jupiter.jpg';
import saturnTexture from './images/saturn.jpg';
import saturnRingTexture from './images/saturn_ring.png';
import uranusTexture from './images/uranus.jpg';
import neptuneTexture from './images/neptune.jpg';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
]);

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-90, 140, 140);
orbit.update();

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const textureLoader = new THREE.TextureLoader();

const sunGeo = new THREE.SphereGeometry(12, 25, 20);
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture)
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

const pointLight = new THREE.PointLight(0xffffff, 3, 300);
scene.add(pointLight);

function createPlanet(size, texture, position, ring) {
    const geometry = new THREE.SphereGeometry(size, 25, 20);
    const material = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture)
    });
    const planet = new THREE.Mesh(geometry, material);
    const planetObj = new THREE.Object3D();
    planetObj.add(planet);
    scene.add(planetObj);
    planet.position.x = position;

    if (ring) {
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius, 30
        );
        const ringMat = new THREE.MeshStandardMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        planetObj.add(ringMesh);

        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
    }

    return { planet, planetObj };
}

const mercury = createPlanet(5, mercuryTexture, 20);
const venus = createPlanet(8, venusTexture, 40);
const earth = createPlanet(9, earthTexture, 60);
const mars = createPlanet(7, marsTexture, 80);
const jupiter = createPlanet(12, jupiterTexture, 100);
const saturn = createPlanet(10, saturnTexture, 150, {
    innerRadius: 10,
    outerRadius: 20,
    texture: saturnRingTexture
});
const uranus = createPlanet(7, uranusTexture, 200);
const neptune = createPlanet(7, neptuneTexture, 220);

function animate() {
    sun.rotateY(0.002);
    mercury.planet.rotateY(0.001);
    mercury.planetObj.rotateY(0.001);
    venus.planet.rotateY(0.0012);
    venus.planetObj.rotateY(0.0015);
    earth.planet.rotateY(0.012);
    earth.planetObj.rotateY(0.0012);
    mars.planet.rotateY(0.013);
    mars.planetObj.rotateY(0.0019);
    jupiter.planet.rotateY(0.04);
    jupiter.planetObj.rotateY(0.0023);
    saturn.planet.rotateY(0.001);
    saturn.planetObj.rotateY(0.02);
    uranus.planet.rotateY(0.01);
    uranus.planetObj.rotateY(0.0015);
    neptune.planet.rotateY(0.01);
    neptune.planetObj.rotateY(0.001);
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
