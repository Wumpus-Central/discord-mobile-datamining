// discord_app/modules/stickers/StickerSendability.tsx
import applyOverwritesAll from "../../utils/PermissionUtils.tsx";
import getPremiumPlanItemDefault from "../../utils/PremiumUtils.tsx";
import getStickerExtensionFromFormatType from "StickersUtils.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import parseServerPackSticker from "StickersPackStore.tsx";
import { Permissions } from "../../Constants.tsx";

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