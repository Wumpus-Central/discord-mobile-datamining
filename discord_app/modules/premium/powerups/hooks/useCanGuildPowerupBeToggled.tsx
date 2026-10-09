// discord_app/modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx
import usePowerupActiveStatusDefault from "usePowerupActiveStatus.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

const require = globalThis.__r;

const require = fn;
const PowerupActiveStatusType = fn(4969).PowerupActiveStatusType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanGuildPowerupBeToggled(arg0, arg1, arg2) {
      _require = arg0;
      skuId = arg1;
      importDefault = arg1;
      const cResult = require("c").c(17);
      let found = globalThis;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildPowerupsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function p() {
          return GuildPowerupsStore.getStateForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      const tmp10 = require("usePowerupActiveStatus")(arg0, skuId);
      if (null != stateFromStores) {
        if (tmp10.type !== PowerupActiveStatusType.LEVEL_ACTIVATED) {
          if (tmp10.type !== tmp12.TIER_OVERRIDE_ACTIVATED) {
            ({ allPowerups, unlockedPowerups } = stateFromStores);
            if (cResult[5] === arg2) {
              if (cResult[6] === skuId.dependencies) {
                if (cResult[7] === skuId.skuId) {
                  if (cResult[8] === unlockedPowerups) {
                    if (cResult[10] === allPowerups) {
                      if (cResult[11] === arg2) {
                        if (cResult[12] === tmp15) {
                          let tmp20 = cResult[13];
                        }
                        if (cResult[14] === tmp19) {
                        }
                        const obj2 = { disabled: tmp19, reason: tmp20 };
                        cResult[14] = tmp19;
                        cResult[15] = tmp20;
                        cResult[16] = obj2;
                      }
                    }
                    let formatToPlainStringResult;
                    if (null != cResult[9]) {
                      if (null != allPowerups[tmp15]) {
                        const intl = tmp(unlockedPowerups[7]).intl;
                        const tmp9Result = require("../GuildPowerups.messages.js");
                        let title;
                        if (allPowerups[tmp15] != null) {
                          title = tmp24.title;
                        }
                        const obj3 = { perk: title };
                        formatToPlainStringResult = intl.formatToPlainString(
                          arg2 ? tmp9Result.vCEBiS : tmp9Result["1B8AZr"],
                          obj3,
                        );
                        const tmp23 = arg2 ? tmp9Result.vCEBiS : tmp9Result["1B8AZr"];
                      }
                    }
                    cResult[10] = allPowerups;
                    cResult[11] = arg2;
                    cResult[12] = cResult[9];
                    cResult[13] = formatToPlainStringResult;
                    tmp20 = formatToPlainStringResult;
                  }
                }
              }
            }
            if (arg2) {
              const _Object = found.Object;
              const values = _Object.values(unlockedPowerups);
              found = values.find((sku) => {
                sku = sku.sku;
                let dependent_sku_id;
                if (sku != null) {
                  dependent_sku_id = sku.dependent_sku_id;
                }
                return dependent_sku_id === skuId.skuId;
              });
              let sku_id;
              if (found != null) {
                sku_id = found.sku_id;
              }
              let found1 = sku_id;
            } else {
              const dependencies = skuId.dependencies;
              found1 = dependencies.find((item) => null == unlockedPowerups[item]);
            }
            cResult[5] = arg2;
            ({ dependencies: tmp3[6], skuId } = skuId);
            cResult[7] = skuId;
            cResult[8] = unlockedPowerups;
            cResult[9] = found1;
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { disabled: true, reason: "Array" };
          cResult[4] = obj4;
          let tmp13 = obj4;
        } else {
          tmp13 = cResult[4];
        }
        let tmp11 = tmp13;
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { disabled: true, reason: "Array" };
          cResult[3] = obj5;
          tmp11 = obj5;
        } else {
          tmp11 = cResult[3];
        }
      }
      return tmp11;
    }
  : function useCanGuildPowerupBeToggled(arg0, arg1, arg2) {
      _require = arg0;
      importDefault = arg1;
      dependencyMap = arg2;
      const items = [closure_4];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildPowerupsStore.getStateForGuild(closure_0),
      );
      const tmp2 = usePowerupActiveStatusDefault(arg0, arg1);
      closure_4 = tmp2;
      const items1 = [stateFromStores, , , ,];
      ({ skuId: arr2[1], dependencies: arr2[2] } = arg1);
      items1[3] = arg2;
      items1[4] = tmp2.type;
      return stateFromStores.useMemo(() => {
        if (null == stateFromStores) {
          return { disabled: true, reason: "Array" };
        } else {
          if (closure_4.type !== constants.LEVEL_ACTIVATED) {
            if (closure_4.type !== tmp15.TIER_OVERRIDE_ACTIVATED) {
              ({ allPowerups, unlockedPowerups } = stateFromStores);
              if (dependencyMap) {
                const _Object = Object;
                const values = Object.values(unlockedPowerups);
                const found = values.find((sku) => {
                  sku = sku.sku;
                  let dependent_sku_id;
                  if (sku != null) {
                    dependent_sku_id = sku.dependent_sku_id;
                  }
                  return dependent_sku_id === skuId.skuId;
                });
                let sku_id;
                if (found != null) {
                  sku_id = found.sku_id;
                }
                let found1 = sku_id;
              } else {
                const dependencies = skuId.dependencies;
                found1 = dependencies.find((item) => null == unlockedPowerups[item]);
              }
              const obj = { disabled: null != found1, reason: null };
              let formatToPlainStringResult;
              if (null != found1) {
                if (null != allPowerups[found1]) {
                  const intl = closure_0(1126).intl;
                  const tmp11 = skuId(2597);
                  let title;
                  if (allPowerups[found1] != null) {
                    title = tmp13.title;
                  }
                  const obj2 = { perk: title };
                  formatToPlainStringResult = intl.formatToPlainString(
                    dependencyMap ? tmp11.vCEBiS : tmp11["1B8AZr"],
                    obj2,
                  );
                  const tmp12 = dependencyMap ? tmp11.vCEBiS : tmp11["1B8AZr"];
                }
              }
              obj.reason = formatToPlainStringResult;
              return obj;
            }
          }
          return { disabled: true, reason: "Array" };
        }
      }, items1);
    };
