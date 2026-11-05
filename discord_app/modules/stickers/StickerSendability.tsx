// === Module 7658: StickerSendability ===

// Module 7658 (StickerSendability)
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import PermissionUtilsAll from "PermissionUtils" /* 5080 */;
import StickersUtils from "StickersUtils" /* 6698 */;
import GuildMemberStore from "GuildMemberStore" /* 5055 */;
import StickersPackStore from "StickersPackStore" /* 6977 */;

require = fn;
function getStickerSendability(item10025, currentUser, channel) {
  if (null == currentUser) {
    return obj.NONSENDABLE;
  } else {
    const result = PremiumUtilsDefault.canUseCustomStickersEverywhere(currentUser);
    if (obj5.isStandardSticker(item10025)) {
      if (null == StickersPackStore.getStickerPack(item10025.pack_id)) {
        let SENDABLE2 = obj.NONSENDABLE;
      } else {
        SENDABLE2 = obj.SENDABLE;
      }
    } else {
      if (tmp22Result.isGuildSticker(item10025)) {
        if (null != channel) {
          if (null == GuildMemberStore.getSelfMember(item10025.guild_id)) {
            let SENDABLE_WITH_BOOSTED_GUILD = obj.NONSENDABLE;
          } else if (item10025.available) {
            if (null != channel.guild_id) {
              if ("" !== channel.guild_id) {
                const SENDABLE = obj.SENDABLE;
              }
            }
            if (null != channel.guild_id) {
              obj = { permission: Permissions.USE_EXTERNAL_STICKERS, user: currentUser, context: channel };
              if (!obj2.can(obj)) {
                const NONSENDABLE = obj.NONSENDABLE;
              }
              obj2 = PermissionUtilsAll;
            }
          } else {
            SENDABLE_WITH_BOOSTED_GUILD = obj.SENDABLE_WITH_BOOSTED_GUILD;
          }
        }
      }
      return obj.NONSENDABLE;
    }
    obj5 = StickersUtils;
  }
}
const Permissions = fn(1072).Permissions;
const StickerSendability = { SENDABLE: 0, [0]: "SENDABLE", SENDABLE_WITH_PREMIUM: 1, [1]: "SENDABLE_WITH_PREMIUM", NONSENDABLE: 2, [2]: "NONSENDABLE", SENDABLE_WITH_BOOSTED_GUILD: 3, [3]: "SENDABLE_WITH_BOOSTED_GUILD" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/StickerSendability.tsx");

export { StickerSendability };
export { getStickerSendability };
export function isSendableSticker(id, currentUser, channel) {
  return getStickerSendability(id, currentUser, channel) === obj.SENDABLE;
}