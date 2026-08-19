// === Module 7298: getStickerSendability ===

// Module 7298 (getStickerSendability)
import applyOverwritesAll from "applyOverwrites" /* 4026 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4823 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import parseServerPackSticker from "parseServerPackSticker" /* 6771 */;
import { Permissions } from "ME" /* 676 */;

require = fn;
function getStickerSendability(stickerById, closure_1_3, channel) {
  if (null == dependencyMap) {
    return obj.NONSENDABLE;
  } else {
    const result = getPremiumPlanItemDefault.canUseCustomStickersEverywhere(dependencyMap);
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
              obj[1] = dependencyMap;
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
let result = require("obj132").fileFinishedImporting("modules/stickers/StickerSendability.tsx");

export const StickerSendability = obj;
export { getStickerSendability };
export const isSendableSticker = function isSendableSticker(closure_0, currentUser, channel) {
  return getStickerSendability(closure_0, currentUser, channel) === obj.SENDABLE;
};