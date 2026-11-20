// === Module 13346: useGameServerPerk ===

// Module 13346 (useGameServerPerk)
import util from "util" /* 1112 */;
import _modDef3213 from "module_3213" /* 3213 */;
import _modDef13348 from "module_13348" /* 13348 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 8630 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(8213).GAME_SERVER_POWERUP_SKU_ID;
const GuildPowerupType = fn(8212).GuildPowerupType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPerk.tsx");

export default function useGameServerPerk(guildId) {
  _require = guildId;
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(guildId, "useGameServerPerk");
  let obj = require("GameServerExperiment");
  items = [gameName2];
  stateFromStores = require("initialize").useStateFromStores(items, () => GameServerStore.getLowestGameCostForGuild(closure_0));
  const tmp3 = gameServerEnabled(stateFromStores[6])();
  const gameName = tmp3.gameName;
  gameName2 = tmp3.gameName2;
  const items1 = [gameServerEnabled, stateFromStores, gameName, gameName2];
  return gameName.useMemo(() => {
    let tmp = null;
    if (gameServerEnabled) {
      tmp = null;
      if (null != stateFromStores) {
        const obj = { skuId, title: null, description: null, cost: null, dependencies: null, type: null, animatedImageUrl: null, staticImageUrl: null };
        const intl = util.intl;
        obj.title = intl.string(_modDef3213["B3OfL/"]);
        const intl2 = util.intl;
        const obj2 = { gameName, gameName2 };
        obj.description = intl2.format(_modDef3213["+UqyGU"], obj2);
        obj.cost = tmp2;
        obj.dependencies = [];
        obj.type = GuildPowerupType.PERK;
        obj.animatedImageUrl = _modDef13348;
        obj.staticImageUrl = _modDef13348;
        tmp = obj;
      }
    }
    return tmp;
  }, items1);
};