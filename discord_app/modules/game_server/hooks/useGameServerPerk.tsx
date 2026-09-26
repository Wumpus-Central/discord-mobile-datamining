// === Module 12072: useGameServerPerk ===

// Module 12072 (useGameServerPerk)
import util from "util" /* 1115 */;
import _modDef2941 from "module_2941" /* 2941 */;
import _modDef12074 from "module_12074" /* 12074 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4744 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(4725).GAME_SERVER_POWERUP_SKU_ID;
const GuildPowerupType = fn(4724).GuildPowerupType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPerk.tsx");

export default function useGameServerPerk(guildId) {
  _require = guildId;
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(guildId, "useGameServerPerk");
  let obj = require("GameServerExperiment");
  const items = [gameName2];
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
        obj.title = intl.string(_modDef2941["B3OfL/"]);
        const intl2 = util.intl;
        const obj2 = { gameName, gameName2 };
        obj.description = intl2.format(_modDef2941["+UqyGU"], obj2);
        obj.cost = tmp2;
        obj.dependencies = [];
        obj.type = GuildPowerupType.PERK;
        obj.animatedImageUrl = _modDef12074;
        obj.staticImageUrl = _modDef12074;
        tmp = obj;
      }
    }
    return tmp;
  }, items1);
};