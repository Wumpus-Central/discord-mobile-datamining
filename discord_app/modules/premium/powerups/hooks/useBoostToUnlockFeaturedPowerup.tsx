// discord_app/modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx
import Constants from "../../../../Constants.tsx";
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, tmp3;

let closure_7 = GuildPowerupsConstants.GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS;
const GuildFeatures = Constants.GuildFeatures;
let obj = { skuId: Powerups.GUILD_POWERUP_LEVEL_1_SKU_ID, threshold: 1 };
let items = [obj, , , , , ,];
let obj2 = { skuId: Powerups.GUILD_POWERUP_LEVEL_2_SKU_ID, threshold: 2 };
items[1] = obj2;
items[2] = { skuId: Powerups.GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 };
({ skuId: Powerups.GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 });
items[3] = { skuId: Powerups.GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
({ skuId: Powerups.GUILD_POWERUP_TAG_SKU_ID, threshold: 1 });
items[4] = { skuId: Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
({ skuId: Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 });
items[5] = { skuId: Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
({ skuId: Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 });
items[6] = { skuId: Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
({ skuId: Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp8;
      let unlockedPowerups;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [GuildPowerupsStore];
        cResult[0] = items;
        first = items;
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
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, E);
      const available = unlockedPowerups(7682)(arg0).available;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return closure_6.getStateForGuild(closure_0);
          }
        }
        const items1 = [GuildStore];
        cResult[3] = items1;
        tmp8 = items1;
      } else {
        class E {
          constructor() {
            return closure_6.getStateForGuild(closure_0);
          }
        }
      }
      if (cResult[4] !== arg0) {
        class S {
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
        cResult[5] = S;
      } else {
        class S {
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
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, S);
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
        unlockedPowerups = stateFromStores.unlockedPowerups;
        if (cResult[7] === tmp12) {
          class R {
            constructor() {
              return Math.random();
            }
          }
        }
        const items2 = [];
        const iter = items[Symbol.iterator]();
        const nextResult = iter.next();
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
        cResult[8] = available;
        cResult[9] = stateFromStores1;
        cResult[10] = unlockedPowerups;
        cResult[11] = items2;
      }
    }
  : (arg0) => {
      let available;
      let closure_0;
      let first;
      _require = arg0;
      items = [GuildPowerupsStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
      available = stateFromStores(available[10])(arg0).available;
      const items1 = [GuildStore];
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
        }
        return true === hasItem;
      });
      first = stateFromStores1(
        first.useState(() => Math.random()),
        1,
      )[0];
      const items2 = [stateFromStores, available, stateFromStores1, first];
      return first.useMemo(() => {
        if (null != stateFromStores) {
          const unlockedPowerups = stateFromStores.unlockedPowerups;
          items = [];
          const allPowerups = stateFromStores.allPowerups;
          const iter = items[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let skuId = nextResult.skuId;
            let tmp5 = skuId;
            let threshold = nextResult.threshold;
            let tmp6 = allPowerups[skuId];
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
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx");

export default tmp2;
