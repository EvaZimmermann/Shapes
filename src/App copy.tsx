export{}
// import React, { useState, useRef } from 'react';

// import "@babylonjs/core/Physics/physicsEngineComponent"  // side-effect adds scene.enablePhysics function

// import { CannonJSPlugin } from '@babylonjs/core/Physics/Plugins'
// import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture';
// import { Vector3 } from '@babylonjs/core/Maths/math.vector';
// import { Nullable } from '@babylonjs/core/types';
// import { Mesh } from '@babylonjs/core/Meshes/mesh';
// import { PhysicsImpostor } from '@babylonjs/core/Physics/physicsImpostor';
// import { Color3 } from '@babylonjs/core/Maths/math.color';
// import { FresnelParameters } from '@babylonjs/core/Materials/fresnelParameters';
// import { Texture } from '@babylonjs/core/Materials/Textures/texture';

// import { Scene, Engine } from 'react-babylonjs';
// import './App.css';

// import * as CANNON from 'cannon';
// window.CANNON = CANNON;

// const gravityVector = new Vector3(0, -9.81, 0);



// const App: React.FC = () => {

//   let sphereRef = useRef<Nullable<Mesh>>();


//   const onButtonClicked = () => {
//     // Change form
//     if (sphereRef.current) {
//       sphereRef.current.physicsImpostor!.applyImpulse(
//         Vector3.Up().scale(10),
//         sphereRef.current.getAbsolutePosition()
//       );
//     }
//   };
//   const handleChange = () => {
//     // Change form
//     console.log('Test');
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//       <select name="customSearch" className="custom-search-select" onChange={handleChange}>
//                 <option>Select Item</option>
//                 <option>item1</option>
//                 <option>item2</option>
//            </select>
//         <button onClick={onButtonClicked}>Change Form</button>
//         <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
  
//           <Scene enablePhysics={[gravityVector, new CannonJSPlugin()]}>
//             <arcRotateCamera name="arc" target={ new Vector3(0, 1, 0) }
//                   alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
//                   radius={4} minZ={0.001} wheelPrecision={50} 
//                   lowerRadiusLimit={8} upperRadiusLimit={20} upperBetaLimit={Math.PI / 2} />
//             <hemisphericLight name='hemi' direction={new Vector3(0, -1, 0)} intensity={0.8} />
//             <directionalLight name="shadow-light" setDirectionToTarget={[Vector3.Zero()]} direction={Vector3.Zero()} position = {new Vector3(-40, 30, -40)}
//               intensity={0.4} shadowMinZ={1} shadowMaxZ={2500}>
//               <shadowGenerator mapSize={1024} useBlurExponentialShadowMap={true} blurKernel={32} darkness={0.8}
//                 shadowCasters={["Sphere", "dialog"]} forceBackFacesOnly={true} depthScale={100} />
//             </directionalLight>
//             <sphere ref={sphereRef} name="Sphere" diameter={2} segments={16} position={new Vector3(0, 1.5, 0)}>
//               <physicsImpostor type={PhysicsImpostor.SphereImpostor} _options={{ mass: 1, restitution: 0.9 }} />
//               <standardMaterial name='material1' specularPower={16}
//                 diffuseColor={Color3.Black()}
//                 emissiveColor={new Color3(0.5, 0.5, 0.5)}
//                 reflectionFresnelParameters={FresnelParameters.Parse({
//                     isEnabled: true,
//                     leftColor: [1, 1, 1],
//                     rightColor: [0, 0, 0],
//                     bias: 0.1,
//                     power: 1
//                 })}
//               />
//             </sphere>

//             <ground name="Ground" width={10} height={10} subdivisions={2} receiveShadows={true}>
//               <physicsImpostor type={PhysicsImpostor.BoxImpostor} _options={{ mass: 0, restitution: 0.9 }} />
//             </ground>
//           </Scene>
//         </Engine>
//       </header>
//     </div>
//   );
// }
// export default App;