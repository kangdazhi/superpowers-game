declare module Sup {
  class TileMapRenderer extends ActorComponent {
    constructor(actor: Actor, asset?: TileMap);
    getTileMap(): TileMap;
    setTileMap(tileMap: TileMap, replaceTileSet?: boolean); TileMapRenderer;
    getTileSet(): TileSet;
    setTileSet(tileSet: TileSet): TileMapRenderer;
    getLayerOpacity(layer: number): number
    setLayerOpacity(layer: number, opacity: number): TileMapRenderer;
  }
}