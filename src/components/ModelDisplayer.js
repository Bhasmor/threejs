import '../App.css';
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Page from '../components/Page';

function ModelDisplayer() {
  const ref = useRef()
  return (
    <>
    <div className='model-displayer'>
      <div className="canvas-container">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 60 }}>
            <Suspense fallback={null}>
                <Stage controls={ref} preset="rembrandt" intensity={1}  shadows={true} environment="city">
                <Page />
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} enableZoom={false} enablePan={false}/>
        </Canvas>        
      </div>
    </div>   
    </>
  );
}

export default ModelDisplayer;

