import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Background from "./Utilities/Background";
import * as THREE from 'three'
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber';
import './App.css';

function App() {

  useEffect(() => {
    const tileArr = JSON.parse(new URLSearchParams(window.location.search).get("data"));
    console.log("startedasdasdasds", tileArr);
  }, []);

  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={['#000000']} />
        <axesHelper />
        <Background />
      </Canvas>
      <div className="loadingBackground">
        <div>
          <h1>asdasdasdasda</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
