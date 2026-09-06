// === Module 12504: useBoostToUnlockFeaturedPowerup ===

// Module 12504 (useBoostToUnlockFeaturedPowerup)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

const require = fn;
let closure_7 = fn(4450).GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS;
const GuildFeatures = fn(1074).GuildFeatures;
let obj = { skuId: fn(4453).GUILD_POWERUP_LEVEL_1_SKU_ID, threshold: 1 };
let items = [obj, , , , , , ];
obj = { skuId: fn(4453).GUILD_POWERUP_LEVEL_2_SKU_ID, threshold: 2 };
items[1] = obj;
obj = { skuId: fn(4453).GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 };
items[2] = obj;
items[3] = { skuId: fn(4453).GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
const obj1 = { skuId: fn(4453).GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
items[4] = { skuId: fn(4453).GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
const obj2 = { skuId: fn(4453).GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
items[5] = { skuId: fn(4453).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
const obj3 = { skuId: fn(4453).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
items[6] = { skuId: fn(4453).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx");

export default function useBoostToUnlockFeaturedPowerup(arg0) {
  _require = arg0;
  items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  available = stateFromStores(available[8])(arg0).available;
  const obj = require("initialize");
  const items1 = [GuildStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
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
};