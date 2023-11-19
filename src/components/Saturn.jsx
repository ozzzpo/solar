import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, CameraControls, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
const { DEG2RAD } = THREE.MathUtils;

export function Saturn({ isChoosed, name, onClick }) {
  const group = useRef();
  const cameraControlsRef = useRef();
  const { nodes, materials, animations } = useGLTF("/saturn.gltf");
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();
  useEffect(() => {
    if (!isChoosed) {
      cameraControlsRef?.current?.zoom(-camera.zoom / 5, true);
      cameraControlsRef?.current?.rotate(-180 * DEG2RAD, 0, true);
    } else {
      cameraControlsRef?.current?.zoom(camera.zoom / 4, true);
      cameraControlsRef?.current?.rotate(180 * DEG2RAD, 0, true);
    }
  }, [isChoosed]);
  useFrame(() => {
    group.current.rotation.y += 0.0005;
  });
  return (
    <group ref={group} dispose={null}>
      <CameraControls ref={cameraControlsRef} dollySpeed={0} maxZoom={1} />
      <group name='Sketchfab_Scene'>
        <group
          name='Sketchfab_model'
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.002}
        >
          <group
            name='56fb5d81d5a845599d5e60534f293915fbx'
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name='Object_2'>
              <group name='RootNode'>
                <group
                  name='Saturn'
                  rotation={[-Math.PI / 1.95, 2.5, 0]}
                  scale={114}
                  onClick={(event) =>
                    onClick(event, name, camera, cameraControlsRef)
                  }
                >
                  <mesh
                    name='Saturn_Material_#50_0'
                    geometry={nodes["Saturn_Material_#50_0"].geometry}
                    material={materials.Material_50}
                  />
                </group>
                <group
                  name='Saturn_Clouds'
                  rotation={[-Math.PI / 1.95, 2.5, -0.019]}
                  scale={111}
                >
                  <mesh
                    name='Saturn_Clouds_Material_#62_0'
                    geometry={nodes["Saturn_Clouds_Material_#62_0"].geometry}
                    material={materials.Material_62}
                  />
                </group>
                <group
                  name='Saturn_Rings'
                  rotation={[-Math.PI / 1.95, 2.7, 0]}
                  scale={114}
                >
                  <mesh
                    name='Saturn_Rings_Material_#63_0'
                    geometry={nodes["Saturn_Rings_Material_#63_0"].geometry}
                    material={materials.Material_63}
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

useGLTF.preload("/saturn.gltf");
