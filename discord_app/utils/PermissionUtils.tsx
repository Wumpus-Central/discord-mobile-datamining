// discord_app/utils/PermissionUtils.tsx
import SnowflakeUtilsDefault from "SnowflakeUtils.tsx";
import Server from "../flow/Server.tsx";
import GuildRoleRecord from "../records/GuildRoleRecord.tsx";
import GuildRoleUtils from "GuildRoleUtils.tsx";
import CommunicationDisabledUtils from "../modules/guild_communication_disabled/CommunicationDisabledUtils.tsx";
import AutomodPermissionUtils from "../modules/guild_automod/AutomodPermissionUtils.tsx";
import AppChannelPermissions from "../modules/app_channels/AppChannelPermissions.tsx";
import ImpersonateStore from "../modules/impersonate/ImpersonateStore.tsx";
import LurkingStore from "../modules/lurker_mode/LurkingStore.tsx";
import JoinedThreadsStore from "../modules/threads/JoinedThreadsStore.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import GuildRecord from "../records/GuildRecord.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildMemberStore from "../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../stores/GuildRoleStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import Constants from "../Constants.tsx";
import BigFlagUtils_mod from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import 00012__ from "../../_runtime/metro/00012__.js";
import size from "../../_runtime/metro/00002__.js";

