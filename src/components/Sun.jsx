import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Sun(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/sun.gltf");

  useFrame(() => {
    group.current.rotation.y += 0.0009;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        scale={2.5}
      />
    </group>
  );
}

useGLTF.preload("/sun.gltf");
