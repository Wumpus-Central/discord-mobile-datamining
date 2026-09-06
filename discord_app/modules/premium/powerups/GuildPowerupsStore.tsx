// === Module 4449: GuildPowerupsStore ===

// Module 4449 (GuildPowerupsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildStore from "GuildStore" /* 1979 */;

function calculateAppliedBoosts(guildId) {
  const guild = GuildStore.getGuild(guildId);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(timestampProducer.PREMIUM_TIER_3_OVERRIDE);
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
    num = React4[premiumTier];
  }
  let sum = num;
  const entries = Object.entries(React3);
  while (tmp10 !== undefined) {
    let tmp13 = _slicedToArray(tmp11, 2);
    [tmp14, tmp15] = tmp13;
    let hasItem1 = tmp4;
    if (tmp4) {
      hasItem1 = set.has(tmp14);
    }
    if (!hasItem1) {
      let hasItem2;
      if (guild != null) {
        let premiumFeatures = guild.premiumFeatures;
        if (premiumFeatures != null) {
          let features2 = premiumFeatures.features;
          hasItem2 = features2.includes(tmp14);
        }
      }
      if (hasItem2) {
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
        let tmp23 = null == tmp15.includedInLevel;
        if (!tmp23) {
          tmp23 = guild.premiumTier < tmp15.includedInLevel;
        }
        hasItem2 = tmp23;
      }
      if (hasItem2) {
        sum = sum + tmp15.boostPrice;
      }
    }
    continue;
  }
  return sum;
}
const GuildPowerupsConstants = fn(4450);
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_PURCHASABLE_FEATURES: c2, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: c3 } = GuildPowerupsConstants);
const Constants = fn(1074);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: hasOwnProperty, GuildFeatures: metroRequire } = Constants);
let obj = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildPowerupsStore extends PersistedStore {
}
const prototype = GuildPowerupsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(GuildStore);
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["getStateForGuild"] = function getStateForGuild(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = obj[arg0];
  }
  return tmp;
};
prototype["shouldFetchCatalogForGuild"] = function shouldFetchCatalogForGuild(arg0) {
  let catalogFetchCooldown;
  if (obj[arg0] != null) {
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
  if (obj[guildId] != null) {
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
    if (obj[arg0] != null) {
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
    if (obj[arg0] != null) {
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
      const found = entries.filter((item) => {
        [, tmp] = item;
        return null != tmp && typeof tmp === "object";
      });
      fromEntriesResult = Object.fromEntries(found.map((item) => {
        [tmp, tmp2] = item;
        const items = [tmp, ];
        obj = {};
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
obj = {
  LOGOUT: function handleReset() {

  },
  GUILD_POWERUP_CATALOG_FETCH_SUCCESS: function handleGuildPowerupCatalogFetchSuccess(guildId) {
    guildId = guildId.guildId;
    ({ allPowerups, powerupCatalog } = guildId);
    if (null == obj[guildId]) {
      obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
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
      obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
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
      obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
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
    let unlockedPowerups;
    if (null == obj[guildId]) {
      obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
      obj[guildId] = obj;
    }
    unlockedPowerups = tmp3;
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
    if (null == obj[id]) {
      obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(id) };
      obj[id] = obj;
    }
    obj = {};
    const merged = Object.assign(obj[id]);
    obj.appliedBoosts = calculateAppliedBoosts(id);
    obj[id] = obj;
  },
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: function handleGameServerInstanceFetched(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
      obj[guildId] = obj;
    }
    obj = {};
    const merged = Object.assign(obj[guildId]);
    obj.appliedBoosts = calculateAppliedBoosts(guildId);
    obj[guildId] = obj;
  }
};
const guildPowerupsStore = new GuildPowerupsStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsStore.tsx");

export default guildPowerupsStore;