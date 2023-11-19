import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, CameraControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
const { DEG2RAD } = THREE.MathUtils;
export function Mercury({ onClick, name, isChoosed }) {
  const group = useRef();
  const { camera } = useThree();
  const cameraControlsRef = useRef();
  useEffect(() => {
    if (!isChoosed) {
      cameraControlsRef?.current?.zoom(-camera.zoom / 1.08, true);
      cameraControlsRef?.current?.rotate(-180 * DEG2RAD, 0, true);
    } else {
      cameraControlsRef?.current?.zoom(camera.zoom / 0.08, true);
      cameraControlsRef?.current?.rotate(180 * DEG2RAD, 0, true);
    }
  }, [isChoosed]);
  const { nodes, materials } = useGLTF("/mercury.gltf");
  useFrame(() => {
    group.current.rotation.y += 0.008;
  });
  return (
    <group
      ref={group}
      dispose={null}
      onClick={(event) => onClick(event, name, camera, cameraControlsRef)}
    >
      <CameraControls ref={cameraControlsRef} dollySpeed={0} />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Default_OBJ.005"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.0049}
      />
    </group>
  );
}

useGLTF.preload("/mercury.gltf");
