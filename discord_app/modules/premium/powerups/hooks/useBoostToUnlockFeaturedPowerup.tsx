// === Module 12035: items ===

// Module 12035 (items)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "createGuildRecordFromRust" /* 1909 */;
import closure_6 from "calculateAppliedBoosts" /* 4334 */;
import { GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS as closure_7 } from "BoostedGuildTiers" /* 4335 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
let obj = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_LEVEL_1_SKU_ID, threshold: 1 };
let items = [obj, , , , , , ];
obj = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_LEVEL_2_SKU_ID, threshold: 2 };
items[1] = obj;
obj = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 };
items[2] = obj;
items[3] = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
const obj1 = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
items[4] = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
const obj2 = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
items[5] = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
const obj3 = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
items[6] = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
const obj4 = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx");

export default function useBoostToUnlockFeaturedPowerup(arg0) {
  const _require = arg0;
  items = [closure_6];
  const stateFromStores = _require(available[7]).useStateFromStores(items, () => closure_1_6.getStateForGuild(closure_0));
  available = stateFromStores(available[8])(arg0).available;
  const obj = _require(available[7]);
  const items1 = [closure_5];
  const stateFromStores1 = _require(available[7]).useStateFromStores(items1, () => {
    const guild = closure_1_5.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_8.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  });
  first = stateFromStores1(first.useState(() => Math.random()), 1)[0];
  const items2 = [stateFromStores, available, stateFromStores1, first];
  return first.useMemo(() => {
    if (null != stateFromStores) {
      const unlockedPowerups = stateFromStores.unlockedPowerups;
      items = [];
      const iter = closure_1_9[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let skuId = nextResult.skuId;
        let tmp5 = skuId;
        let threshold = nextResult.threshold;
        let tmp6 = tmp23[skuId];
        let tmp7 = tmp6;
        if (null != tmp6) {
          let tmp26 = stateFromStores1;
          if (!stateFromStores1) {
            let tmp10 = skuId;
            if (null == unlockedPowerups[tmp5]) {
              let tmp11 = tmp6;
              let dependencies = tmp7.dependencies;
              if (dependencies.every((arg0) => null != unlockedPowerups[arg0])) {
                let tmp12 = tmp6;
                let tmp13 = available;
                let diff = tmp7.cost - available;
                let tmp16 = diff > 0;
                if (tmp16) {
                  let tmp17 = diff;
                  let tmp18 = threshold;
                  tmp16 = tmp15 <= threshold;
                }
                if (tmp16) {
                  let tmp19 = tmp6;
                  let arr = items.push(tmp7);
                }
              }
            }
          } else {
            let tmp8 = closure_1_7;
            let tmp9 = skuId;
          }
        }
        continue;
      }
      if (items.length > 0) {
        const _Math = Math;
        return items[Math.floor(Math, first * items.length)];
      }
      const tmp24 = closure_1_9;
    }
  }, items2);
};