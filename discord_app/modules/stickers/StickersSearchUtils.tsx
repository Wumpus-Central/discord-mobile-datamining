// === Module 10393: searchAllStickers ===

// Module 10393 (searchAllStickers)
import set from "set" /* 2 */;
import NOOPDefault from "NOOP" /* 5442 */;

const result = set.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = NOOPDefault;
  return NOOPDefault.queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(table[1]).StickerSendability.SENDABLE];
  const obj = NOOPDefault;
  return NOOPDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(table[1]).StickerSendability.SENDABLE];
  const obj = NOOPDefault;
  return NOOPDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};