let c10;
let c9;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let metroImportAll;
let metroImportDefault;
function applyOverwrites(id, member, deserializeResult, overwrites) {
  let addResult = deserializeResult;
  if (null != overwrites[id]) {
    const obj = BigFlagUtils;
    const removeResult = obj.remove(deserializeResult, overwrites[id].deny);
    const obj2 = BigFlagUtils;
    addResult = obj2.add(removeResult, tmp.allow);
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
    const obj5 = BigFlagUtils;
    const removeResult1 = obj5.remove(addResult, tmp17);
    const obj6 = BigFlagUtils;
    const addResult3 = obj6.add(removeResult1, tmp18);
    let addResult4 = addResult3;
    if (null != overwrites[member.userId]) {
      const tmp19Result = BigFlagUtils;
      const removeResult2 = tmp19Result.remove(addResult3, overwrites[member.userId].deny);
      const tmp19Result5 = BigFlagUtils;
      addResult4 = tmp19Result5.add(removeResult2, tmp23.allow);
    }
    const tmp19Result6 = BigFlagUtils;
    const hasItem = tmp19Result6.has(addResult4, Permissions.ADMINISTRATOR);
    const obj10 = AutomodPermissionUtils;
    const result = obj10.hasAutomodQuarantinedProfile(member);
    let found = addResult4;
    const tmp31 = result && !hasItem;
    if (tmp31) {
      const tmp19Result7 = BigFlagUtils;
      found = tmp19Result7.filter(addResult4, closure_29);
    }
    found1 = found;
    const tmp28Result = CommunicationDisabledUtils;
    const tmp34 = tmp28Result.isMemberCommunicationDisabled(member) && !hasItem;
    if (tmp34) {
      const tmp19Result8 = BigFlagUtils;
      found1 = tmp19Result8.filter(found, closure_28);
    }
  }
  return found1;
}
function computePermissionsForMember(userId) {
  let checkElevated;
  let guild;
  let member;
  let overwrites;
  let roles;
  ({ member, guild, overwrites, roles, checkElevated } = userId);
  userId = userId.userId;
  if (checkElevated === undefined) {
    checkElevated = true;
  }
  let flag = userId.excludeGuildPermissions;
  if (flag === undefined) {
    flag = false;
  }
  let lurkerPermissionsMask = userId.lurkerPermissionsMask;
  if (lurkerPermissionsMask === undefined) {
    lurkerPermissionsMask = closure_26;
  }
  if (flag) {
    return applyOverwrites(guild.id, member, deserializeResult, overwrites);
  } else {
    let unsafeMutableRoles;
    let tmp29;
    if (null != roles) {
      const obj = {};
      const merged = Object.assign(GuildRoleStore.getUnsafeMutableRoles(guild.id));
      const merged1 = Object.assign(roles);
      unsafeMutableRoles = obj;
    } else {
      unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(guild.id);
    }
    const tmp11 = unsafeMutableRoles[React4(undefined, guild)];
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
    const obj3 = BigFlagUtils;
    if (obj3.has(tmp13, Permissions.ADMINISTRATOR)) {
      tmp29 = applyResult;
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
      const tmp21Result = BigFlagUtils;
      found = tmp21Result.filter(tmp29, lurkerPermissionsMask);
    }
    let found1 = found;
    if (GuildMemberStore.isCurrentUserGuest(guild.id)) {
      const tmp21Result3 = BigFlagUtils;
      found1 = tmp21Result3.filter(found, closure_27);
    }
    if (checkElevated === undefined) {
      checkElevated = true;
    }
    if (checkElevated) {
      checkElevated = guild.mfaLevel === constants.ELEVATED;
    }
    if (checkElevated) {
      checkElevated = userId === AuthenticationStore.getId();
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
        const tmp21Result4 = BigFlagUtils;
        removeResult = tmp21Result4.remove(found1, closure_19);
      }
      tmp39 = removeResult;
    }
    return tmp39;
  }
}
function computePermissions(excludeGuildPermissions) {
  let checkElevated;
  let context;
  let overwrites;
  let roles;
  let user;
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
    let tmp4;
    let tmp3;
    let obj;
    let tmp21;
    let id = user;
    if (typeof user !== "string") {
      id = user.id;
    }
    if (context instanceof metroImportAll) {
      if (context.isScheduledForDeletion()) {
        return deserializeResult;
      } else if (metroImportDefault.has(context.type)) {
        const channel = ChannelStore.getChannel(context.parent_id);
        if (null != channel) {
          if (!channel.isScheduledForDeletion()) {
            const currentUser = UserStore.getCurrentUser();
            let id1;
            if (currentUser != null) {
              id1 = currentUser.id;
            }
            const hasJoinedResult = id === id1 && JoinedThreadsStore.hasJoined(context.id);
            const obj2 = { user, context: channel, overwrites, roles, checkElevated, excludeGuildPermissions: flag };
            const tmp38 = computePermissions(obj2);
            return applyThreadPermissions(context, tmp38, hasJoinedResult, GuildMemberStore.isCurrentUserGuest(context.guild_id));
          }
        }
        return deserializeResult;
      } else {
        let permissionOverwrites;
        let lurkerPermissionsAllowList = context.computeLurkerPermissionsAllowList();
        if (lurkerPermissionsAllowList == null) {
          lurkerPermissionsAllowList = closure_26;
        }
        if (null != overwrites) {
          const obj4 = {};
          const merged = Object.assign(context.permissionOverwrites);
          const merged1 = Object.assign(overwrites);
          permissionOverwrites = obj4;
        } else {
          permissionOverwrites = context.permissionOverwrites;
        }
        const guildId = context.getGuildId();
        let guild = null;
        if (null != guildId) {
          guild = GuildStore.getGuild(guildId);
        }
        tmp4 = guild;
        tmp3 = lurkerPermissionsAllowList;
        obj = permissionOverwrites;
      }
    } else {
      obj = overwrites;
      if (overwrites == null) {
        obj = {};
      }
      tmp3 = closure_26;
      tmp4 = context;
    }
    if (null == tmp4) {
      tmp21 = deserializeResult;
    } else {
      const currentUser1 = UserStore.getCurrentUser();
      let id2;
      if (currentUser1 != null) {
        id2 = currentUser1.id;
      }
      if (id !== id2) {
        if (authStore(tmp4, id)) {
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
          tmp21 = applyResult;
          if (flag2) {
            const currentUser2 = UserStore.getCurrentUser();
            let mfaEnabled;
            if (currentUser2 != null) {
              mfaEnabled = currentUser2.mfaEnabled;
            }
            let removeResult = applyResult;
            if (!mfaEnabled) {
              const obj3 = BigFlagUtils;
              removeResult = obj3.remove(applyResult, closure_19);
            }
            tmp21 = removeResult;
          }
        }
      }
      const obj5 = { userId: id, member: GuildMemberStore.getMember(tmp4.id, id), guild: tmp4, overwrites: obj, roles, checkElevated, excludeGuildPermissions: flag, lurkerPermissionsMask: tmp3 };
      tmp21 = computePermissionsForMember(obj5);
    }
    return tmp21;
  }
}
function applyThreadPermissions(context, permissions, hasJoinedResult, GuildMemberStore) {
  if (context.type === constants2.MEDIA_THREAD) {
    const obj7 = BigFlagUtils;
    combineResult = obj7.combine(Permissions.READ_MESSAGE_HISTORY, Permissions.VIEW_CHANNEL);
  } else {
    let removeResult1;
    if (context.type === tmp.PRIVATE_THREAD) {
      const tmp2 = hasJoinedResult;
      if (!tmp2) {
        const tmp3 = GuildMemberStore;
        if (!tmp3) {
          const obj = BigFlagUtils;
          if (!obj.has(permissions, Permissions.MANAGE_THREADS)) {
            combineResult = deserializeResult;
          }
        }
      }
    }
    const obj2 = BigFlagUtils;
    if (obj2.has(permissions, Permissions.SEND_MESSAGES_IN_THREADS)) {
      if (context.isLockedThread()) {
        let removeResult;
        const tmp8Result = BigFlagUtils;
        if (!tmp8Result.has(permissions, Permissions.MANAGE_THREADS)) {
          const tmp8Result4 = BigFlagUtils;
          removeResult = tmp8Result4.remove(permissions, Permissions.SEND_MESSAGES);
        }
        removeResult1 = removeResult;
      }
      const tmp8Result5 = BigFlagUtils;
      removeResult = tmp8Result5.combine(permissions, Permissions.SEND_MESSAGES);
    } else {
      const tmp8Result6 = BigFlagUtils;
      removeResult1 = tmp8Result6.remove(permissions, Permissions.SEND_MESSAGES);
    }
    combineResult = removeResult1;
  }
  return combineResult;
}
function getSyncedPermissionOverwrites(guild_id, appChannelBotUserId) {
  let add;
  let allow;
  let deny;
  let remove;
  guild_id = guild_id.guild_id;
  const obj = {};
  const merged = Object.assign(guild_id.permissionOverwrites);
  const tmp2 = null != guild_id && null == obj[guild_id];
  if (tmp2) {
    obj[guild_id] = { id: guild_id, type: Server.PermissionOverwriteType.ROLE, allow: deserializeResult, deny: deserializeResult };
    const obj2 = { id: guild_id, type: Server.PermissionOverwriteType.ROLE, allow: deserializeResult, deny: deserializeResult };
  }
  if (null != appChannelBotUserId) {
    const obj3 = { id: appChannelBotUserId, type: Server.PermissionOverwriteType.MEMBER, allow: add(allow, AppChannelPermissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS), deny: remove(deny, AppChannelPermissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS) };
    allow = undefined;
    add = BigFlagUtils.add;
    BigFlagUtils;
    if (obj[appChannelBotUserId] != null) {
      allow = tmp9.allow;
    }
    if (allow == null) {
      allow = deserializeResult;
    }
    deny = undefined;
    remove = BigFlagUtils.remove;
    BigFlagUtils;
    if (obj[appChannelBotUserId] != null) {
      deny = tmp9.deny;
    }
    if (deny == null) {
      deny = deserializeResult;
    }
    obj[appChannelBotUserId] = obj3;
  }
  return obj;
}
({ THREAD_CHANNEL_TYPES: metroImportDefault, ChannelRecordBase: metroImportAll } = ChannelRecord);
({ getGuildEveryoneRoleId: c9, isGuildOwner: c10 } = GuildRecord);
const hasPermission = GuildRoleRecord.hasPermission;
const Permissions = Constants.Permissions;
({ ElevatedPermissions: closure_19, MFALevels: closure_20, ChannelTypes: closure_21, EMPTY_STRING_SNOWFLAKE_ID: closure_22 } = Constants);
let BigFlagUtils = BigFlagUtils_mod;
const deserializeResult = BigFlagUtils.deserialize(0);
BigFlagUtils = BigFlagUtils_mod;
const combine = BigFlagUtils.combine;
const items = [...importDefaultResult.values(Permissions)];
const applyResult = combine.apply(items);
BigFlagUtils = BigFlagUtils_mod;
let combineResult = BigFlagUtils.combine(Permissions.CREATE_INSTANT_INVITE, Permissions.CHANGE_NICKNAME, Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.READ_MESSAGE_HISTORY, Permissions.MENTION_EVERYONE, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_STICKERS, Permissions.ADD_REACTIONS, Permissions.CREATE_PUBLIC_THREADS, Permissions.CREATE_PRIVATE_THREADS, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.SEND_POLLS, Permissions.CONNECT, Permissions.SPEAK, Permissions.USE_VAD, Permissions.STREAM, Permissions.USE_EMBEDDED_ACTIVITIES, Permissions.USE_SOUNDBOARD, Permissions.REQUEST_TO_SPEAK, Permissions.USE_APPLICATION_COMMANDS, Permissions.CREATE_GUILD_EXPRESSIONS, Permissions.CREATE_EVENTS, Permissions.USE_EXTERNAL_APPS);
BigFlagUtils = BigFlagUtils_mod;
let closure_26 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY);
BigFlagUtils = BigFlagUtils_mod;
let closure_27 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES, Permissions.CONNECT, Permissions.SPEAK, Permissions.STREAM, Permissions.USE_EMBEDDED_ACTIVITIES, Permissions.USE_EXTERNAL_APPS, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_SOUNDS, Permissions.USE_EXTERNAL_STICKERS, Permissions.USE_SOUNDBOARD, Permissions.USE_VAD, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.ADD_REACTIONS);
BigFlagUtils = BigFlagUtils_mod;
let closure_28 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY);
BigFlagUtils = BigFlagUtils_mod;
let closure_29 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY, Permissions.CHANGE_NICKNAME);
BigFlagUtils = BigFlagUtils_mod;
const combineResult1 = BigFlagUtils.combine(Permissions.MANAGE_GUILD, Permissions.MANAGE_ROLES, Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.MANAGE_NICKNAMES, Permissions.CREATE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MANAGE_WEBHOOKS, Permissions.VIEW_AUDIT_LOG, Permissions.VIEW_GUILD_ANALYTICS);
let result = size.fileFinishedImporting("utils/PermissionUtils.tsx");
function computePermissionsForRoles(excludeGuildPermissions) {
  let checkElevated;
  let context;
  let date;
  let forceRoles;
  let obj;
  let obj5;
  let overwrites;
  let roles;
  let tmp3;
  let tmp4;
  ({ forceRoles, context, overwrites, roles, checkElevated } = excludeGuildPermissions);
  if (checkElevated === undefined) {
    checkElevated = true;
  }
  excludeGuildPermissions = excludeGuildPermissions.excludeGuildPermissions;
  if (context instanceof metroImportAll) {
    if (context.isScheduledForDeletion()) {
      return deserializeResult;
    } else if (metroImportDefault.has(context.type)) {
      let tmp23;
      const channel = ChannelStore.getChannel(context.parent_id);
      if (null == channel) {
        tmp23 = deserializeResult;
      } else {
        const obj2 = { forceRoles, context: channel, overwrites, roles, checkElevated, excludeGuildPermissions };
        tmp23 = applyThreadPermissions(context, computePermissionsForRoles(obj2), false, false);
      }
      return tmp23;
    } else {
      let permissionOverwrites;
      let lurkerPermissionsAllowList = context.computeLurkerPermissionsAllowList();
      if (lurkerPermissionsAllowList == null) {
        lurkerPermissionsAllowList = closure_26;
      }
      if (null != overwrites) {
        const obj3 = {};
        const merged = Object.assign(context.permissionOverwrites);
        const merged1 = Object.assign(overwrites);
        permissionOverwrites = obj3;
      } else {
        permissionOverwrites = context.permissionOverwrites;
      }
      const guildId = context.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
      }
      tmp4 = guild;
      tmp3 = lurkerPermissionsAllowList;
      obj = permissionOverwrites;
    }
  } else {
    obj = overwrites;
    if (overwrites == null) {
      obj = {};
    }
    tmp3 = closure_26;
    tmp4 = context;
  }
  if (null == tmp4) {
    return deserializeResult;
  } else {
    const obj4 = { userId, nick: "", guildId: tmp4.id, guildMemberAvatar: null, roles: obj5.keys(forceRoles), colorString: null, colorStrings: null, hoistRoleId: null, premiumSince: null, isPending: false, joinedAt: date.toISOString(), communicationDisabledUntil: null };
    const _Date = Date;
    const self = this;
    const self2 = this;
    obj5 = SnowflakeUtilsDefault;
    date = new Date();
    const obj6 = { userId, member: obj4, guild: tmp4, overwrites: obj, roles, checkElevated, excludeGuildPermissions, lurkerPermissionsMask: tmp3 };
    return computePermissionsForMember(obj6);
  }
}

