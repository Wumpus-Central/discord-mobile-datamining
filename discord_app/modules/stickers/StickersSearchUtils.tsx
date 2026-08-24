// discord_app/modules/stickers/StickersSearchUtils.tsx
import set from "../../../_runtime/00002_set.js";
import NOOPDefault from "../../utils/AutocompleteUtils.tsx";

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