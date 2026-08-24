// discord_app/modules/channel/isRoleRequired.tsx
import set from "../../../_runtime/00002_set.js";
import sum from "../../../discord_common/js/shared/Constants.tsx";
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import applyOverwritesAll from "../../utils/PermissionUtils.tsx";

let closure_2 = createChannelRecord.GUILD_NON_CATEGORY_CHANNEL_TYPES;
const Permissions = sum.Permissions;
const result = set.fileFinishedImporting("modules/channel/isRoleRequired.tsx");

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
          obj = applyOverwritesAll;
        }
        let hasItem = null != tmp4;
        if (hasItem) {
          hasItem = fromStringAll.has(tmp4.deny, Permissions.VIEW_CHANNEL);
          const obj2 = fromStringAll;
        }
        return hasItem;
      }
    }
    return false;
  }
};