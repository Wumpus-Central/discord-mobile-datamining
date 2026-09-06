// === Module 4204: PermissionUtils ===

// Module 4204 (PermissionUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Server from "Server" /* 1894 */;
import GuildRoleUtils from "GuildRoleUtils" /* 2019 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4205 */;
import AppChannelPermissions from "AppChannelPermissions" /* 4206 */;
import ImpersonateStore from "ImpersonateStore" /* 2014 */;
import LurkingStore from "LurkingStore" /* 4200 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;
import BigFlagUtils from "BigFlagUtils" /* 1086 */;
import apply from "module_12" /* 12 */;

require = fn;
function applyOverwrites(id, member, deserializeResult, overwrites) {
  let addResult = deserializeResult;
  if (null != overwrites[id]) {
    const removeResult = BigFlagUtils.remove(deserializeResult, tmp.deny);
    addResult = BigFlagUtils.add(removeResult, tmp.allow);
  }
  let found1 = addResult;
  if (null != member) {
    let tmp15 = deserializeResult;
    let num = 0;
    let tmp16 = deserializeResult;
    let tmp17 = deserializeResult;
    let tmp18 = deserializeResult;
    if (0 < member.roles.length) {
      do {
        let tmp7 = overwrites[member.roles[num]];
        let addResult2 = tmp15;
        let addResult1 = tmp16;
        if (null != tmp7) {
          let obj3 = BigFlagUtils;
          addResult1 = obj3.add(tmp16, tmp7.allow);
          let obj4 = BigFlagUtils;
          addResult2 = obj4.add(tmp15, tmp7.deny);
        }
        num = num + 1;
        tmp15 = addResult2;
        tmp16 = addResult1;
        tmp17 = addResult2;
        tmp18 = addResult1;
      } while (num < member.roles.length);
    }
    const removeResult1 = BigFlagUtils.remove(addResult, tmp17);
    const addResult3 = BigFlagUtils.add(removeResult1, tmp18);
    let addResult4 = addResult3;
    if (null != overwrites[member.userId]) {
      tmp19(1086);
      const tmp19Result = tmp19(1086);
      addResult4 = tmp19Result.add(tmp19Result.remove(addResult3, tmp23.deny), tmp23.allow);
      const removeResult2 = tmp19Result.remove(addResult3, tmp23.deny);
    }
    const hasItem = BigFlagUtils.has(addResult4, Permissions.ADMINISTRATOR);
    const tmp19Result1 = BigFlagUtils;
    const tmp28 = require;
    const result = AutomodPermissionUtils.hasAutomodQuarantinedProfile(member);
    let tmp31 = result;
    if (result) {
      tmp31 = !hasItem;
    }
    let found = addResult4;
    if (tmp31) {
      found = tmp19(1086).filter(addResult4, closure_29);
      const tmp19Result2 = tmp19(1086);
    }
    const tmp28Result = tmp28(4188);
    found1 = found;
    if (tmp34) {
      found1 = tmp19(1086).filter(found, closure_28);
      const tmp19Result3 = tmp19(1086);
    }
    tmp34 = tmp28(4188).isMemberCommunicationDisabled(member) && !hasItem;
  }
  return found1;
}
function computePermissionsForMember(excludeGuildPermissions) {
  ({ member, guild, overwrites, roles, checkElevated } = excludeGuildPermissions);
  if (checkElevated === undefined) {
    checkElevated = true;
  }
  let flag = excludeGuildPermissions.excludeGuildPermissions;
  if (flag === undefined) {
    flag = false;
  }
  let lurkerPermissionsMask = excludeGuildPermissions.lurkerPermissionsMask;
  if (lurkerPermissionsMask === undefined) {
    lurkerPermissionsMask = closure_26;
  }
  if (flag) {
    return applyOverwrites(guild.id, member, deserializeResult, overwrites);
  } else {
    if (null != roles) {
      const obj = {};
      const merged = Object.assign(GuildRoleStore.getUnsafeMutableRoles(guild.id));
      const merged1 = Object.assign(roles);
      let unsafeMutableRoles = obj;
    } else {
      unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(guild.id);
    }
    const tmp11 = unsafeMutableRoles[React7(undefined, guild)];
    const tmp12 = null != tmp11 ? tmp11.permissions : combineResult;
    let tmp13 = tmp12;
    if (null != member) {
      let num = 0;
      let tmp14 = tmp12;
      tmp13 = tmp12;
      if (0 < member.roles.length) {
        do {
          let tmp15 = unsafeMutableRoles[member.roles[num]];
          let addResult = tmp14;
          if (undefined !== tmp15) {
            let obj2 = BigFlagUtils;
            addResult = obj2.add(tmp14, tmp15.permissions);
          }
          num = num + 1;
          tmp14 = addResult;
          tmp13 = addResult;
        } while (num < member.roles.length);
      }
    }
    if (obj3.has(tmp13, Permissions.ADMINISTRATOR)) {
      let tmp29 = applyResult;
    } else {
      tmp29 = applyOverwrites(guild.id, member, tmp24, overwrites);
    }
    let isLurkingResult = LurkingStore.isLurking(guild.id);
    if (!isLurkingResult) {
      let isPending;
      if (member != null) {
        isPending = member.isPending;
      }
      isLurkingResult = isPending;
    }
    let found = tmp29;
    if (isLurkingResult) {
      let tmp21Result = tmp21(1086);
      found = tmp21Result.filter(tmp29, lurkerPermissionsMask);
    }
    let found1 = found;
    if (GuildMemberStore.isCurrentUserGuest(guild.id)) {
      tmp21Result = tmp21(1086);
      found1 = tmp21Result.filter(found, closure_27);
    }
    if (checkElevated === undefined) {
      checkElevated = true;
    }
    if (checkElevated) {
      checkElevated = guild.mfaLevel === constants.ELEVATED;
    }
    if (checkElevated) {
      checkElevated = excludeGuildPermissions.userId === AuthenticationStore.getId();
    }
    let tmp39 = found1;
    if (checkElevated) {
      const currentUser = UserStore.getCurrentUser();
      let mfaEnabled;
      if (currentUser != null) {
        mfaEnabled = currentUser.mfaEnabled;
      }
      let removeResult = found1;
      if (!mfaEnabled) {
        removeResult = tmp21(1086).remove(found1, closure_1_19);
        const tmp21Result1 = tmp21(1086);
      }
      tmp39 = removeResult;
    }
    return tmp39;
  }
}
function computePermissions(excludeGuildPermissions) {
  ({ user, context, overwrites, roles, checkElevated } = excludeGuildPermissions);
  if (checkElevated === undefined) {
    checkElevated = true;
  }
  let flag = excludeGuildPermissions.excludeGuildPermissions;
  if (flag === undefined) {
    flag = false;
  }
  if (null == user) {
    return deserializeResult;
  } else {
    let id = user;
    if (typeof user !== "string") {
      id = user.id;
    }
    if (context instanceof React6) {
      if (context.isScheduledForDeletion()) {
        return deserializeResult;
      } else if (set.has(context.type)) {
        const channel = ChannelStore.getChannel(context.parent_id);
        if (null != channel) {
          if (!channel.isScheduledForDeletion()) {
            const currentUser = UserStore.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            let hasJoinedResult = id === id;
            if (hasJoinedResult) {
              hasJoinedResult = JoinedThreadsStore.hasJoined(context.id);
            }
            let obj = { user, context: channel, overwrites, roles, checkElevated, excludeGuildPermissions: flag };
            return applyThreadPermissions(context, computePermissions(obj), hasJoinedResult, GuildMemberStore.isCurrentUserGuest(context.guild_id));
          }
        }
        return deserializeResult;
      } else {
        let lurkerPermissionsAllowList = context.computeLurkerPermissionsAllowList();
        if (lurkerPermissionsAllowList == null) {
          lurkerPermissionsAllowList = tmp;
        }
        if (null != overwrites) {
          obj = {};
          const merged = Object.assign(context.permissionOverwrites);
          const merged1 = Object.assign(overwrites);
          let permissionOverwrites = obj;
        } else {
          permissionOverwrites = context.permissionOverwrites;
        }
        const guildId = context.getGuildId();
        let guild = null;
        if (null != guildId) {
          guild = GuildStore.getGuild(guildId);
        }
        let tmp4 = guild;
        let tmp3 = lurkerPermissionsAllowList;
        obj = permissionOverwrites;
      }
    } else {
      obj = overwrites;
      if (overwrites == null) {
        obj = {};
      }
      tmp3 = tmp;
      tmp4 = context;
    }
    if (null == tmp4) {
      let tmp21 = deserializeResult;
    } else {
      const currentUser1 = UserStore.getCurrentUser();
      let id1;
      if (currentUser1 != null) {
        id1 = currentUser1.id;
      }
      if (id !== id1) {
        if (closure_1_10(tmp4, id)) {
          let flag2 = checkElevated;
          if (checkElevated === undefined) {
            flag2 = true;
          }
          if (flag2) {
            flag2 = tmp4.mfaLevel === constants.ELEVATED;
          }
          if (flag2) {
            flag2 = id === AuthenticationStore.getId();
          }
          tmp21 = tmp18;
          if (flag2) {
            const currentUser2 = obj7.getCurrentUser();
            let mfaEnabled;
            if (currentUser2 != null) {
              mfaEnabled = currentUser2.mfaEnabled;
            }
            let removeResult = tmp18;
            if (!mfaEnabled) {
              removeResult = BigFlagUtils.remove(tmp18, closure_1_19);
            }
            tmp21 = removeResult;
          }
        }
      }
      const obj1 = { userId: id, member: GuildMemberStore.getMember(tmp4.id, id), guild: tmp4, overwrites: obj, roles, checkElevated, excludeGuildPermissions: flag, lurkerPermissionsMask: tmp3 };
      tmp21 = computePermissionsForMember(obj1);
      obj7 = UserStore;
    }
    return tmp21;
  }
}
function applyThreadPermissions(context, permissions, hasJoinedResult, GuildMemberStore) {
  if (context.type === constants2.MEDIA_THREAD) {
    combineResult = BigFlagUtils.combine(Permissions.READ_MESSAGE_HISTORY, Permissions.VIEW_CHANNEL);
  } else {
    if (context.type === tmp.PRIVATE_THREAD) {
      if (!hasJoinedResult) {
        if (!GuildMemberStore) {
          if (!obj.has(permissions, Permissions.MANAGE_THREADS)) {
            combineResult = deserializeResult;
          }
          obj = BigFlagUtils;
        }
      }
    }
    let tmp8 = importAll;
    let combine = dependencyMap;
    let SEND_MESSAGES = Permissions;
    if (!obj2.has(permissions, Permissions.SEND_MESSAGES_IN_THREADS)) {
      let tmp8Result = tmp8(1086);
      tmp8Result.remove(permissions, SEND_MESSAGES.SEND_MESSAGES);
    }
    if (context.isLockedThread()) {
      tmp8Result = tmp8(1086);
      if (!tmp8Result.has(permissions, SEND_MESSAGES.MANAGE_THREADS)) {
        let removeResult1 = tmp8(1086).remove(permissions, SEND_MESSAGES.SEND_MESSAGES);
        const tmp8Result1 = tmp8(1086);
      }
    }
    tmp8 = tmp8(1086);
    combine = tmp8.combine;
    SEND_MESSAGES = SEND_MESSAGES.SEND_MESSAGES;
    removeResult1 = combine(permissions, SEND_MESSAGES);
    obj2 = BigFlagUtils;
  }
  return combineResult;
}
function getSyncedPermissionOverwrites(guild_id, appChannelBotUserId) {
  guild_id = guild_id.guild_id;
  let obj = {};
  const merged = Object.assign(guild_id.permissionOverwrites);
  if (tmp2) {
    obj = { id: guild_id, type: Server.PermissionOverwriteType.ROLE, allow: deserializeResult, deny: deserializeResult };
    obj[guild_id] = obj;
  }
  if (null != appChannelBotUserId) {
    obj = { id: appChannelBotUserId, type: Server.PermissionOverwriteType.MEMBER, allow: null, deny: null };
    let allow;
    if (obj[appChannelBotUserId] != null) {
      allow = tmp8.allow;
    }
    if (allow == null) {
      allow = deserializeResult;
    }
    obj.allow = BigFlagUtils.add(allow, AppChannelPermissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS);
    let deny;
    if (obj[appChannelBotUserId] != null) {
      deny = tmp8.deny;
    }
    if (deny == null) {
      deny = deserializeResult;
    }
    obj.deny = BigFlagUtils.remove(deny, AppChannelPermissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS);
    obj[appChannelBotUserId] = obj;
    const tmp11Result = BigFlagUtils;
  }
  return obj;
}
const ChannelRecord = fn(1961);
({ THREAD_CHANNEL_TYPES: closure_7, ChannelRecordBase: closure_8 } = ChannelRecord);
const GuildRecord = fn(1975);
({ getGuildEveryoneRoleId: closure_9, isGuildOwner: c10 } = GuildRecord);
const hasPermission = fn(2016).hasPermission;
const Constants = fn(1074);
const Permissions = Constants.Permissions;
({ ElevatedPermissions: closure_19, MFALevels: closure_20, ChannelTypes: closure_21, EMPTY_STRING_SNOWFLAKE_ID: closure_22 } = Constants);
const deserializeResult = BigFlagUtils.deserialize(0);
const items = [...importDefaultResult.values(Permissions)];
const applyResult = BigFlagUtils.combine.apply(items);
let combineResult = BigFlagUtils.combine(Permissions.CREATE_INSTANT_INVITE, Permissions.CHANGE_NICKNAME, Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.READ_MESSAGE_HISTORY, Permissions.MENTION_EVERYONE, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_STICKERS, Permissions.ADD_REACTIONS, Permissions.CREATE_PUBLIC_THREADS, Permissions.CREATE_PRIVATE_THREADS, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.SEND_POLLS, Permissions.CONNECT, Permissions.SPEAK, Permissions.USE_VAD, Permissions.STREAM, Permissions.USE_EMBEDDED_ACTIVITIES, Permissions.USE_SOUNDBOARD, Permissions.REQUEST_TO_SPEAK, Permissions.USE_APPLICATION_COMMANDS, Permissions.CREATE_GUILD_EXPRESSIONS, Permissions.CREATE_EVENTS, Permissions.USE_EXTERNAL_APPS);
let closure_26 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY);
let closure_27 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES, Permissions.CONNECT, Permissions.SPEAK, Permissions.STREAM, Permissions.USE_EMBEDDED_ACTIVITIES, Permissions.USE_EXTERNAL_APPS, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_SOUNDS, Permissions.USE_EXTERNAL_STICKERS, Permissions.USE_SOUNDBOARD, Permissions.USE_VAD, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.ADD_REACTIONS);
let closure_28 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY);
let closure_29 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY, Permissions.CHANGE_NICKNAME);
const size = fn(2);
let result = size.fileFinishedImporting("utils/PermissionUtils.tsx");
function computePermissionsForRoles(excludeGuildPermissions) {
  ({ forceRoles, context, overwrites, roles, checkElevated } = excludeGuildPermissions);
  if (checkElevated === undefined) {
    checkElevated = true;
  }
  excludeGuildPermissions = excludeGuildPermissions.excludeGuildPermissions;
  if (context instanceof React6) {
    if (context.isScheduledForDeletion()) {
      return deserializeResult;
    } else if (set.has(context.type)) {
      const channel = ChannelStore.getChannel(context.parent_id);
      if (null == channel) {
        let tmp23 = deserializeResult;
      } else {
        let obj = { forceRoles, context: channel, overwrites, roles, checkElevated, excludeGuildPermissions };
        tmp23 = applyThreadPermissions(context, computePermissionsForRoles(obj), false, false);
      }
      return tmp23;
    } else {
      let lurkerPermissionsAllowList = context.computeLurkerPermissionsAllowList();
      if (lurkerPermissionsAllowList == null) {
        lurkerPermissionsAllowList = tmp;
      }
      if (null != overwrites) {
        obj = {};
        const merged = Object.assign(context.permissionOverwrites);
        const merged1 = Object.assign(overwrites);
        let permissionOverwrites = obj;
      } else {
        permissionOverwrites = context.permissionOverwrites;
      }
      const guildId = context.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
      }
      let tmp4 = guild;
      let tmp3 = lurkerPermissionsAllowList;
      obj = permissionOverwrites;
    }
  } else {
    obj = overwrites;
    if (overwrites == null) {
      obj = {};
    }
    tmp3 = tmp;
    tmp4 = context;
  }
  if (null == tmp4) {
    return deserializeResult;
  } else {
    const obj1 = { userId, nick: "", guildId: tmp4.id, guildMemberAvatar: null, roles: SnowflakeUtilsDefault.keys(forceRoles), colorString: null, colorStrings: null, hoistRoleId: null, premiumSince: null, isPending: false, joinedAt: null, communicationDisabledUntil: null };
    const _Date = Date;
    const date = new Date();
    obj1.joinedAt = date.toISOString();
    const obj2 = { userId, member: obj1, guild: tmp4, overwrites: obj, roles, checkElevated, excludeGuildPermissions, lurkerPermissionsMask: tmp3 };
    return computePermissionsForMember(obj2);
  }
}

