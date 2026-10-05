// === Module 4767: GuildPowerupsStore ===

// Module 4767 (GuildPowerupsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let sku_id;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
function calculateAppliedBoosts(guildId) {
  let tmp14;
  let tmp15;
  const guild = GuildStore.getGuild(guildId);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(metroRequire.PREMIUM_TIER_3_OVERRIDE);
  }
  let num = 0;
  if (true !== hasItem) {
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = hasOwnProperty.NONE;
    }
    num = React3[premiumTier];
  }
  let sum = num;
  const entries = Object.entries(_false);
  const tmp10 = entries[Symbol.iterator]();
  while (tmp10 !== undefined) {
    let tmp13 = _slicedToArray(tmp11, 2);
    [tmp14, tmp15] = tmp13;
    let hasItem1 = tmp4 && set.has(tmp14);
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
        let tmp23 = null == tmp15.includedInLevel || guild.premiumTier < tmp15.includedInLevel;
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
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_PURCHASABLE_FEATURES: c2, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: c3 } = GuildPowerupsConstants);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: hasOwnProperty, GuildFeatures: metroRequire } = Constants);
let obj2 = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildPowerupsStore extends PersistedStore {
  initialize(arg0) {
    this.waitFor(GuildStore);
  }
  getState() {
    return obj2;
  }
  getStateForGuild(arg0) {
    let tmp;
    if (null != arg0) {
      tmp = obj2[arg0];
    }
    return tmp;
  }
  shouldFetchCatalogForGuild(arg0) {
    let catalogFetchCooldown;
    if (obj2[arg0] != null) {
      catalogFetchCooldown = tmp.catalogFetchCooldown;
    }
    let tmp3 = null == catalogFetchCooldown;
    if (!tmp3) {
      const _Date = Date;
      const sum = catalogFetchCooldown + 86400000;
      tmp3 = sum < Date.now();
    }
    return tmp3;
  }
  shouldFetchPowerupsForGuild(guildId) {
    let prop;
    if (obj2[guildId] != null) {
      prop = tmp.unlockedPowerupsFetchCooldown;
    }
    let tmp3 = null == prop;
    if (!tmp3) {
      const _Date = Date;
      const sum = prop + 3600000;
      tmp3 = sum < Date.now();
    }
    return tmp3;
  }
  hasFetchedPowerupCatalog(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let prop;
      if (obj2[arg0] != null) {
        prop = tmp3.hasFetchedPowerupCatalog;
      }
      tmp = true === prop;
    }
    return tmp;
  }
  hasFetchedUnlockedPowerups(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let prop;
      if (obj2[arg0] != null) {
        prop = tmp3.hasFetchedUnlockedPowerups;
      }
      tmp = true === prop;
    }
    return tmp;
  }
}
const prototype = GuildPowerupsStore.prototype;
GuildPowerupsStore.displayName = "GuildPowerupsStore";
GuildPowerupsStore.persistKey = "GuildPowerupsStore";
let items = [
  (arg0) => {
    let fromEntriesResult = arg0;
    if (null != arg0) {
      const tmp2 = globalThis;
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(arg0);
      const found = entries.filter((item) => {
        let tmp;
        [, tmp] = item;
        return null != tmp && typeof tmp === "object";
      });
      fromEntriesResult = fromEntries(found.map((item) => {
        let allPowerups;
        let powerupCatalog;
        let tmp;
        let tmp2;
        let unlockedPowerups;
        [tmp, tmp2] = item;
        const items = [tmp, ];
        const obj = { allPowerups, powerupCatalog, unlockedPowerups };
        const merged = Object.assign(tmp2);
        allPowerups = tmp2.allPowerups;
        if (allPowerups == null) {
          allPowerups = {};
        }
        powerupCatalog = tmp2.powerupCatalog;
        if (powerupCatalog == null) {
          powerupCatalog = {};
        }
        unlockedPowerups = tmp2.unlockedPowerups;
        if (unlockedPowerups == null) {
          unlockedPowerups = {};
        }
        items[1] = obj;
        return items;
      }));
    }
    return fromEntriesResult;
  }
];
GuildPowerupsStore.migrations = items;
let obj = {
  LOGOUT: function handleReset() {

  },
  GUILD_POWERUP_CATALOG_FETCH_SUCCESS: function handleGuildPowerupCatalogFetchSuccess(guildId) {
    let allPowerups;
    let powerupCatalog;
    guildId = guildId.guildId;
    ({ allPowerups, powerupCatalog } = guildId);
    if (null == obj2[guildId]) {
      obj2[guildId] = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
      const obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
    }
    const tmp3 = obj2[guildId];
    obj2 = {};
    const merged = Object.assign(obj2);
    const obj3 = { allPowerups, powerupCatalog, catalogFetchCooldown: Date.now(), hasFetchedPowerupCatalog: true };
    const merged1 = Object.assign(tmp3);
    obj2[guildId] = obj3;
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function handleGuildBoostEntitlementsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    const unlockedPowerups = guildId.unlockedPowerups;
    if (null == obj2[guildId]) {
      obj2[guildId] = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
      const obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
    }
    const tmp3 = obj2[guildId];
    obj2 = {};
    const tmp4 = calculateAppliedBoosts(guildId);
    const merged = Object.assign(obj2);
    const obj3 = { unlockedPowerups, appliedBoosts: tmp4, unlockedPowerupsFetchCooldown: Date.now(), hasFetchedUnlockedPowerups: true };
    const merged1 = Object.assign(tmp3);
    obj2[guildId] = obj3;
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleGuildPowerupCreated(arg0) {
    let entitlements;
    let guildId;
    ({ guildId, entitlements } = arg0);
    let c0 = true;
    let closure_1;
    if (null == obj2[guildId]) {
      obj2[guildId] = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
      const obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
    }
    closure_1 = tmp3;
    const item = entitlements.forEach((sku_id) => {
      unlockedPowerups = unlockedPowerups.unlockedPowerups;
      sku_id = sku_id.sku_id;
      if (c0) {
        unlockedPowerups[sku_id] = sku_id;
      } else {
        delete unlockedPowerups[sku_id];
      }
    });
    obj2 = {};
    const merged = Object.assign(obj2);
    const obj3 = { appliedBoosts: calculateAppliedBoosts(guildId) };
    const merged1 = Object.assign(tmp3);
    obj2[guildId] = obj3;
  },
  GUILD_POWERUP_ENTITLEMENTS_DELETE: function handleGuildPowerupDeleted(arg0) {
    let entitlements;
    let guildId;
    ({ guildId, entitlements } = arg0);
    let c0 = false;
    let closure_1;
    if (null == obj2[guildId]) {
      obj2[guildId] = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
      const obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
    }
    closure_1 = tmp3;
    const item = entitlements.forEach((sku_id) => {
      unlockedPowerups = unlockedPowerups.unlockedPowerups;
      sku_id = sku_id.sku_id;
      if (c0) {
        unlockedPowerups[sku_id] = sku_id;
      } else {
        delete unlockedPowerups[sku_id];
      }
    });
    obj2 = {};
    const merged = Object.assign(obj2);
    const obj3 = { appliedBoosts: calculateAppliedBoosts(guildId) };
    const merged1 = Object.assign(tmp3);
    obj2[guildId] = obj3;
  },
  GUILD_UPDATE: function handleGuildUpdated(guild) {
    const id = guild.guild.id;
    const tmp = obj2;
    if (null == obj2[id]) {
      obj2[id] = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(id) };
      const obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(id) };
    }
    obj2 = { appliedBoosts: calculateAppliedBoosts(id) };
    const merged = Object.assign(obj2[id]);
    tmp[id] = obj2;
  },
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: function handleGameServerInstanceFetched(guildId) {
    guildId = guildId.guildId;
    const tmp = obj2;
    if (null == obj2[guildId]) {
      obj2[guildId] = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
      const obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
    }
    obj2 = { appliedBoosts: calculateAppliedBoosts(guildId) };
    const merged = Object.assign(obj2[guildId]);
    tmp[guildId] = obj2;
  }
};
const guildPowerupsStore = new GuildPowerupsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsStore.tsx");

export default guildPowerupsStore;