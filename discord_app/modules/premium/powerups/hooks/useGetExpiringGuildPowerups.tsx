// discord_app/modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import getExpiringGuildEntitlements from "../utils/getExpiringGuildEntitlements.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default function useGetExpiringGuildPowerups(arg0) {
  _require = arg0;
  const items = [GuildPowerupsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildPowerupsStore.getStateForGuild(closure_0),
  );
  const items1 = [stateFromStores];
  return noop.useMemo(() => {
    if (null == stateFromStores) {
      return [];
    } else {
      const allPowerups = stateFromStores.allPowerups;
      const _Object = Object;
      const expiringGuildEntitlements = getExpiringGuildEntitlements.getExpiringGuildEntitlements(
        Object.values(stateFromStores.unlockedPowerups),
      );
      const mapped = expiringGuildEntitlements.map((item) => allPowerups[item.sku_id]);
      return mapped.filter(GlobalUtils.isNotNullish);
    }
  }, items1);
}
