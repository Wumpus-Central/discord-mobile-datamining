// === Module 10128: StickerCategoryUtils ===

// Module 10128 (StickerCategoryUtils)
import StickerSendability from "StickerSendability" /* 6850 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/stickers/StickerCategoryUtils.tsx");

export const isStickerCategoryNitroLocked = function isStickerCategoryNitroLocked(type, stateFromStores, arg2) {
  let closure_1;
  _require = stateFromStores;
  dependencyMap = arg2;
  let everyResult = type.type === require("StickersTypes").StickerCategoryTypes.GUILD && 0 !== type.stickers.length;
  if (everyResult) {
    const stickers = type.stickers;
    everyResult = stickers.every((item) => {
      const obj = StickerSendability;
      const stickerSendability = obj.getStickerSendability(item, stateFromStores, closure_1);
      return stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM;
    });
  }
  return everyResult;
};