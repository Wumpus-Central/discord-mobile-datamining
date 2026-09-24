// discord_app/modules/game_server/hooks/useGameServerPowerupStatus.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2518 from "../../premium/powerups/GuildPowerups.messages.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GameServerStore from "../GameServerStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPowerupStatus.tsx");

export default function useGameServerPowerupStatus(arg0) {
  _require = arg0;
  const items = [GameServerStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const stateForGuild = GameServerStore.getStateForGuild(closure_0);
      let entitlements;
      if (stateForGuild != null) {
        entitlements = stateForGuild.entitlements;
      }
      return entitlements;
    },
    items1,
  );
  const tmp2 = stateFromStores(12908)(arg0);
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
        obj3.statusText = intl.string(_modDef2518.FFLkmx);
      }
      return obj3;
    }
  }, items2);
}
