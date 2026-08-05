// discord_app/modules/stickers/native/showStickerDetailActionSheet.tsx
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9889, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};