// discord_app/modules/premium/powerups/hooks/usePowerupActiveStatus.tsx
import c from "../../../../../_runtime/00576_c.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

require = fn;
const GuildPowerupsConstants = fn(4968);
({
  GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS: closure_4,
  PowerupActiveStatusType: hasOwnProperty,
  POWERUPS_INCLUDED_IN_LEVEL: metroRequire,
  BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_7,
} = GuildPowerupsConstants);
const GuildFeatures = fn(1085).GuildFeatures;
let closure_9 = fn(4969).GAME_SERVER_POWERUP_SKU_ID;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePowerupsActiveStatuses(arg0, arr) {
      _require = arg0;
      const cResult = require("c").c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores1];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function w() {
          return GuildStore.getGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [flag];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function _() {
          return GuildPowerupsStore.getStateForGuild(closure_0);
        };
        cResult[4] = arg0;
        cResult[5] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      const tmpResult = require("initialize");
      stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === stateFromStores1) {
          if (cResult[8] === arr) {
            let tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      flag = undefined;
      if (stateFromStores != null) {
        let features = stateFromStores.features;
        if (features != null) {
          flag = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
        }
      }
      if (flag == null) {
        flag = false;
      }
      const mapped = arr.map((skuId) => {
        if (skuId.skuId === closure_9) {
          let hasItem;
          if (stateFromStores != null) {
            const features = stateFromStores.features;
            if (features != null) {
              hasItem = features.has(GuildFeatures.GAME_SERVERS);
            }
          }
          const obj2 = { type: null, powerup: null, sourceEntitlement: "r", sourcePowerup: "apply" };
          obj2.type = hasItem ? obj2.POWERUP_ACTIVATED : obj2.INACTIVE;
          obj2.powerup = skuId;
          const tmp14 = hasItem ? obj2.POWERUP_ACTIVATED : obj2.INACTIVE;
        } else {
          if (null != skuId) {
            if (null != stateFromStores) {
              if (null != stateFromStores1) {
                if (null == dependencyMap[skuId.skuId]) {
                  let obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "end" };
                } else {
                  obj = { isActiveFromLevel: tmp17.premiumTier >= tmp20, levelEntitlement: null, levelPowerup: null };
                  let tmp3;
                  if (null != dependencyMap2[tmp20]) {
                    const unlockedPowerups = stateFromStores1.unlockedPowerups;
                    let tmp4;
                    if (unlockedPowerups != null) {
                      tmp4 = unlockedPowerups[tmp2];
                    }
                    tmp3 = tmp4;
                  }
                  obj.levelEntitlement = tmp3;
                  let tmp5;
                  if (null != dependencyMap2[tmp20]) {
                    const allPowerups = stateFromStores1.allPowerups;
                    let tmp6;
                    if (allPowerups != null) {
                      tmp6 = allPowerups[tmp2];
                    }
                    tmp5 = tmp6;
                  }
                  obj.levelPowerup = tmp5;
                }
              }
              let hasItem1 = flag;
              ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
              if (flag) {
                hasItem1 = set.has(skuId.skuId);
              }
              let tmp9;
              if (stateFromStores1 != null) {
                const unlockedPowerups2 = stateFromStores1.unlockedPowerups;
                if (unlockedPowerups2 != null) {
                  tmp9 = unlockedPowerups2[skuId.skuId];
                }
              }
              if (tmp9 == null) {
                tmp9 = null;
              }
              let obj3 = { type: constants.INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "apply" };
              if (isActiveFromLevel) {
                const obj4 = {
                  type: constants.LEVEL_ACTIVATED,
                  powerup: skuId,
                  sourceEntitlement: levelEntitlement,
                  sourcePowerup: levelPowerup,
                };
                obj3 = obj4;
              } else if (hasItem1) {
                const obj5 = {
                  type: constants.TIER_OVERRIDE_ACTIVATED,
                  powerup: skuId,
                  sourceEntitlement: "Array",
                  sourcePowerup: skuId,
                };
                obj3 = obj5;
              } else if (null != tmp9) {
                const obj6 = {
                  type: constants.POWERUP_ACTIVATED,
                  powerup: skuId,
                  sourceEntitlement: tmp9,
                  sourcePowerup: skuId,
                };
                obj3 = obj6;
              }
              return obj3;
            }
          }
          obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "end" };
        }
      });
      cResult[6] = stateFromStores;
      cResult[7] = stateFromStores1;
      cResult[8] = arr;
      cResult[9] = mapped;
      tmp12 = mapped;
      const tmpResult2 = require("initialize");
    }
  : function usePowerupsActiveStatuses(arg0, arr) {
      _require = arg0;
      const items = [unlockedPowerups];
      stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
      let obj = require("initialize");
      const items1 = [flag];
      unlockedPowerups = require("initialize").useStateFromStores(items1, () =>
        GuildPowerupsStore.getStateForGuild(closure_0),
      );
      flag = undefined;
      if (stateFromStores != null) {
        let features = stateFromStores.features;
        if (features != null) {
          flag = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
        }
      }
      if (flag == null) {
        flag = false;
      }
      return arr.map((skuId) => {
        if (skuId.skuId === closure_9) {
          let hasItem;
          if (stateFromStores != null) {
            const features = stateFromStores.features;
            if (features != null) {
              hasItem = features.has(GuildFeatures.GAME_SERVERS);
            }
          }
          if (hasItem != null) {
            if (hasItem) {
              let INACTIVE = constants.POWERUP_ACTIVATED;
            }
            const obj2 = { type: INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "apply" };
          }
          INACTIVE = constants.INACTIVE;
        } else {
          if (null != skuId) {
            if (null != stateFromStores) {
              if (null != unlockedPowerups) {
                if (null == dependencyMap[skuId.skuId]) {
                  let obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "end" };
                } else {
                  let tmp4;
                  if (null != dependencyMap2[tmp22]) {
                    unlockedPowerups = tmp20.unlockedPowerups;
                    let tmp5;
                    if (unlockedPowerups != null) {
                      tmp5 = unlockedPowerups[tmp3];
                    }
                    tmp4 = tmp5;
                  }
                  let tmp6;
                  if (null != dependencyMap2[tmp22]) {
                    const allPowerups = tmp20.allPowerups;
                    let tmp7;
                    if (allPowerups != null) {
                      tmp7 = allPowerups[tmp3];
                    }
                    tmp6 = tmp7;
                  }
                  obj = { isActiveFromLevel: tmp19.premiumTier >= tmp22, levelEntitlement: tmp4, levelPowerup: tmp6 };
                  const tmp = tmp19.premiumTier >= tmp22;
                }
              }
              let hasItem1 = flag;
              ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
              if (flag) {
                hasItem1 = set.has(skuId.skuId);
              }
              let tmp10;
              if (unlockedPowerups != null) {
                const unlockedPowerups2 = unlockedPowerups.unlockedPowerups;
                if (unlockedPowerups2 != null) {
                  tmp10 = unlockedPowerups2[skuId.skuId];
                }
              }
              if (tmp10 == null) {
                tmp10 = null;
              }
              let obj3 = { type: constants.INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "apply" };
              if (isActiveFromLevel) {
                const obj4 = {
                  type: constants.LEVEL_ACTIVATED,
                  powerup: skuId,
                  sourceEntitlement: levelEntitlement,
                  sourcePowerup: levelPowerup,
                };
                obj3 = obj4;
              } else if (hasItem1) {
                const obj5 = {
                  type: constants.TIER_OVERRIDE_ACTIVATED,
                  powerup: skuId,
                  sourceEntitlement: "Array",
                  sourcePowerup: skuId,
                };
                obj3 = obj5;
              } else if (null != tmp10) {
                const obj6 = {
                  type: constants.POWERUP_ACTIVATED,
                  powerup: skuId,
                  sourceEntitlement: tmp10,
                  sourcePowerup: skuId,
                };
                obj3 = obj6;
              }
              return obj3;
            }
          }
          obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "end" };
        }
      });
    };
