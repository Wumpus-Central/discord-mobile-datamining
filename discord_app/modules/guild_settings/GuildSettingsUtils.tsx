// === Module 17631: GuildSettingsUtils ===

// Module 17631 (GuildSettingsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2016 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 16830 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const hasPermission = GuildRoleRecord.hasPermission;
({ ElevatedPermissions: closure_4, ElevatedPermissionsList: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsUtils.tsx");

export const isRolePowerful = function isRolePowerful(role) {
  return BigFlagUtilsAll.hasAny(role.permissions, React4);
};
export const getPowerfulPermissionTitles = function getPowerfulPermissionTitles(arg0, arg1) {
  const items = [];
  PermissionSpecUtilsDefault;
  for (const item10015 of closure_1_5) {
    let str = item10015;
    if (hasPermission(arg1, item10015)) {
      let arr = items.push(tmp2[str.toString(str)].title);
    }
    continue;
  }
  return items;
};