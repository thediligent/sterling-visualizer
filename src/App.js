import * as THREE from 'three'
import { useState, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, MeshRefractionMaterial, AccumulativeShadows, RandomizedLight, Html, Environment, Center, PresentationControls, useProgress } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { RGBELoader } from 'three-stdlib'
// import { HexColorPicker } from 'react-colorful'
import CoinModel from './components/CoinModel'
import { useSnapshot } from 'valtio'
import { state } from './store'

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
// function CoinScene() {
//   const gltf = useLoader(GLTFLoader, '/coin-assets/sample_coin_v2/samplecoin.gltf')
//   return <primitive object={gltf.scene} />
// }


export default function App() {
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr')
  const snap = useSnapshot(state)
  const platingChoice = state.plating;
  console.log(state.plating);
  texture.mapping = THREE.EquirectangularReflectionMapping
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 35, near: 5, far: 3000 }}>
      <Suspense fallback={<Loader />}>
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight />
        <Environment map={texture} />
        <PresentationControls
          global
          config={{ mass: 1, tension: 250, friction: 25 }}
          snap={{ mass: 2, tension: 250, friction: 50 }}
          zoom={1.15}
          rotation={[0, -0.5, 0]}
          polar={[-Math.PI / 5, Math.PI / 4]}
          azimuth={[-Math.PI / 1, Math.PI / 4]}>
          <group position={[0, 0, 0]}>
            <Center top>
              {/* <CoinScene position={[0, 0, 0]} material={cubeMaterial2} map={texture} scale={6} color={platingChoice} /> */}
              <CoinModel position={[0, 0, 0]} map={texture} scale={1} color={platingChoice} />
            </Center>
            <AccumulativeShadows temporal frames={100} alphaTest={0.95} opacity={1} scale={20}>
              <RandomizedLight amount={4} radius={10} ambient={0.5} position={[0, 10, -2.5]} bias={0.001} size={3} />
            </AccumulativeShadows>
          </group>
        </PresentationControls>
        <EffectComposer>
          <Bloom luminanceThreshold={3.75} luminanceSmoothing={0.025} intensity={0.25} levels={4} mipmapBlur />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}