export const NONE = deserializeResult;
export const ALL = applyResult;
export const DEFAULT = combineResult;
export const VIEW_GUILD_SETTINGS = BigFlagUtils.combine(Permissions.MANAGE_GUILD, Permissions.MANAGE_ROLES, Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.MANAGE_NICKNAMES, Permissions.CREATE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MANAGE_WEBHOOKS, Permissions.VIEW_AUDIT_LOG, Permissions.VIEW_GUILD_ANALYTICS);
export { computePermissionsForRoles };
export { computePermissions };
export { applyThreadPermissions };
export { getSyncedPermissionOverwrites };
export const areChannelsLocked = function areChannelsLocked(c18, channel, appChannelBotUserId) {
  if (set.has(c18.type)) {
    return true;
  } else {
    const guild_id = c18.guild_id;
    if (null != channel) {
      if (null != guild_id) {
        if (guild_id === channel.guild_id) {
          let obj = {};
          const merged = Object.assign(c18.permissionOverwrites);
          const tmp12 = getSyncedPermissionOverwrites(channel, appChannelBotUserId);
          closure_1 = tmp12;
          if (null == obj[guild_id]) {
            obj = { id: guild_id, type: null, allow: null, deny: null };
            obj.type = obj(1894).PermissionOverwriteType.ROLE;
            obj.allow = deserializeResult;
            obj.deny = deserializeResult;
            obj[guild_id] = obj;
          }
          const _Object = Object;
          const _Object2 = Object;
          let tmp7 = Object.keys(obj).length === Object.keys(tmp12).length;
          if (tmp7) {
            const _Object3 = Object;
            const keys = Object.keys(obj);
            tmp7 = !keys.some((item) => {
              let tmp3 = null == tmp2;
              if (!tmp3) {
                obj = BigFlagUtils;
                tmp3 = !obj.equals(tmp2.deny, tmp.deny);
              }
              if (!tmp3) {
                tmp3 = !BigFlagUtils.equals(tmp2.allow, tmp.allow);
              }
              return tmp3;
            });
          }
          return tmp7;
        }
      }
    }
    return false;
  }
};
export const getGuildVisualOwnerId = function getGuildVisualOwnerId(guild) {
  let tmp;
  if (!obj.some(GuildRoleStore.getUnsafeMutableRoles(guild.id), (hoist) => {
    hoist = hoist.hoist;
    if (hoist) {
      hoist = hasPermission(hoist, constants.ADMINISTRATOR);
    }
    return hoist;
  })) {
    const ownerId = guild.ownerId;
    tmp = ownerId;
  }
  return tmp;
};
export const isRoleHigher = function isRoleHigher(arg0, arg1, guildId, id) {
  let tmp = null == arg1;
  if (!tmp) {
    tmp = !closure_1_10(arg0, arg1);
  }
  let tmp4 = !tmp;
  if (tmp) {
    let tmp6 = null != guildId;
    if (tmp6) {
      let doesRoleSortHigherResult = null == id;
      if (!doesRoleSortHigherResult) {
        doesRoleSortHigherResult = GuildRoleUtils.doesRoleSortHigher(guildId, id);
      }
      tmp6 = doesRoleSortHigherResult;
    }
    tmp4 = tmp6;
  }
  return tmp4;
};
export const getHighestRole = function getHighestRole(id, arg1) {
  const member = GuildMemberStore.getMember(id.id, arg1);
  if (null != member) {
    const sortedRoles = GuildRoleStore.getSortedRoles(id.id);
    return sortedRoles.find((id) => {
      const roles = member.roles;
      return roles.includes(id.id);
    });
  }
};
export const getHighestHoistedRole = function getHighestHoistedRole(id, hoistRoleId) {
  let role = null;
  if (null != hoistRoleId.hoistRoleId) {
    role = GuildRoleStore.getRole(id.id, hoistRoleId.hoistRoleId);
  }
  return role;
};
export const makeEveryoneOverwrite = function makeEveryoneOverwrite(guildId1) {
  return { id: guildId1, type: Server.PermissionOverwriteType.ROLE, allow: deserializeResult, deny: deserializeResult };
};
export const canManageACategory = function canManageACategory(currentUser, guild, _categories) {
  user = currentUser;
  ({ permission, user, context, overwrites, roles, excludeGuildPermissions } = { permission: Permissions.MANAGE_CHANNELS, user: currentUser, context: guild });
  let someResult = BigFlagUtils.has(computePermissions({ user, context, overwrites, roles, checkElevated: true, excludeGuildPermissions }), permission);
  if (!someResult) {
    someResult = _categories.some((channel) => {
      channel = channel.channel;
      let hasItem = "null" !== channel.id;
      if (hasItem) {
        let obj = { permission: Permissions.MANAGE_CHANNELS, user, context: channel };
        ({ permission, user, context, overwrites, roles, excludeGuildPermissions } = obj);
        obj = { user, context, overwrites, roles, checkElevated: true, excludeGuildPermissions };
        hasItem = BigFlagUtils.has(computePermissions(obj), permission);
      }
      return hasItem;
    });
  }
  return someResult;
};
export const can = function can(arg0) {
  ({ permission, user, context, overwrites, roles, excludeGuildPermissions } = arg0);
  return BigFlagUtils.has(computePermissions({ user, context, overwrites, roles, checkElevated: true, excludeGuildPermissions }), permission);
};
export const ALLOW = "ALLOW";
export const DENY = "DENY";
export const PASSTHROUGH = "PASSTHROUGH";
export const canEveryoneRole = function canEveryoneRole(VIEW_CHANNEL, channel) {
  let tmp = channel;
  if (channel instanceof React6) {
    if (channel.type === constants2.PRIVATE_THREAD) {
      return false;
    } else {
      if (set.has(channel.type)) {
        channel = ChannelStore.getChannel(channel.parent_id);
        if (null == channel) {
          return false;
        }
      }
      const guildId = channel.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
      }
      tmp = guild;
      const permissionOverwrites = channel.permissionOverwrites;
    }
  }
  if (null == tmp) {
    return false;
  } else {
    const permissions = GuildRoleStore.getEveryoneRole(tmp).permissions;
    const tmp17 = {}[tmp.id];
    let addResult = permissions;
    if (null != tmp17) {
      const removeResult = BigFlagUtils.remove(permissions, tmp17.deny);
      addResult = BigFlagUtils.add(removeResult, tmp17.allow);
    }
    return BigFlagUtils.has(addResult, VIEW_CHANNEL);
  }
};
export const canEveryone = function canEveryone(VIEW_CHANNEL, channel) {
  closure_0 = VIEW_CHANNEL;
  let tmp = channel;
  if (channel instanceof closure_8) {
    if (channel.type === constants2.PRIVATE_THREAD) {
      return false;
    } else {
      if (set.has(channel.type)) {
        channel = ChannelStore.getChannel(channel.parent_id);
        if (null == channel) {
          return false;
        }
      }
      const guildId = channel.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
      }
      tmp = guild;
      const permissionOverwrites = channel.permissionOverwrites;
    }
  }
  if (null == tmp) {
    return false;
  } else {
    let tmp10 = hasPermission(GuildRoleStore.getEveryoneRole(tmp), VIEW_CHANNEL);
    if (tmp10) {
      tmp10 = !apply.some({}, (deny) => BigFlagUtils.has(deny.deny, closure_0));
    }
    return tmp10;
  }
};