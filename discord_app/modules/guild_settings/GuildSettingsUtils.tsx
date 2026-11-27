// === Module 20129: GuildSettingsUtils ===

// Module 20129 (GuildSettingsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1083 */;
import GuildRoleRecord from "GuildRoleRecord" /* 4950 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 18809 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const hasPermission = GuildRoleRecord.hasPermission;
({ ElevatedPermissions: closure_4, ElevatedPermissionsList: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsUtils.tsx");

export function isRolePowerful(role) {
  return BigFlagUtilsAll.hasAny(role.permissions, React4);
}
export function getPowerfulPermissionTitles(arg0, arg1) {
  items = [];
  PermissionSpecUtilsDefault;
  for (const item10015 of closure_1_5) {
    if (hasPermission(arg1, item10015)) {
      let arr = items.push(tmp2[item10015.toString(item10015)].title);
    }
    continue;
  }
  return items;
}