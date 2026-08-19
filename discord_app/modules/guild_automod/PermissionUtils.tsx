// === Module 16049: canCurrentUserManageMessageFilters ===

// Module 16049 (canCurrentUserManageMessageFilters)
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import ME from "ME" /* 676 */;

const require = fn;
({ GuildFeatures: c4, Permissions: c5 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export const canCurrentUserManageMessageFilters = function canCurrentUserManageMessageFilters(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    const guild = store.getGuild(guild_id);
    let canResult = null != guild;
    if (canResult) {
      canResult = closure_3.can(constants.MANAGE_GUILD, guild);
    }
    tmp = canResult;
  }
  return tmp;
};
export const canCurrentUserManageAutomod = function canCurrentUserManageAutomod(arg0) {
  const guild = store.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = closure_3.can(constants.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanCurrentUserManageAutomod = function useCanCurrentUserManageAutomod(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    if (closure_1_2 !== undefined) {
      if (closure_1_3 !== undefined) {
        const guild = closure_1_2.getGuild(tmp);
        let canResult = null != guild;
        if (canResult) {
          canResult = closure_1_3.can(closure_1_5.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
  }, items1);
};
export const useIsUserProfileRuleEnabled = function useIsUserProfileRuleEnabled(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_2.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(closure_1_4.COMMUNITY);
    }
    if (!flag) {
      flag = false;
    }
    return flag;
  }, items1);
};