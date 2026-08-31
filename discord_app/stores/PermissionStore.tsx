// discord_app/stores/PermissionStore.tsx
import applyDefault from "../../_runtime/00012_apply.js";
import fromStringAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import fromGuildPropertiesWithAdditionalFields from "../utils/GuildRecordUtils.tsx";
import applyOverwritesAll from "../utils/PermissionUtils.tsx";
import doesThreadMembersActionAffectMe from "../modules/threads/ThreadActionUtils.tsx";
import hasDefault from "../utils/BasicPermissionUtils.tsx";
import closure_4 from "../modules/impersonate/ImpersonateStore.tsx";
import closure_5 from "../modules/lurker_mode/LurkingStore.tsx";
import closure_6 from "../modules/stage_channels/StageInstanceStore.tsx";
import closure_7 from "../modules/threads/JoinedThreadsStore.tsx";
import createChannelRecord from "../records/ChannelRecord.tsx";
import GuildNSFWContentLevel from "../records/GuildRecord.tsx";
import closure_12 from "../records/UserRecord.tsx";
import closure_13 from "ChannelStore.tsx";
import closure_14 from "GuildMemberStore.tsx";
import closure_15 from "GuildStore.tsx";
import closure_16 from "UserStore.tsx";
import { Permissions } from "../Constants.tsx";
import { MemberSafetyPagePermissions as closure_18 } from "../modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx";

