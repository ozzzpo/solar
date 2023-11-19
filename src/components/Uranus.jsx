import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, CameraControls, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
const { DEG2RAD } = THREE.MathUtils;

export function Uranus({ isChoosed, name, onClick }) {
  const group = useRef();
  const cameraControlsRef = useRef();
  const { nodes, materials, animations } = useGLTF("/uranus.gltf");
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();
  useEffect(() => {
    if (!isChoosed) {
      cameraControlsRef?.current?.zoom(-camera.zoom / 1.8, true);
      cameraControlsRef?.current?.rotate(-180 * DEG2RAD, 0, true);
    } else {
      cameraControlsRef?.current?.zoom(camera.zoom / 0.8, true);
      cameraControlsRef?.current?.rotate(180 * DEG2RAD, 0, true);
    }
  }, [isChoosed]);
  useFrame(() => {
    group.current.rotation.y -= 0.004;
    group.current.rotation.X -= 0.001;
  });
  return (
    <group
      ref={group}
      dispose={null}
      onClick={(event) => onClick(event, name, camera, cameraControlsRef)}
    >
      <CameraControls ref={cameraControlsRef} dollySpeed={0} maxZoom={1} />
      <group position={[0, 0.003, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Sphere_Material002_0.geometry}
            material={materials["Material.002"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.5}
          />
          <mesh
            geometry={nodes.Circle_ring_0.geometry}
            material={materials.ring}
            rotation={[-Math.PI / 2, 1.367, 0]}
            scale={2.014}
          />
          <mesh
            geometry={nodes.Circle001_ring_0.geometry}
            material={materials.ring}
            rotation={[-Math.PI / 2, 1.367, 0]}
            scale={2.376}
          />
          <mesh
            geometry={nodes.Circle002_ring_0.geometry}
            material={materials.ring}
            rotation={[-Math.PI / 2, 1.367, 0]}
            scale={2.523}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/uranus.gltf");
