const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
$(".laptop").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1 , 1 , 1);
const material = new THREE.MeshBasicMaterial({color : 0x0000FF});
const cube = new THREE.Mesh(geometry , material);

scene.add(cube);

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene , camera);

    cube.rotation.x = 0.5;
    cube.rotation.y += 0.005;
}
animate();
