// discord_app/modules/guild_role_subscriptions/SubscriptionRoleStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildRecord from "../../records/GuildRecord.tsx";
import GuildRoleRecord from "../../records/GuildRoleRecord.tsx";
import PremiumRoleUtils from "PremiumRoleUtils.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function computeRolesForGuild(guildId) {
  const currentUser = UserStore.getCurrentUser();
  const guild = GuildStore.getGuild(guildId);
  if (null != guild) {
    if (null != currentUser) {
      const _Set = Set;
      set = new Set();
      const _Set2 = Set;
      const set1 = new Set();
      const _Set3 = Set;
      const set2 = new Set();
      const result = map3.set(guildId, isGuildOwner(guild, currentUser));
      const features = guild.features;
      if (features.has(constants2.ROLE_SUBSCRIPTIONS_ENABLED)) {
        const member = GuildMemberStore.getMember(guildId, currentUser.id);
        let roles;
        if (member != null) {
          roles = member.roles;
        }
        if (roles == null) {
          roles = [];
        }
        const set3 = new Set(roles);
        const sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
        const iter = sortedRoles[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp15 = nextResult;
          let obj2 = PremiumRoleUtils;
          if (obj2.isSubscriptionRole(nextResult)) {
            let addResult = set.add(tmp15.id);
            let tmp16Result = PremiumRoleUtils;
            if (tmp16Result.isSubscriptionRoleAvailableForPurchase(tmp15)) {
              let addResult1 = set1.add(tmp15.id);
              if (set3.has(tmp15.id)) {
                let addResult2 = set2.add(tmp15.id);
              }
            }
          }
          let hasItem = set3.has(tmp15.id);
          if (hasItem) {
            hasItem = hasPermission(tmp15, constants.ADMINISTRATOR);
          }
          if (hasItem) {
            let result1 = map3.set(guildId, true);
          }
          continue;
        }
      }
      const result2 = map.set(guildId, set);
      const result3 = map2.set(guildId, set2);
      const result4 = map1.set(guildId, set1);
      return true;
    }
  }
  return false;
}
function deleteEverything() {
  map.clear();
  map2.clear();
  map1.clear();
  map3.clear();
}
function handleGuildUpdate(guild) {
  const id = guild.guild.id;
  if (null == set) {
    return false;
  } else {
    guild = GuildStore.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const features = guild.features;
      const hasItem = features.has(constants2.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
      if (hasItem) {
        if (!set.has(id)) {
          const _Set = Set;
          set = new Set(set);
          set.add(id);
          return true;
        }
      }
      if (!hasItem) {
        if (set.has(id)) {
          const _Set2 = Set;
          const set1 = new Set(set);
          set1.delete(id);
          set = set1;
          return true;
        }
      }
      return false;
    }
  }
}
function handleRoleUpdate(guildId) {
  guildId = guildId.guildId;
  let hasItem = map.has(guildId);
  if (hasItem) {
    hasItem = computeRolesForGuild(guildId);
  }
  return hasItem;
}
const isGuildOwner = GuildRecord.isGuildOwner;
const hasPermission = GuildRoleRecord.hasPermission;
({ Permissions: closure_8, GuildFeatures: closure_9 } = Constants);
new Set();
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let set = null;
const Store = initializeDefault.Store;
class SubscriptionRoleStore extends Store {}
const prototype = SubscriptionRoleStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore, GuildRoleStore, UserStore, GuildMemberStore);
};
prototype["getGuildIdsWithPurchasableRoles"] = function getGuildIdsWithPurchasableRoles() {
  if (null == set) {
    let tmp = (function computeGuildsWithPurchasableRoles() {
      guildsArray = guildsArray.getGuildsArray();
      set = new Set();
      for (const item10014 of guildsArray) {
        let features = item10014.features;
        if (features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) {
          let addResult = set.add(item10014.id);
        }
        continue;
      }
      return set;
    })();
  } else {
    tmp = set;
  }
  return tmp;
};
prototype["buildRoles"] = function buildRoles(guildId) {
  if (!map.has(guildId)) {
    computeRolesForGuild(guildId);
  }
};
prototype["getSubscriptionRoles"] = function getSubscriptionRoles(guildId) {
  const roles = this.buildRoles(guildId);
  value = map.get(guildId);
  if (value == null) {
    value = set;
  }
  return value;
};
prototype["getPurchasableSubscriptionRoles"] = function getPurchasableSubscriptionRoles(guildId) {
  const roles = this.buildRoles(guildId);
  value = map1.get(guildId);
  if (value == null) {
    value = set;
  }
  return value;
};
prototype["getUserSubscriptionRoles"] = function getUserSubscriptionRoles(guildId) {
  const roles = this.buildRoles(guildId);
  value = map2.get(guildId);
  if (value == null) {
    value = set;
  }
  return value;
};
prototype["getUserIsAdmin"] = function getUserIsAdmin(guildId) {
  const roles = this.buildRoles(guildId);
  let flag = map3.get(guildId);
  if (flag == null) {
    flag = false;
  }
  return flag;
};
SubscriptionRoleStore.displayName = "SubscriptionRoleStore";
const subscriptionRoleStore = new SubscriptionRoleStore(DispatcherDefault, {
  CONNECTION_OPEN: deleteEverything,
  LOGOUT: deleteEverything,
  GUILD_CREATE: handleGuildUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    let hasItem;
    if (set != null) {
      hasItem = obj.has(id);
    }
    if (true !== hasItem) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(set);
      set.delete(id);
    }
    obj = set;
  },
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_ROLE_CREATE: handleRoleUpdate,
  GUILD_ROLE_UPDATE: handleRoleUpdate,
  GUILD_ROLE_DELETE: handleRoleUpdate,
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp3 = guildId.user.id !== id;
    if (!tmp3) {
      tmp3 = !map.has(guildId);
    }
    let tmp5 = !tmp3;
    if (!tmp3) {
      tmp5 = computeRolesForGuild(guildId);
    }
    return tmp5;
  },
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/SubscriptionRoleStore.tsx");

export default subscriptionRoleStore;
