declare module Sup {
  class TileMap extends Asset {
    getWidth(): number
    getHeight(): number

    setTileAt(layer: number, x: number, y: number, value: number, flipX?: boolean, flipY?: boolean, angle?: number): TileMap
    getTileAt(layer: number, x: number, y: number): number
    getTileTransformAt(layer: number, x: number, y: number): {[key:string]: any;}
  }
}
