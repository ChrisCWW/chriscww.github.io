import * as THREE from 'three';
import WebGL from 'three/addons/capablilities/WebGL.js';

if (!WebGL.isWebGLAvailable()) {
    console.log("Not available!")
    return;
}

//-- Setup Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, calWindowAspect(), 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

//-- Create Object
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


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