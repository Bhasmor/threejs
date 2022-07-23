import modelPath from "./models/pcms.gltf";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelPath);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[3.31, 2.86, -5.75]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[0.86, 3.46, 0.86]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[3.42, -0.79, -5.92]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[2.46, 0.23, 2.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-0.68, -0.95, 0.12]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[3.09, 0.19, 6.78]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-4.31, -0.79, -5.1]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={0.33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-4.93, -0.79, -4.18]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={0.33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[4.53, -0.79, 2.24]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[0.33, 0.33, 0.81]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-5.18, -0.79, -3.07]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[0.33, 0.33, 0.81]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-3.91, -0.79, -2.22]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={0.33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[4.06, -0.79, 3.21]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[0.33, 0.33, 0.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[-6.15, -0.79, -2.39]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={0.33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[4.03, -0.79, 3.84]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[0.36, 0.33, 0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[-6.87, -0.79, -1.33]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={0.33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[-2.46, -0.79, 1.66]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[0.33, 0.33, 2.63]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[0.56, -0.79, 3.71]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={0.33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[7.54, -0.83, 6.25]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[1.65, 0.22, 1.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[7.64, -0.29, 5.61]}
        rotation={[Math.PI, -0.97, 3.06]}
        scale={[0.49, 0.07, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[8.11, -0.29, 5.93]}
        rotation={[Math.PI, -0.97, 3.06]}
        scale={[0.49, 0.07, 0.32]}
      />
      <group
        position={[2.64, 11.99, -4.77]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={[0.87, 7.9, 11.11]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelPath);