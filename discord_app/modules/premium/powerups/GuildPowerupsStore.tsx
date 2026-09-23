// discord_app/modules/premium/powerups/GuildPowerupsStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

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
const GuildPowerupsConstants = fn(4716);
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_PURCHASABLE_FEATURES: c2, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: c3 } =
  GuildPowerupsConstants);
const Constants = fn(1074);
({
  AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4,
  BoostedGuildTiers: hasOwnProperty,
  GuildFeatures: metroRequire,
} = Constants);
const PersistedStore = initializeDefault.PersistedStore;
class GuildPowerupsStore extends PersistedStore {}
const prototype = GuildPowerupsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(GuildStore);
};
prototype["getState"] = function getState() {
  return obj2;
};
prototype["getStateForGuild"] = function getStateForGuild(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = obj2[arg0];
  }
  return tmp;
};
prototype["shouldFetchCatalogForGuild"] = function shouldFetchCatalogForGuild(arg0) {
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
};
prototype["shouldFetchPowerupsForGuild"] = function shouldFetchPowerupsForGuild(guildId) {
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
};
prototype["hasFetchedPowerupCatalog"] = function hasFetchedPowerupCatalog(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let prop;
    if (obj2[arg0] != null) {
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
    if (obj2[arg0] != null) {
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
      fromEntriesResult = Object.fromEntries(
        found.map((item) => {
          [tmp, tmp2] = item;
          const items = [tmp];
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
        }),
      );
    }
    return fromEntriesResult;
  },
];
GuildPowerupsStore.migrations = items;
const guildPowerupsStore = new GuildPowerupsStore(DispatcherDefault, {
  LOGOUT: function handleReset() {},
  GUILD_POWERUP_CATALOG_FETCH_SUCCESS: function handleGuildPowerupCatalogFetchSuccess(guildId) {
    guildId = guildId.guildId;
    ({ allPowerups, powerupCatalog } = guildId);
    if (null == obj2[guildId]) {
      const obj = {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {},
        appliedBoosts: calculateAppliedBoosts(guildId),
      };
      obj2[guildId] = obj;
    }
    obj2 = {};
    const merged = Object.assign(obj2);
    const obj3 = {};
    const merged1 = Object.assign(obj2[guildId]);
    obj3.allPowerups = allPowerups;
    obj3.powerupCatalog = powerupCatalog;
    obj3.catalogFetchCooldown = Date.now();
    obj3.hasFetchedPowerupCatalog = true;
    obj2[guildId] = obj3;
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function handleGuildBoostEntitlementsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    if (null == obj2[guildId]) {
      const obj = {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {},
        appliedBoosts: calculateAppliedBoosts(guildId),
      };
      obj2[guildId] = obj;
    }
    obj2 = {};
    const merged = Object.assign(obj2);
    const obj3 = {};
    const merged1 = Object.assign(obj2[guildId]);
    obj3.unlockedPowerups = guildId.unlockedPowerups;
    obj3.appliedBoosts = calculateAppliedBoosts(guildId);
    obj3.unlockedPowerupsFetchCooldown = Date.now();
    obj3.hasFetchedUnlockedPowerups = true;
    obj2[guildId] = obj3;
    const tmp3 = calculateAppliedBoosts(guildId);
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleGuildPowerupCreated(arg0) {
    ({ guildId, entitlements } = arg0);
    c0 = true;
    closure_1 = undefined;
    if (null == obj2[guildId]) {
      const obj = {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {},
        appliedBoosts: calculateAppliedBoosts(guildId),
      };
      obj2[guildId] = obj;
    }
    closure_1 = tmp3;
    const item = entitlements.forEach((sku_id) => {
      if (c0) {
        unlockedPowerups.unlockedPowerups[sku_id.sku_id] = sku_id;
      } else {
        delete tmp2[tmp];
      }
    });
    obj2 = {};
    const merged = Object.assign(obj2);
    const obj3 = {};
    const merged1 = Object.assign(tmp3);
    obj3.appliedBoosts = calculateAppliedBoosts(guildId);
    obj2[guildId] = obj3;
  },
  GUILD_POWERUP_ENTITLEMENTS_DELETE: function handleGuildPowerupDeleted(arg0) {
    ({ guildId, entitlements } = arg0);
    c0 = false;
    let unlockedPowerups;
    if (null == obj2[guildId]) {
      const obj = {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {},
        appliedBoosts: calculateAppliedBoosts(guildId),
      };
      obj2[guildId] = obj;
    }
    unlockedPowerups = tmp3;
    const item = entitlements.forEach((sku_id) => {
      if (c0) {
        unlockedPowerups.unlockedPowerups[sku_id.sku_id] = sku_id;
      } else {
        delete tmp2[tmp];
      }
    });
    obj2 = {};
    const merged = Object.assign(obj2);
    const obj3 = {};
    const merged1 = Object.assign(tmp3);
    obj3.appliedBoosts = calculateAppliedBoosts(guildId);
    obj2[guildId] = obj3;
  },
  GUILD_UPDATE: function handleGuildUpdated(guild) {
    const id = guild.guild.id;
    if (null == obj2[id]) {
      const obj = {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {},
        appliedBoosts: calculateAppliedBoosts(id),
      };
      obj2[id] = obj;
    }
    obj2 = {};
    const merged = Object.assign(obj2[id]);
    obj2.appliedBoosts = calculateAppliedBoosts(id);
    obj2[id] = obj2;
  },
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: function handleGameServerInstanceFetched(guildId) {
    guildId = guildId.guildId;
    if (null == obj2[guildId]) {
      const obj = {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {},
        appliedBoosts: calculateAppliedBoosts(guildId),
      };
      obj2[guildId] = obj;
    }
    obj2 = {};
    const merged = Object.assign(obj2[guildId]);
    obj2.appliedBoosts = calculateAppliedBoosts(guildId);
    obj2[guildId] = obj2;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsStore.tsx");

export default guildPowerupsStore;