export const NONE = deserializeResult;
export const ALL = applyResult;
export const DEFAULT = combineResult;
export const VIEW_GUILD_SETTINGS = combineResult1;
export { computePermissionsForRoles };
export { computePermissions };
export { applyThreadPermissions };
export { getSyncedPermissionOverwrites };
export const areChannelsLocked = function areChannelsLocked(c18, c19, appChannelBotUserId) {
  if (set.has(Permissions.type)) {
    return true;
  } else {
    const tmp = guild_id;
    guild_id = Permissions.guild_id;
    const tmp2 = null;
    if (null != guild_id) {
      if (null != guild_id) {
        if (guild_id === guild_id.guild_id) {
          let obj2 = {};
          const merged = Object.assign(Permissions.permissionOverwrites);
          const tmp12 = getSyncedPermissionOverwrites(guild_id, appChannelBotUserId);
          let closure_1 = tmp12;
          if (null == obj2[guild_id]) {
            let obj = { id: guild_id, type: obj2(1985).PermissionOverwriteType.ROLE, allow: deserializeResult, deny: deserializeResult };
            let tmp3 = obj2;
            obj2[guild_id] = obj;
          }
          const _Object = Object;
          const _Object2 = Object;
          let tmp7 = Object.keys(obj2).length === Object.keys(tmp12).length;
          if (tmp7) {
            const _Object3 = Object;
            const keys = Object.keys(obj2);
            tmp7 = !keys.some((item) => {
              let tmp3 = null == tmp2;
              if (!tmp3) {
                const obj = BigFlagUtils;
                tmp3 = !obj.equals(tmp2.deny, tmp.deny);
              }
              if (!tmp3) {
                obj2 = BigFlagUtils;
                tmp3 = !obj2.equals(tmp2.allow, tmp.allow);
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
  const obj = module_12;
  if (!obj.some(GuildRoleStore.getUnsafeMutableRoles(guild.id), (hoist) => {
    hoist = hoist.hoist && hasPermission(hoist, constants.ADMINISTRATOR);
    return hoist;
  })) {
    const ownerId = guild.ownerId;
    tmp = ownerId;
  }
  return tmp;
};
export const isRoleHigher = function isRoleHigher(guild, id, guildId, id2) {
  const tmp = null == id || !authStore(guild, id);
  let tmp4 = !tmp;
  if (tmp) {
    let tmp6 = null != guildId;
    if (tmp6) {
      let doesRoleSortHigherResult = null == id;
      if (!doesRoleSortHigherResult) {
        const obj = GuildRoleUtils;
        doesRoleSortHigherResult = obj.doesRoleSortHigher(guildId, id);
      }
      tmp6 = doesRoleSortHigherResult;
    }
    tmp4 = tmp6;
  }
  return tmp4;
};
export const getHighestRole = function getHighestRole(id, id2) {
  const member = GuildMemberStore.getMember(id.id, id);
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
  const obj = { id: guildId1, type: Server.PermissionOverwriteType.ROLE, allow: deserializeResult, deny: deserializeResult };
  return obj;
};
export const canManageACategory = function canManageACategory(currentUser, guild, categories) {
  let context;
  let excludeGuildPermissions;
  let overwrites;
  let permission;
  let roles;
  let user;
  user = currentUser;
  let obj = { permission: Permissions.MANAGE_CHANNELS, user: currentUser, context: guild };
  ({ permission, user, context, overwrites, roles, excludeGuildPermissions } = obj);
  let obj2 = BigFlagUtils;
  const someResult = obj2.has(computePermissions({ user, context, overwrites, roles, checkElevated: true, excludeGuildPermissions }), permission) || categories.some((channel) => {
    let context;
    let excludeGuildPermissions;
    let overwrites;
    let permission;
    let roles;
    channel = channel.channel;
    let hasItem = "null" !== channel.id;
    if (hasItem) {
      const obj = { permission: Permissions.MANAGE_CHANNELS, user, context: channel };
      ({ permission, user, context, overwrites, roles, excludeGuildPermissions } = obj);
      const obj3 = { user, context, overwrites, roles, checkElevated: true, excludeGuildPermissions };
      const obj2 = BigFlagUtils;
      hasItem = obj2.has(computePermissions(obj3), permission);
    }
    return hasItem;
  });
  return someResult;
};
export const can = function can(arg0) {
  let context;
  let excludeGuildPermissions;
  let overwrites;
  let permission;
  let roles;
  let user;
  ({ permission, user, context, overwrites, roles, excludeGuildPermissions } = arg0);
  const obj = BigFlagUtils;
  return obj.has(computePermissions({ user, context, overwrites, roles, checkElevated: true, excludeGuildPermissions }), permission);
};
export const ALLOW = "ALLOW";
export const DENY = "DENY";
export const PASSTHROUGH = "PASSTHROUGH";
export const canEveryoneRole = function canEveryoneRole(VIEW_CHANNEL, channel) {
  let tmp2 = channel;
  if (channel instanceof metroImportAll) {
    if (channel.type === constants2.PRIVATE_THREAD) {
      return false;
    } else {
      if (metroImportDefault.has(channel.type)) {
        channel = ChannelStore.getChannel(channel.parent_id);
        if (null == channel) {
          return false;
        }
      }
      const permissionOverwrites = channel.permissionOverwrites;
      const guildId = channel.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
      }
      tmp2 = guild;
    }
  }
  if (null == tmp2) {
    return false;
  } else {
    const permissions = GuildRoleStore.getEveryoneRole(tmp2).permissions;
    const tmp18 = {}[tmp2.id];
    let addResult = permissions;
    if (null != tmp18) {
      const obj2 = BigFlagUtils;
      const removeResult = obj2.remove(permissions, tmp18.deny);
      const obj3 = BigFlagUtils;
      addResult = obj3.add(removeResult, tmp18.allow);
    }
    const obj4 = BigFlagUtils;
    return obj4.has(addResult, VIEW_CHANNEL);
  }
};
export const canEveryone = function canEveryone(VIEW_CHANNEL, channel) {
  let closure_0 = VIEW_CHANNEL;
  let tmp2 = channel;
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
      const permissionOverwrites = channel.permissionOverwrites;
      const guildId = channel.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(guildId);
      }
      tmp2 = guild;
    }
  }
  if (null == tmp2) {
    return false;
  } else {
    let tmp11 = hasPermission(GuildRoleStore.getEveryoneRole(tmp2), VIEW_CHANNEL);
    if (tmp11) {
      const obj2 = module_12;
      tmp11 = !obj2.some({}, (deny) => {
        const obj = BigFlagUtils;
        return obj.has(deny.deny, VIEW_CHANNEL);
      });
    }
    return tmp11;
  }
};