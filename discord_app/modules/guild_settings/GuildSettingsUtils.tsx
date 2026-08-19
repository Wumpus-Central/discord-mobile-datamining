// === Module 16852: isRolePowerful ===

// Module 16852 (isRolePowerful)
import obj132 from "obj132" /* 2 */;
import fromStringAll from "fromString" /* 506 */;
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag" /* 1984 */;
import getPermissionOptionsDefault from "getPermissionOptions" /* 16046 */;
import ME from "ME" /* 676 */;

const hasPermission = GuildRoleRecordTypeTag.hasPermission;
({ ElevatedPermissions: c4, ElevatedPermissionsList: c5 } = ME);
const result = obj132.fileFinishedImporting("modules/guild_settings/GuildSettingsUtils.tsx");

export const isRolePowerful = function isRolePowerful(role) {
  return fromStringAll.hasAny(role.permissions, closure_4);
};
export const getPowerfulPermissionTitles = function getPowerfulPermissionTitles(arg0, arg1) {
  const items = [];
  getPermissionOptionsDefault;
  for (const item10015 of closure_5) {
    if (hasPermission(arg1, item10015)) {
      let arr = items.push(tmp2[item10015.toString(item10015)].title);
    }
    continue;
  }
  return items;
};