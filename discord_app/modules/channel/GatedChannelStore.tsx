// === Module 2104: GatedChannelStore ===

// Module 2104 (GatedChannelStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2107 */;
import PremiumRoleUtils from "PremiumRoleUtils" /* 4505 */;
import RolePermissionUtils from "RolePermissionUtils" /* 4506 */;
import CreatorMonetizationRestrictionsUtils from "CreatorMonetizationRestrictionsUtils" /* 4507 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c10;
let unpackModuleId;
function isSubscriptionGated(role) {
  let guildId;
  let isPreviewingRoles;
  role = role.role;
  ({ guildId, isPreviewingRoles } = role);
  const obj = PremiumRoleUtils;
  let isSubscriptionRoleResult = obj.isSubscriptionRole(role);
  if (isSubscriptionRoleResult) {
    let tmp4 = isPreviewingRoles;
    if (!tmp4) {
      const isSubscriptionRoleAvailableForPurchase = PremiumRoleUtils.isSubscriptionRoleAvailableForPurchase;
      PremiumRoleUtils;
      let result = isSubscriptionRoleAvailableForPurchase(role);
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
    }
    isSubscriptionRoleResult = tmp4;
  }
  return isSubscriptionRoleResult;
}
function isChannelSubscriptionGatedInGuild(channel, guild) {
  const features = guild.features;
  if (!features.has(unpackModuleId.CREATOR_MONETIZABLE)) {
    const features2 = guild.features;
    if (!features2.has(unpackModuleId.CREATOR_MONETIZABLE_PROVISIONAL)) {
      return false;
    }
  }
  const isViewingServerShopResult = ImpersonateStore.isViewingServerShop(guild.id);
  const keys = Object.keys(channel.permissionOverwrites);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let obj = { guildId: guild.id, role: GuildRoleStore.getRole(guild.id, nextResult), isPreviewingRoles: isViewingServerShopResult };
    if (isSubscriptionGated(obj)) {
      let tmp10 = channel.permissionOverwrites[tmp5];
      let obj2 = RolePermissionUtils;
      if (obj2.isChannelAccessGrantedBy(channel, tmp10)) {
        iter.return();
        let flag2 = true;
        return true;
      }
    }
    continue;
  }
  const tmp15 = hasPermission(GuildRoleStore.getEveryoneRole(guild), constants.VIEW_CHANNEL);
  const obj4 = RolePermissionUtils;
  if (!tmp15) {
    if (!obj4.isChannelAccessDeniedBy(channel, channel.permissionOverwrites[guild.id])) {
      const sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
      for (const item10077 of sortedRoles) {
        let obj6 = { guildId: guild.id, role: item10077, isPreviewingRoles: isViewingServerShopResult };
        if (isSubscriptionGated(obj6)) {
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
  if (null == closure_12[guild_id]) {
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
            closure_12[guild_id].add(id);
            flag = true;
          } else {
            closure_12[guild_id].delete(id);
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
  delete closure_12[arg0.guild.id];
}
function handleGuildRoleUpdate(arg0) {
  delete closure_12[arg0.guildId];
}
function handleChannelUpdate(channel) {
  channel = channel.channel;
  let tmp = null != channel.guild_id;
  if (tmp) {
    const id = channel.id;
    let flag = false;
    if (null != closure_12[channel.guild_id]) {
      const channel1 = ChannelStore.getChannel(id);
      flag = false;
      if (null != channel1) {
        const guild = GuildStore.getGuild(channel1.getGuildId());
        flag = false;
        if (null != guild) {
          const hasItem = obj.has(id);
          const tmp8 = isChannelSubscriptionGatedInGuild(channel1, guild);
          let flag2 = hasItem !== tmp8;
          if (flag2) {
            if (tmp8) {
              closure_12[channel.guild_id].add(id);
              flag2 = true;
            } else {
              closure_12[channel.guild_id].delete(id);
              flag2 = true;
            }
          }
          flag = flag2;
        }
      }
    }
    tmp = flag;
  }
  return tmp;
}
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const hasPermission = GuildRoleRecord.hasPermission;
({ Permissions: c10, GuildFeatures: unpackModuleId } = Constants);
let closure_12 = {};
let set = new Set();
const Store = get_initializedDefault.Store;
class GatedChannelStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildMemberStore, GuildRoleStore, GuildStore, ImpersonateStore, UserStore);
  }
  isChannelGated(guildId, channelId) {
    if (null == guildId) {
      return false;
    } else {
      let obj = closure_12[guildId];
      if (null == obj) {
        const guild = GuildStore.getGuild(guildId);
        if (null != guild) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          closure_12[guildId] = set;
          const features = guild.features;
          if (features.has(unpackModuleId.ROLE_SUBSCRIPTIONS_ENABLED)) {
            const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(guildId);
            for (const key10008 in mutableGuildChannelsForGuild) {
              let tmp16 = mutableGuildChannelsForGuild[key10008];
              if (!isChannelSubscriptionGatedInGuild(tmp16, guild)) {
                continue;
              } else {
                let addResult = set.add(tmp16.id);
                continue;
              }
              continue;
            }
          }
        }
        obj = closure_12[guildId];
      }
      const hasItem = null != obj && obj.has(channelId);
      return hasItem;
    }
  }
  isChannelGatedAndVisible(guild_id, id) {
    let tmp = null != guild_id;
    if (tmp) {
      const self = this;
      tmp = this.isChannelGated(guild_id, id) && !set.has(guild_id);
      const isChannelGatedResult = this.isChannelGated(guild_id, id) && !set.has(guild_id);
    }
    return tmp;
  }
  isChannelOrThreadParentGated(guild_id, channel_id) {
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
          const has = THREAD_CHANNEL_TYPES.has;
          if (channel != null) {
            type = channel.type;
          }
          tmp4 = !has(type);
        }
        const tmp7 = !tmp4 && self.isChannelOrThreadParentGated(guild_id, channel.parent_id);
        return tmp7;
      }
    }
  }
}
const prototype = GatedChannelStore.prototype;
GatedChannelStore.displayName = "GatedChannelStore";
let obj = {
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
    const restrictions = guildId.restrictions;
    const obj = CreatorMonetizationRestrictionsUtils;
    if (obj.isRestrictedFromShowingGuildPurchaseEntryPoints(restrictions)) {
      set.add(guildId);
    } else {
      set.delete(guildId);
    }
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function handleRoleSubscriptionsRestrictionsFetchFailure(guildId) {
    set.add(guildId.guildId);
  }
};
const gatedChannelStore = new GatedChannelStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/channel/GatedChannelStore.tsx");

export default gatedChannelStore;