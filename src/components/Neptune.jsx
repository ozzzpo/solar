import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, CameraControls, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
const { DEG2RAD } = THREE.MathUtils;

export function Neptune({ isChoosed, name, onClick }) {
  const group = useRef();
  const cameraControlsRef = useRef();
  const { nodes, materials, animations } = useGLTF("/neptune.gltf");
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
    group.current.rotation.y -= 0.009;
  });
  return (
    <group ref={group} dispose={null}>
      <CameraControls ref={cameraControlsRef} dollySpeed={0} maxZoom={1} />
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name='943e82ae1e91464bb6057ce325b1063bfbx'
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name='Object_2'>
              <group name='RootNode'>
                <group
                  name='Planeta'
                  rotation={[-Math.PI / 2, 0, 0]}
                  onClick={(event) =>
                    onClick(event, name, camera, cameraControlsRef)
                  }
                >
                  <mesh
                    name='Planeta_Planeta_0'
                    geometry={nodes.Planeta_Planeta_0.geometry}
                    material={materials.Planeta}
                    scale={0.21}
                  />
                </group>
                <group
                  name='Atmosfera'
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.212}
                >
                  <mesh
                    name='Atmosfera_Atmosfera_0'
                    geometry={nodes.Atmosfera_Atmosfera_0.geometry}
                    material={materials.Atmosfera}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/neptune.gltf");
