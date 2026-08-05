// discord_app/modules/game_server/hooks/useGameServerPowerupStatus.tsx
import noop from "noop";
import handleGameServerInstanceCreated from "handleGameServerInstanceCreated";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/game_server/hooks/useGameServerPowerupStatus.tsx");

export default function useGameServerPowerupStatus(arg0) {
  const _require = arg0;
  const items = [handleGameServerInstanceCreated];
  const items1 = [arg0];
  const stateFromStores = _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const stateForGuild = outer1_4.getStateForGuild(closure_0);
    let entitlements;
    if (stateForGuild != null) {
      entitlements = stateForGuild.entitlements;
    }
    return entitlements;
  }, items1);
  const tmp2 = stateFromStores(11830)(arg0);
  const dependencyMap = tmp2;
  const items2 = [tmp2, stateFromStores];
  return React.useMemo(() => {
    let obj = stateFromStores;
    if (stateFromStores == null) {
      obj = {};
    }
    if (0 !== Object.values(obj).length) {
      if (tmp2.length > 0) {
        obj = { type: "expiring", expiringAt: null };
        obj[1] = tmp[0].ends_at;
      } else {
        obj = { type: "active", statusText: null };
        const intl = callback(tmp2[4]).intl;
        obj[1] = intl.string(stateFromStores(callback[5]).FFLkmx);
      }
      return obj;
    }
  }, items2);
};