// === Module 12559: useGameServerGetExpiringEntitlements ===

// Module 12559 (useGameServerGetExpiringEntitlements)
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12493 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4470 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerGetExpiringEntitlements.tsx");

export default function useGameServerGetExpiringEntitlements(arg0) {
  _require = arg0;
  let items = [GameServerStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GameServerStore.getStateForGuild(closure_0));
  let entitlements;
  if (stateFromStores != null) {
    entitlements = stateFromStores.entitlements;
  }
  const items1 = [entitlements];
  return noop.useMemo(() => {
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
      items = getExpiringGuildEntitlements.getExpiringGuildEntitlements(values);
    }
    return items;
  }, items1);
};