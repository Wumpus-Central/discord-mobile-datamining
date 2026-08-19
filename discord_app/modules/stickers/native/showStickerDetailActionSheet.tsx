// discord_app/modules/stickers/native/showStickerDetailActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = obj132.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10234, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};