// discord_app/modules/guild_settings/GuildSettingsUtils.tsx
import { hasPermission } from "GuildRoleRecordTypeTag";
import ME from "ME";
import { getPermissionOptions } from "../../utils/PermissionSpecUtils.tsx";

let c4;
let c5;
({ ElevatedPermissions: c4, ElevatedPermissionsList: c5 } = ME);
const result = require("fromString").fileFinishedImporting("modules/guild_settings/GuildSettingsUtils.tsx");

export const isRolePowerful = function isRolePowerful(role) {
  return importAll(506).hasAny(role.permissions, closure_4);
};
export const getPowerfulPermissionTitles = function getPowerfulPermissionTitles(arg0, arg1) {
  const items = [];
  getPermissionOptions;
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