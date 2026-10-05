// discord_app/modules/stickers/StickerSendability.tsx
import Constants from "../../Constants.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import StickersUtils from "StickersUtils.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import StickersPackStore from "StickersPackStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getStickerSendability(item10030, currentUser, channel) {
  let obj;
  if (null == currentUser) {
    return obj.NONSENDABLE;
  } else {
    let NONSENDABLE;
    const obj4 = PremiumUtilsDefault;
    const result = obj4.canUseCustomStickersEverywhere(currentUser);
    const obj5 = StickersUtils;
    if (obj5.isStandardSticker(item10030)) {
      let SENDABLE;
      if (null == StickersPackStore.getStickerPack(item10030.pack_id)) {
        SENDABLE = obj.NONSENDABLE;
      } else {
        SENDABLE = obj.SENDABLE;
      }
      NONSENDABLE = SENDABLE;
    } else {
      const tmp19Result = StickersUtils;
      if (tmp19Result.isGuildSticker(item10030)) {
        if (null != channel) {
          let SENDABLE_WITH_BOOSTED_GUILD;
          if (null == GuildMemberStore.getSelfMember(item10030.guild_id)) {
            SENDABLE_WITH_BOOSTED_GUILD = obj.NONSENDABLE;
          } else if (item10030.available) {
            let NONSENDABLE2;
            if (null != channel.guild_id) {
              if ("" !== channel.guild_id) {
                if (channel.guild_id === item10030.guild_id) {
                  NONSENDABLE2 = obj.SENDABLE;
                }
                SENDABLE_WITH_BOOSTED_GUILD = NONSENDABLE2;
              }
            }
            if (null != channel.guild_id) {
              obj = { permission: Permissions.USE_EXTERNAL_STICKERS, user: currentUser, context: channel };
              const obj2 = PermissionUtilsAll;
              if (!obj2.can(obj)) {
                NONSENDABLE2 = obj.NONSENDABLE;
              }
            }
            NONSENDABLE2 = result ? tmp8.SENDABLE : tmp8.SENDABLE_WITH_PREMIUM;
          } else {
            SENDABLE_WITH_BOOSTED_GUILD = obj.SENDABLE_WITH_BOOSTED_GUILD;
          }
          NONSENDABLE = SENDABLE_WITH_BOOSTED_GUILD;
        }
      }
      NONSENDABLE = obj.NONSENDABLE;
    }
    return NONSENDABLE;
  }
}
const Permissions = Constants.Permissions;
const StickerSendability = {
  SENDABLE: 0,
  [0]: "SENDABLE",
  SENDABLE_WITH_PREMIUM: 1,
  [1]: "SENDABLE_WITH_PREMIUM",
  NONSENDABLE: 2,
  [2]: "NONSENDABLE",
  SENDABLE_WITH_BOOSTED_GUILD: 3,
  [3]: "SENDABLE_WITH_BOOSTED_GUILD",
};
let result = size.fileFinishedImporting("modules/stickers/StickerSendability.tsx");

export { StickerSendability };
export { getStickerSendability };
export const isSendableSticker = function isSendableSticker(id, currentUser, channel) {
  return getStickerSendability(id, currentUser, channel) === obj.SENDABLE;
};
