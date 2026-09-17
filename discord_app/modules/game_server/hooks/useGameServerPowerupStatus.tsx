// === Module 12727: useGameServerPowerupStatus ===

// Module 12727 (useGameServerPowerupStatus)
import util from "util" /* 1115 */;
import _modDef2429 from "module_2429" /* 2429 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4549 */;

const require = globalThis.__r;

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
  const tmp2 = stateFromStores(12711)(arg0);
  dependencyMap = tmp2;
  const items2 = [tmp2, stateFromStores];
  return noop.useMemo(() => {
    let obj = stateFromStores;
    if (stateFromStores == null) {
      obj = {};
    }
    if (0 !== Object.values(obj).length) {
      if (length.length > 0) {
        const obj2 = { type: "expiring", expiringAt: tmp[0].ends_at };
        let obj3 = obj2;
      } else {
        obj3 = { type: "active", statusText: null };
        const intl = util.intl;
        obj3.statusText = intl.string(_modDef2429.FFLkmx);
      }
      return obj3;
    }
  }, items2);
};