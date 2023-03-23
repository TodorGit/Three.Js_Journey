import * as THREE from 'three'
import { Group } from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const group = new THREE.Group()
group.position.y = 1 
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cubeOne = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cubeOne)
cubeOne.position.x = 2

const cubeTwo = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
group.add(cubeTwo)
cubeTwo.position.x = 0


const cubeThree = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
group.add(cubeThree)
cubeThree.position.x = -2

//Axes helper 
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper)



/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)