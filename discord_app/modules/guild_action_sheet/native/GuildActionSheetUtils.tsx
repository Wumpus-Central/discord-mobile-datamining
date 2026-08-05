// discord_app/modules/guild_action_sheet/native/GuildActionSheetUtils.tsx
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export const useGuildActionSheetPermissions = function useGuildActionSheetPermissions(guild) {
  const _require = guild;
  const items = [getUncachedChannelPermissions];
  const items1 = [guild];
  return _initialize.useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      let obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
    } else {
      obj = { canAccessSettings: null, canEditNickname: null, canManageChannels: null };
      obj[0] = outer1_2.canAccessGuildSettings(tmp);
      obj[1] = outer1_2.can(outer1_3.CHANGE_NICKNAME, tmp) || outer1_2.can(outer1_3.MANAGE_NICKNAMES, tmp);
      obj[2] = outer1_2.can(outer1_3.MANAGE_CHANNELS, tmp);
      const tmp3 = outer1_2.can(outer1_3.CHANGE_NICKNAME, tmp) || outer1_2.can(outer1_3.MANAGE_NICKNAMES, tmp);
    }
    return obj;
  }, items1);
};