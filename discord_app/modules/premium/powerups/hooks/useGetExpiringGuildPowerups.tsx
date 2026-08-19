// === Module 11727: useGetExpiringGuildPowerups ===

// Module 11727 (useGetExpiringGuildPowerups)
import noop from "noop" /* 19 */;
import calculateAppliedBoosts from "calculateAppliedBoosts" /* 4261 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default function useGetExpiringGuildPowerups(arg0) {
  const _require = arg0;
  const items = [closure_3];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => closure_1_3.getStateForGuild(closure_0));
  const items1 = [stateFromStores];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      return [];
    } else {
      const allPowerups = stateFromStores.allPowerups;
      const _Object = Object;
      const expiringGuildEntitlements = callback(stateFromStores[3]).getExpiringGuildEntitlements(Object.values(stateFromStores.unlockedPowerups));
      const mapped = expiringGuildEntitlements.map((item, index) => allPowerups[item.sku_id]);
      return mapped.filter(callback(stateFromStores[4]).isNotNullish);
    }
  }, items1);
};