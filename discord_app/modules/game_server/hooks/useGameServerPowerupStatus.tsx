// === Module 12575: useGameServerPowerupStatus ===

// Module 12575 (useGameServerPowerupStatus)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleGameServerInstanceCreated" /* 4470 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_server/hooks/useGameServerPowerupStatus.tsx");

export default function useGameServerPowerupStatus(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const items1 = [arg0];
  const stateFromStores = _require(504).useStateFromStores(items, () => {
    const stateForGuild = closure_1_4.getStateForGuild(closure_0);
    let entitlements;
    if (stateForGuild != null) {
      entitlements = stateForGuild.entitlements;
    }
    return entitlements;
  }, items1);
  const tmp2 = stateFromStores(12559)(arg0);
  dependencyMap = tmp2;
  const items2 = [tmp2, stateFromStores];
  return React.useMemo(() => {
    let obj = stateFromStores;
    if (stateFromStores == null) {
      obj = {};
    }
    if (0 !== Object.values(obj).length) {
      if (length.length > 0) {
        obj = { type: "expiring", expiringAt: null };
        obj[1] = tmp[0].ends_at;
      } else {
        obj = { type: "active", statusText: null };
        const intl = callback(length[4]).intl;
        obj[1] = intl.string(stateFromStores(length[5]).FFLkmx);
      }
      return obj;
    }
  }, items2);
};