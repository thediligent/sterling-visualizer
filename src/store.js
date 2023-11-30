import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  platings: ['#d3d3d3', '#c6b362', '#d37d65', '#4f4f4f', '#212121', '#626262', '#87694e', '#51240b'],
  enamels: ['#d3d3d3', '#c6b362', '#d37d65', '#4f4f4f', '#212121', '#626262', '#87694e', '#51240b'],
  edges: ['#d3d3d3', '#c6b362', '#d37d65', '#4f4f4f', '#212121', '#626262', '#87694e', '#51240b'],
  decals: ['react', 'three2', 'pmndrs'],
  color: '#EFBD4E',
  decal: 'three2'
})

export { state }