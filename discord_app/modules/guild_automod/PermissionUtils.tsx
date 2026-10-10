// === Module 17539: guild_automod/PermissionUtils ===

// Module 17539 (guild_automod/PermissionUtils)
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;

const require = globalThis.__r;

const require = fn;
const AutomodTriggerType = fn(11448).AutomodTriggerType;
const Constants = fn(1085);
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanCurrentUserManageAutomod(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useCanCurrentUserManageAutomod(arg0) {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
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
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasMentionRaidLimitAccess(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useHasMentionRaidLimitAccess(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
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
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsUndeletableMentionSpamRule(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function l() {
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
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useIsUndeletableMentionSpamRule(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore];
  const items1 = [arg0, arg1];
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
});
function hasMentionRaidLimitAccess(guildId) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export const canCurrentUserManageMessageFilters = function canCurrentUserManageMessageFilters(guild_id) {
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
};
export const canCurrentUserManageAutomod = function canCurrentUserManageAutomod(arg0) {
  guild = GuildStore.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanCurrentUserManageAutomod = tmp3;
export { hasMentionRaidLimitAccess };
export const useHasMentionRaidLimitAccess = tmp4;
export const useIsUndeletableMentionSpamRule = tmp5;
export const useIsUserProfileRuleEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsUserProfileRuleEnabled(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useIsUserProfileRuleEnabled(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
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
});