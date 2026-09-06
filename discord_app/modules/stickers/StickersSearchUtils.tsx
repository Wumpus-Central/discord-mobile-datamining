// === Module 10393: StickersSearchUtils ===

// Module 10393 (StickersSearchUtils)
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5442 */;
import StickerSendability from "StickerSendability" /* 7337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  return AutocompleteUtilsDefault.queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === StickerSendability.StickerSendability.SENDABLE];
  return AutocompleteUtilsDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== StickerSendability.StickerSendability.SENDABLE];
  return AutocompleteUtilsDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};