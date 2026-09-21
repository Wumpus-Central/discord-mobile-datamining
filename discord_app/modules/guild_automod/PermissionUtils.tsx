// === Module 17301: guild_automod/PermissionUtils ===

// Module 17301 (guild_automod/PermissionUtils)
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;

const require = globalThis.__r;

const require = fn;
const AutomodTriggerType = fn(12117).AutomodTriggerType;
const Constants = fn(1074);
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export const canCurrentUserManageMessageFilters = function canCurrentUserManageMessageFilters(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    const guild = GuildStore.getGuild(guild_id);
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
    }
    tmp = canResult;
  }
  return tmp;
};
export const canCurrentUserManageAutomod = function canCurrentUserManageAutomod(arg0) {
  const guild = GuildStore.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanCurrentUserManageAutomod = function useCanCurrentUserManageAutomod(arg0) {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (GuildStore !== undefined) {
      if (PermissionStore !== undefined) {
        const guild = GuildStore.getGuild(tmp);
        let canResult = null != guild;
        if (canResult) {
          canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
  }, items1);
};
export const useIsUndeletableMentionSpamRule = function useIsUndeletableMentionSpamRule(guildId, triggerType) {
  _require = guildId;
  dependencyMap = triggerType;
  const items = [GuildStore];
  const items1 = [guildId, triggerType];
  return require("initialize").useStateFromStores(items, () => {
    if (closure_1 !== AutomodTriggerType.MENTION_SPAM) {
      return false;
    } else {
      const guild = GuildStore.getGuild(closure_0);
      let hasItem = null != guild;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(constants.COMMUNITY);
      }
      return hasItem;
    }
  }, items1);
};
export const useIsUserProfileRuleEnabled = function useIsUserProfileRuleEnabled(guildId) {
  _require = guildId;
  const items = [GuildStore];
  const items1 = [guildId];
  return require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(constants.COMMUNITY);
    }
    if (!flag) {
      flag = false;
    }
    return flag;
  }, items1);
};