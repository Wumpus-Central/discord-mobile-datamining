// discord_app/modules/guild_automod/PermissionUtils.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export const canCurrentUserManageMessageFilters = function canCurrentUserManageMessageFilters(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    const guild = store.getGuild(guild_id);
    let canResult = null != guild;
    if (canResult) {
      canResult = obj.can(constants.MANAGE_GUILD, guild);
    }
    tmp = canResult;
    obj = getUncachedChannelPermissions;
  }
  return tmp;
};
export const canCurrentUserManageAutomod = function canCurrentUserManageAutomod(arg0) {
  const guild = store.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = getUncachedChannelPermissions.can(constants.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanCurrentUserManageAutomod = function useCanCurrentUserManageAutomod(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust, getUncachedChannelPermissions];
  const items1 = [arg0];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (outer1_2 !== undefined) {
      if (obj2 !== undefined) {
        const guild = outer1_2.getGuild(tmp);
        let canResult = null != guild;
        if (canResult) {
          canResult = obj2.can(outer1_5.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
  }, items1);
};
export const useIsUserProfileRuleEnabled = function useIsUserProfileRuleEnabled(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust];
  const items1 = [arg0];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const guild = outer1_2.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(outer1_4.COMMUNITY);
    }
    if (!flag) {
      flag = false;
    }
    return flag;
  }, items1);
};