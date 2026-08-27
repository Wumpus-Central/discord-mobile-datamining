// === Module 4331: calculateAppliedBoosts ===

// Module 4331 (calculateAppliedBoosts)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "createGuildRecordFromRust" /* 1910 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4332 */;
import ME from "ME" /* 676 */;

function calculateAppliedBoosts(guildId) {
  guild = guild.getGuild(guildId);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(obj.PREMIUM_TIER_3_OVERRIDE);
  }
  let num = 0;
  if (true !== hasItem) {
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = constants.NONE;
    }
    num = closure_4[premiumTier];
    const tmp5 = closure_4;
  }
  let sum = num;
  const entries = Object.entries(closure_3);
  while (tmp10 !== undefined) {
    let tmp12 = callback;
    let tmp13 = callback(tmp11, 2);
    [tmp14, tmp15] = tmp13;
    let hasItem1 = tmp4;
    if (tmp4) {
      let tmp17 = set;
      let tmp18 = tmp14;
      hasItem1 = set.has(tmp14);
    }
    if (!hasItem1) {
      let hasItem2;
      if (guild != null) {
        let premiumFeatures = guild.premiumFeatures;
        if (premiumFeatures != null) {
          let features2 = premiumFeatures.features;
          let tmp20 = tmp14;
          hasItem2 = features2.includes(tmp14);
        }
      }
      if (hasItem2) {
        let tmp21 = tmp15;
        let isEnabled = tmp15.isEnabled;
        let num2;
        if (isEnabled != null) {
          num2 = isEnabled(guildId);
        }
        if (num2 == null) {
          num2 = 1;
        }
        hasItem2 = num2;
      }
      if (hasItem2) {
        let tmp22 = tmp15;
        let tmp23 = null == tmp15.includedInLevel;
        if (!tmp23) {
          let tmp24 = tmp15;
          tmp23 = guild.premiumTier < tmp15.includedInLevel;
        }
        hasItem2 = tmp23;
      }
      if (hasItem2) {
        let tmp25 = sum;
        let tmp26 = tmp15;
        sum = sum + tmp15.boostPrice;
      }
    }
    continue;
  }
  return sum;
}
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_PURCHASABLE_FEATURES: obj1, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: c3 } = BoostedGuildTiers);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: c4, BoostedGuildTiers: c5, GuildFeatures: closure_6 } = ME);
let closure_7 = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildPowerupsStore extends PersistedStore {
}
const prototype = GuildPowerupsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(closure_1);
  if (null != arg0) {
    closure_7 = arg0;
  }
};
prototype["getState"] = function getState() {
  return closure_7;
};
prototype["getStateForGuild"] = function getStateForGuild(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = dependencyMap[arg0];
  }
  return tmp;
};
prototype["shouldFetchCatalogForGuild"] = function shouldFetchCatalogForGuild(arg0) {
  let catalogFetchCooldown;
  if (dependencyMap[arg0] != null) {
    catalogFetchCooldown = tmp.catalogFetchCooldown;
  }
  let tmp3 = null == catalogFetchCooldown;
  if (!tmp3) {
    const _Date = Date;
    const sum = catalogFetchCooldown + 86400000;
    tmp3 = sum < Date.now();
  }
  return tmp3;
};
prototype["shouldFetchPowerupsForGuild"] = function shouldFetchPowerupsForGuild(guildId) {
  let prop;
  if (dependencyMap[guildId] != null) {
    prop = tmp.unlockedPowerupsFetchCooldown;
  }
  let tmp3 = null == prop;
  if (!tmp3) {
    const _Date = Date;
    const sum = prop + 3600000;
    tmp3 = sum < Date.now();
  }
  return tmp3;
};
prototype["hasFetchedPowerupCatalog"] = function hasFetchedPowerupCatalog(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let prop;
    if (dependencyMap[arg0] != null) {
      prop = tmp3.hasFetchedPowerupCatalog;
    }
    tmp = true === prop;
  }
  return tmp;
};
prototype["hasFetchedUnlockedPowerups"] = function hasFetchedUnlockedPowerups(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let prop;
    if (dependencyMap[arg0] != null) {
      prop = tmp3.hasFetchedUnlockedPowerups;
    }
    tmp = true === prop;
  }
  return tmp;
};
GuildPowerupsStore.displayName = "GuildPowerupsStore";
GuildPowerupsStore.persistKey = "GuildPowerupsStore";
let items = [
  (arg0) => {
    let fromEntriesResult = arg0;
    if (null != arg0) {
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(arg0);
      const found = entries.filter((arg0) => {
        [, tmp] = arg0;
        return null != tmp && typeof tmp === "object";
      });
      fromEntriesResult = Object.fromEntries(found.map((arg0) => {
        [tmp, tmp2] = arg0;
        const items = [tmp, ];
        const obj = {};
        const merged = Object.assign(tmp2);
        let allPowerups = tmp2.allPowerups;
        if (allPowerups == null) {
          allPowerups = {};
        }
        obj.allPowerups = allPowerups;
        let powerupCatalog = tmp2.powerupCatalog;
        if (powerupCatalog == null) {
          powerupCatalog = {};
        }
        obj.powerupCatalog = powerupCatalog;
        let unlockedPowerups = tmp2.unlockedPowerups;
        if (unlockedPowerups == null) {
          unlockedPowerups = {};
        }
        obj.unlockedPowerups = unlockedPowerups;
        items[1] = obj;
        return items;
      }));
    }
    return fromEntriesResult;
  }
];
GuildPowerupsStore.migrations = items;
const guildPowerupsStore = new GuildPowerupsStore(dispatcherDefault, {
  LOGOUT: function handleReset() {
    closure_7 = {};
  },
  GUILD_POWERUP_CATALOG_FETCH_SUCCESS: function handleGuildPowerupCatalogFetchSuccess(guildId) {
    guildId = guildId.guildId;
    ({ allPowerups, powerupCatalog } = guildId);
    if (null == obj[guildId]) {
      obj = { allPowerups: null, powerupCatalog: null, unlockedPowerups: null, appliedBoosts: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = calculateAppliedBoosts(guildId);
      obj[guildId] = obj;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj[guildId]);
    obj.allPowerups = allPowerups;
    obj.powerupCatalog = powerupCatalog;
    obj.catalogFetchCooldown = Date.now();
    obj.hasFetchedPowerupCatalog = true;
    obj[guildId] = obj;
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function handleGuildBoostEntitlementsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      obj = { allPowerups: null, powerupCatalog: null, unlockedPowerups: null, appliedBoosts: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = calculateAppliedBoosts(guildId);
      obj[guildId] = obj;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj[guildId]);
    obj.unlockedPowerups = guildId.unlockedPowerups;
    obj.appliedBoosts = calculateAppliedBoosts(guildId);
    obj.unlockedPowerupsFetchCooldown = Date.now();
    obj.hasFetchedUnlockedPowerups = true;
    obj[guildId] = obj;
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleGuildPowerupCreated(arg0) {
    ({ guildId, entitlements } = arg0);
    c0 = true;
    closure_1 = undefined;
    if (null == obj[guildId]) {
      obj = { allPowerups: null, powerupCatalog: null, unlockedPowerups: null, appliedBoosts: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = calculateAppliedBoosts(guildId);
      obj[guildId] = obj;
    }
    closure_1 = tmp3;
    const item = entitlements.forEach((sku_id) => {
      if (c0) {
        unlockedPowerups.unlockedPowerups[sku_id.sku_id] = sku_id;
      } else {
        delete tmp2[tmp];
      }
    });
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp3);
    obj.appliedBoosts = calculateAppliedBoosts(guildId);
    obj[guildId] = obj;
  },
  GUILD_POWERUP_ENTITLEMENTS_DELETE: function handleGuildPowerupDeleted(arg0) {
    ({ guildId, entitlements } = arg0);
    c0 = false;
    closure_1 = undefined;
    if (null == obj[guildId]) {
      obj = { allPowerups: null, powerupCatalog: null, unlockedPowerups: null, appliedBoosts: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = calculateAppliedBoosts(guildId);
      obj[guildId] = obj;
    }
    closure_1 = tmp3;
    const item = entitlements.forEach((sku_id) => {
      if (c0) {
        unlockedPowerups.unlockedPowerups[sku_id.sku_id] = sku_id;
      } else {
        delete tmp2[tmp];
      }
    });
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp3);
    obj.appliedBoosts = calculateAppliedBoosts(guildId);
    obj[guildId] = obj;
  },
  GUILD_UPDATE: function handleGuildUpdated(guild) {
    const id = guild.guild.id;
    if (null == dependencyMap[id]) {
      let obj = { allPowerups: null, powerupCatalog: null, unlockedPowerups: null, appliedBoosts: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = calculateAppliedBoosts(id);
      dependencyMap[id] = obj;
    }
    obj = {};
    const merged = Object.assign(dependencyMap[id]);
    obj.appliedBoosts = calculateAppliedBoosts(id);
    dependencyMap[id] = obj;
  },
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: function handleGameServerInstanceFetched(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      let obj = { allPowerups: null, powerupCatalog: null, unlockedPowerups: null, appliedBoosts: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = calculateAppliedBoosts(guildId);
      dependencyMap[guildId] = obj;
    }
    obj = {};
    const merged = Object.assign(dependencyMap[guildId]);
    obj.appliedBoosts = calculateAppliedBoosts(guildId);
    dependencyMap[guildId] = obj;
  }
});
const result = require("set").fileFinishedImporting("modules/premium/powerups/GuildPowerupsStore.tsx");

export default guildPowerupsStore;