// discord_app/modules/stickers/StickerCategoryUtils.tsx
import StickerSendability from "StickerSendability.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
