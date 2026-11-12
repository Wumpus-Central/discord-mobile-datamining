// === Module 19509: guild_automod/PermissionUtils ===

// Module 19509 (guild_automod/PermissionUtils)
import GuildStore from "GuildStore" /* 5114 */;
import PermissionStore from "PermissionStore" /* 5175 */;

const require = globalThis.__r;

const require = fn;
const AutomodTriggerType = fn(14059).AutomodTriggerType;
const Constants = fn(1072);
({ GuildFeatures: hasOwnProperty, Permissions: closure_6 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export function canCurrentUserManageMessageFilters(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    guild = GuildStore.getGuild(guild_id);
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
    }
    tmp = canResult;
  }
  return tmp;
}
export function canCurrentUserManageAutomod(arg0) {
  guild = GuildStore.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
  }
  return canResult;
}
export function useCanCurrentUserManageAutomod(arg0) {
  _require = arg0;
  items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (GuildStore !== undefined) {
      if (PermissionStore !== undefined) {
        guild = GuildStore.getGuild(tmp);
        let canResult = null != guild;
        if (canResult) {
          canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
  }, items1);
}
export function hasMentionRaidLimitAccess(guildId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = GuildStore;
  }
  guild = obj.getGuild(guildId);
  let flag;
  if (guild != null) {
    const features = guild.features;
    flag = features.has(constants.COMMUNITY);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function useHasMentionRaidLimitAccess(guildId) {
  _require = guildId;
  items = [GuildStore];
  const items1 = [guildId];
  return require("initialize").useStateFromStores(items, () => {
    if (GuildStore !== undefined) {
      guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(constants.COMMUNITY);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  }, items1);
}
export function useIsUndeletableMentionSpamRule(guildId, triggerType) {
  _require = guildId;
  dependencyMap = triggerType;
  items = [GuildStore];
  const items1 = [guildId, triggerType];
  return require("initialize").useStateFromStores(items, () => {
    if (closure_1 !== AutomodTriggerType.MENTION_SPAM) {
      return false;
    } else {
      guild = GuildStore.getGuild(closure_0);
      let hasItem = null != guild;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(constants.COMMUNITY);
      }
      return hasItem;
    }
  }, items1);
}
export function useIsUserProfileRuleEnabled(guildId) {
  _require = guildId;
  items = [GuildStore];
  const items1 = [guildId];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
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
}