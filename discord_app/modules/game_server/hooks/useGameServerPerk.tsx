// === Module 13376: useGameServerPerk ===

// Module 13376 (useGameServerPerk)
import util from "util" /* 1113 */;
import _modDef3211 from "module_3211" /* 3211 */;
import _modDef13378 from "module_13378" /* 13378 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 8631 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(8214).GAME_SERVER_POWERUP_SKU_ID;
const GuildPowerupType = fn(8213).GuildPowerupType;
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
        obj.title = intl.string(_modDef3211["B3OfL/"]);
        const intl2 = util.intl;
        const obj2 = { gameName, gameName2 };
        obj.description = intl2.format(_modDef3211["+UqyGU"], obj2);
        obj.cost = tmp2;
        obj.dependencies = [];
        obj.type = GuildPowerupType.PERK;
        obj.animatedImageUrl = _modDef13378;
        obj.staticImageUrl = _modDef13378;
        tmp = obj;
      }
    }
    return tmp;
  }, items1);
};