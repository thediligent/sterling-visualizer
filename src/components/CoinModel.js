import * as THREE from 'three'
import React, { useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state } from './../store'

export default function CoinModel(props) {
  const { nodes, materials } = useGLTF('./coin-assets/sample_coin_v2/samplecoin-transformed.glb')
  const platingChoice = state.plating;
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr')
  texture.mapping = THREE.EquirectangularReflectionMapping
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={new THREE.MeshPhysicalMaterial({
        metalness: 0.85,
        roughness: 0.15,
        color: platingChoice,
        envMap: texture,
      })} position={[0.041, -0.002, -0.021]} rotation={[Math.PI / 2, 0, -0.479]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Back_Enamel} position={[0.041, -0.002, -0.021]} rotation={[Math.PI / 2, 0, -0.479]} scale={[1, 2.417, 1]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Front_Enamel} position={[0.041, -0.002, -0.021]} rotation={[Math.PI / 2, 0, -0.479]} scale={[1, 2.417, 1]} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.Gold_Sandblasted} position={[0.041, -0.002, -0.021]} rotation={[Math.PI / 2, 0, -0.479]} scale={[1, 2.417, 1]} />
    </group>
  )
}

useGLTF.preload('./coin-assets/sample_coin_v2/samplecoin-transformed.glb')