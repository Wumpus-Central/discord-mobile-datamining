// === Module 9841: StickerCategoryUtils ===

// Module 9841 (StickerCategoryUtils)
import StickerSendability from "StickerSendability" /* 6750 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/stickers/StickerCategoryUtils.tsx");

export const isStickerCategoryNitroLocked = function isStickerCategoryNitroLocked(type, nsfwAllowed, channel) {
  _require = nsfwAllowed;
  dependencyMap = channel;
  let everyResult = type.type === require("StickersTypes").StickerCategoryTypes.GUILD;
  if (everyResult) {
    everyResult = 0 !== type.stickers.length;
  }
  if (everyResult) {
    const stickers = type.stickers;
    everyResult = stickers.every((item) => {
      const stickerSendability = StickerSendability.getStickerSendability(item, closure_0, closure_1);
      return stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM;
    });
  }
  return everyResult;
};