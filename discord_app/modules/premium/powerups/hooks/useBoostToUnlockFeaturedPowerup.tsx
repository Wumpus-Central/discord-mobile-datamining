// discord_app/modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import calculateAppliedBoosts from "../GuildPowerupsStore.tsx";
import { GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS as closure_7 } from "../constants/GuildPowerupsConstants.tsx";
import { GuildFeatures } from "../../../../Constants.tsx";

const require = fn;
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
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx");

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
      const iter = closure_1_9[Symbol.iterator]();
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
              if (dependencies.every((item, index) => null != unlockedPowerups[item])) {
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