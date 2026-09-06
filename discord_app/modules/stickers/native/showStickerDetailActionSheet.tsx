// === Module 10403: hideStickerDetailActionSheet ===

// Module 10403 (hideStickerDetailActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = set.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10404, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};