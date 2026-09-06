// discord_app/stores/PermissionStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import GuildRecordUtils from "../utils/GuildRecordUtils.tsx";
import PermissionUtilsAll from "../utils/PermissionUtils.tsx";
import ThreadActionUtils from "../modules/threads/ThreadActionUtils.tsx";
import BasicPermissionUtilsDefault from "../utils/BasicPermissionUtils.tsx";
import ImpersonateStore from "../modules/impersonate/ImpersonateStore.tsx";
import LurkingStore from "../modules/lurker_mode/LurkingStore.tsx";
import StageInstanceStore from "../modules/stage_channels/StageInstanceStore.tsx";
import JoinedThreadsStore from "../modules/threads/JoinedThreadsStore.tsx";
import UserRecord from "../records/UserRecord.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";
import GuildStore from "GuildStore.tsx";
import UserStore from "UserStore.tsx";

require = fn;
function getUncachedChannelPermissions(id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = UserStore;
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return PermissionUtilsAll.NONE;
  } else {
    const channel = ChannelStore.getChannel(id);
    if (null == channel) {
      return PermissionUtilsAll.NONE;
    } else {
      const guildId = channel.getGuildId();
      let tmp7 = null != guildId;
      if (tmp7) {
        let isLurkingResult = LurkingStore.isLurking(guildId);
        if (!isLurkingResult) {
          const member = GuildMemberStore.getMember(guildId, currentUser.id);
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
                  NONE2 = PermissionUtilsAll.NONE;
                } else {
                  const guild = GuildStore.getGuild(guildId);
                  if (null == guild) {
                    let NONE = PermissionUtilsAll.NONE;
                  } else {
                    obj = { user: currentUser1, context: guild, checkElevated: true };
                    NONE = PermissionUtilsAll.computePermissions(obj);
                    dependencyMap[guildId] = NONE;
                  }
                  NONE2 = NONE;
                }
              }
            }
            return NONE2;
          }
          obj2 = _modDef12;
        }
      }
      obj = { user: currentUser, context: channel, checkElevated: flag };
      NONE2 = PermissionUtilsAll.computePermissions(obj);
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
  }
}
function handleConnectionOpen() {
  closure_19 = {};
  closure_20 = {};
  for (const key10005 in closure_21) {
    dependencyMap3[key10005] = dependencyMap3[key10005] + 1;
    continue;
  }
  closure_22 = closure_22 + 1;
}
function handleGuild() {
  closure_19 = {};
  closure_20 = {};
  for (const key10005 in closure_21) {
    dependencyMap3[key10005] = dependencyMap3[key10005] + 1;
    continue;
  }
  closure_22 = closure_22 + 1;
}
function handleGuildMemberUpdate(user) {
  const currentUser = UserStore.getCurrentUser();
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
  const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(guildId);
  const item = _modDef12.forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete tmp2[tmp];
  });
  closure_22 = closure_22 + 1;
  if (null != guildId) {
    let num = dependencyMap3[guildId];
    if (num == null) {
      num = 0;
    }
    dependencyMap3[guildId] = num + 1;
  }
}
function handleStageInstancesChanged(instance) {
  const channel = ChannelStore.getChannel(instance.instance.channel_id);
  if (null == channel) {
    return false;
  } else {
    const currentUser = UserStore.getCurrentUser();
    const obj = { user: currentUser, context: channel };
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
  const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(guildId);
  const item = _modDef12.forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete tmp2[tmp];
  });
  closure_22 = closure_22 + 1;
  if (null != guildId) {
    let num = dependencyMap3[guildId];
    if (num == null) {
      num = 0;
    }
    dependencyMap3[guildId] = num + 1;
  }
}
function computePermissions(context, overwrites, roles, excludeGuildPermissions) {
  let NONE = PermissionUtilsAll.NONE;
  if (context instanceof React6) {
    if (set.has(context.type)) {
      const channel = ChannelStore.getChannel(context.parent_id);
      if (null == channel) {
        let NONE4 = PermissionUtilsAll.NONE;
      } else {
        let tmpResult = PermissionUtilsAll;
        const tmp24 = computePermissions(channel, overwrites, roles, excludeGuildPermissions);
        NONE4 = tmpResult.applyThreadPermissions(
          context,
          tmp24,
          JoinedThreadsStore.hasJoined(context.id),
          GuildMemberStore.isCurrentUserGuest(context.guild_id),
        );
        const hasJoinedResult = JoinedThreadsStore.hasJoined(context.id);
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
    let obj = GuildRecordUtils;
    if (obj.isGuildRecord(context)) {
      const id = context.id;
      let NONE2 = dependencyMap[id];
      if (null == NONE2) {
        const currentUser = UserStore.getCurrentUser();
        if (null == currentUser) {
          NONE2 = PermissionUtilsAll.NONE;
        } else {
          const guild = GuildStore.getGuild(id);
          if (null == guild) {
            let NONE3 = PermissionUtilsAll.NONE;
          } else {
            tmpResult = PermissionUtilsAll;
            obj = { user: currentUser, context: guild, checkElevated: true };
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
  obj = { user: UserStore.getCurrentUser(), context, overwrites, roles, checkElevated: true, excludeGuildPermissions };
  NONE = PermissionUtilsAll.computePermissions(obj);
  const tmpResult1 = PermissionUtilsAll;
}
const ChannelRecord = fn(1961);
({ ChannelRecordBase: closure_8, THREAD_CHANNEL_TYPES: closure_9 } = ChannelRecord);
const GuildRecord = fn(1975);
({ isGuildOwner: c10, isGuildOwnerWithRequiredMfaLevel: closure_11 } = GuildRecord);
const Permissions = fn(1074).Permissions;
let closure_18 = fn(4203).MemberSafetyPagePermissions;
const dependencyMap = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
let closure_22 = 0;
const Store = initializeDefault.Store;
class PermissionStore extends Store {}
const prototype = PermissionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    ChannelStore,
    GuildMemberStore,
    GuildStore,
    ImpersonateStore,
    JoinedThreadsStore,
    LurkingStore,
    StageInstanceStore,
    UserStore,
  );
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
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      NONE = PermissionUtilsAll.NONE;
    } else {
      guild = GuildStore.getGuild(id);
      if (null == guild) {
        let NONE2 = PermissionUtilsAll.NONE;
      } else {
        const obj = { user: currentUser, context: guild, checkElevated: true };
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
  const currentUser = UserStore.getCurrentUser();
  const obj = {
    canManageGuild: this.can(Permissions.MANAGE_GUILD, guild),
    canManageChannels: this.can(Permissions.MANAGE_CHANNELS, guild),
    canManageRoles: this.can(Permissions.MANAGE_ROLES, guild),
    canManageBans: this.can(Permissions.BAN_MEMBERS, guild),
    canManageNicknames: this.can(Permissions.MANAGE_NICKNAMES, guild),
    canManageGuildExpressions:
      this.can(Permissions.MANAGE_GUILD_EXPRESSIONS, guild) || self.can(Permissions.CREATE_GUILD_EXPRESSIONS, guild),
    canViewAuditLog: self.can(Permissions.VIEW_AUDIT_LOG, guild),
    canViewAuditLogV2: self.can(Permissions.VIEW_AUDIT_LOG, guild),
    canManageWebhooks: self.can(Permissions.MANAGE_WEBHOOKS, guild),
    canViewGuildAnalytics: self.can(Permissions.VIEW_GUILD_ANALYTICS, guild),
    canAccessMembersPage: self.canAccessMemberSafetyPage(guild),
    isGuildAdmin: self.can(Permissions.ADMINISTRATOR, guild),
    isOwner: null,
    isOwnerWithRequiredMfaLevel: null,
    guild: null,
  };
  let tmp4 = null != currentUser;
  if (tmp4) {
    tmp4 = closure_1_10(guild, currentUser);
  }
  obj.isOwner = tmp4;
  let tmp6 = null != currentUser;
  if (tmp6) {
    tmp6 = closure_1_11(guild, currentUser);
  }
  obj.isOwnerWithRequiredMfaLevel = tmp6;
  obj.guild = guild;
  return obj;
};
prototype["canAccessMemberSafetyPage"] = function canAccessMemberSafetyPage(id) {
  let obj = BigFlagUtilsAll;
  id = id.id;
  let NONE = dependencyMap[id];
  if (null == NONE) {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      NONE = PermissionUtilsAll.NONE;
    } else {
      const guild = GuildStore.getGuild(id);
      if (null == guild) {
        let NONE2 = PermissionUtilsAll.NONE;
      } else {
        obj = { user: currentUser, context: guild, checkElevated: true };
        NONE2 = PermissionUtilsAll.computePermissions(obj);
        dependencyMap[id] = NONE2;
        const tmpResult = PermissionUtilsAll;
      }
      NONE = NONE2;
    }
  }
  return obj.hasAny(NONE, closure_18);
};
prototype["canAccessGuildSettings"] = function canAccessGuildSettings(guild) {
  let obj = BigFlagUtilsAll;
  const id = guild.id;
  let NONE = dependencyMap[id];
  if (null == NONE) {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      NONE = PermissionUtilsAll.NONE;
    } else {
      guild = GuildStore.getGuild(id);
      if (null == guild) {
        let NONE2 = PermissionUtilsAll.NONE;
      } else {
        obj = { user: currentUser, context: guild, checkElevated: true };
        NONE2 = PermissionUtilsAll.computePermissions(obj);
        dependencyMap[id] = NONE2;
        const tmpResult = PermissionUtilsAll;
      }
      NONE = NONE2;
    }
  }
  return obj.hasAny(NONE, PermissionUtilsAll.VIEW_GUILD_SETTINGS);
};
prototype["canWithPartialContext"] = function canWithPartialContext(MANAGE_MESSAGES, channelId) {
  const self = this;
  if ("channelId" in channelId) {
    if (typeof channelId.channelId === "string") {
      let canResult = self.can(MANAGE_MESSAGES, ChannelStore.getChannel(channelId.channelId));
    }
    return canResult;
  }
  canResult = "guildId" in channelId && typeof channelId.guildId === "string";
  if (canResult) {
    canResult = self.can(MANAGE_MESSAGES, GuildStore.getGuild(channelId.guildId));
  }
};
prototype["can"] = function can(VIEW_CHANNEL, arg1, arg2, arg3, arg4) {
  const tmp = computePermissions(arg1, arg2, arg3, arg4);
  return BigFlagUtilsAll.has(tmp, VIEW_CHANNEL);
};
prototype["canBasicChannel"] = function canBasicChannel(VIEW_CHANNEL, basicChannel, arg2, arg3, arg4) {
  if ("basicPermissions" in basicChannel) {
    let hasItem = BasicPermissionUtilsDefault.has(basicChannel.basicPermissions, VIEW_CHANNEL);
  } else {
    const obj = BigFlagUtilsAll;
    const tmp8 = computePermissions(basicChannel, arg2, arg3, arg4);
    hasItem = obj.has(tmp8, BasicPermissionUtilsDefault.asBigFlag(VIEW_CHANNEL));
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
    basicPermissions = BasicPermissionUtilsDefault.asBasicFlag(computePermissions(basicChannel));
  }
  return basicPermissions;
};
prototype["canManageUser"] = function canManageUser(BAN_MEMBERS, user, stateFromStores) {
  let id = user;
  if (user instanceof UserRecord) {
    id = user.id;
  }
  if (closure_1_10(stateFromStores, id)) {
    return false;
  } else {
    const self = this;
    const currentUser = UserStore.getCurrentUser();
    if (this.can(BAN_MEMBERS, stateFromStores)) {
      if (null != currentUser) {
        const highestRole = PermissionUtilsAll.getHighestRole(stateFromStores, currentUser.id);
      }
      const highestRole1 = PermissionUtilsAll.getHighestRole(stateFromStores, id);
      let isRoleHigherResult = null != currentUser;
      if (isRoleHigherResult) {
        const tmp8Result = PermissionUtilsAll;
        isRoleHigherResult = tmp8Result.isRoleHigher(stateFromStores, currentUser.id, highestRole, highestRole1);
      }
      return isRoleHigherResult;
    } else {
      return false;
    }
  }
};
prototype["getHighestRole"] = function getHighestRole(guild) {
  const currentUser = UserStore.getCurrentUser();
  let highestRole = null;
  if (null != currentUser) {
    highestRole = PermissionUtilsAll.getHighestRole(guild, currentUser.id);
  }
  return highestRole;
};
prototype["isRoleHigher"] = function isRoleHigher(id, highestRole, role) {
  const currentUser = UserStore.getCurrentUser();
  const isViewingRolesResult = ImpersonateStore.isViewingRoles(id.id);
  let tmp3;
  if (!isViewingRolesResult) {
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp3 = id;
  }
  return PermissionUtilsAll.isRoleHigher(id, tmp3, highestRole, role);
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
  return closure_22;
};
PermissionStore.displayName = "PermissionStore";
const permissionStore = new PermissionStore(DispatcherDefault, {
  BACKGROUND_SYNC: handleConnectionOpen,
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: handleConnectionOpen,
  CACHE_LOADED_LAZY: handleConnectionOpen,
  CONNECTION_CLOSED: function handleConnectionClose() {
    closure_20 = {};
    closure_19 = {};
    closure_21 = {};
    closure_22 = 0;
  },
  GUILD_CREATE: handleGuild,
  GUILD_UPDATE: handleGuild,
  GUILD_DELETE: handleGuild,
  GUILD_MEMBER_ADD: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  CURRENT_USER_UPDATE: handleGuildMemberUpdate,
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = ChannelStore.getChannel(channel.channel.id);
    if (null != channel) {
      if (!channel.isPrivate()) {
        const currentUser = UserStore.getCurrentUser();
        const obj = { user: currentUser, context: channel };
        const permissions = PermissionUtilsAll.computePermissions(obj);
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
          }
        }
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
      let channel = ChannelStore.getChannel(iter.next().id);
      let obj = channel;
      if (null != channel) {
        if (!obj.isPrivate()) {
          let currentUser = UserStore.getCurrentUser();
          let obj2 = PermissionUtilsAll;
          obj = { user: currentUser, context: null };
          obj.context = obj;
          let permissions = obj2.computePermissions(obj);
          if (dependencyMap2[obj.id] !== permissions) {
            dependencyMap2[obj.id] = tmp9;
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
    const currentUser = UserStore.getCurrentUser();
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
      }
    }
    return flag;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(guildId) {
    let flag = ThreadActionUtils.doesThreadMembersActionAffectMe(guildId);
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
    closure_22 = 0;
  },
  STAGE_INSTANCE_CREATE: handleStageInstancesChanged,
  STAGE_INSTANCE_UPDATE: handleStageInstancesChanged,
  STAGE_INSTANCE_DELETE: handleStageInstancesChanged,
  IMPERSONATE_UPDATE: handleImpersonateUpdate,
  IMPERSONATE_STOP: handleImpersonateUpdate,
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/PermissionStore.tsx");

export default permissionStore;
