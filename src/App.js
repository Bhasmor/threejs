import './App.css';
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Page from './components/Page';

function App() {
  const ref = useRef()
  return (      
      <div className="canvas-container">
        <h2>Basic examples of Three.JS</h2>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1}  shadows={false} environment="city">
          <Page />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} />
    </Canvas>
      </div>
  );
}

export default App;

