// === Module 10123: hideStickerDetailActionSheet ===

// Module 10123 (hideStickerDetailActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = set.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10124, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};