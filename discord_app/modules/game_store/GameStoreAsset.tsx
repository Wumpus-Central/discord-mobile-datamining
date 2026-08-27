// === Module 14068: transformStoreAssetFromServer ===

// Module 14068 (transformStoreAssetFromServer)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/game_store/GameStoreAsset.tsx");

export const transformStoreAssetFromServer = function transformStoreAssetFromServer(box_art) {
  return { id: box_art.id, filename: box_art.filename, size: box_art.size, width: box_art.width, height: box_art.height, mimeType: box_art.mime_type };
};