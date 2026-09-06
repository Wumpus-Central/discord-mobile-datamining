// === Module 12534: useCanGuildPowerupBeToggled ===

// Module 12534 (useCanGuildPowerupBeToggled)
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12499 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

const require = fn;
const PowerupActiveStatusType = fn(4450).PowerupActiveStatusType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx");

export default function useCanGuildPowerupBeToggled(arg0, arg1, arg2) {
  _require = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  const items = [closure_4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const tmp2 = usePowerupActiveStatusDefault(arg0, arg1);
  closure_4 = tmp2;
  const items1 = [stateFromStores, , , , ];
  ({ skuId: arr2[1], dependencies: arr2[2] } = arg1);
  items1[3] = arg2;
  items1[4] = tmp2.type;
  return stateFromStores.useMemo(() => {
    if (null == stateFromStores) {
      return { disabled: true, reason: "a" };
    } else {
      if (closure_4.type !== constants.LEVEL_ACTIVATED) {
        if (closure_4.type !== tmp15.TIER_OVERRIDE_ACTIVATED) {
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
            const dependencies = skuId.dependencies;
            found1 = dependencies.find((item) => null == unlockedPowerups[item]);
          }
          let obj = { disabled: null != found1, reason: null };
          let formatToPlainStringResult;
          if (null != found1) {
            if (null != allPowerups[found1]) {
              const intl = closure_0(1114).intl;
              const tmp11 = skuId(2428);
              let title;
              if (allPowerups[found1] != null) {
                title = tmp13.title;
              }
              obj = { perk: title };
              formatToPlainStringResult = intl.formatToPlainString(dependencyMap ? tmp11.vCEBiS : tmp11["1B8AZr"], obj);
              const tmp12 = dependencyMap ? tmp11.vCEBiS : tmp11["1B8AZr"];
            }
          }
          obj.reason = formatToPlainStringResult;
          return obj;
        }
      }
      return { disabled: true, reason: "a" };
    }
    tmp = stateFromStores;
  }, items1);
};