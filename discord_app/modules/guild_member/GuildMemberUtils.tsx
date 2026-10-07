// === Module 11459: GuildMemberUtils ===

// Module 11459 (GuildMemberUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
function getGuildMemberAgeInRange(arg0, arg1, arg2) {
  ({ maxDaysOld, minDaysOld } = arg1);
  if (minDaysOld === undefined) {
    minDaysOld = 0;
  }
  guild = GuildStore.getGuild(arg0);
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
    let tmp13 = null == maxDaysOld;
    if (!tmp13) {
      tmp13 = diff <= c9 * maxDaysOld;
    }
    if (tmp13) {
      tmp13 = diff >= c9 * minDaysOld;
    }
    return tmp13;
  }
}
function canKickMember(user, guild) {
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
    let canManageUserResult = null != guild;
    if (canManageUserResult) {
      canManageUserResult = obj.canManageUser(Permissions.KICK_MEMBERS, user, guild);
    }
    if (canManageUserResult) {
      canManageUserResult = !user.isNonUserBot();
    }
    tmp4 = canManageUserResult;
  }
  if (tmp4) {
    tmp4 = !user.isProvisional;
  }
  return tmp4;
}
function canBanMember(user, guild) {
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
    let canManageUserResult = null != guild;
    if (canManageUserResult) {
      canManageUserResult = obj.canManageUser(Permissions.BAN_MEMBERS, user, guild);
    }
    if (canManageUserResult) {
      canManageUserResult = !user.isNonUserBot();
    }
    if (canManageUserResult) {
      canManageUserResult = !user.bot;
    }
    tmp4 = canManageUserResult;
  }
  if (tmp4) {
    tmp4 = !user.isProvisional;
  }
  return tmp4;
}
const GuildMemberFlags = fn(4501).GuildMemberFlags;
const Permissions = fn(1085).Permissions;
let c9 = 86400000;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === arg2) {
        let tmp5 = cResult[4];
        let tmp6 = cResult[5];
      }
      return require("initialize").useStateFromStores(first, tmp5, tmp6);
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
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [arg1, arg0, arg2];
  return require("initialize").useStateFromStores([], () => getGuildMemberAgeInRange(closure_0, closure_1, closure_2), items);
});
let closure_11 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
    }
    const _Symbol = Symbol;
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GuildStore];
      cResult[4] = items1;
      let tmp8 = items1;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== arg0) {
      const fn2 = function _() {
        guild = GuildStore.getGuild(closure_0);
        let tmp2 = null != guild;
        if (tmp2) {
          const _Date = Date;
          tmp2 = Date.now() - SnowflakeUtilsDefault.extractTimestamp(guild.id) < 604800000;
          const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(guild.id);
        }
        return tmp2;
      };
      cResult[5] = arg0;
      cResult[6] = fn2;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const tmpResult = tmp(504);
    const _Symbol2 = Symbol;
    const stateFromStores1 = tmp(504).useStateFromStores(tmp8, tmp10);
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserStore];
      cResult[7] = items2;
      let tmp12 = items2;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] !== arg1) {
      class F {
        constructor() {
          user = closure_6.getUser(closure_1);
          bot = undefined;
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
          user = closure_6.getUser(closure_1);
          bot = undefined;
          if (user != null) {
            bot = user.bot;
          }
          return bot;
        }
      }
    }
    const tmpResult3 = tmp(504);
    const stateFromStores2 = tmp(504).useStateFromStores(tmp12, F);
    const tmpResult4 = tmp(504);
    return closure_11(arg0, { maxDaysOld: 7 }, arg1) && !stateFromStores1 && !stateFromStores2 && !stateFromStores;
  }
  const fn = function b() {
    const member = GuildMemberStore.getMember(closure_0, closure_1);
    let num;
    if (member != null) {
      num = member.flags;
    }
    if (num == null) {
      num = 0;
    }
    return FlagUtils.hasFlag(num, GuildMemberFlags.DID_REJOIN);
  };
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp6 = fn;
  let obj = require("c");
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const items = [GuildMemberStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const member = GuildMemberStore.getMember(closure_0, closure_1);
    let num;
    if (member != null) {
      num = member.flags;
    }
    if (num == null) {
      num = 0;
    }
    return FlagUtils.hasFlag(num, GuildMemberFlags.DID_REJOIN);
  });
  let obj = require("initialize");
  const items1 = [GuildStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    guild = GuildStore.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - SnowflakeUtilsDefault.extractTimestamp(guild.id) < 604800000;
      const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(guild.id);
    }
    return tmp2;
  });
  const obj2 = require("initialize");
  const items2 = [UserStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    const user = UserStore.getUser(closure_1);
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    return bot;
  });
  const obj3 = require("initialize");
  return closure_11(arg0, { maxDaysOld: 7 }, arg1) && !stateFromStores1 && !stateFromStores2 && !stateFromStores;
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp6);
  }
  const fn = function u() {
    const items = [PermissionStore];
    return canKickMember(closure_0, closure_1, items);
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  let items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const items = [PermissionStore];
    return canKickMember(closure_0, closure_1, items);
  });
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp5 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp5);
  }
  const fn = function o() {
    return canBanMember(closure_0, closure_1);
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp5 = fn;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  return require("initialize").useStateFromStores([], () => canBanMember(closure_0, closure_1));
});
function hasKickMemberPerms(isNonUserBot, stateFromStores) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [obj] = tmp;
  let canManageUserResult = null != stateFromStores;
  if (canManageUserResult) {
    canManageUserResult = obj.canManageUser(Permissions.KICK_MEMBERS, isNonUserBot, stateFromStores);
  }
  if (canManageUserResult) {
    canManageUserResult = !isNonUserBot.isNonUserBot();
  }
  return canManageUserResult;
}
function hasBanMemberPerms(isNonUserBot, stateFromStores) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [obj] = tmp;
  let canManageUserResult = null != stateFromStores;
  if (canManageUserResult) {
    canManageUserResult = obj.canManageUser(Permissions.BAN_MEMBERS, isNonUserBot, stateFromStores);
  }
  if (canManageUserResult) {
    canManageUserResult = !isNonUserBot.isNonUserBot();
  }
  if (canManageUserResult) {
    canManageUserResult = !isNonUserBot.bot;
  }
  return canManageUserResult;
}
function canManageMessages(isNonUserBot, stateFromStores) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [obj] = tmp;
  let canManageUserResult = null != isNonUserBot && null != stateFromStores;
  if (canManageUserResult) {
    canManageUserResult = obj.canManageUser(Permissions.MANAGE_MESSAGES, isNonUserBot, stateFromStores);
  }
  if (canManageUserResult) {
    canManageUserResult = !isNonUserBot.isNonUserBot();
  }
  return canManageUserResult;
}
const size = fn(2);
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
export const useCanManageMessages = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp6);
  }
  const fn = function u() {
    const items = [PermissionStore];
    [obj2] = items;
    let canManageUserResult = null != nonUserBot && null != closure_1;
    if (canManageUserResult) {
      canManageUserResult = obj2.canManageUser(Permissions.MANAGE_MESSAGES, nonUserBot, closure_1);
    }
    if (canManageUserResult) {
      canManageUserResult = !nonUserBot.isNonUserBot();
    }
    return canManageUserResult;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  let items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const items = [PermissionStore];
    [obj2] = items;
    let canManageUserResult = null != nonUserBot && null != closure_1;
    if (canManageUserResult) {
      canManageUserResult = obj2.canManageUser(Permissions.MANAGE_MESSAGES, nonUserBot, closure_1);
    }
    if (canManageUserResult) {
      canManageUserResult = !nonUserBot.isNonUserBot();
    }
    return canManageUserResult;
  });
});
export { canManageMessages };