// discord_app/modules/guild_settings/GuildSettingsUtils.tsx
import set from "../../../_runtime/00002_set.js";
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import GuildRoleRecordTypeTag from "../../records/GuildRoleRecord.tsx";
import getPermissionOptionsDefault from "../../utils/PermissionSpecUtils.tsx";
import ME from "../../Constants.tsx";

const hasPermission = GuildRoleRecordTypeTag.hasPermission;
({ ElevatedPermissions: c4, ElevatedPermissionsList: c5 } = ME);
const result = set.fileFinishedImporting("modules/guild_settings/GuildSettingsUtils.tsx");

export const isRolePowerful = function isRolePowerful(role) {
  return fromStringAll.hasAny(role.permissions, closure_4);
};
export const getPowerfulPermissionTitles = function getPowerfulPermissionTitles(arg0, arg1) {
  const items = [];
  getPermissionOptionsDefault;
  for (const item10015 of closure_5) {
    let str = item10015;
    let tmp3 = hasPermission;
    if (hasPermission(arg1, item10015)) {
      let tmp4 = item10015;
      let arr = items.push(tmp2[str.toString(str)].title);
    }
    continue;
  }
  return items;
};
