import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, CameraControls, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
const { DEG2RAD } = THREE.MathUtils;

export function Mars({ isChoosed, name, onClick }) {
  const group = useRef();
  const cameraControlsRef = useRef();
  const { nodes, materials, animations } = useGLTF("/mars.gltf");
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();
  useEffect(() => {
    if (!isChoosed) {
      cameraControlsRef?.current?.zoom(-camera.zoom / 1.3, true);
      cameraControlsRef?.current?.rotate(-180 * DEG2RAD, 0, true);
    } else {
      cameraControlsRef?.current?.zoom(camera.zoom / 0.3, true);
      cameraControlsRef?.current?.rotate(180 * DEG2RAD, 0, true);
    }
  }, [isChoosed]);
  useFrame(() => {
    group.current.rotation.y -= 0.009;
  });
  return (
    <group
      ref={group}
      dispose={null}
      onClick={(event) => onClick(event, name, camera, cameraControlsRef)}
    >
      <CameraControls ref={cameraControlsRef} dollySpeed={0} maxZoom={1} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.0029}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Default_OBJ.005"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mars.gltf");
