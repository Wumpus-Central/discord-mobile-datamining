// === Module 12117: useGameServerGetExpiringEntitlements ===

// Module 12117 (useGameServerGetExpiringEntitlements)
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleGameServerInstanceCreated" /* 4287 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_server/hooks/useGameServerGetExpiringEntitlements.tsx");

export default function useGameServerGetExpiringEntitlements(arg0) {
  const _require = arg0;
  let items = [closure_3];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => closure_1_3.getStateForGuild(closure_0));
  let entitlements;
  if (stateFromStores != null) {
    entitlements = stateFromStores.entitlements;
  }
  const items1 = [entitlements];
  return React.useMemo(() => {
    let entitlements;
    if (stateFromStores != null) {
      entitlements = stateFromStores.entitlements;
    }
    if (entitlements == null) {
      entitlements = {};
    }
    const values = Object.values(entitlements);
    if (0 === values.length) {
      let items = [];
    } else {
      items = callback(stateFromStores[3]).getExpiringGuildEntitlements(values);
      const obj2 = callback(stateFromStores[3]);
    }
    return items;
  }, items1);
};