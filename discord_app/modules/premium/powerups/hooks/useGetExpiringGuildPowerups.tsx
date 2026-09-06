// === Module 12558: useGetExpiringGuildPowerups ===

// Module 12558 (useGetExpiringGuildPowerups)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12493 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default function useGetExpiringGuildPowerups(arg0) {
  _require = arg0;
  const items = [GuildPowerupsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const items1 = [stateFromStores];
  return noop.useMemo(() => {
    if (null == stateFromStores) {
      return [];
    } else {
      const allPowerups = tmp.allPowerups;
      const _Object = Object;
      const expiringGuildEntitlements = getExpiringGuildEntitlements.getExpiringGuildEntitlements(Object.values(tmp.unlockedPowerups));
      const mapped = expiringGuildEntitlements.map((item) => allPowerups[item.sku_id]);
      return mapped.filter(GlobalUtils.isNotNullish);
    }
  }, items1);
};