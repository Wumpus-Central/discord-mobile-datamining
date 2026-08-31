// === Module 17179: isRolePowerful ===

// Module 17179 (isRolePowerful)
import set from "set" /* 2 */;
import fromStringAll from "fromString" /* 506 */;
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag" /* 1986 */;
import getPermissionOptionsDefault from "getPermissionOptions" /* 16374 */;
import ME from "ME" /* 676 */;

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