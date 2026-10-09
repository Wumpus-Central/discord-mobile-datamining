// === Module 12196: useBoostToUnlockFeaturedPowerup ===

// Module 12196 (useBoostToUnlockFeaturedPowerup)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4968 */;

const require = globalThis.__r;

const require = fn;
let closure_7 = fn(4969).GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS;
const GuildFeatures = fn(1085).GuildFeatures;
let items = [{ skuId: fn(4972).GUILD_POWERUP_LEVEL_1_SKU_ID, threshold: 1 }, , , , , , ];
let obj = { skuId: fn(4972).GUILD_POWERUP_LEVEL_1_SKU_ID, threshold: 1 };
items[1] = { skuId: fn(4972).GUILD_POWERUP_LEVEL_2_SKU_ID, threshold: 2 };
const obj2 = { skuId: fn(4972).GUILD_POWERUP_LEVEL_2_SKU_ID, threshold: 2 };
items[2] = { skuId: fn(4972).GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 };
const obj3 = { skuId: fn(4972).GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 };
items[3] = { skuId: fn(4972).GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
const obj4 = { skuId: fn(4972).GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
items[4] = { skuId: fn(4972).GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
const obj5 = { skuId: fn(4972).GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
items[5] = { skuId: fn(4972).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
const obj6 = { skuId: fn(4972).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
items[6] = { skuId: fn(4972).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
const ReactCompilerGating = fn(558);
const obj7 = { skuId: fn(4972).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useBoostToUnlockFeaturedPowerup(arg0) {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GuildPowerupsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class E {
      constructor() {
        return closure_6.getStateForGuild(closure_0);
      }
    }
    cResult[1] = arg0;
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        return closure_6.getStateForGuild(closure_0);
      }
    }
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, E);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_6.getStateForGuild(closure_0);
      }
    }
    const items1 = [GuildStore];
    cResult[3] = items1;
    const tmp8 = items1;
  } else {
    class E {
      constructor() {
        return closure_6.getStateForGuild(closure_0);
      }
    }
  }
  if (cResult[4] !== arg0) {
    class U {
      constructor() {
        guild = closure_5.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
        }
        return true === hasItem;
      }
    }
    cResult[4] = arg0;
    cResult[5] = U;
  } else {
    class U {
      constructor() {
        guild = closure_5.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
        }
        return true === hasItem;
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, U);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return Math.random();
      }
    }
    cResult[6] = R;
  } else {
    class R {
      constructor() {
        return Math.random();
      }
    }
  }
  if (null != stateFromStores) {
    class R {
      constructor() {
        return Math.random();
      }
    }
    const unlockedPowerups = stateFromStores.unlockedPowerups;
    if (cResult[7] === tmp12) {
      class R {
        constructor() {
          return Math.random();
        }
      }
    }
    const items2 = [];
    const iter = items[Symbol.iterator]();
    while (iter !== undefined) {
      class R {
        constructor() {
          return Math.random();
        }
      }
      let threshold = nextResult.threshold;
      let tmp21 = tmp12[tmp19];
      if (null != tmp21) {
        class R {
          constructor() {
            return Math.random();
          }
        }
      }
      continue;
    }
    cResult[7] = tmp12;
    cResult[8] = unlockedPowerups(8011)(arg0).available;
    cResult[9] = stateFromStores1;
    cResult[10] = unlockedPowerups;
    cResult[11] = items2;
    nextResult = iter.next();
  }
  const tmpResult2 = require("initialize");
}) : (function useBoostToUnlockFeaturedPowerup(arg0) {
  _require = arg0;
  items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  available = stateFromStores(available[10])(arg0).available;
  const obj = require("initialize");
  const items1 = [GuildStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  });
  first = stateFromStores1(first.useState(() => Math.random()), 1)[0];
  const items2 = [stateFromStores, available, stateFromStores1, first];
  return first.useMemo(() => {
    if (null != stateFromStores) {
      const unlockedPowerups = stateFromStores.unlockedPowerups;
      items = [];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let skuId = nextResult.skuId;
        let tmp5 = skuId;
        let threshold = nextResult.threshold;
        let tmp6 = tmp23[skuId];
        let tmp7 = tmp6;
        if (null != tmp6) {
          if (!stateFromStores1) {
            if (null == unlockedPowerups[tmp5]) {
              let dependencies = tmp7.dependencies;
              if (dependencies.every((item) => null != unlockedPowerups[item])) {
                let diff = tmp7.cost - available;
                let tmp16 = diff > 0;
                if (tmp16) {
                  tmp16 = tmp15 <= threshold;
                }
                if (tmp16) {
                  let arr = items.push(tmp7);
                }
              }
            }
          }
        }
        continue;
      }
      if (items.length > 0) {
        const _Math = Math;
        return items[Math.floor(Math, first * items.length)];
      }
    }
  }, items2);
});