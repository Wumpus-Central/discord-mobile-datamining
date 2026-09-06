// === Module 12575: useGameServerPowerupStatus ===

// Module 12575 (useGameServerPowerupStatus)
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4470 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPowerupStatus.tsx");

export default function useGameServerPowerupStatus(arg0) {
  _require = arg0;
  const items = [GameServerStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const stateForGuild = GameServerStore.getStateForGuild(closure_0);
    let entitlements;
    if (stateForGuild != null) {
      entitlements = stateForGuild.entitlements;
    }
    return entitlements;
  }, items1);
  const tmp2 = stateFromStores(12559)(arg0);
  dependencyMap = tmp2;
  const items2 = [tmp2, stateFromStores];
  return noop.useMemo(() => {
    let obj = stateFromStores;
    if (stateFromStores == null) {
      obj = {};
    }
    if (0 !== Object.values(obj).length) {
      if (length.length > 0) {
        obj = { type: "expiring", expiringAt: tmp[0].ends_at };
      } else {
        obj = { type: "active", statusText: null };
        const intl = util.intl;
        obj.statusText = intl.string(_modDef2428.FFLkmx);
      }
      return obj;
    }
  }, items2);
};