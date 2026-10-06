// === Module 11459: GuildMemberUtils ===

// Module 11459 (GuildMemberUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4501 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function getGuildMemberAgeInRange(arg0, arg1, arg2) {
  let maxDaysOld;
  let minDaysOld;
  ({ maxDaysOld, minDaysOld } = arg1);
  if (minDaysOld === undefined) {
    minDaysOld = 0;
  }
  const guild = GuildStore.getGuild(arg0);
  let joinedAt;
  if (guild != null) {
    joinedAt = guild.joinedAt;
  }
  if (null != arg2) {
    const member = GuildMemberStore.getMember(arg0, arg2);
    let joinedAt1;
    if (member != null) {
      joinedAt1 = member.joinedAt;
    }
    let date = null;
    if (null != joinedAt1) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(member.joinedAt);
    }
    joinedAt = date;
  }
  if (null == joinedAt) {
    return false;
  } else {
    const _Date2 = Date;
    const timestamp = Date.now();
    const diff = timestamp - joinedAt.getTime();
    return (null == maxDaysOld || diff <= c9 * maxDaysOld) && diff >= c9 * minDaysOld;
  }
}
function canKickMember(user, guild) {
  let items;
  let obj;
  let tmp3;
  let tmp = items;
  if (items === undefined) {
    items = [PermissionStore];
    tmp = items;
  }
  [tmp3] = tmp;
  let tmp4 = null != guild;
  if (tmp4) {
    const items1 = [tmp3];
    [obj] = items1;
    tmp4 = null != guild && obj.canManageUser(Permissions.KICK_MEMBERS, user, guild) && !user.isNonUserBot();
    const canManageUserResult = null != guild && obj.canManageUser(Permissions.KICK_MEMBERS, user, guild) && !user.isNonUserBot();
  }
  if (tmp4) {
    tmp4 = !user.isProvisional;
  }
  return tmp4;
}
function canBanMember(user, guild) {
  let obj;
  let tmp3;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [tmp3] = tmp;
  let tmp4 = null != guild;
  if (tmp4) {
    const items1 = [tmp3];
    [obj] = items1;
    tmp4 = null != guild && obj.canManageUser(Permissions.BAN_MEMBERS, user, guild) && !user.isNonUserBot() && !user.bot;
    const canManageUserResult = null != guild && obj.canManageUser(Permissions.BAN_MEMBERS, user, guild) && !user.isNonUserBot() && !user.bot;
  }
  if (tmp4) {
    tmp4 = !user.isProvisional;
  }
  return tmp4;
}
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const Permissions = Constants.Permissions;
let c9 = 86400000;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp5;
      let tmp6;
      if (cResult[3] === arg2) {
        tmp5 = cResult[4];
        tmp6 = cResult[5];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp5, tmp6);
    }
  }
  const fn = function u() {
    return getGuildMemberAgeInRange(closure_0, closure_1, closure_2);
  };
  const items1 = [arg1, arg0, arg2];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = arg2;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp6 = items1;
  tmp5 = fn;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  const items = [arg1, arg0, arg2];
  const obj = require("get initialized");
  return obj.useStateFromStores([], () => getGuildMemberAgeInRange(closure_0, closure_1, closure_2), items);
});
let closure_11 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp8;
    let tmp10;
    let tmp12;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
    }
    const _Symbol = Symbol;
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GuildStore];
      cResult[4] = items1;
      tmp8 = items1;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== arg0) {
      const fn2 = function _() {
        const guild = GuildStore.getGuild(closure_0);
        let tmp2 = null != guild;
        if (tmp2) {
          const _Date = Date;
          const obj = SnowflakeUtilsDefault;
          const extractTimestampResult = obj.extractTimestamp(guild.id);
          tmp2 = Date.now() - extractTimestampResult < 604800000;
        }
        return tmp2;
      };
      cResult[5] = arg0;
      cResult[6] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const _Symbol2 = Symbol;
    const tmpResult3 = tmp(504);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserStore];
      cResult[7] = items2;
      tmp12 = items2;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] !== arg1) {
      class F {
        constructor() {
          const user = UserStore.getUser(closure_1);
          let bot;
          if (user != null) {
            bot = user.bot;
          }
          return bot;
        }
      }
      cResult[8] = arg1;
      cResult[9] = F;
    } else {
      class F {
        constructor() {
          const user = UserStore.getUser(closure_1);
          let bot;
          if (user != null) {
            bot = user.bot;
          }
          return bot;
        }
      }
    }
    const tmpResult4 = tmp(504);
    const stateFromStores2 = tmpResult4.useStateFromStores(tmp12, F);
    const tmp17 = closure_11(arg0, { maxDaysOld: 7 }, arg1) && !stateFromStores1 && !stateFromStores2 && !stateFromStores;
    return tmp17;
  }
  const fn = function b() {
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    const member = GuildMemberStore.getMember(closure_0, closure_1);
    let num;
    if (member != null) {
      num = member.flags;
    }
    if (num == null) {
      num = 0;
    }
    return hasFlag(num, GuildMemberFlags.DID_REJOIN);
  };
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    const member = GuildMemberStore.getMember(closure_0, closure_1);
    let num;
    if (member != null) {
      num = member.flags;
    }
    if (num == null) {
      num = 0;
    }
    return hasFlag(num, GuildMemberFlags.DID_REJOIN);
  });
  const items1 = [GuildStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      const _Date = Date;
      const obj = SnowflakeUtilsDefault;
      const extractTimestampResult = obj.extractTimestamp(guild.id);
      tmp2 = Date.now() - extractTimestampResult < 604800000;
    }
    return tmp2;
  });
  const items2 = [UserStore];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const user = UserStore.getUser(closure_1);
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    return bot;
  });
  const tmp4 = closure_11(arg0, { maxDaysOld: 7 }, arg1) && !stateFromStores1 && !stateFromStores2 && !stateFromStores;
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6);
  }
  const fn = function u() {
    const items = [PermissionStore];
    return canKickMember(closure_0, closure_1, items);
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const items = [PermissionStore];
    return canKickMember(closure_0, closure_1, items);
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp5;
    if (cResult[2] === arg0) {
      tmp5 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp5);
  }
  const fn = function o() {
    return canBanMember(closure_0, closure_1);
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const obj = require("get initialized");
  return obj.useStateFromStores([], () => canBanMember(closure_0, closure_1));
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let first;
  let nonUserBot;
  _require = arg0;
  let closure_1 = arg1;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6);
  }
  const fn = function u() {
    let obj2;
    const items = [PermissionStore];
    [obj2] = items;
    const canManageUserResult = null != nonUserBot && null != closure_1 && obj2.canManageUser(Permissions.MANAGE_MESSAGES, nonUserBot, closure_1) && !nonUserBot.isNonUserBot();
    return canManageUserResult;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let nonUserBot;
  _require = arg0;
  let closure_1 = arg1;
  let items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let obj2;
    const items = [PermissionStore];
    [obj2] = items;
    const canManageUserResult = null != nonUserBot && null != closure_1 && obj2.canManageUser(Permissions.MANAGE_MESSAGES, nonUserBot, closure_1) && !nonUserBot.isNonUserBot();
    return canManageUserResult;
  });
});
function hasKickMemberPerms(isNonUserBot, stateFromStores) {
  let obj;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [obj] = tmp;
  const canManageUserResult = null != stateFromStores && obj.canManageUser(Permissions.KICK_MEMBERS, isNonUserBot, stateFromStores) && !isNonUserBot.isNonUserBot();
  return canManageUserResult;
}
function hasBanMemberPerms(isNonUserBot, stateFromStores) {
  let obj;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [obj] = tmp;
  const canManageUserResult = null != stateFromStores && obj.canManageUser(Permissions.BAN_MEMBERS, isNonUserBot, stateFromStores) && !isNonUserBot.isNonUserBot() && !isNonUserBot.bot;
  return canManageUserResult;
}
function canManageMessages(isNonUserBot, stateFromStores) {
  let obj;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [obj] = tmp;
  const canManageUserResult = null != isNonUserBot && null != stateFromStores && obj.canManageUser(Permissions.MANAGE_MESSAGES, isNonUserBot, stateFromStores) && !isNonUserBot.isNonUserBot();
  return canManageUserResult;
}
const result = size.fileFinishedImporting("modules/guild_member/GuildMemberUtils.tsx");

export { getGuildMemberAgeInRange };
export const useGuildMemberAgeInRange = tmp2;
export const useNewMemberBadge = tmp3;
export const useCanKickMember = tmp4;
export { canKickMember };
export { hasKickMemberPerms };
export const useCanBanMember = tmp5;
export { canBanMember };
export { hasBanMemberPerms };
export const useCanManageMessages = tmp6;
export { canManageMessages };