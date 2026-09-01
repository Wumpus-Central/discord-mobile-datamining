// discord_app/modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../GuildPowerupsStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default function useGetExpiringGuildPowerups(arg0) {
  const _require = arg0;
  const items = [closure_3];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () =>
    closure_1_3.getStateForGuild(closure_0),
  );
  const items1 = [stateFromStores];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      return [];
    } else {
      const allPowerups = tmp.allPowerups;
      const _Object = Object;
      const expiringGuildEntitlements = callback(stateFromStores[3]).getExpiringGuildEntitlements(
        Object.values(tmp.unlockedPowerups),
      );
      const mapped = expiringGuildEntitlements.map((arg0) => allPowerups[arg0.sku_id]);
      return mapped.filter(callback(stateFromStores[4]).isNotNullish);
    }
  }, items1);
}
