// === Module 6755: StickerSendability ===

// Module 6755 (StickerSendability)
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import StickersPackStore from "StickersPackStore" /* 5816 */;

require = fn;
function getStickerSendability(item10030, currentUser, channel) {
  if (null == currentUser) {
    return obj.NONSENDABLE;
  } else {
    const result = PremiumUtilsDefault.canUseCustomStickersEverywhere(currentUser);
    if (obj5.isStandardSticker(item10030)) {
      if (null == StickersPackStore.getStickerPack(item10030.pack_id)) {
        let SENDABLE2 = obj.NONSENDABLE;
      } else {
        SENDABLE2 = obj.SENDABLE;
      }
    } else {
      if (tmp22Result.isGuildSticker(item10030)) {
        if (null != channel) {
          if (null == GuildMemberStore.getSelfMember(item10030.guild_id)) {
            let SENDABLE_WITH_BOOSTED_GUILD = obj.NONSENDABLE;
          } else if (item10030.available) {
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
const Permissions = fn(1074).Permissions;
const StickerSendability = { SENDABLE: 0, [0]: "SENDABLE", SENDABLE_WITH_PREMIUM: 1, [1]: "SENDABLE_WITH_PREMIUM", NONSENDABLE: 2, [2]: "NONSENDABLE", SENDABLE_WITH_BOOSTED_GUILD: 3, [3]: "SENDABLE_WITH_BOOSTED_GUILD" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/StickerSendability.tsx");

export { StickerSendability };
export { getStickerSendability };
export const isSendableSticker = function isSendableSticker(id, currentUser, channel) {
  return getStickerSendability(id, currentUser, channel) === obj.SENDABLE;
};