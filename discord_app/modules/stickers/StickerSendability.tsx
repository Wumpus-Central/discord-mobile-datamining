// === Module 7337: getStickerSendability ===

// Module 7337 (getStickerSendability)
import applyOverwritesAll from "applyOverwrites" /* 4204 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4218 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4899 */;
import closure_4 from "trackCommunicationDisabled" /* 2021 */;
import closure_5 from "parseServerPackSticker" /* 5504 */;
import { Permissions } from "ME" /* 1074 */;

require = arg1;
function getStickerSendability(stickerById, closure_1_3, channel) {
  if (null == closure_1_3) {
    return obj.NONSENDABLE;
  } else {
    const result = getPremiumPlanItemDefault.canUseCustomStickersEverywhere(closure_1_3);
    const obj4 = getPremiumPlanItemDefault;
    const tmp22 = require;
    if (obj5.isStandardSticker(stickerById)) {
      if (null == stickerPack.getStickerPack(stickerById.pack_id)) {
        let SENDABLE2 = obj.NONSENDABLE;
      } else {
        SENDABLE2 = obj.SENDABLE;
      }
    } else {
      if (tmp22Result.isGuildSticker(stickerById)) {
        if (null != channel) {
          if (null == selfMember.getSelfMember(stickerById.guild_id)) {
            let SENDABLE_WITH_BOOSTED_GUILD = obj.NONSENDABLE;
          } else if (stickerById.available) {
            if (null != channel.guild_id) {
              if ("" !== channel.guild_id) {
                const SENDABLE = obj.SENDABLE;
              }
            }
            if (null != channel.guild_id) {
              obj = { permission: null, user: null, context: null };
              obj[0] = Permissions.USE_EXTERNAL_STICKERS;
              obj[1] = closure_1_3;
              obj[2] = channel;
              if (!obj2.can(obj)) {
                const NONSENDABLE = obj.NONSENDABLE;
              }
              obj2 = applyOverwritesAll;
            }
          } else {
            SENDABLE_WITH_BOOSTED_GUILD = obj.SENDABLE_WITH_BOOSTED_GUILD;
          }
        }
      }
      return obj.NONSENDABLE;
    }
    obj5 = getStickerExtensionFromFormatType;
  }
}
let obj = { SENDABLE: 0, [0]: "SENDABLE", SENDABLE_WITH_PREMIUM: 1, [1]: "SENDABLE_WITH_PREMIUM", NONSENDABLE: 2, [2]: "NONSENDABLE", SENDABLE_WITH_BOOSTED_GUILD: 3, [3]: "SENDABLE_WITH_BOOSTED_GUILD" };
let result = require("set").fileFinishedImporting("modules/stickers/StickerSendability.tsx");

export const StickerSendability = obj;
export { getStickerSendability };
export const isSendableSticker = function isSendableSticker(id, currentUser, channel) {
  return getStickerSendability(id, currentUser, channel) === obj.SENDABLE;
};