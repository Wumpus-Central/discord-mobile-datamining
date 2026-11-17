// === Module 12053: StickersSearchUtils ===

// Module 12053 (StickersSearchUtils)
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6960 */;
import StickerSendability from "StickerSendability" /* 7233 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export function searchAllStickers(arg0) {
  items = [arg0];
  return AutocompleteUtilsDefault.queryStickers(items, true).map((sticker) => sticker.sticker);
}
export function searchSendableStickers(arg0, arg1) {
  items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === StickerSendability.StickerSendability.SENDABLE];
  return AutocompleteUtilsDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
}
export function searchUnsendableStickers(arg0, arg1) {
  items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== StickerSendability.StickerSendability.SENDABLE];
  return AutocompleteUtilsDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
}