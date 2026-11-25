// === Module 10802: showStickerDetailActionSheet ===

// Module 10802 (showStickerDetailActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10803, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}