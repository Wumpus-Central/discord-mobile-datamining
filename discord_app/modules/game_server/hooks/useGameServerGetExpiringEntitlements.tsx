// discord_app/modules/game_server/hooks/useGameServerGetExpiringEntitlements.tsx
import getExpiringGuildEntitlements from "../../premium/powerups/utils/getExpiringGuildEntitlements.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameServerStore from "../GameServerStore.tsx";

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
}
