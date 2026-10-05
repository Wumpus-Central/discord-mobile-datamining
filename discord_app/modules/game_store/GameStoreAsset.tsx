// discord_app/modules/game_store/GameStoreAsset.tsx
import size_mod from "../../../_runtime/metro/00002__.js";

let size = size_mod;
const result = size.fileFinishedImporting("modules/game_store/GameStoreAsset.tsx");

export const transformStoreAssetFromServer = function transformStoreAssetFromServer(box_art) {
  size = {
    id: box_art.id,
    filename: box_art.filename,
    size: box_art.size,
    width: box_art.width,
    height: box_art.height,
    mimeType: box_art.mime_type,
  };
  return size;
};
