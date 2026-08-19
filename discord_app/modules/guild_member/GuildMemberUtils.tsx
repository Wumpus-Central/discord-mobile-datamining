// === Module 11014: getGuildMemberAgeInRange ===

// Module 11014 (getGuildMemberAgeInRange)
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4009 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
function getGuildMemberAgeInRange(closure_0, arg1, closure_2) {
  ({ maxDaysOld, minDaysOld } = arg1);
  if (minDaysOld === undefined) {
    minDaysOld = 0;
  }
  guild = guild.getGuild(closure_0);
  let joinedAt;
  if (guild != null) {
    joinedAt = guild.joinedAt;
  }
  if (null != closure_2) {
    member = member.getMember(closure_0, closure_2);
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
    items = [closure_5];
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
    const items = [closure_5];
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
let c9 = 86400000;
const result = require("obj132").fileFinishedImporting("modules/guild_member/GuildMemberUtils.tsx");

export { getGuildMemberAgeInRange };
export const useGuildMemberAgeInRange = function useGuildMemberAgeInRange(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [arg1, arg0, arg2];
  return _require(589).useStateFromStores([], () => getGuildMemberAgeInRange(closure_0, obj, closure_2), items);
};
export const useNewMemberBadge = function useNewMemberBadge(arg0, arg1) {
  let _require = arg0;
  let obj = _require(589);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => {
    obj = callback(1403);
    const member = closure_1_3.getMember(callback, obj);
    let num;
    if (member != null) {
      num = member.flags;
    }
    if (num == null) {
      num = 0;
    }
    return obj.hasFlag(num, GuildMemberFlags.DID_REJOIN);
  });
  const items1 = [closure_4];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => {
    const guild = closure_1_4.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      obj = obj(11);
      const _Date = Date;
      tmp2 = Date.now() - obj.extractTimestamp(guild.id) < 604800000;
      const extractTimestampResult = obj.extractTimestamp(guild.id);
    }
    return tmp2;
  });
  const obj2 = _require(589);
  const items2 = [closure_6];
  obj = { maxDaysOld: 7 };
  _require = arg0;
  dependencyMap = arg1;
  const stateFromStores2 = _require(589).useStateFromStores(items2, () => {
    const user = closure_1_6.getUser(obj);
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    return bot;
  });
  const obj3 = _require(589);
  const items3 = [obj, arg0, arg1];
  const obj5 = _require(589);
  return _require(589).useStateFromStores([], () => getGuildMemberAgeInRange(closure_0, obj, closure_2), items3) && !stateFromStores1 && !stateFromStores2 && !stateFromStores;
};
export const useCanKickMember = function useCanKickMember(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_5];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_5];
    return canKickMember(closure_0, closure_1, items);
  });
};
export { canKickMember };
export const hasKickMemberPerms = function hasKickMemberPerms(isNonUserBot, stateFromStores) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_5];
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
  const _require = arg0;
  closure_1 = arg1;
  return _require(589).useStateFromStores([], () => canBanMember(closure_0, closure_1));
};
export { canBanMember };
export const hasBanMemberPerms = function hasBanMemberPerms(isNonUserBot, stateFromStores) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_5];
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
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_5];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_5];
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
};
export const canManageMessages = function canManageMessages(isNonUserBot, stateFromStores) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_5];
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