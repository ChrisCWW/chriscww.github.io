import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

if (!WebGL.isWebGLAvailable()) {
    console.log("Not available!")
}

//-- Setup Scene
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 75, calWindowAspect(), 0.1, 1000 );
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

//-- Create Object

const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

const points = [];
points.push( new THREE.Vector3(-10, 0, 0));
points.push( new THREE.Vector3(0, 10, 0));
points.push( new THREE.Vector3(10, 0, 0));
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

const line = new THREE.Line( lineGeometry, lineMaterial );

scene.add( cube );
scene.add( line );

const loader = new FontLoader();

loader.load('node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json', (font) => {
	const geometry = new TextGeometry( 'Chris', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
} );

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();

function calWindowAspect() {
    return window.innerWidth / window.innerHeight;
}