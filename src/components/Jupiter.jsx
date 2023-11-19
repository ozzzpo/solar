import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, CameraControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
const { DEG2RAD } = THREE.MathUtils;
export function Jupiter({ onClick, name, isChoosed }) {
  const group = useRef();
  const { camera } = useThree();
  const cameraControlsRef = useRef();
  useEffect(() => {
    if (!isChoosed) {
      cameraControlsRef?.current?.zoom(-camera.zoom / 2, true);
      cameraControlsRef?.current?.rotate(-180 * DEG2RAD, 0, true);
    } else {
      cameraControlsRef?.current?.zoom(camera.zoom / 1, true);
      cameraControlsRef?.current?.rotate(180 * DEG2RAD, 0, true);
    }
  }, [isChoosed]);
  const { nodes, materials } = useGLTF("/jupiter.gltf");
  useFrame(() => {
    group.current.rotation.y += 0.0008;
  });
  return (
    <group
      ref={group}
      dispose={null}
      onClick={(event) => onClick(event, name, camera, cameraControlsRef)}
    >
      <CameraControls ref={cameraControlsRef} dollySpeed={0} />
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Sphere_Material_0.geometry}
              material={materials.Material}
              scale={0.0017}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/jupiter.gltf");
