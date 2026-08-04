// discord_app/modules/stickers/native/showStickerDetailActionSheet.tsx
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4161).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(9652, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};