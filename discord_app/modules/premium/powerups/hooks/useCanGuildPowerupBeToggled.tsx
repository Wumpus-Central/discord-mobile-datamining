import noop from "noop";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import { PowerupActiveStatusType } from "BoostedGuildTiers";

const require = arg1;
const result = require("BoostedGuildTiers").fileFinishedImporting("modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx");

export default function useCanGuildPowerupBeToggled(arg0, arg1, arg2) {
  const _require = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [calculateAppliedBoosts];
  const stateFromStores = _require(589).useStateFromStores(items, () => tmp2.getStateForGuild(closure_0));
  const tmp2 = importDefault(11604)(arg0, arg1);
  calculateAppliedBoosts = tmp2;
  const items1 = [stateFromStores, , , , ];
  ({ skuId: arr2[1], dependencies: arr2[2] } = arg1);
  items1[3] = arg2;
  items1[4] = tmp2.type;
  return stateFromStores.useMemo(() => {
    let allPowerups;
    let unlockedPowerups;
    if (null == stateFromStores) {
      return { disabled: true, reason: "a" };
    } else {
      if (tmp2.type !== outer1_5.LEVEL_ACTIVATED) {
        if (tmp2.type !== tmp15.TIER_OVERRIDE_ACTIVATED) {
          ({ allPowerups, unlockedPowerups } = tmp);
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
            const dependencies = lib.dependencies;
            found1 = dependencies.find((arg0) => null == unlockedPowerups[arg0]);
          }
          let obj = { disabled: null, reason: null };
          obj[0] = null != found1;
          let formatToPlainStringResult;
          if (null != found1) {
            if (null != allPowerups[found1]) {
              const intl = callback(1236).intl;
              const tmp11 = lib(2257);
              let title;
              if (allPowerups[found1] != null) {
                title = tmp13.title;
              }
              obj = { perk: null };
              obj[0] = title;
              formatToPlainStringResult = intl.formatToPlainString(dependencyMap ? tmp11.vCEBiS : tmp11["1B8AZr"], obj);
              const tmp12 = dependencyMap ? tmp11.vCEBiS : tmp11["1B8AZr"];
            }
          }
          obj[1] = formatToPlainStringResult;
          return obj;
        }
      }
      return { disabled: true, reason: "a" };
    }
    tmp = stateFromStores;
  }, items1);
};