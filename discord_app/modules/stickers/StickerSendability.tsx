// === Module 7337: StickerSendability ===

// Module 7337 (StickerSendability)
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import StickersUtils from "StickersUtils" /* 4899 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import StickersPackStore from "StickersPackStore" /* 5504 */;

require = fn;
function getStickerSendability(stickerById, currentUser, channel) {
  if (null == currentUser) {
    return obj.NONSENDABLE;
  } else {
    const result = PremiumUtilsDefault.canUseCustomStickersEverywhere(currentUser);
    if (obj5.isStandardSticker(stickerById)) {
      if (null == StickersPackStore.getStickerPack(stickerById.pack_id)) {
        let SENDABLE2 = obj.NONSENDABLE;
      } else {
        SENDABLE2 = obj.SENDABLE;
      }
    } else {
      if (tmp22Result.isGuildSticker(stickerById)) {
        if (null != channel) {
          if (null == GuildMemberStore.getSelfMember(stickerById.guild_id)) {
            let SENDABLE_WITH_BOOSTED_GUILD = obj.NONSENDABLE;
          } else if (stickerById.available) {
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