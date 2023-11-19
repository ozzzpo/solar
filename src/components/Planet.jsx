import React, { useRef } from "react";
import { useGLTF, CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
const { DEG2RAD } = THREE.MathUtils;

export default function Planet({ children }) {
  const { camera } = useThree();
  const cameraControlsRef = useRef();
  const { nodes, materials } = useGLTF("/earth.gltf");
  const handleClick = () => {
    cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true);
    cameraControlsRef.current?.zoom(camera.zoom / 0.5, true);
  };
  return <>{children}</>;
}

useGLTF.preload("/scene.gltf");
