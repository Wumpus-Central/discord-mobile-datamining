// === Module 7020: isRoleRequired ===

// Module 7020 (isRoleRequired)
import Constants from "Constants" /* 1098 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1099 */;
import ChannelRecord from "ChannelRecord" /* 2072 */;
import PermissionUtilsAll from "PermissionUtils" /* 4814 */;
import size from "module_2" /* 2 */;

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
};