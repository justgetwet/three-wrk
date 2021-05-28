// import * as THREE from "three";
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { Scene } from 'three/src/scenes/Scene';
// import { PointLight } from 'three/src/lights/PointLight';
import { DirectionalLight } from 'three/src/lights/DirectionalLight'
import { BoxGeometry } from 'three/src/geometries/BoxGeometry';
// import { MeshLambertMaterial } from 'three/src/materials/MeshLambertMaterial';
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial';
import { Mesh } from 'three/src/objects/Mesh';

const init = () => {

  const width = 960;
  const height = 540;

  const renderer = new WebGLRenderer({
    canvas: document.querySelector('#canvas-container'),
    alpha: true
  });
  renderer.setSize(width, height);

  const scene = new Scene();

  const camera = new PerspectiveCamera(
    45,
    width / height,
    1,
    10000
  );
  camera.position.set(0, 0, 1000);

  const geometry = new BoxGeometry(300, 300, 300);
  const material = new MeshStandardMaterial({color: 0xff0000});
  const box = new Mesh(geometry, material);
  scene.add(box);

  const directionalLight = new DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  tick();

  function tick()  {
    requestAnimationFrame(tick);
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
}

export default init