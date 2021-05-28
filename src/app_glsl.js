import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { Scene } from 'three/src/scenes/Scene';
import { PointLight } from 'three/src/lights/PointLight';
import { BoxGeometry } from 'three/src/geometries/BoxGeometry';
import { MeshLambertMaterial } from 'three/src/materials/MeshLambertMaterial';
// import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial';
import { Mesh } from 'three/src/objects/Mesh';

import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';

// シェーダーソース
import vertexSource from './shader.vert';
import fragmentSource from './shader.frag';


const init = () => {

  const width = 960 // window.innerWidth // 960
  const height = 540 // window.innerHeight // 540

  const renderer = new WebGLRenderer({
    canvas: document.querySelector('#canvas-container'),
    // alpha: ture
  });
  renderer.setSize(width, height);// 描画サイズ
  // renderer.setPixelRatio(window.devicePixelRatio);// ピクセル比

  // const container = document.getElementById("canvas-container");
  // container.appendChild(renderer.domElement);

  const camera = new PerspectiveCamera(60, width / height, 1, 10)
  camera.position.z = 3

  const scene = new Scene()

  const light = new PointLight(0x00ffff)
  light.position.set(2, 2, 2) // ライトの位置を設定
  
  scene.add(light) 

  const geo = new BoxGeometry(1, 1, 1)
  // シェーダーソースを渡してマテリアルを作成
  const mat = new ShaderMaterial({
      vertexShader: vertexSource,
      fragmentShader: fragmentSource
    });
  // const mat = new MeshLambertMaterial({ color: 0xffffff })
  const mesh = new Mesh(geo, mat)
  mesh.rotation.x = Math.PI / 4
  mesh.rotation.y = Math.PI / 4
  
  scene.add(mesh);

  renderer.render(scene, camera);

}

export default init