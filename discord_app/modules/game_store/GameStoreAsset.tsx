// discord_app/modules/game_store/GameStoreAsset.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_store/GameStoreAsset.tsx");

export const transformStoreAssetFromServer = function transformStoreAssetFromServer(box_art) {
  const size = {
    id: box_art.id,
    filename: box_art.filename,
    size: box_art.size,
    width: box_art.width,
    height: box_art.height,
    mimeType: box_art.mime_type,
  };
  return size;
};
