import initialize from "initialize";
import closure_5 from "initialize";
import storeThread from "storeThread";
import createChannelRecord from "createChannelRecord";
import GuildNSFWContentLevel from "GuildNSFWContentLevel";
import { hasPermission } from "GuildRoleRecordTypeTag";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import deserializeResult from "initialize";
import importAllResult from "fromString";
import importAllResult1 from "fromString";
import importDefaultResult from "ME";
import importAllResult2 from "fromString";
import importAllResult3 from "fromString";
import importAllResult4 from "fromString";
import importAllResult5 from "fromString";
import importAllResult6 from "fromString";
import importAllResult7 from "fromString";

let c10;
let c9;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let error;
let metroImportAll;
const require = arg1;
function applyOverwrites(id, member, closure_23, overwrites) {
  let addResult = closure_23;
  if (null != overwrites[id]) {
    const obj = importAll(506);
    const removeResult = importAll(506).remove(closure_23, tmp.deny);
    addResult = importAll(506).add(removeResult, tmp.allow);
    const obj2 = importAll(506);
  }
  let found1 = addResult;
  if (null != member) {
    let tmp15 = closure_23;
    let num = 0;
    let tmp16 = closure_23;
    let tmp17 = closure_23;
    let tmp18 = closure_23;
    if (0 < member.roles.length) {
      do {
        let tmp7 = overwrites[member.roles[num]];
        let tmp8 = num;
        let tmp9 = tmp15;
        let tmp10 = tmp16;
        let addResult2 = tmp15;
        let addResult1 = tmp16;
        if (null != tmp7) {
          let tmp13 = importAll;
          let tmp14 = dependencyMap;
          let obj3 = importAll(506);
          addResult1 = obj3.add(tmp16, tmp7.allow);
          let obj4 = importAll(506);
          addResult2 = obj4.add(tmp15, tmp7.deny);
        }
        num = num + 1;
        tmp15 = addResult2;
        tmp16 = addResult1;
        tmp17 = addResult2;
        tmp18 = addResult1;
      } while (num < member.roles.length);
    }
    const obj5 = importAll(506);
    const removeResult1 = importAll(506).remove(addResult, tmp17);
    const addResult3 = importAll(506).add(removeResult1, tmp18);
    let addResult4 = addResult3;
    if (null != overwrites[member.userId]) {
      let tmp19Result = tmp19(506);
      tmp19Result = tmp19(506);
      addResult4 = tmp19Result.add(tmp19Result.remove(addResult3, tmp23.deny), tmp23.allow);
      const removeResult2 = tmp19Result.remove(addResult3, tmp23.deny);
    }
    const obj6 = importAll(506);
    const hasItem = importAll(506).has(addResult4, Permissions.ADMINISTRATOR);
    const tmp19Result1 = importAll(506);
    const tmp28 = require;
    const result = require(3889) /* GuildMemberFlags */.hasAutomodQuarantinedProfile(member);
    let tmp31 = result;
    if (result) {
      tmp31 = !hasItem;
    }
    let found = addResult4;
    if (tmp31) {
      found = tmp19(506).filter(addResult4, closure_29);
      const tmp19Result2 = tmp19(506);
    }
    const obj10 = require(3889) /* GuildMemberFlags */;
    const tmp28Result = tmp28(3872);
    found1 = found;
    if (tmp34) {
      found1 = tmp19(506).filter(found, closure_28);
      const tmp19Result3 = tmp19(506);
    }
    tmp34 = tmp28(3872).isMemberCommunicationDisabled(member) && !hasItem;
  }
  return found1;
}
function computePermissionsForMember(excludeGuildPermissions) {
  let checkElevated;
  let guild;
  let member;
  let overwrites;
  let roles;
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
    return applyOverwrites(guild.id, member, closure_23, overwrites);
  } else {
    if (null != roles) {
      const obj = {};
      const merged = Object.assign(store3.getUnsafeMutableRoles(guild.id));
      const merged1 = Object.assign(roles);
      let unsafeMutableRoles = obj;
    } else {
      unsafeMutableRoles = store3.getUnsafeMutableRoles(guild.id);
    }
    const tmp11 = unsafeMutableRoles[callback(undefined, guild)];
    const tmp12 = null != tmp11 ? tmp11.permissions : closure_25;
    let tmp13 = tmp12;
    if (null != member) {
      let num = 0;
      let tmp14 = tmp12;
      tmp13 = tmp12;
      if (0 < member.roles.length) {
        do {
          let tmp15 = unsafeMutableRoles[member.roles[num]];
          let tmp16 = num;
          let tmp17 = tmp14;
          let addResult = tmp14;
          if (undefined !== tmp15) {
            let tmp19 = importAll;
            let tmp20 = dependencyMap;
            let obj2 = importAll(506);
            addResult = obj2.add(tmp14, tmp15.permissions);
          }
          num = num + 1;
          tmp14 = addResult;
          tmp13 = addResult;
        } while (num < member.roles.length);
      }
    }
    if (obj3.has(tmp13, Permissions.ADMINISTRATOR)) {
      let tmp29 = closure_24;
    } else {
      tmp29 = applyOverwrites(guild.id, member, tmp24, overwrites);
    }
    let isLurkingResult = lurking.isLurking(guild.id);
    if (!isLurkingResult) {
      let isPending;
      if (member != null) {
        isPending = member.isPending;
      }
      isLurkingResult = isPending;
    }
    let found = tmp29;
    if (isLurkingResult) {
      let tmp21Result = tmp21(506);
      found = tmp21Result.filter(tmp29, lurkerPermissionsMask);
    }
    let found1 = found;
    if (authStore.isCurrentUserGuest(guild.id)) {
      tmp21Result = tmp21(506);
      found1 = tmp21Result.filter(found, closure_27);
    }
    if (checkElevated === undefined) {
      checkElevated = true;
    }
    if (checkElevated) {
      checkElevated = guild.mfaLevel === constants.ELEVATED;
    }
    if (checkElevated) {
      checkElevated = excludeGuildPermissions.userId === store.getId();
    }
    let tmp39 = found1;
    if (checkElevated) {
      const currentUser = authStore2.getCurrentUser();
      let mfaEnabled;
      if (currentUser != null) {
        mfaEnabled = currentUser.mfaEnabled;
      }
      let removeResult = found1;
      if (!mfaEnabled) {
        removeResult = tmp21(506).remove(found1, closure_19);
        const tmp21Result1 = tmp21(506);
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
    return closure_23;
  } else {
    let id = user;
    if (typeof user !== "y") {
      id = user.id;
    }
    if (context instanceof closure_8) {
      if (context.isScheduledForDeletion()) {
        return closure_23;
      } else if (set.has(context.type)) {
        const channel = store2.getChannel(context.parent_id);
        if (null != channel) {
          if (!channel.isScheduledForDeletion()) {
            const currentUser = authStore2.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            let hasJoinedResult = id === id;
            if (hasJoinedResult) {
              hasJoinedResult = storeThread.hasJoined(context.id);
            }
            let obj = { user: null, context: null, overwrites: null, roles: null, checkElevated: null, excludeGuildPermissions: null };
            obj[0] = user;
            obj[1] = channel;
            obj[2] = overwrites;
            obj[3] = roles;
            obj[4] = checkElevated;
            obj[5] = flag;
            return applyThreadPermissions(context, computePermissions(obj), hasJoinedResult, authStore.isCurrentUserGuest(context.guild_id));
          }
        }
        return closure_23;
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
          guild = store4.getGuild(guildId);
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
      let tmp21 = closure_23;
    } else {
      const currentUser1 = authStore2.getCurrentUser();
      let id1;
      if (currentUser1 != null) {
        id1 = currentUser1.id;
      }
      if (id !== id1) {
        if (callback2(tmp4, id)) {
          let flag2 = checkElevated;
          if (checkElevated === undefined) {
            flag2 = true;
          }
          if (flag2) {
            flag2 = tmp4.mfaLevel === constants.ELEVATED;
          }
          if (flag2) {
            flag2 = id === store.getId();
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
              removeResult = importAll(506).remove(tmp18, closure_19);
              const obj3 = importAll(506);
            }
            tmp21 = removeResult;
          }
        }
      }
      const obj1 = { userId: null, member: null, guild: null, overwrites: null, roles: null, checkElevated: null, excludeGuildPermissions: null, lurkerPermissionsMask: null };
      obj1[0] = id;
      obj1[1] = authStore.getMember(tmp4.id, id);
      obj1[2] = tmp4;
      obj1[3] = obj;
      obj1[4] = roles;
      obj1[5] = checkElevated;
      obj1[6] = flag;
      obj1[7] = tmp3;
      tmp21 = computePermissionsForMember(obj1);
      obj7 = authStore2;
    }
    return tmp21;
  }
}
function applyThreadPermissions(context, permissionsForRoles, hasJoinedResult, trackCommunicationDisabled) {
  if (context.type === constants2.MEDIA_THREAD) {
    let combineResult = importAll(506).combine(Permissions.READ_MESSAGE_HISTORY, Permissions.VIEW_CHANNEL);
    const obj6 = importAll(506);
  } else {
    if (context.type === tmp.PRIVATE_THREAD) {
      if (!hasJoinedResult) {
        if (!trackCommunicationDisabled) {
          if (!obj.has(permissionsForRoles, Permissions.MANAGE_THREADS)) {
            combineResult = closure_23;
          }
          obj = importAll(506);
        }
      }
    }
    let tmp8 = importAll;
    let combine = dependencyMap;
    let SEND_MESSAGES = Permissions;
    if (!obj2.has(permissionsForRoles, Permissions.SEND_MESSAGES_IN_THREADS)) {
      let tmp8Result = tmp8(506);
      tmp8Result.remove(permissionsForRoles, SEND_MESSAGES.SEND_MESSAGES);
    }
    if (context.isLockedThread()) {
      tmp8Result = tmp8(506);
      if (!tmp8Result.has(permissionsForRoles, SEND_MESSAGES.MANAGE_THREADS)) {
        let removeResult1 = tmp8(506).remove(permissionsForRoles, SEND_MESSAGES.SEND_MESSAGES);
        const tmp8Result1 = tmp8(506);
      }
    }
    tmp8 = tmp8(506);
    combine = tmp8.combine;
    SEND_MESSAGES = SEND_MESSAGES.SEND_MESSAGES;
    removeResult1 = combine(permissionsForRoles, SEND_MESSAGES);
    obj2 = importAll(506);
  }
  return combineResult;
}
({ THREAD_CHANNEL_TYPES: error, ChannelRecordBase: metroImportAll } = createChannelRecord);
({ getGuildEveryoneRoleId: c9, isGuildOwner: c10 } = GuildNSFWContentLevel);
const Permissions = ME.Permissions;
({ ElevatedPermissions: closure_19, MFALevels: closure_20, ChannelTypes: closure_21, EMPTY_STRING_SNOWFLAKE_ID: closure_22 } = ME);
const items = [...require("ME").values(Permissions)];
const applyResult = importAllResult1.combine.apply(items);
let combineResult = require("fromString").combine(Permissions.CREATE_INSTANT_INVITE, Permissions.CHANGE_NICKNAME, Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.READ_MESSAGE_HISTORY, Permissions.MENTION_EVERYONE, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_STICKERS, Permissions.ADD_REACTIONS, Permissions.CREATE_PUBLIC_THREADS, Permissions.CREATE_PRIVATE_THREADS, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.SEND_POLLS, Permissions.CONNECT, Permissions.SPEAK, Permissions.USE_VAD, Permissions.STREAM, Permissions.USE_EMBEDDED_ACTIVITIES, Permissions.USE_SOUNDBOARD, Permissions.REQUEST_TO_SPEAK, Permissions.USE_APPLICATION_COMMANDS, Permissions.CREATE_GUILD_EXPRESSIONS, Permissions.CREATE_EVENTS, Permissions.USE_EXTERNAL_APPS);
let closure_26 = require("fromString").combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY);
let closure_27 = require("fromString").combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES, Permissions.CONNECT, Permissions.SPEAK, Permissions.STREAM, Permissions.USE_EMBEDDED_ACTIVITIES, Permissions.USE_EXTERNAL_APPS, Permissions.USE_EXTERNAL_EMOJIS, Permissions.USE_EXTERNAL_SOUNDS, Permissions.USE_EXTERNAL_STICKERS, Permissions.USE_SOUNDBOARD, Permissions.USE_VAD, Permissions.SEND_MESSAGES_IN_THREADS, Permissions.EMBED_LINKS, Permissions.ATTACH_FILES, Permissions.ADD_REACTIONS);
let closure_28 = require("fromString").combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY);
let closure_29 = require("fromString").combine(Permissions.VIEW_CHANNEL, Permissions.READ_MESSAGE_HISTORY, Permissions.CHANGE_NICKNAME);
const combineResult1 = require("fromString").combine(Permissions.MANAGE_GUILD, Permissions.MANAGE_ROLES, Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.MANAGE_NICKNAMES, Permissions.CREATE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MANAGE_WEBHOOKS, Permissions.VIEW_AUDIT_LOG, Permissions.VIEW_GUILD_ANALYTICS);
let result = require("storeThread").fileFinishedImporting("utils/PermissionUtils.tsx");
function computePermissionsForRoles(excludeGuildPermissions) {
  let checkElevated;
  let context;
  let forceRoles;
  let overwrites;
  let roles;
  ({ forceRoles, context, overwrites, roles, checkElevated } = excludeGuildPermissions);
  if (checkElevated === undefined) {
    checkElevated = true;
  }
  excludeGuildPermissions = excludeGuildPermissions.excludeGuildPermissions;
  if (context instanceof closure_8) {
    if (context.isScheduledForDeletion()) {
      return closure_23;
    } else if (set.has(context.type)) {
      const channel = store2.getChannel(context.parent_id);
      if (null == channel) {
        let tmp23 = closure_23;
      } else {
        let obj = { forceRoles: null, context: null, overwrites: null, roles: null, checkElevated: null, excludeGuildPermissions: null };
        obj[0] = forceRoles;
        obj[1] = channel;
        obj[2] = overwrites;
        obj[3] = roles;
        obj[4] = checkElevated;
        obj[5] = excludeGuildPermissions;
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
        guild = store4.getGuild(guildId);
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
    return closure_23;
  } else {
    const obj1 = { userId: null, nick: "", guildId: null, guildMemberAvatar: null, roles: null, colorString: null, colorStrings: null, hoistRoleId: null, premiumSince: null, isPending: false, joinedAt: null, communicationDisabledUntil: null };
    obj1[0] = closure_22;
    obj1[2] = tmp4.id;
    obj1[4] = importDefault(11).keys(forceRoles);
    const _Date = Date;
    const date = new Date();
    obj1[10] = date.toISOString();
    const obj2 = { userId: null, member: null, guild: null, overwrites: null, roles: null, checkElevated: null, excludeGuildPermissions: null, lurkerPermissionsMask: null };
    obj2[0] = closure_22;
    obj2[1] = obj1;
    obj2[2] = tmp4;
    obj2[3] = obj;
    obj2[4] = roles;
    obj2[5] = checkElevated;
    obj2[6] = excludeGuildPermissions;
    obj2[7] = tmp3;
    return computePermissionsForMember(obj2);
  }
}

export const NONE = deserializeResult;
export const ALL = applyResult;
export const DEFAULT = combineResult;
export const VIEW_GUILD_SETTINGS = combineResult1;
export { computePermissionsForRoles };
export { computePermissions };
export { applyThreadPermissions };
export const areChannelsLocked = function areChannelsLocked(channel, channel2) {
  if (set.has(channel.type)) {
    return true;
  } else {
    const guild_id = channel.guild_id;
    if (null != channel2) {
      if (null != guild_id) {
        if (guild_id === channel2.guild_id) {
          let obj = {};
          const merged = Object.assign(channel.permissionOverwrites);
          obj = {};
          const merged1 = Object.assign(channel2.permissionOverwrites);
          if (null == obj[guild_id]) {
            obj = { id: null, type: null, allow: null, deny: null };
            obj[0] = guild_id;
            obj[1] = obj(1906).PermissionOverwriteType.ROLE;
            obj[2] = closure_23;
            obj[3] = closure_23;
            obj[guild_id] = obj;
          }
          if (null == obj[guild_id]) {
            const obj1 = { id: null, type: null, allow: null, deny: null };
            obj1[0] = guild_id;
            obj1[1] = obj(1906).PermissionOverwriteType.ROLE;
            obj1[2] = closure_23;
            obj1[3] = closure_23;
            obj[guild_id] = obj1;
          }
          const _Object = Object;
          const _Object2 = Object;
          let tmp10 = Object.keys(obj).length === Object.keys(obj).length;
          if (tmp10) {
            const _Object3 = Object;
            const keys = Object.keys(obj);
            tmp10 = !keys.some((arg0) => {
              let tmp3 = null == tmp2;
              if (!tmp3) {
                const obj = outer1_2(outer1_3[13]);
                tmp3 = !obj.equals(tmp2.deny, tmp.deny);
              }
              if (!tmp3) {
                tmp3 = !outer1_2(outer1_3[13]).equals(tmp2.allow, tmp.allow);
                const obj2 = outer1_2(outer1_3[13]);
              }
              return tmp3;
            });
          }
          return tmp10;
        }
      }
    }
    return false;
  }
};
export const getGuildVisualOwnerId = function getGuildVisualOwnerId(guild) {
  let tmp;
  if (!obj.some(store3.getUnsafeMutableRoles(guild.id), (hoist) => {
    hoist = hoist.hoist;
    if (hoist) {
      hoist = callback(hoist, constants.ADMINISTRATOR);
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
    tmp = !callback2(arg0, arg1);
  }
  let tmp4 = !tmp;
  if (tmp) {
    let tmp6 = null != guildId;
    if (tmp6) {
      let doesRoleSortHigherResult = null == id;
      if (!doesRoleSortHigherResult) {
        doesRoleSortHigherResult = require(1939) /* compareGuildRoles */.doesRoleSortHigher(guildId, id);
        const obj = require(1939) /* compareGuildRoles */;
      }
      tmp6 = doesRoleSortHigherResult;
    }
    tmp4 = tmp6;
  }
  return tmp4;
};
export const getHighestRole = function getHighestRole(id) {
  const member = authStore.getMember(id.id, arg1);
  if (null != member) {
    const sortedRoles = store3.getSortedRoles(id.id);
    return sortedRoles.find((id) => {
      const roles = member.roles;
      return roles.includes(id.id);
    });
  }
};
export const getHighestHoistedRole = function getHighestHoistedRole(id, hoistRoleId) {
  let role = null;
  if (null != hoistRoleId.hoistRoleId) {
    role = store3.getRole(id.id, hoistRoleId.hoistRoleId);
  }
  return role;
};
export const makeEveryoneOverwrite = function makeEveryoneOverwrite(guild_id) {
  return { id: guild_id, type: require(1906) /* PermissionOverwriteType */.PermissionOverwriteType.ROLE, allow: closure_23, deny: closure_23 };
};
export const canManageACategory = function canManageACategory(currentUser, guild, _categories) {
  let context;
  let excludeGuildPermissions;
  let overwrites;
  let permission;
  let roles;
  let user;
  let closure_0 = currentUser;
  ({ permission, user, context, overwrites, roles, excludeGuildPermissions } = { permission: Permissions.MANAGE_CHANNELS, user: currentUser, context: guild });
  let someResult = importAll(506).has(computePermissions({ user, context, overwrites, roles, checkElevated: true, excludeGuildPermissions }), permission);
  if (!someResult) {
    someResult = _categories.some((channel) => {
      let context;
      let excludeGuildPermissions;
      let overwrites;
      let permission;
      let roles;
      let user;
      channel = channel.channel;
      let hasItem = "null" !== channel.id;
      if (hasItem) {
        let obj = { permission: null, user: null, context: null };
        obj[0] = outer1_18.MANAGE_CHANNELS;
        obj[1] = closure_0;
        obj[2] = channel;
        ({ permission, user, context, overwrites, roles, excludeGuildPermissions } = obj);
        obj = { user: null, context: null, overwrites: null, roles: null, checkElevated: true, excludeGuildPermissions: null };
        obj[0] = user;
        obj[1] = context;
        obj[2] = overwrites;
        obj[3] = roles;
        obj[5] = excludeGuildPermissions;
        hasItem = outer1_2(outer1_3[13]).has(outer1_32(obj), permission);
        const obj2 = outer1_2(outer1_3[13]);
      }
      return hasItem;
    });
  }
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
  return importAll(506).has(computePermissions({ user, context, overwrites, roles, checkElevated: true, excludeGuildPermissions }), permission);
};
export const ALLOW = "ALLOW";
export const DENY = "DENY";
export const PASSTHROUGH = "PASSTHROUGH";
export const canEveryoneRole = function canEveryoneRole(VIEW_CHANNEL, channel) {
  let tmp = channel;
  if (channel instanceof closure_8) {
    if (channel.type === constants2.PRIVATE_THREAD) {
      return false;
    } else {
      if (set.has(channel.type)) {
        channel = store2.getChannel(channel.parent_id);
        if (null == channel) {
          return false;
        }
      }
      const guildId = channel.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = store4.getGuild(guildId);
      }
      tmp = guild;
      const permissionOverwrites = channel.permissionOverwrites;
    }
  }
  if (null == tmp) {
    return false;
  } else {
    const permissions = store3.getEveryoneRole(tmp).permissions;
    const tmp17 = {}[tmp.id];
    let addResult = permissions;
    if (null != tmp17) {
      const obj2 = importAll(506);
      const removeResult = importAll(506).remove(permissions, tmp17.deny);
      addResult = importAll(506).add(removeResult, tmp17.allow);
      const obj3 = importAll(506);
    }
    return importAll(506).has(addResult, VIEW_CHANNEL);
  }
};
export const canEveryone = function canEveryone(VIEW_CHANNEL, channel) {
  let closure_0 = VIEW_CHANNEL;
  let tmp = channel;
  if (channel instanceof closure_8) {
    if (channel.type === constants2.PRIVATE_THREAD) {
      return false;
    } else {
      if (set.has(channel.type)) {
        channel = store2.getChannel(channel.parent_id);
        if (null == channel) {
          return false;
        }
      }
      const guildId = channel.getGuildId();
      let guild = null;
      if (null != guildId) {
        guild = store4.getGuild(guildId);
      }
      tmp = guild;
      const permissionOverwrites = channel.permissionOverwrites;
    }
  }
  if (null == tmp) {
    return false;
  } else {
    let tmp10 = hasPermission(store3.getEveryoneRole(tmp), VIEW_CHANNEL);
    if (tmp10) {
      tmp10 = !importDefault(12).some({}, (deny) => outer1_2(outer1_3[13]).has(deny.deny, closure_0));
      const obj2 = importDefault(12);
    }
    return tmp10;
  }
};