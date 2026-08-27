// === Module 13614: useGuildActionSheetPermissions ===

// Module 13614 (useGuildActionSheetPermissions)
import closure_2 from "getUncachedChannelPermissions" /* 4089 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export const useGuildActionSheetPermissions = function useGuildActionSheetPermissions(guild) {
  const _require = guild;
  const items = [closure_2];
  const items1 = [guild];
  return _require(589).useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      let obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
    } else {
      obj = { canAccessSettings: null, canEditNickname: null, canManageChannels: null };
      obj[0] = closure_1_2.canAccessGuildSettings(tmp);
      obj[1] = closure_1_2.can(closure_1_3.CHANGE_NICKNAME, tmp) || closure_1_2.can(closure_1_3.MANAGE_NICKNAMES, tmp);
      obj[2] = closure_1_2.can(closure_1_3.MANAGE_CHANNELS, tmp);
      const tmp3 = closure_1_2.can(closure_1_3.CHANGE_NICKNAME, tmp) || closure_1_2.can(closure_1_3.MANAGE_NICKNAMES, tmp);
    }
    return obj;
  }, items1);
};