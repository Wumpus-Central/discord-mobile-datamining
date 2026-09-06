// === Module 11835: GuildMemberUtils ===

// Module 11835 (GuildMemberUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function getGuildMemberAgeInRange(arg0, arg1, arg2) {
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
function canKickMember(user, guild, items) {
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
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const Permissions = fn(1074).Permissions;
let c9 = 86400000;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member/GuildMemberUtils.tsx");

export { getGuildMemberAgeInRange };
export const useGuildMemberAgeInRange = function useGuildMemberAgeInRange(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [arg1, arg0, arg2];
  return require("initialize").useStateFromStores([], () => getGuildMemberAgeInRange(closure_0, closure_1, dependencyMap), items);
};
export const useNewMemberBadge = function useNewMemberBadge(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let obj = require("initialize");
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  const items1 = [GuildStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
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
  obj = { maxDaysOld: 7 };
  closure_129_0 = arg0;
  closure_129_1 = obj;
  closure_129_2 = arg1;
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    const user = UserStore.getUser(closure_1);
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    return bot;
  });
  const obj3 = require("initialize");
  const items3 = [obj, arg0, arg1];
  const obj5 = require("initialize");
  return require("initialize").useStateFromStores([], () => getGuildMemberAgeInRange(closure_0, closure_1, dependencyMap), items3) && !stateFromStores1 && !stateFromStores2 && !stateFromStores;
};
export const useCanKickMember = function useCanKickMember(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const items = [PermissionStore];
    return canKickMember(closure_0, closure_1, items);
  });
};
export { canKickMember };
export const hasKickMemberPerms = function hasKickMemberPerms(isNonUserBot, stateFromStores) {
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
};
export const useCanBanMember = function useCanBanMember(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  return require("initialize").useStateFromStores([], () => canBanMember(closure_0, closure_1));
};
export { canBanMember };
export const hasBanMemberPerms = function hasBanMemberPerms(isNonUserBot, stateFromStores) {
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
};
export const useCanManageMessages = function useCanManageMessages(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const items = [PermissionStore];
    [obj2] = items;
    let canManageUserResult = null != obj && null != tmp;
    if (canManageUserResult) {
      canManageUserResult = obj2.canManageUser(Permissions.MANAGE_MESSAGES, obj, tmp);
    }
    if (canManageUserResult) {
      canManageUserResult = !obj.isNonUserBot();
    }
    return canManageUserResult;
  });
};
export const canManageMessages = function canManageMessages(isNonUserBot, stateFromStores) {
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
};