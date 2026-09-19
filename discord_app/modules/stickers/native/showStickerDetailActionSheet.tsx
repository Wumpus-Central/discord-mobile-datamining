// === Module 10661: showStickerDetailActionSheet ===

// Module 10661 (showStickerDetailActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10662, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};