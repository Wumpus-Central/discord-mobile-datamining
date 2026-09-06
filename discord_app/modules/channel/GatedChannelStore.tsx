// discord_app/modules/channel/GatedChannelStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import PremiumRoleUtils from "../guild_role_subscriptions/PremiumRoleUtils.tsx";
import RolePermissionUtils from "../guild_role_subscriptions/RolePermissionUtils.tsx";
import CreatorMonetizationRestrictionsUtils from "../creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function isSubscriptionGated(role) {
  role = role.role;
  ({ guildId, isPreviewingRoles } = role);
  let isSubscriptionRoleResult = PremiumRoleUtils.isSubscriptionRole(role);
  if (isSubscriptionRoleResult) {
    let tmp4 = isPreviewingRoles;
    if (!tmp4) {
      let result = PremiumRoleUtils.isSubscriptionRoleAvailableForPurchase(role);
      if (!result) {
        let flag = false;
        if (null != role) {
          const currentUser = UserStore.getCurrentUser();
          flag = false;
          if (null != currentUser) {
            const member = GuildMemberStore.getMember(guildId, currentUser.id);
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
      const tmpResult = PremiumRoleUtils;
    }
    isSubscriptionRoleResult = tmp4;
  }
  return isSubscriptionRoleResult;
}
function isChannelSubscriptionGatedInGuild(channel, guild) {
  const features = guild.features;
  if (!features.has(constants2.CREATOR_MONETIZABLE)) {
    const features2 = guild.features;
    if (!features2.has(constants2.CREATOR_MONETIZABLE_PROVISIONAL)) {
      return false;
    }
  }
  const isViewingServerShopResult = ImpersonateStore.isViewingServerShop(guild.id);
  const keys = Object.keys(channel.permissionOverwrites);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let obj = {
      guildId: guild.id,
      role: GuildRoleStore.getRole(guild.id, nextResult),
      isPreviewingRoles: isViewingServerShopResult,
    };
    if (isSubscriptionGated(obj)) {
      let obj2 = RolePermissionUtils;
      if (obj2.isChannelAccessGrantedBy(channel, channel.permissionOverwrites[tmp5])) {
        iter.return();
        let flag2 = true;
        return true;
      }
    }
    continue;
  }
  const tmp14 = hasPermission(GuildRoleStore.getEveryoneRole(guild), constants.VIEW_CHANNEL);
  if (!tmp14) {
    if (!obj4.isChannelAccessDeniedBy(channel, channel.permissionOverwrites[guild.id])) {
      const sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
      for (const item10077 of sortedRoles) {
        obj = { guildId: arg1.id, role: item10077, isPreviewingRoles: isViewingServerShopResult };
        if (isSubscriptionGated(obj)) {
          let obj7 = RolePermissionUtils;
          if (obj7.hasViewChannelPermission(item10077)) {
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
    const channel = ChannelStore.getChannel(id);
    if (null == channel) {
      return false;
    } else {
      const guild = GuildStore.getGuild(channel.getGuildId());
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
      channel = ChannelStore.getChannel(id);
      flag = false;
      if (null != channel) {
        const guild = GuildStore.getGuild(channel.getGuildId());
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
const THREAD_CHANNEL_TYPES = fn(1961).THREAD_CHANNEL_TYPES;
const hasPermission = fn(2016).hasPermission;
const Constants = fn(1074);
({ Permissions: c10, GuildFeatures: closure_11 } = Constants);
const dependencyMap = {};
let set = new Set();
const Store = initializeDefault.Store;
class GatedChannelStore extends Store {}
const prototype = GatedChannelStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildMemberStore, GuildRoleStore, GuildStore, ImpersonateStore, UserStore);
};
prototype["isChannelGated"] = function isChannelGated(guildId, channelId) {
  if (null == guildId) {
    return false;
  } else {
    let obj = dependencyMap[guildId];
    if (null == obj) {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const _Set = Set;
        set = new Set();
        dependencyMap[guildId] = set;
        const features = guild.features;
        if (features.has(constants2.ROLE_SUBSCRIPTIONS_ENABLED)) {
          const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(guildId);
          for (const key10008 in mutableGuildChannelsForGuild) {
            let tmp18 = mutableGuildChannelsForGuild[key10008];
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
prototype["isChannelGatedAndVisible"] = function isChannelGatedAndVisible(guild_id, id) {
  let tmp = null != guild_id;
  if (tmp) {
    const self = this;
    let isChannelGatedResult = this.isChannelGated(guild_id, id);
    if (isChannelGatedResult) {
      isChannelGatedResult = !set.has(guild_id);
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
      const channel = ChannelStore.getChannel(channel_id);
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
const gatedChannelStore = new GatedChannelStore(DispatcherDefault, {
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
      set.add(guildId);
    } else {
      set.delete(guildId);
    }
    obj = CreatorMonetizationRestrictionsUtils;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function handleRoleSubscriptionsRestrictionsFetchFailure(
    guildId,
  ) {
    set.add(guildId.guildId);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel/GatedChannelStore.tsx");

export default gatedChannelStore;
