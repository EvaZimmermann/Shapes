import React, { ChangeEvent, useState } from 'react';
import { Engine, Scene, useScene } from 'react-babylonjs';
import { Vector3, Color3 } from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials';
import './App.css';


function App() {

  const [renderData, setRenderData] = useState({
    options: ['Box', 'Sphere', 'Cylinder', 'Circle', 'Triangular Pyramid', 'Square', 'Cone'],
    selected: 0,
  });
//HAMMER JOCHEN!! :D    yarn add @babylonjs/materials
// THX
  const [canvasSize, setCanvasSize] = useState({
    width: 90,
    height: 90,
  });

  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      console.log(e?.currentTarget.value);
      setRenderData({...renderData, selected: parseInt(e?.currentTarget.value)})
  };

  const renderSelectedFeature = () => {
    switch (renderData.selected) {
      case 0:
        return <box name='Box'> <standardMaterial name='box-mat' diffuseColor={Color3.Green()} specularColor={Color3.Black()} /> </box>;
      case 1:
        return <sphere name='Sphere'> <standardMaterial name='sphere-mat' diffuseColor={Color3.Green()} specularColor={Color3.Black()} /> </sphere>;
      case 2:
        return <cylinder name='Cylinder'> <standardMaterial name='cylinder-mat' diffuseColor={Color3.Blue()} specularColor={Color3.Black()} /> </cylinder>;
      case 3:
        return <disc name='Circle'> <standardMaterial name='circle-mat' diffuseColor={Color3.Yellow()} specularColor={Color3.Black()} /> </disc>;
      case 4:
        return <polyhedron name='Triangular Pyramid'> <standardMaterial name='triangularPyramid-mat' diffuseColor={Color3.Yellow()} specularColor={Color3.Black()} /> </polyhedron>;
      case 5:
        return <plane name='Square'> <standardMaterial name='square-mat' diffuseColor={Color3.Yellow()} specularColor={Color3.Black()} /> </plane>;
      case 6:
        return <cylinder name='Cone' diameterTop={0}> <standardMaterial name='cone-mat' diffuseColor={Color3.Green()} specularColor={Color3.Black()} /> </cylinder>;
    };
  };


  return (
    <div className="App">
    <input type="range" id="Canvas Size" name="Canvas Size" min="10" max="90" value={canvasSize.width}
      onChange={(e) => setCanvasSize({...canvasSize, width: e.currentTarget.valueAsNumber})}>
    </input>
    <input type="range" id="Canvas Size" name="Canvas Size" min="10" max="90" value={canvasSize.height}
      onChange={(e) => setCanvasSize({...canvasSize, height: e.currentTarget.valueAsNumber})}>
    </input>
    <select name="customSearch" className="custom-search-select" onChange={handleChange}>
    {renderData.options.map((shapeStr, index) => {
      return (<option key={index} value={index.toString()}>{shapeStr}</option>);
    })}
    </select>
      <header className="App-header">
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS' width={(canvasSize.width / 100) * window.innerWidth} height={(canvasSize.height / 100) * window.innerHeight} canvasStyle={{ aspectRatio: 'unset' }}>
          <Scene>
            <arcRotateCamera name="camera1" target={Vector3.Zero()} alpha={-Math.PI / 2} beta={Math.PI / 4} radius={8} />
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
            <ground name='ground' position={new Vector3(0,-1,0)} width={10} height={10} subdivisions={10} receiveShadows={true} >
              <standardMaterial name='efweibgouzbgw' wireframe={true} specularColor={Color3.Red()}/>
            </ground>
            {renderSelectedFeature()}
          </Scene>
        </Engine>
      </header>
    </div>
  );
}


export default App;
