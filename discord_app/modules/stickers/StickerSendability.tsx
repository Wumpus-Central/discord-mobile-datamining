// discord_app/modules/stickers/StickerSendability.tsx
import trackCommunicationDisabled from "trackCommunicationDisabled";
import parseServerPackSticker from "parseServerPackSticker";
import { Permissions } from "ME";
import { getPremiumPlanItem } from "../../utils/PremiumUtils.tsx";
import { getStickerExtensionFromFormatType } from "StickersUtils.tsx";

const require = arg1;
function getStickerSendability(stickerById, trackCommunicationDisabled, channel) {
  if (null == trackCommunicationDisabled) {
    return obj.NONSENDABLE;
  } else {
    const result = getPremiumPlanItem.canUseCustomStickersEverywhere(trackCommunicationDisabled);
    const obj4 = getPremiumPlanItem;
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
              obj[1] = trackCommunicationDisabled;
              obj[2] = channel;
              if (!obj2.can(obj)) {
                const NONSENDABLE = obj.NONSENDABLE;
              }
              obj2 = importAll(3918);
            }
          } else {
            SENDABLE_WITH_BOOSTED_GUILD = obj.SENDABLE_WITH_BOOSTED_GUILD;
          }
        }
      }
      return obj.NONSENDABLE;
    }
    obj5 = getStickerExtensionFromFormatType /* getStickerExtensionFromFormatType */;
  }
}
let obj = { SENDABLE: 0, [0]: "SENDABLE", SENDABLE_WITH_PREMIUM: 1, [1]: "SENDABLE_WITH_PREMIUM", NONSENDABLE: 2, [2]: "NONSENDABLE", SENDABLE_WITH_BOOSTED_GUILD: 3, [3]: "SENDABLE_WITH_BOOSTED_GUILD" };
let result = require("ME").fileFinishedImporting("modules/stickers/StickerSendability.tsx");

export const StickerSendability = obj;
export { getStickerSendability };
export const isSendableSticker = function isSendableSticker(id, currentUser, channel) {
  return getStickerSendability(id, currentUser, channel) === obj.SENDABLE;
};