// discord_app/modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx
import usePowerupActiveStatusDefault from "usePowerupActiveStatus.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../GuildPowerupsStore.tsx";
import { PowerupActiveStatusType } from "../constants/GuildPowerupsConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx");

export default function useCanGuildPowerupBeToggled(arg0, arg1, arg2) {
  const _require = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  const items = [closure_4];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => stateForGuild.getStateForGuild(closure_0),
  );
  const tmp2 = usePowerupActiveStatusDefault(arg0, arg1);
  closure_4 = tmp2;
  const items1 = [stateFromStores, , , ,];
  ({ skuId: arr2[1], dependencies: arr2[2] } = arg1);
  items1[3] = arg2;
  items1[4] = tmp2.type;
  return stateFromStores.useMemo(() => {
    if (null == stateFromStores) {
      return { disabled: true, reason: "a" };
    } else {
      if (stateForGuild.type !== closure_1_5.LEVEL_ACTIVATED) {
        if (stateForGuild.type !== tmp15.TIER_OVERRIDE_ACTIVATED) {
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
              const intl = callback(1233).intl;
              const tmp11 = lib(2400);
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
}
