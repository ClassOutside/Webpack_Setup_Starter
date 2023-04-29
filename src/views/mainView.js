import * as THREE from 'three';

export function setupScene(canvas) {

	//Scene is container for objects, cameras, and lights
	const scene = new THREE.Scene();

	// Create a green torus
	const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
	const torusMaterial = new THREE.MeshPhongMaterial({
		color: 0xffa500, // bright copper color
		emissive: 0x222222, // dark color for ambient lighting
		specular: 0xffffff, // white color for specular lighting
		shininess: 100 // high value for shininess
	});
	const torus = new THREE.Mesh(torusGeometry, torusMaterial);
	scene.add(torus);

	// Create a point light and add it to the scene
	const pointLight = new THREE.PointLight(0xffffff, 1, 100);
	pointLight.position.set(50, 50, 50);
	scene.add(pointLight);

	// Create a light helper and add it to the scene
	const lightHelper = new THREE.PointLightHelper(pointLight);
	scene.add(lightHelper);

	// Create an ambient light and add it to the scene
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
	scene.add(ambientLight);

	// Move the light so that it shines on the torus
	pointLight.position.set(0, 50, 0);

	// Create a camera and set its position and orientation
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(0, 0, 50);

	// Move the camera back so the torus is visible
	camera.position.z = 50;

	// Add the camera to the scene
	scene.add(camera);

	// Create a renderer and set its size
	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#background')
	});
	renderer.setSize(window.innerWidth, window.innerHeight);

	// Animate the scene
	function animate() {
		requestAnimationFrame(animate);
		torus.rotation.x += 0.01;
		torus.rotation.y += 0.01;
		renderer.render(scene, camera);
	}
	animate();
};