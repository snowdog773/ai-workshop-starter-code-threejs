// Three.js Interactive Portfolio Scene
// Tutorial Reference: https://threejs.org/docs/index.html#manual/introduction/Creating-a-scene

// Core Three.js imports
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 1. CORE SETUP
// Initialize the fundamental Three.js components
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);

// Initialize WebGL renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("portfolioCanvas"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Setup orbital controls for mouse interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Add smooth camera movement

// 2. MOVEMENT CONFIGURATION
let moveSpeed = 0.2; // Units per frame
let rotateSpeed = 0.02; // Radians per frame

// Keyboard controls for camera movement
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      camera.position.z -= moveSpeed;
      break; // Forward
    case "ArrowDown":
      camera.position.z += moveSpeed;
      break; // Backward
    case "ArrowLeft":
      camera.position.x -= moveSpeed;
      break; // Left
    case "ArrowRight":
      camera.position.x += moveSpeed;
      break; // Right
    case "q":
      camera.rotation.y += rotateSpeed;
      break; // Rotate left
    case "e":
      camera.rotation.y -= rotateSpeed;
      break; // Rotate right
  }
});

// 3. LIGHTING SETUP
const light = new THREE.PointLight(0xffffff, 1000, 100);
light.position.set(10, 10, 10);
scene.add(light);

// 4. PROJECT DATA
const projectData = [
  { name: "Project 1", color: 0xff0000 }, // Red
  { name: "Project 2", color: 0x00ff00 }, // Green
  { name: "Project 3", color: 0x0000ff }, // Blue
];

// 5. ENVIRONMENT SETUP
// Create floor
const floorGeometry = new THREE.PlaneGeometry(50, 50);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
scene.add(floor);

// 6. PROJECT CUBES SETUP
const cubeGroup = new THREE.Group();
projectData.forEach((project, i) => {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: project.color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(i * 3 - 3, 0, 0);
  cube.userData = { name: project.name };
  cubeGroup.add(cube);
});
scene.add(cubeGroup);

// 7. CAMERA POSITIONING
camera.position.z = 8;

// 8. INTERACTION SETUP
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Mouse click handler
window.addEventListener("click", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cubeGroup.children);
  if (intersects.length > 0) {
    const clickedCube = intersects[0].object;
    alert(`You clicked on ${clickedCube.userData.name}`);
  }
});

// 9. ANIMATION LOOP
function animate() {
  requestAnimationFrame(animate);
  cubeGroup.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// 10. RESPONSIVE DESIGN
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
