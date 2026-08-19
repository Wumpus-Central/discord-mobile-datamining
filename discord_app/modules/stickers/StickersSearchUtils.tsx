// === Module 10223: searchAllStickers ===

// Module 10223 (searchAllStickers)
import obj132 from "obj132" /* 2 */;
import NOOPDefault from "NOOP" /* 6714 */;

const result = obj132.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  return NOOPDefault.queryStickers(items, true).map((item, index) => item.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(table[1]).StickerSendability.SENDABLE];
  return NOOPDefault.queryStickers(items, true, items1).map((item, index) => item.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(table[1]).StickerSendability.SENDABLE];
  return NOOPDefault.queryStickers(items, true, items1).map((item, index) => item.sticker);
};