// === Module 5646: SubscriptionRoleStore ===

// Module 5646 (SubscriptionRoleStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2107 */;
import PremiumRoleUtils from "PremiumRoleUtils" /* 4505 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let guildsArray, set2;

let c9;
let metroImportAll;
function computeRolesForGuild(guildId) {
  const currentUser = UserStore.getCurrentUser();
  const guild = GuildStore.getGuild(guildId);
  if (null != guild) {
    if (null != currentUser) {
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      set = new Set();
      const _Set3 = Set;
      const self5 = this;
      const self6 = this;
      const set1 = new Set();
      const _Set4 = Set;
      const self7 = this;
      const self8 = this;
      set2 = new Set();
      const result = map3.set(guildId, isGuildOwner(guild, currentUser));
      const features = guild.features;
      if (features.has(constants2.ROLE_SUBSCRIPTIONS_ENABLED)) {
        const member = GuildMemberStore.getMember(guildId, currentUser.id);
        let roles;
        const _Set = Set;
        if (member != null) {
          roles = member.roles;
        }
        if (roles == null) {
          roles = [];
        }
        const self = this;
        const self2 = this;
        const _Set1 = new _Set(roles);
        const sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
        const iter = sortedRoles[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp13 = nextResult;
          let obj2 = PremiumRoleUtils;
          if (obj2.isSubscriptionRole(nextResult)) {
            let addResult = set.add(tmp13.id);
            let tmp14Result = PremiumRoleUtils;
            if (tmp14Result.isSubscriptionRoleAvailableForPurchase(tmp13)) {
              let addResult1 = set1.add(tmp13.id);
              if (_Set1.has(tmp13.id)) {
                let addResult2 = set2.add(tmp13.id);
              }
            }
          }
          let hasItem = _Set1.has(tmp13.id);
          if (hasItem) {
            hasItem = hasPermission(tmp13, metroImportAll.ADMINISTRATOR);
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
          const self = this;
          const self2 = this;
          set = new Set(set);
          set.add(id);
          return true;
        }
      }
      if (!hasItem) {
        if (set.has(id)) {
          const _Set2 = Set;
          const self3 = this;
          const self4 = this;
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
  const hasItem = map.has(guildId) && computeRolesForGuild(guildId);
  return hasItem;
}
const isGuildOwner = GuildRecord.isGuildOwner;
const hasPermission = GuildRoleRecord.hasPermission;
({ Permissions: metroImportAll, GuildFeatures: c9 } = Constants);
new Set();
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let set = null;
const Store = get_initializedDefault.Store;
class SubscriptionRoleStore extends Store {
  initialize() {
    this.waitFor(GuildStore, GuildRoleStore, UserStore, GuildMemberStore);
  }
  getGuildIdsWithPurchasableRoles() {
    let tmp;
    function computeGuildsWithPurchasableRoles() {
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
    }
    if (null == set) {
      tmp = computeGuildsWithPurchasableRoles();
    } else {
      tmp = set;
    }
    return tmp;
  }
  buildRoles(guildId) {
    if (!map.has(guildId)) {
      computeRolesForGuild(guildId);
    }
  }
  getSubscriptionRoles(guildId) {
    const roles = this.buildRoles(guildId);
    let value = map.get(guildId);
    if (value == null) {
      value = set;
    }
    return value;
  }
  getPurchasableSubscriptionRoles(guildId) {
    const roles = this.buildRoles(guildId);
    let value = map1.get(guildId);
    if (value == null) {
      value = set;
    }
    return value;
  }
  getUserSubscriptionRoles(guildId) {
    const roles = this.buildRoles(guildId);
    let value = map2.get(guildId);
    if (value == null) {
      value = set;
    }
    return value;
  }
  getUserIsAdmin(guildId) {
    const roles = this.buildRoles(guildId);
    let flag = map3.get(guildId);
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
}
const prototype = SubscriptionRoleStore.prototype;
SubscriptionRoleStore.displayName = "SubscriptionRoleStore";
let obj = {
  CONNECTION_OPEN: deleteEverything,
  LOGOUT: deleteEverything,
  GUILD_CREATE: handleGuildUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    let hasItem;
    const obj = set;
    if (set != null) {
      hasItem = obj.has(id);
    }
    if (true !== hasItem) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
      set.delete(id);
    }
  },
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_ROLE_CREATE: handleRoleUpdate,
  GUILD_ROLE_UPDATE: handleRoleUpdate,
  GUILD_ROLE_DELETE: handleRoleUpdate,
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    const user = guildId.user;
    const currentUser = UserStore.getCurrentUser();
    let id1;
    const id = user.id;
    if (currentUser != null) {
      id1 = currentUser.id;
    }
    const tmp3 = id !== id1 || !map.has(guildId);
    const tmp5 = !tmp3 && computeRolesForGuild(guildId);
    return tmp5;
  }
};
const subscriptionRoleStore = new SubscriptionRoleStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/SubscriptionRoleStore.tsx");

export default subscriptionRoleStore;