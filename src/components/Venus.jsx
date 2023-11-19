import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, CameraControls, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
const { DEG2RAD } = THREE.MathUtils;
export function Venus({ isChoosed, name, onClick }) {
  const group = useRef();
  const cameraControlsRef = useRef();
  const { nodes, materials, animations } = useGLTF("/venus.gltf");
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
      <group name='Sketchfab_Scene'>
        <group
          name='Sketchfab_model'
          rotation={[-Math.PI / 2, 0, 0]}
          scale={111.518}
        >
          <group name='Root'>
            <group
              name='Camera'
              position={[48.908, -38.435, -0.002]}
              rotation={[1.572, 0.888, -0.154]}
              scale={4.287}
            />
            <group name='Ceres' scale={9.385}>
              <mesh
                name='Ceres_0'
                geometry={nodes.Ceres_0.geometry}
                material={materials.Material}
                scale={0.002}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/venus.gltf");