require = arg1;
function getUncachedChannelPermissions(id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = authStore;
  const currentUser = authStore.getCurrentUser();
  if (null == currentUser) {
    return applyOverwritesAll.NONE;
  } else {
    const channel = store.getChannel(id);
    if (null == channel) {
      return applyOverwritesAll.NONE;
    } else {
      const guildId = channel.getGuildId();
      let tmp7 = null != guildId;
      if (tmp7) {
        let isLurkingResult = lurking.isLurking(guildId);
        if (!isLurkingResult) {
          const member = closure_14.getMember(guildId, currentUser.id);
          let isPending;
          if (member != null) {
            isPending = member.isPending;
          }
          isLurkingResult = isPending;
        }
        tmp7 = isLurkingResult;
      }
      if (!channel.isScheduledForDeletion()) {
        if (!tmp7) {
          if (obj2.isEmpty(channel.permissionOverwrites)) {
            if (null != guildId) {
              let NONE2 = dependencyMap[guildId];
              if (null == NONE2) {
                const currentUser1 = obj.getCurrentUser();
                if (null == currentUser1) {
                  NONE2 = applyOverwritesAll.NONE;
                } else {
                  const guild = store2.getGuild(guildId);
                  if (null == guild) {
                    let NONE = applyOverwritesAll.NONE;
                  } else {
                    obj = { user: null, context: null, checkElevated: null };
                    obj[0] = currentUser1;
                    obj[1] = guild;
                    obj[2] = true;
                    NONE = applyOverwritesAll.computePermissions(obj);
                    dependencyMap[guildId] = NONE;
                    const obj3 = applyOverwritesAll;
                  }
                  NONE2 = NONE;
                }
              }
            }
            return NONE2;
          }
          obj2 = applyDefault;
        }
      }
      obj = { user: null, context: null, checkElevated: null };
      obj[0] = currentUser;
      obj[1] = channel;
      obj[2] = flag;
      NONE2 = applyOverwritesAll.computePermissions(obj);
      const obj5 = applyOverwritesAll;
    }
  }
}
function updateGuildVersion(guildId) {
  if (null != guildId) {
    let num = dependencyMap3[guildId];
    if (num == null) {
      num = 0;
    }
    dependencyMap3[guildId] = num + 1;
    const tmp = dependencyMap3;
  }
}
function handleConnectionOpen() {
  closure_19 = {};
  closure_20 = {};
  for (const key10005 in closure_21) {
    let tmp = key10005;
    let tmp2 = dependencyMap3;
    dependencyMap3[key10005] = dependencyMap3[key10005] + 1;
    continue;
  }
  closure_22 = closure_22 + 1;
}
function handleGuild() {
  closure_19 = {};
  closure_20 = {};
  for (const key10005 in closure_21) {
    let tmp = key10005;
    let tmp2 = dependencyMap3;
    dependencyMap3[key10005] = dependencyMap3[key10005] + 1;
    continue;
  }
  closure_22 = closure_22 + 1;
}
function handleGuildMemberUpdate(user) {
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (user.user.id !== id) {
    return false;
  } else {
    closure_19 = {};
    closure_20 = {};
    for (const key10015 in closure_21) {
      let tmp5 = key10015;
      let tmp6 = dependencyMap3;
      dependencyMap3[key10015] = dependencyMap3[key10015] + 1;
      continue;
    }
    closure_22 = closure_22 + 1;
  }
}
function handleThreadAction() {
  return true;
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  return data.some((messages) => {
    messages = messages.messages;
    let someResult = messages.threads.length > 0;
    if (!someResult) {
      someResult = messages.some((arr) => arr.some((thread) => null != thread.thread));
    }
    return someResult;
  });
}
function handleGuildRole(guildId) {
  guildId = guildId.guildId;
  delete tmp[tmp2];
  const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(guildId);
  const item = applyDefault.forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete tmp2[tmp];
  });
  closure_22 = closure_22 + 1;
  if (null != guildId) {
    let num = dependencyMap3[guildId];
    if (num == null) {
      num = 0;
    }
    dependencyMap3[guildId] = num + 1;
    const tmp5 = dependencyMap3;
  }
}
function handleStageInstancesChanged(instance) {
  const channel = store.getChannel(instance.instance.channel_id);
  if (null == channel) {
    return false;
  } else {
    const currentUser = authStore.getCurrentUser();
    let obj = applyOverwritesAll;
    obj = { user: null, context: null };
    obj[0] = currentUser;
    obj[1] = channel;
    const permissions = obj.computePermissions(obj);
    if (permissions === dependencyMap2[channel.id]) {
      return false;
    } else {
      dependencyMap2[channel.id] = permissions;
      closure_22 = closure_22 + 1;
    }
  }
}
function handleImpersonateUpdate(guildId) {
  guildId = guildId.guildId;
  delete tmp[tmp2];
  const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(guildId);
  const item = applyDefault.forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete tmp2[tmp];
  });
  closure_22 = closure_22 + 1;
  if (null != guildId) {
    let num = dependencyMap3[guildId];
    if (num == null) {
      num = 0;
    }
    dependencyMap3[guildId] = num + 1;
    const tmp5 = dependencyMap3;
  }
}
function computePermissions(context, overwrites, roles, excludeGuildPermissions) {
  let NONE = applyOverwritesAll.NONE;
  if (context instanceof closure_8) {
    if (set.has(context.type)) {
      const channel = store.getChannel(context.parent_id);
      if (null == channel) {
        let NONE4 = tmp(4096).NONE;
      } else {
        let tmpResult = tmp(4096);
        const tmp24 = computePermissions(channel, overwrites, roles, excludeGuildPermissions);
        NONE4 = tmpResult.applyThreadPermissions(context, tmp24, closure_7.hasJoined(context.id), closure_14.isCurrentUserGuest(context.guild_id));
        const hasJoinedResult = closure_7.hasJoined(context.id);
      }
      return NONE4;
    } else {
      const id2 = context.id;
      let tmp11 = dependencyMap2[id2];
      if (null == tmp11) {
        const tmp15 = getUncachedChannelPermissions(id2, true);
        dependencyMap2[id2] = tmp15;
        tmp11 = tmp15;
      }
      NONE = tmp11;
    }
  } else {
    let obj = fromGuildPropertiesWithAdditionalFields;
    if (obj.isGuildRecord(context)) {
      const id = context.id;
      let NONE2 = dependencyMap[id];
      if (null == NONE2) {
        const currentUser = authStore.getCurrentUser();
        if (null == currentUser) {
          NONE2 = tmp(4096).NONE;
        } else {
          const guild = store2.getGuild(id);
          if (null == guild) {
            let NONE3 = tmp(4096).NONE;
          } else {
            tmpResult = tmp(4096);
            obj = { user: null, context: null, checkElevated: null };
            obj[0] = currentUser;
            obj[1] = guild;
            obj[2] = true;
            NONE3 = tmpResult.computePermissions(obj);
            dependencyMap[id] = NONE3;
          }
          NONE2 = NONE3;
        }
      }
      NONE = NONE2;
    }
  }
  if (undefined === overwrites) {
    return NONE;
  }
  obj = { user: authStore.getCurrentUser(), context, overwrites, roles, checkElevated: true, excludeGuildPermissions };
  NONE = applyOverwritesAll.computePermissions(obj);
}
({ ChannelRecordBase: closure_8, THREAD_CHANNEL_TYPES: c9 } = createChannelRecord);
({ isGuildOwner: c10, isGuildOwnerWithRequiredMfaLevel: unpackModuleId } = GuildNSFWContentLevel);
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let c22 = 0;
const Store = initializeDefault.Store;
class PermissionStore extends Store {
}
const prototype = PermissionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_13, closure_14, closure_15, closure_4, closure_7, closure_5, closure_6, closure_16);
};
prototype["getChannelPermissions"] = function getChannelPermissions(type) {
  if (set.has(type.type)) {
    let tmp2 = getUncachedChannelPermissions(type.id);
  } else {
    const id = type.id;
    tmp2 = dependencyMap2[id];
    if (null == tmp2) {
      const tmp6 = getUncachedChannelPermissions(id, true);
      dependencyMap2[id] = tmp6;
      tmp2 = tmp6;
    }
  }
  return tmp2;
};
prototype["getGuildPermissions"] = function getGuildPermissions(guild) {
  const id = guild.id;
  let NONE = dependencyMap[id];
  if (null == NONE) {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      NONE = applyOverwritesAll.NONE;
    } else {
      guild = store2.getGuild(id);
      if (null == guild) {
        let NONE2 = applyOverwritesAll.NONE;
      } else {
        let obj = applyOverwritesAll;
        obj = { user: null, context: null, checkElevated: null };
        obj[0] = currentUser;
        obj[1] = guild;
        obj[2] = true;
        NONE2 = obj.computePermissions(obj);
        dependencyMap[id] = NONE2;
      }
      NONE = NONE2;
    }
  }
  return NONE;
};
prototype["getGuildPermissionProps"] = function getGuildPermissionProps(guild) {
  const self = this;
  const currentUser = authStore.getCurrentUser();
  const obj = { canManageGuild: this.can(Permissions.MANAGE_GUILD, guild), canManageChannels: this.can(Permissions.MANAGE_CHANNELS, guild), canManageRoles: this.can(Permissions.MANAGE_ROLES, guild), canManageBans: this.can(Permissions.BAN_MEMBERS, guild), canManageNicknames: this.can(Permissions.MANAGE_NICKNAMES, guild), canManageGuildExpressions: this.can(Permissions.MANAGE_GUILD_EXPRESSIONS, guild) || self.can(Permissions.CREATE_GUILD_EXPRESSIONS, guild), canViewAuditLog: self.can(Permissions.VIEW_AUDIT_LOG, guild), canViewAuditLogV2: self.can(Permissions.VIEW_AUDIT_LOG, guild), canManageWebhooks: self.can(Permissions.MANAGE_WEBHOOKS, guild), canViewGuildAnalytics: self.can(Permissions.VIEW_GUILD_ANALYTICS, guild), canAccessMembersPage: self.canAccessMemberSafetyPage(guild), isGuildAdmin: self.can(Permissions.ADMINISTRATOR, guild), isOwner: null, isOwnerWithRequiredMfaLevel: null, guild: null };
  let tmp4 = null != currentUser;
  if (tmp4) {
    tmp4 = callback(guild, currentUser);
  }
  obj[12] = tmp4;
  let tmp6 = null != currentUser;
  if (tmp6) {
    tmp6 = callback2(guild, currentUser);
  }
  obj[13] = tmp6;
  obj[14] = guild;
  return obj;
};
prototype["canAccessMemberSafetyPage"] = function canAccessMemberSafetyPage(id) {
  let obj = fromStringAll;
  id = id.id;
  let NONE = dependencyMap[id];
  if (null == NONE) {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      NONE = tmp(4096).NONE;
    } else {
      const guild = store2.getGuild(id);
      if (null == guild) {
        let NONE2 = tmp(4096).NONE;
      } else {
        obj = { user: null, context: null, checkElevated: null };
        obj[0] = currentUser;
        obj[1] = guild;
        obj[2] = true;
        NONE2 = tmp(4096).computePermissions(obj);
        dependencyMap[id] = NONE2;
        const tmpResult = tmp(4096);
      }
      NONE = NONE2;
    }
  }
  return obj.hasAny(NONE, closure_18);
};
prototype["canAccessGuildSettings"] = function canAccessGuildSettings(guild) {
  let obj = fromStringAll;
  const id = guild.id;
  let NONE = dependencyMap[id];
  if (null == NONE) {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      NONE = tmp(4096).NONE;
    } else {
      guild = store2.getGuild(id);
      if (null == guild) {
        let NONE2 = tmp(4096).NONE;
      } else {
        obj = { user: null, context: null, checkElevated: null };
        obj[0] = currentUser;
        obj[1] = guild;
        obj[2] = true;
        NONE2 = tmp(4096).computePermissions(obj);
        dependencyMap[id] = NONE2;
        const tmpResult = tmp(4096);
      }
      NONE = NONE2;
    }
  }
  return obj.hasAny(NONE, applyOverwritesAll.VIEW_GUILD_SETTINGS);
};
prototype["canWithPartialContext"] = function canWithPartialContext(MANAGE_MESSAGES, channelId) {
  const self = this;
  if ("channelId" in channelId) {
    if (typeof channelId.channelId === "string") {
      let canResult = self.can(MANAGE_MESSAGES, store.getChannel(channelId.channelId));
    }
    return canResult;
  }
  canResult = "guildId" in channelId && typeof channelId.guildId === "string";
  if (canResult) {
    canResult = self.can(MANAGE_MESSAGES, store2.getGuild(channelId.guildId));
  }
};
prototype["can"] = function can(arg0, arg1, arg2, arg3, arg4) {
  const tmp = computePermissions(arg1, arg2, arg3, arg4);
  return fromStringAll.has(tmp, arg0);
};
prototype["canBasicChannel"] = function canBasicChannel(VIEW_CHANNEL, basicChannel) {
  if ("basicPermissions" in basicChannel) {
    let hasItem = hasDefault.has(basicChannel.basicPermissions, VIEW_CHANNEL);
    const obj3 = hasDefault;
  } else {
    const obj = fromStringAll;
    const tmp8 = computePermissions(basicChannel, arg2, arg3, arg4);
    hasItem = obj.has(tmp8, hasDefault.asBigFlag(VIEW_CHANNEL));
    const obj2 = hasDefault;
  }
  return hasItem;
};
prototype["computePermissions"] = function computePermissions(arg0, arg1, arg2, arg3) {
  return computePermissions(arg0, arg1, arg2, arg3);
};
prototype["computeBasicPermissions"] = function computeBasicPermissions(basicChannel) {
  if ("basicPermissions" in basicChannel) {
    let basicPermissions = basicChannel.basicPermissions;
  } else {
    basicPermissions = hasDefault.asBasicFlag(computePermissions(basicChannel));
    const obj = hasDefault;
  }
  return basicPermissions;
};
prototype["canManageUser"] = function canManageUser(BAN_MEMBERS, user, guild) {
  let id = user;
  if (user instanceof closure_12) {
    id = user.id;
  }
  if (callback(guild, id)) {
    return false;
  } else {
    const self = this;
    const currentUser = authStore.getCurrentUser();
    if (this.can(BAN_MEMBERS, guild)) {
      if (null != currentUser) {
        const highestRole = applyOverwritesAll.getHighestRole(guild, currentUser.id);
        const obj = applyOverwritesAll;
      }
      const highestRole1 = applyOverwritesAll.getHighestRole(guild, id);
      let isRoleHigherResult = null != currentUser;
      if (isRoleHigherResult) {
        const tmp8Result = applyOverwritesAll;
        isRoleHigherResult = tmp8Result.isRoleHigher(guild, currentUser.id, highestRole, highestRole1);
      }
      return isRoleHigherResult;
    } else {
      return false;
    }
  }
};
prototype["getHighestRole"] = function getHighestRole(arg0) {
  const currentUser = authStore.getCurrentUser();
  let highestRole = null;
  if (null != currentUser) {
    highestRole = applyOverwritesAll.getHighestRole(arg0, currentUser.id);
    const obj = applyOverwritesAll;
  }
  return highestRole;
};
prototype["isRoleHigher"] = function isRoleHigher(id) {
  const currentUser = authStore.getCurrentUser();
  const isViewingRolesResult = viewingRoles.isViewingRoles(id.id);
  let tmp3;
  if (!isViewingRolesResult) {
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp3 = id;
  }
  return applyOverwritesAll.isRoleHigher(id, tmp3, arg1, arg2);
};
prototype["canImpersonateRole"] = function canImpersonateRole(arg0, id) {
  const self = this;
  const highestRole = this.getHighestRole(arg0);
  let tmp3 = this.can(Permissions.MANAGE_GUILD, arg0) && self.can(Permissions.MANAGE_ROLES, arg0);
  let isRoleHigherResult = self.isRoleHigher(arg0, highestRole, id);
  if (tmp3) {
    if (!isRoleHigherResult) {
      id = undefined;
      if (highestRole != null) {
        id = highestRole.id;
      }
      isRoleHigherResult = id.id === id;
    }
    tmp3 = isRoleHigherResult;
  }
  return tmp3;
};
prototype["getGuildVersion"] = function getGuildVersion(arg0) {
  let num = dependencyMap3[arg0];
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getChannelsVersion"] = function getChannelsVersion() {
  return c22;
};
PermissionStore.displayName = "PermissionStore";
const permissionStore = new PermissionStore(dispatcherDefault, {
  BACKGROUND_SYNC: handleConnectionOpen,
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: handleConnectionOpen,
  CACHE_LOADED_LAZY: handleConnectionOpen,
  CONNECTION_CLOSED: function handleConnectionClose() {
    closure_20 = {};
    closure_19 = {};
    closure_21 = {};
    c22 = 0;
  },
  GUILD_CREATE: handleGuild,
  GUILD_UPDATE: handleGuild,
  GUILD_DELETE: handleGuild,
  GUILD_MEMBER_ADD: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  CURRENT_USER_UPDATE: handleGuildMemberUpdate,
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = store.getChannel(channel.channel.id);
    if (null != channel) {
      if (!channel.isPrivate()) {
        const currentUser = authStore.getCurrentUser();
        const obj = { user: null, context: null };
        obj[0] = currentUser;
        obj[1] = channel;
        const permissions = applyOverwritesAll.computePermissions(obj);
        if (dependencyMap2[channel.id] === permissions) {
          return false;
        } else {
          dependencyMap2[channel.id] = permissions;
          closure_22 = closure_22 + 1;
          const guildId = channel.getGuildId();
          if (null != guildId) {
            let num2 = dependencyMap3[guildId];
            if (num2 == null) {
              num2 = 0;
            }
            dependencyMap3[guildId] = num2 + 1;
            const tmp10 = dependencyMap3;
          }
        }
        const obj2 = applyOverwritesAll;
      }
    }
    return false;
  },
  THREAD_CREATE: handleThreadAction,
  THREAD_UPDATE: handleThreadAction,
  THREAD_LIST_SYNC: handleThreadAction,
  LOAD_THREADS_SUCCESS: handleThreadAction,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleThreadAction,
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp = store;
      let channel = store.getChannel(iter.next().id);
      let obj = channel;
      if (null != channel) {
        let tmp18 = channel;
        if (!obj.isPrivate()) {
          let tmp3 = authStore;
          let tmp5 = importAll;
          let tmp6 = dependencyMap;
          let currentUser = authStore.getCurrentUser();
          let obj2 = applyOverwritesAll;
          obj = { user: null, context: null };
          obj[0] = currentUser;
          let tmp7 = channel;
          obj[1] = obj;
          let permissions = obj2.computePermissions(obj);
          let tmp10 = dependencyMap2;
          if (dependencyMap2[obj.id] !== permissions) {
            let tmp11 = dependencyMap2;
            let tmp12 = channel;
            let tmp13 = permissions;
            dependencyMap2[obj.id] = tmp9;
            let tmp14 = updateGuildVersion;
            let tmp15 = updateGuildVersion(obj.getGuildId());
            flag = true;
          }
        }
      }
      continue;
    }
    let tmp16 = flag;
    if (tmp16) {
      closure_22 = closure_22 + 1;
      tmp16 = flag;
    }
    return tmp16;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(messages) {
    messages = messages.messages;
    return messages.some((thread) => null != thread.thread);
  },
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_MEMBER_UPDATE: function handleThreadMemberUpdate(userId) {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let flag = id === userId.userId;
    if (flag) {
      const guildId = userId.guildId;
      flag = true;
      if (null != guildId) {
        let num = dependencyMap3[guildId];
        if (num == null) {
          num = 0;
        }
        dependencyMap3[guildId] = num + 1;
        flag = true;
        const tmp3 = dependencyMap3;
      }
    }
    return flag;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(guildId) {
    let flag = doesThreadMembersActionAffectMe.doesThreadMembersActionAffectMe(guildId);
    if (flag) {
      guildId = guildId.guildId;
      flag = true;
      if (null != guildId) {
        let num = dependencyMap3[guildId];
        if (num == null) {
          num = 0;
        }
        dependencyMap3[guildId] = num + 1;
        flag = true;
        const tmp2 = dependencyMap3;
      }
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    delete tmp2[tmp];
    closure_22 = closure_22 + 1;
    const guild_id = channel.channel.guild_id;
    if (null != guild_id) {
      let num = dependencyMap3[guild_id];
      if (num == null) {
        num = 0;
      }
      dependencyMap3[guild_id] = num + 1;
      const tmp3 = dependencyMap3;
    }
    return false;
  },
  GUILD_ROLE_CREATE: handleGuildRole,
  GUILD_ROLE_UPDATE: handleGuildRole,
  GUILD_ROLE_DELETE: handleGuildRole,
  LOGOUT: function resetState() {
    closure_20 = {};
    closure_19 = {};
    closure_21 = {};
    c22 = 0;
  },
  STAGE_INSTANCE_CREATE: handleStageInstancesChanged,
  STAGE_INSTANCE_UPDATE: handleStageInstancesChanged,
  STAGE_INSTANCE_DELETE: handleStageInstancesChanged,
  IMPERSONATE_UPDATE: handleImpersonateUpdate,
  IMPERSONATE_STOP: handleImpersonateUpdate
});
const result = require("set").fileFinishedImporting("stores/PermissionStore.tsx");

export default permissionStore;