let closure_10 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/usePowerupActiveStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function usePowerupActiveStatus(arg0, arg1) {
      const cResult = c.c(3);
      if (cResult[0] !== arg1) {
        if (null == arg1) {
          let items = [];
        } else {
          items = [arg1];
        }
        cResult[0] = arg1;
        cResult[1] = items;
      } else {
        const arr2 = closure_10(arg0, cResult[1]);
        if (arr2.length <= 0) {
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = {
              type: constants.INACTIVE,
              sourceEntitlement: "Array",
              sourcePowerup: "toCharArray$esjava$1",
            };
            cResult[2] = obj2;
          }
        } else {
          return arr2[0];
        }
      }
    }
  : function usePowerupActiveStatus(arg0, arg1) {
      if (null == arg1) {
        let items = [];
      } else {
        items = [arg1];
      }
      const tmpResult = closure_10(arg0, items);
      if (tmpResult.length <= 0) {
        const obj = { type: constants.INACTIVE, sourceEntitlement: "Array", sourcePowerup: "toCharArray$esjava$1" };
        let first = obj;
      } else {
        first = tmpResult[0];
      }
      return first;
    };
export const isPowerupActiveStatusActive = function isPowerupActiveStatusActive(type) {
  return type.type !== constants.INACTIVE;
};
export const usePowerupsActiveStatuses = tmp3;
