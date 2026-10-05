// === Module 12193: useCanGuildPowerupBeToggled ===

// Module 12193 (useCanGuildPowerupBeToggled)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12159 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4767 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, dependencyMap, importDefault, sku;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, dependencies, arg2) => {
  let allPowerups;
  let closure_0;
  let first;
  let tmp10;
  let tmp6;
  let unlockedPowerups;
  _require = arg0;
  importDefault = dependencies;
  const obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp9 = require("usePowerupActiveStatus")(arg0, dependencies);
  const tmp8 = importDefault;
  if (null != stateFromStores) {
    let tmp12;
    if (tmp9.type !== PowerupActiveStatusType.LEVEL_ACTIVATED) {
      if (tmp9.type !== tmp11.TIER_OVERRIDE_ACTIVATED) {
        let found1;
        ({ allPowerups, unlockedPowerups } = stateFromStores);
        if (cResult[5] === arg2) {
          if (cResult[6] === dependencies.dependencies) {
            if (cResult[7] === dependencies.skuId) {
              let tmp14;
              if (cResult[8] === unlockedPowerups) {
                tmp14 = cResult[9];
              }
              if (cResult[10] === allPowerups) {
                if (cResult[11] === arg2) {
                  let tmp19;
                  if (cResult[12] === tmp14) {
                    tmp19 = cResult[13];
                  }
                  if (cResult[14] === null != tmp14) {
                    let tmp25;
                    if (cResult[15] === tmp19) {
                      tmp25 = cResult[16];
                    }
                    tmp10 = tmp25;
                  }
                  const obj2 = { disabled: null != tmp14, reason: tmp19 };
                  cResult[14] = null != tmp14;
                  cResult[15] = tmp19;
                  cResult[16] = obj2;
                  tmp25 = obj2;
                }
              }
              let formatToPlainStringResult;
              if (null != tmp14) {
                if (null != allPowerups[tmp14]) {
                  const intl = tmp(unlockedPowerups[7]).intl;
                  const formatToPlainString = intl.formatToPlainString;
                  const tmp8Result = tmp8(unlockedPowerups[8]);
                  let title;
                  const tmp22 = arg2 ? tmp8Result.vCEBiS : tmp8Result["1B8AZr"];
                  if (allPowerups[tmp14] != null) {
                    title = tmp23.title;
                  }
                  const obj3 = { perk: title };
                  formatToPlainStringResult = formatToPlainString(tmp22, obj3);
                }
              }
              cResult[10] = allPowerups;
              cResult[11] = arg2;
              cResult[12] = tmp14;
              cResult[13] = formatToPlainStringResult;
              tmp19 = formatToPlainStringResult;
            }
          }
        }
        if (arg2) {
          const _Object = Object;
          const values = Object.values(unlockedPowerups);
          const found = values.find((sku) => {
            sku = sku.sku;
            let dependent_sku_id;
            if (sku != null) {
              dependent_sku_id = sku.dependent_sku_id;
            }
            return dependent_sku_id === dependencies.skuId;
          });
          let sku_id;
          if (found != null) {
            sku_id = found.sku_id;
          }
          found1 = sku_id;
        } else {
          dependencies = dependencies.dependencies;
          found1 = dependencies.find((item) => null == unlockedPowerups[item]);
        }
        cResult[5] = arg2;
        cResult[6] = dependencies.dependencies;
        cResult[7] = dependencies.skuId;
        cResult[8] = unlockedPowerups;
        cResult[9] = found1;
        tmp14 = found1;
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { disabled: true, reason: "a" };
      cResult[4] = obj4;
      tmp12 = obj4;
    } else {
      tmp12 = cResult[4];
    }
    tmp10 = tmp12;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { disabled: true, reason: "a" };
      cResult[3] = obj5;
      tmp10 = obj5;
    } else {
      tmp10 = cResult[3];
    }
  }
  return tmp10;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  let obj = require("get initialized");
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const tmp2 = usePowerupActiveStatusDefault(arg0, arg1);
  closure_4 = tmp2;
  const items1 = [stateFromStores, , , , ];
  ({ skuId: arr2[1], dependencies: arr2[2] } = arg1);
  items1[3] = arg2;
  items1[4] = tmp2.type;
  return stateFromStores.useMemo(() => {
    let allPowerups;
    let formatToPlainStringResult;
    let unlockedPowerups;
    if (null == stateFromStores) {
      return { disabled: true, reason: "a" };
    } else {
      if (closure_4.type !== constants.LEVEL_ACTIVATED) {
        if (closure_4.type !== tmp15.TIER_OVERRIDE_ACTIVATED) {
          let found1;
          ({ allPowerups, unlockedPowerups } = stateFromStores);
          if (closure_2) {
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
            found1 = sku_id;
          } else {
            const dependencies = skuId.dependencies;
            found1 = dependencies.find((item) => null == unlockedPowerups[item]);
          }
          const obj = { disabled: null != found1, reason: formatToPlainStringResult };
          formatToPlainStringResult = undefined;
          if (null != found1) {
            if (null != allPowerups[found1]) {
              const intl = closure_0(closure_2[7]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const tmp11 = skuId(closure_2[8]);
              let title;
              const tmp12 = closure_2 ? tmp11.vCEBiS : tmp11["1B8AZr"];
              if (allPowerups[found1] != null) {
                title = tmp13.title;
              }
              const obj2 = { perk: title };
              formatToPlainStringResult = formatToPlainString(tmp12, obj2);
            }
          }
          return obj;
        }
      }
      return { disabled: true, reason: "a" };
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx");

export default tmp2;