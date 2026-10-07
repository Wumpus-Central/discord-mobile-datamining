// discord_app/modules/guild_settings/GuildSettingsUtils.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import GuildRoleRecord from "../../records/GuildRoleRecord.tsx";
import PermissionSpecUtilsDefault from "../../utils/PermissionSpecUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    if (hasPermission(arg1, item10015)) {
      let arr = items.push(tmp2[item10015.toString(item10015)].title);
    }
    continue;
  }
  return items;
};
