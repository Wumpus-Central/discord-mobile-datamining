// discord_app/modules/channel/isRoleRequired.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

ChannelRecord.GUILD_NON_CATEGORY_CHANNEL_TYPES;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/channel/isRoleRequired.tsx");

export default function isRoleRequired(guild_id) {
  if (null == guild_id) {
    return false;
  } else {
    if (null != guild_id.guild_id) {
      if (set.has(tmp9)) {
        if (guild_id.isGuildVocal()) {
          if (!obj.canEveryoneRole(Permissions.CONNECT, guild_id)) {
            return true;
          }
          obj = PermissionUtilsAll;
        }
        let hasItem = null != tmp4;
        if (hasItem) {
          hasItem = BigFlagUtilsAll.has(tmp4.deny, Permissions.VIEW_CHANNEL);
        }
        return hasItem;
      }
    }
    return false;
  }
}
