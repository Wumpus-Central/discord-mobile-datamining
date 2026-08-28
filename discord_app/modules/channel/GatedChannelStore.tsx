// === Module 1984: isSubscriptionGated ===

// Module 1984 (isSubscriptionGated)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isSubscriptionRole from "isSubscriptionRole" /* 4081 */;
import hasViewChannelPermission from "hasViewChannelPermission" /* 4082 */;
import closure_2 from "initialize" /* 1985 */;
import { THREAD_CHANNEL_TYPES } from "createChannelRecord" /* 1395 */;
import { hasPermission } from "GuildRoleRecordTypeTag" /* 1987 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "trackCommunicationDisabled" /* 1993 */;
import closure_7 from "createGuildRoleRecordFromRust" /* 1986 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;
import closure_9 from "mergeGuildAvatar" /* 1923 */;
import ME from "ME" /* 676 */;
import set from "set" /* 2 */;

require = arg1;
function isSubscriptionGated(role) {
  role = role.role;
  ({ guildId, isPreviewingRoles } = role);
  let isSubscriptionRoleResult = isSubscriptionRole.isSubscriptionRole(role);
  if (isSubscriptionRoleResult) {
    let tmp4 = isPreviewingRoles;
    if (!tmp4) {
      let result = isSubscriptionRole.isSubscriptionRoleAvailableForPurchase(role);
      if (!result) {
        let flag = false;
        if (null != role) {
          currentUser = currentUser.getCurrentUser();
          flag = false;
          if (null != currentUser) {
            member = member.getMember(guildId, currentUser.id);
            let hasItem = null != member;
            if (hasItem) {
              const roles = member.roles;
              hasItem = roles.includes(role.id);
            }
            flag = hasItem;
          }
        }
        result = flag;
      }
      tmp4 = result;
      const tmp6 = role;
      const tmpResult = isSubscriptionRole;
    }
    isSubscriptionRoleResult = tmp4;
  }
  return isSubscriptionRoleResult;
}
function isChannelSubscriptionGatedInGuild(channel, guild) {
  const features = guild.features;
  if (!features.has(constants2.CREATOR_MONETIZABLE)) {
    const features2 = guild.features;
    if (!features2.has(tmp.CREATOR_MONETIZABLE_PROVISIONAL)) {
      return false;
    }
  }
  const isViewingServerShopResult = viewingServerShop.isViewingServerShop(guild.id);
  const keys = Object.keys(channel.permissionOverwrites);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp6 = store2;
    let tmp7 = store2;
    let tmp5 = nextResult;
    let tmp8 = isSubscriptionGated;
    let obj = { guildId: null, role: null, isPreviewingRoles: null };
    obj[0] = guild.id;
    obj[1] = store2.getRole(guild.id, nextResult);
    obj[2] = isViewingServerShopResult;
    if (isSubscriptionGated(obj)) {
      let tmp9 = nextResult;
      let tmp10 = require;
      let tmp11 = dependencyMap;
      let obj2 = hasViewChannelPermission;
      if (obj2.isChannelAccessGrantedBy(channel, channel.permissionOverwrites[tmp5])) {
        let tmp12 = iter;
        iter.return();
        let flag2 = true;
        return true;
      }
    }
    continue;
  }
  const obj3 = store2;
  tmp = constants2;
  const tmp13 = store2;
  const tmp14 = hasPermission(store2.getEveryoneRole(guild), constants.VIEW_CHANNEL);
  if (!tmp14) {
    if (!obj4.isChannelAccessDeniedBy(channel, channel.permissionOverwrites[guild.id])) {
      const sortedRoles = obj3.getSortedRoles(guild.id);
      for (const item10077 of sortedRoles) {
        let tmp20 = isSubscriptionGated;
        obj = { guildId: null, role: null, isPreviewingRoles: null };
        obj[0] = arg1.id;
        obj[1] = item10077;
        obj[2] = isViewingServerShopResult;
        let tmp19 = item10077;
        if (isSubscriptionGated(obj)) {
          let tmp21 = require;
          let tmp22 = dependencyMap;
          let obj7 = hasViewChannelPermission;
          let tmp23 = item10077;
          if (obj7.hasViewChannelPermission(tmp19)) {
            let tmp24 = obj5;
            obj5.return();
            let flag3 = true;
            return true;
          }
        }
        continue;
      }
    }
  }
  return false;
}
function computeForChannel(guild_id, id) {
  if (null == dependencyMap[guild_id]) {
    return false;
  } else {
    const channel = store.getChannel(id);
    if (null == channel) {
      return false;
    } else {
      const guild = store3.getGuild(channel.getGuildId());
      if (null == guild) {
        return false;
      } else {
        const hasItem = obj.has(id);
        const tmp7 = isChannelSubscriptionGatedInGuild(channel, guild);
        let flag = hasItem !== tmp7;
        if (flag) {
          if (tmp7) {
            obj.add(id);
            flag = true;
          } else {
            obj.delete(id);
            flag = true;
          }
        }
        return flag;
      }
    }
  }
}
function handleInitialize() {
  closure_12 = {};
  set.clear();
}
function handleGuildUpdate(arg0) {
  delete tmp2[tmp];
}
function handleGuildRoleUpdate(arg0) {
  delete tmp[tmp2];
}
function handleChannelUpdate(channel) {
  channel = channel.channel;
  let tmp = null != channel.guild_id;
  if (tmp) {
    const id = channel.id;
    let flag = false;
    if (null != dependencyMap[channel.guild_id]) {
      channel = store.getChannel(id);
      flag = false;
      if (null != channel) {
        const guild = store3.getGuild(channel.getGuildId());
        flag = false;
        if (null != guild) {
          const hasItem = obj.has(id);
          const tmp8 = isChannelSubscriptionGatedInGuild(channel, guild);
          let flag2 = hasItem !== tmp8;
          if (flag2) {
            if (!tmp8) {
              obj.delete(id);
              flag2 = true;
            }
          }
          obj.add(id);
          flag2 = true;
        }
      }
    }
    tmp = flag;
  }
  return tmp;
}
({ Permissions: c10, GuildFeatures: unpackModuleId } = ME);
let closure_12 = {};
let set = new Set();
const Store = initializeDefault.Store;
class GatedChannelStore extends Store {
}
const prototype = GatedChannelStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5, closure_6, closure_7, closure_8, closure_2, closure_9);
};
prototype["isChannelGated"] = function isChannelGated(guildId, channelId) {
  if (null == guildId) {
    return false;
  } else {
    let obj = dependencyMap[guildId];
    if (null == obj) {
      const guild = store3.getGuild(guildId);
      if (null != guild) {
        const _Set = Set;
        set = new Set();
        dependencyMap[guildId] = set;
        const features = guild.features;
        if (features.has(constants2.ROLE_SUBSCRIPTIONS_ENABLED)) {
          const mutableGuildChannelsForGuild = store.getMutableGuildChannelsForGuild(guildId);
          for (const key10008 in mutableGuildChannelsForGuild) {
            let tmp17 = key10008;
            let tmp18 = mutableGuildChannelsForGuild[key10008];
            let tmp19 = isChannelSubscriptionGatedInGuild;
            if (!isChannelSubscriptionGatedInGuild(tmp18, guild)) {
              continue;
            } else {
              let addResult = set.add(tmp18.id);
              continue;
            }
            continue;
          }
        }
      }
      obj = dependencyMap[guildId];
    }
    let hasItem = null != obj;
    if (hasItem) {
      hasItem = obj.has(channelId);
    }
    return hasItem;
  }
};
prototype["isChannelGatedAndVisible"] = function isChannelGatedAndVisible(c0, id) {
  let tmp = null != c0;
  if (tmp) {
    const self = this;
    let isChannelGatedResult = this.isChannelGated(c0, id);
    if (isChannelGatedResult) {
      isChannelGatedResult = !set.has(c0);
    }
    tmp = isChannelGatedResult;
  }
  return tmp;
};
prototype["isChannelOrThreadParentGated"] = function isChannelOrThreadParentGated(guild_id, channel_id) {
  if (null == guild_id) {
    return false;
  } else {
    const self = this;
    if (this.isChannelGated(guild_id, channel_id)) {
      return true;
    } else {
      const channel = store.getChannel(channel_id);
      let tmp4 = null == channel || null == channel.parent_id;
      if (!tmp4) {
        let type;
        if (channel != null) {
          type = channel.type;
        }
        tmp4 = !THREAD_CHANNEL_TYPES.has(type);
      }
      let result = !tmp4;
      if (!tmp4) {
        result = self.isChannelOrThreadParentGated(guild_id, channel.parent_id);
      }
      return result;
    }
  }
};
GatedChannelStore.displayName = "GatedChannelStore";
const gatedChannelStore = new GatedChannelStore(dispatcherDefault, {
  CONNECTION_OPEN: handleInitialize,
  OVERLAY_INITIALIZE: handleInitialize,
  CACHE_LOADED_LAZY: handleInitialize,
  GUILD_CREATE: handleGuildUpdate,
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_DELETE: handleGuildUpdate,
  GUILD_ROLE_CREATE: handleGuildRoleUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleUpdate,
  GUILD_ROLE_DELETE: handleGuildRoleUpdate,
  IMPERSONATE_UPDATE: handleGuildRoleUpdate,
  IMPERSONATE_STOP: handleGuildRoleUpdate,
  CHANNEL_CREATE: handleChannelUpdate,
  CHANNEL_DELETE: handleChannelUpdate,
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = null != nextResult.guild_id;
      if (tmp3) {
        let tmp4 = computeForChannel;
        let tmp5 = nextResult;
        tmp3 = computeForChannel(tmp2.guild_id, tmp2.id);
      }
      if (tmp3) {
        flag = true;
      }
      continue;
    }
    return flag;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function handleRoleSubscriptionsRestrictionsUpdate(guildId) {
    guildId = guildId.guildId;
    if (obj.isRestrictedFromShowingGuildPurchaseEntryPoints(guildId.restrictions)) {
      obj2.add(guildId);
    } else {
      obj2.delete(guildId);
    }
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function handleRoleSubscriptionsRestrictionsFetchFailure(guildId) {
    set.add(guildId.guildId);
  }
});
let result = set.fileFinishedImporting("modules/channel/GatedChannelStore.tsx");

export default gatedChannelStore;