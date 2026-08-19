// === Module 13868: transformStoreAssetFromServer ===

// Module 13868 (transformStoreAssetFromServer)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/game_store/GameStoreAsset.tsx");

export const transformStoreAssetFromServer = function transformStoreAssetFromServer(box_art) {
  return { id: box_art.id, filename: box_art.filename, size: box_art.size, width: box_art.width, height: box_art.height, mimeType: box_art.mime_type };
};