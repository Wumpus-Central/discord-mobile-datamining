// === Module 4509: PermissionStore ===

// Module 4509 (PermissionStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import MemberSafetyConstants from "MemberSafetyConstants" /* 4513 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import ThreadActionUtils from "ThreadActionUtils" /* 4517 */;
import BasicPermissionUtilsDefault from "BasicPermissionUtils" /* 4518 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import LurkingStore from "LurkingStore" /* 4510 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import UserRecord from "UserRecord" /* 1391 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
function getUncachedChannelPermissions(id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
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
          const obj2 = _modDef12;
          if (obj2.isEmpty(channel.permissionOverwrites)) {
            let NONE2;
            if (null != guildId) {
              NONE2 = closure_19[guildId];
              if (null == NONE2) {
                const currentUser1 = UserStore.getCurrentUser();
                if (null == currentUser1) {
                  NONE2 = PermissionUtilsAll.NONE;
                } else {
                  let NONE;
                  const guild = GuildStore.getGuild(guildId);
                  if (null == guild) {
                    NONE = PermissionUtilsAll.NONE;
                  } else {
                    const obj4 = { user: currentUser1, context: guild, checkElevated: true };
                    const obj3 = PermissionUtilsAll;
                    NONE = obj3.computePermissions(obj4);
                    closure_19[guildId] = NONE;
                  }
                  NONE2 = NONE;
                }
              }
            }
            return NONE2;
          }
        }
      }
      const obj6 = { user: currentUser, context: channel, checkElevated: flag };
      const obj5 = PermissionUtilsAll;
      NONE2 = obj5.computePermissions(obj6);
    }
  }
}
function updateGuildVersion(guildId) {
  if (null != guildId) {
    let num = closure_21[guildId];
    if (num == null) {
      num = 0;
    }
    closure_21[guildId] = num + 1;
  }
}
function handleConnectionOpen() {
  closure_19 = {};
  closure_20 = {};
  for (const key10005 in closure_21) {
    closure_21[key10005] = closure_21[key10005] + 1;
    continue;
  }
  closure_22 = closure_22 + 1;
}
function handleGuild() {
  closure_19 = {};
  closure_20 = {};
  for (const key10005 in closure_21) {
    closure_21[key10005] = closure_21[key10005] + 1;
    continue;
  }
  closure_22 = closure_22 + 1;
}
function handleGuildMemberUpdate(user) {
  const id = user.user.id;
  const currentUser = UserStore.getCurrentUser();
  let id1;
  if (currentUser != null) {
    id1 = currentUser.id;
  }
  if (id !== id1) {
    return false;
  } else {
    closure_19 = {};
    closure_20 = {};
    for (const key10015 in closure_21) {
      closure_21[key10015] = closure_21[key10015] + 1;
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
    const someResult = messages.threads.length > 0 || messages.some((arr) => arr.some((thread) => null != thread.thread));
    return someResult;
  });
}
function handleGuildRole(guildId) {
  guildId = guildId.guildId;
  delete closure_19[guildId];
  const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(guildId);
  const arr = _modDef12;
  const item = arr.forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete closure_1_20[arg0.id];
  });
  closure_22 = closure_22 + 1;
  if (null != guildId) {
    let num = closure_21[guildId];
    if (num == null) {
      num = 0;
    }
    closure_21[guildId] = num + 1;
  }
}
function handleStageInstancesChanged(instance) {
  const channel = ChannelStore.getChannel(instance.instance.channel_id);
  if (null == channel) {
    return false;
  } else {
    const currentUser = UserStore.getCurrentUser();
    const obj2 = { user: currentUser, context: channel };
    const obj = PermissionUtilsAll;
    const permissions = obj.computePermissions(obj2);
    if (permissions === closure_20[channel.id]) {
      return false;
    } else {
      closure_20[channel.id] = permissions;
      closure_22 = closure_22 + 1;
    }
  }
}
function handleImpersonateUpdate(guildId) {
  guildId = guildId.guildId;
  delete closure_19[guildId];
  const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(guildId);
  const arr = _modDef12;
  const item = arr.forEach(mutableBasicGuildChannelsForGuild, (arg0) => {
    delete closure_1_20[arg0.id];
  });
  closure_22 = closure_22 + 1;
  if (null != guildId) {
    let num = closure_21[guildId];
    if (num == null) {
      num = 0;
    }
    closure_21[guildId] = num + 1;
  }
}
function computePermissions(context, overwrites, roles, excludeGuildPermissions) {
  let NONE = PermissionUtilsAll.NONE;
  if (context instanceof metroImportAll) {
    if (set.has(context.type)) {
      let NONE4;
      const channel = ChannelStore.getChannel(context.parent_id);
      if (null == channel) {
        NONE4 = PermissionUtilsAll.NONE;
      } else {
        const applyThreadPermissions = PermissionUtilsAll.applyThreadPermissions;
        const tmpResult = PermissionUtilsAll;
        const tmp25 = computePermissions(channel, overwrites, roles, excludeGuildPermissions);
        const hasJoinedResult = JoinedThreadsStore.hasJoined(context.id);
        NONE4 = applyThreadPermissions(context, tmp25, hasJoinedResult, GuildMemberStore.isCurrentUserGuest(context.guild_id));
      }
      return NONE4;
    } else {
      const id2 = context.id;
      let tmp11 = closure_20[id2];
      if (null == tmp11) {
        const tmp15 = getUncachedChannelPermissions(id2, true);
        closure_20[id2] = tmp15;
        tmp11 = tmp15;
      }
      NONE = tmp11;
    }
  } else {
    const obj = GuildRecordUtils;
    if (obj.isGuildRecord(context)) {
      const id = context.id;
      let NONE2 = closure_19[id];
      if (null == NONE2) {
        const currentUser = UserStore.getCurrentUser();
        if (null == currentUser) {
          NONE2 = PermissionUtilsAll.NONE;
        } else {
          let NONE3;
          const guild = GuildStore.getGuild(id);
          if (null == guild) {
            NONE3 = PermissionUtilsAll.NONE;
          } else {
            const obj2 = { user: currentUser, context: guild, checkElevated: true };
            const tmpResult3 = PermissionUtilsAll;
            NONE3 = tmpResult3.computePermissions(obj2);
            closure_19[id] = NONE3;
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
  const tmpResult4 = PermissionUtilsAll;
  const obj3 = { user: UserStore.getCurrentUser(), context, overwrites, roles, checkElevated: true, excludeGuildPermissions };
  NONE = tmpResult4.computePermissions(obj3);
}
({ ChannelRecordBase: metroImportAll, THREAD_CHANNEL_TYPES: c9 } = ChannelRecord);
({ isGuildOwner: c10, isGuildOwnerWithRequiredMfaLevel: unpackModuleId } = GuildRecord);
const Permissions = Constants.Permissions;
let closure_18 = MemberSafetyConstants.MemberSafetyPagePermissions;
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = 0;
const Store = get_initializedDefault.Store;
class PermissionStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildMemberStore, GuildStore, ImpersonateStore, JoinedThreadsStore, LurkingStore, StageInstanceStore, UserStore);
  }
  getChannelPermissions(type) {
    let tmp2;
    if (set.has(type.type)) {
      tmp2 = getUncachedChannelPermissions(type.id);
    } else {
      const id = type.id;
      tmp2 = closure_20[id];
      if (null == tmp2) {
        const tmp6 = getUncachedChannelPermissions(id, true);
        closure_20[id] = tmp6;
        tmp2 = tmp6;
      }
    }
    return tmp2;
  }
  getGuildPermissions(guild) {
    const id = guild.id;
    let NONE = closure_19[id];
    if (null == NONE) {
      const currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        NONE = PermissionUtilsAll.NONE;
      } else {
        let NONE2;
        guild = GuildStore.getGuild(id);
        if (null == guild) {
          NONE2 = PermissionUtilsAll.NONE;
        } else {
          const obj2 = { user: currentUser, context: guild, checkElevated: true };
          const obj = PermissionUtilsAll;
          NONE2 = obj.computePermissions(obj2);
          closure_19[id] = NONE2;
        }
        NONE = NONE2;
      }
    }
    return NONE;
  }
  getGuildPermissionProps(guild) {
    let tmp4;
    let tmp6;
    const self = this;
    const currentUser = UserStore.getCurrentUser();
    const obj = { canManageGuild: this.can(Permissions.MANAGE_GUILD, guild), canManageChannels: this.can(Permissions.MANAGE_CHANNELS, guild), canManageRoles: this.can(Permissions.MANAGE_ROLES, guild), canManageBans: this.can(Permissions.BAN_MEMBERS, guild), canManageNicknames: this.can(Permissions.MANAGE_NICKNAMES, guild), canManageGuildExpressions: this.can(Permissions.MANAGE_GUILD_EXPRESSIONS, guild) || self.can(Permissions.CREATE_GUILD_EXPRESSIONS, guild), canViewAuditLog: self.can(Permissions.VIEW_AUDIT_LOG, guild), canViewAuditLogV2: self.can(Permissions.VIEW_AUDIT_LOG, guild), canManageWebhooks: self.can(Permissions.MANAGE_WEBHOOKS, guild), canViewGuildAnalytics: self.can(Permissions.VIEW_GUILD_ANALYTICS, guild), canAccessMembersPage: self.canAccessMemberSafetyPage(guild), isGuildAdmin: self.can(Permissions.ADMINISTRATOR, guild), isOwner: tmp4, isOwnerWithRequiredMfaLevel: tmp6, guild };
    this.can(Permissions.MANAGE_GUILD_EXPRESSIONS, guild) || self.can(Permissions.CREATE_GUILD_EXPRESSIONS, guild);
    tmp4 = null != currentUser && authStore(guild, currentUser);
    tmp6 = null != currentUser && unpackModuleId(guild, currentUser);
    return obj;
  }
  canAccessMemberSafetyPage(id) {
    id = id.id;
    let NONE = closure_19[id];
    const hasAny = BigFlagUtilsAll.hasAny;
    BigFlagUtilsAll;
    if (null == NONE) {
      const currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        NONE = PermissionUtilsAll.NONE;
      } else {
        let NONE2;
        const guild = GuildStore.getGuild(id);
        if (null == guild) {
          NONE2 = PermissionUtilsAll.NONE;
        } else {
          const obj = { user: currentUser, context: guild, checkElevated: true };
          const tmpResult = PermissionUtilsAll;
          NONE2 = tmpResult.computePermissions(obj);
          closure_19[id] = NONE2;
        }
        NONE = NONE2;
      }
    }
    return hasAny(NONE, closure_18);
  }
  canAccessGuildSettings(guild) {
    const id = guild.id;
    let NONE = closure_19[id];
    const hasAny = BigFlagUtilsAll.hasAny;
    BigFlagUtilsAll;
    if (null == NONE) {
      const currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        NONE = PermissionUtilsAll.NONE;
      } else {
        let NONE2;
        guild = GuildStore.getGuild(id);
        if (null == guild) {
          NONE2 = PermissionUtilsAll.NONE;
        } else {
          const obj = { user: currentUser, context: guild, checkElevated: true };
          const tmpResult = PermissionUtilsAll;
          NONE2 = tmpResult.computePermissions(obj);
          closure_19[id] = NONE2;
        }
        NONE = NONE2;
      }
    }
    return hasAny(NONE, PermissionUtilsAll.VIEW_GUILD_SETTINGS);
  }
  canWithPartialContext(MANAGE_CHANNELS, channelId) {
    const self = this;
    if ("channelId" in channelId) {
      let canResult;
      if (typeof channelId.channelId === "string") {
        canResult = self.can(MANAGE_CHANNELS, ChannelStore.getChannel(channelId.channelId));
      }
      return canResult;
    }
    canResult = "guildId" in channelId && typeof channelId.guildId === "string" && self.can(MANAGE_CHANNELS, GuildStore.getGuild(channelId.guildId));
  }
  can(VIEW_CHANNEL, arg1, arg2, arg3, arg4) {
    const tmp = computePermissions(arg1, arg2, arg3, arg4);
    const obj = BigFlagUtilsAll;
    return obj.has(tmp, VIEW_CHANNEL);
  }
  canBasicChannel(VIEW_CHANNEL, basicChannel, arg2, arg3, arg4) {
    let hasItem;
    if ("basicPermissions" in basicChannel) {
      const obj2 = BasicPermissionUtilsDefault;
      hasItem = obj2.has(basicChannel.basicPermissions, VIEW_CHANNEL);
    } else {
      const has = BigFlagUtilsAll.has;
      BigFlagUtilsAll;
      const tmp9 = computePermissions(basicChannel, arg2, arg3, arg4);
      const obj = BasicPermissionUtilsDefault;
      hasItem = has(tmp9, obj.asBigFlag(VIEW_CHANNEL));
    }
    return hasItem;
  }
  computePermissions(arg0, arg1, arg2, arg3) {
    return computePermissions(arg0, arg1, arg2, arg3);
  }
  computeBasicPermissions(basicChannel) {
    let basicPermissions;
    if ("basicPermissions" in basicChannel) {
      basicPermissions = basicChannel.basicPermissions;
    } else {
      const obj = BasicPermissionUtilsDefault;
      basicPermissions = obj.asBasicFlag(computePermissions(basicChannel));
    }
    return basicPermissions;
  }
  canManageUser(BAN_MEMBERS, user, stateFromStores) {
    let id = user;
    if (user instanceof UserRecord) {
      id = user.id;
    }
    if (authStore(stateFromStores, id)) {
      return false;
    } else {
      const self = this;
      const currentUser = UserStore.getCurrentUser();
      if (this.can(BAN_MEMBERS, stateFromStores)) {
        let highestRole;
        if (null != currentUser) {
          const obj = PermissionUtilsAll;
          highestRole = obj.getHighestRole(stateFromStores, currentUser.id);
        }
        const obj2 = PermissionUtilsAll;
        const highestRole1 = obj2.getHighestRole(stateFromStores, id);
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
  }
  getHighestRole(guild) {
    const currentUser = UserStore.getCurrentUser();
    let highestRole = null;
    if (null != currentUser) {
      const obj = PermissionUtilsAll;
      highestRole = obj.getHighestRole(guild, currentUser.id);
    }
    return highestRole;
  }
  isRoleHigher(id, arg1, arg2) {
    const currentUser = UserStore.getCurrentUser();
    let tmp4;
    const isViewingRolesResult = ImpersonateStore.isViewingRoles(id.id);
    const isRoleHigher = PermissionUtilsAll.isRoleHigher;
    PermissionUtilsAll;
    if (!isViewingRolesResult) {
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp4 = id;
    }
    return isRoleHigher(id, tmp4, arg1, arg2);
  }
  canImpersonateRole(arg0, id) {
    const self = this;
    const highestRole = this.getHighestRole(arg0);
    let tmp3 = this.can(Permissions.MANAGE_GUILD, arg0) && self.can(Permissions.MANAGE_ROLES, arg0);
    let isRoleHigherResult = self.isRoleHigher(arg0, highestRole, id);
    if (tmp3) {
      if (!isRoleHigherResult) {
        let id1;
        id = id.id;
        if (highestRole != null) {
          id1 = highestRole.id;
        }
        isRoleHigherResult = id === id1;
      }
      tmp3 = isRoleHigherResult;
    }
    return tmp3;
  }
  getGuildVersion(arg0) {
    let num = closure_21[arg0];
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getChannelsVersion() {
    return closure_22;
  }
}
const prototype = PermissionStore.prototype;
PermissionStore.displayName = "PermissionStore";
let obj = {
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
        const obj2 = PermissionUtilsAll;
        const permissions = obj2.computePermissions(obj);
        if (closure_20[channel.id] === permissions) {
          return false;
        } else {
          closure_20[channel.id] = permissions;
          closure_22 = closure_22 + 1;
          const guildId = channel.getGuildId();
          if (null != guildId) {
            let num2 = closure_21[guildId];
            if (num2 == null) {
              num2 = 0;
            }
            closure_21[guildId] = num2 + 1;
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
          let obj3 = { user: currentUser, context: obj };
          let permissions = obj2.computePermissions(obj3);
          if (closure_20[obj.id] !== permissions) {
            closure_20[obj.id] = tmp9;
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
        let num = closure_21[guildId];
        if (num == null) {
          num = 0;
        }
        closure_21[guildId] = num + 1;
        flag = true;
      }
    }
    return flag;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(guildId) {
    const obj = ThreadActionUtils;
    let flag = obj.doesThreadMembersActionAffectMe(guildId);
    if (flag) {
      guildId = guildId.guildId;
      flag = true;
      if (null != guildId) {
        let num = closure_21[guildId];
        if (num == null) {
          num = 0;
        }
        closure_21[guildId] = num + 1;
        flag = true;
      }
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    delete closure_20[channel.id];
    closure_22 = closure_22 + 1;
    const guild_id = channel.guild_id;
    if (null != guild_id) {
      let num = closure_21[guild_id];
      if (num == null) {
        num = 0;
      }
      closure_21[guild_id] = num + 1;
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
  IMPERSONATE_STOP: handleImpersonateUpdate
};
const permissionStore = new PermissionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/PermissionStore.tsx");

export default permissionStore;