// discord_app/modules/guild_action_sheet/native/GuildActionSheetUtils.tsx
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export const useGuildActionSheetPermissions = function useGuildActionSheetPermissions(guild) {
  const _require = guild;
  const items = [closure_2];
  const items1 = [guild];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      let obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
    } else {
      obj = { canAccessSettings: null, canEditNickname: null, canManageChannels: null };
      obj[0] = closure_1_2.canAccessGuildSettings(closure_0);
      obj[1] = closure_1_2.can(Permissions.CHANGE_NICKNAME, closure_0) || closure_1_2.can(Permissions.MANAGE_NICKNAMES, closure_0);
      obj[2] = closure_1_2.can(Permissions.MANAGE_CHANNELS, closure_0);
      const tmp3 = closure_1_2.can(Permissions.CHANGE_NICKNAME, closure_0) || closure_1_2.can(Permissions.MANAGE_NICKNAMES, closure_0);
    }
    return obj;
  }, items1);
};