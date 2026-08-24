// === Module 6765: computeRolesForGuild ===

// Module 6765 (computeRolesForGuild)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1434 */;
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag" /* 1985 */;
import isSubscriptionRole from "isSubscriptionRole" /* 4015 */;
import closure_4 from "trackCommunicationDisabled" /* 1991 */;
import closure_5 from "createGuildRoleRecordFromRust" /* 1984 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import set from "set" /* 2 */;

function computeRolesForGuild(guildId) {
  const currentUser = authStore.getCurrentUser();
  const guild = store.getGuild(guildId);
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
        member = member.getMember(guildId, currentUser.id);
        let roles;
        if (member != null) {
          roles = member.roles;
        }
        if (roles == null) {
          roles = [];
        }
        const set3 = new Set(roles);
        sortedRoles = sortedRoles.getSortedRoles(guild.id);
        const iter = sortedRoles[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp15 = nextResult;
          let tmp16 = require;
          let tmp17 = dependencyMap;
          let obj2 = isSubscriptionRole;
          if (obj2.isSubscriptionRole(nextResult)) {
            let tmp18 = nextResult;
            let addResult = set.add(tmp15.id);
            let tmp16Result = tmp16(4015);
            if (tmp16Result.isSubscriptionRoleAvailableForPurchase(tmp15)) {
              let tmp20 = nextResult;
              let addResult1 = set1.add(tmp15.id);
              if (set3.has(tmp15.id)) {
                let tmp22 = nextResult;
                let addResult2 = set2.add(tmp15.id);
              }
            }
          }
          let tmp24 = nextResult;
          let hasItem = set3.has(tmp15.id);
          if (hasItem) {
            let tmp26 = hasPermission;
            let tmp27 = nextResult;
            let tmp28 = constants;
            hasItem = hasPermission(tmp15, constants.ADMINISTRATOR);
          }
          if (hasItem) {
            let tmp29 = map3;
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
  c15 = null;
}
function handleGuildUpdate(guild) {
  const id = guild.guild.id;
  if (null == set1) {
    return false;
  } else {
    guild = store.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const features = guild.features;
      const hasItem = features.has(constants2.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
      if (hasItem) {
        if (!set1.has(id)) {
          const _Set = Set;
          set = new Set(set1);
          set.add(id);
          set1 = set;
          return true;
        }
      }
      if (!hasItem) {
        if (set1.has(id)) {
          const _Set2 = Set;
          set1 = new Set(set1);
          set1.delete(id);
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
const isGuildOwner = GuildNSFWContentLevel.isGuildOwner;
const hasPermission = GuildRoleRecordTypeTag.hasPermission;
({ Permissions: closure_8, GuildFeatures: c9 } = ME);
let set = new Set();
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let c15 = null;
const Store = initializeDefault.Store;
class SubscriptionRoleStore extends Store {
}
const prototype = SubscriptionRoleStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_5, closure_7, closure_4);
};
prototype["getGuildIdsWithPurchasableRoles"] = function getGuildIdsWithPurchasableRoles() {
  if (null == c15) {
    let tmp = (function computeGuildsWithPurchasableRoles() {
      guildsArray = guildsArray.getGuildsArray();
      set = new Set();
      for (const item10014 of guildsArray) {
        let features = item10014.features;
        let tmp3 = constants;
        let tmp2 = item10014;
        if (features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) {
          let tmp4 = item10014;
          let addResult = set.add(tmp2.id);
        }
        continue;
      }
      return set;
    })();
  } else {
    tmp = c15;
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
  let value = map.get(guildId);
  if (value == null) {
    value = set;
  }
  return value;
};
prototype["getPurchasableSubscriptionRoles"] = function getPurchasableSubscriptionRoles(guildId) {
  const roles = this.buildRoles(guildId);
  let value = map1.get(guildId);
  if (value == null) {
    value = set;
  }
  return value;
};
prototype["getUserSubscriptionRoles"] = function getUserSubscriptionRoles(guildId) {
  const roles = this.buildRoles(guildId);
  let value = map2.get(guildId);
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
const subscriptionRoleStore = new SubscriptionRoleStore(dispatcherDefault, {
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
    const currentUser = authStore.getCurrentUser();
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
  }
});
let result = set.fileFinishedImporting("modules/guild_role_subscriptions/SubscriptionRoleStore.tsx");

export default subscriptionRoleStore;