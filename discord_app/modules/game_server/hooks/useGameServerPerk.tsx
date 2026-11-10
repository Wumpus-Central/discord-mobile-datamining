// === Module 14419: useGameServerPerk ===

// Module 14419 (useGameServerPerk)
import util from "util" /* 1113 */;
import _modDef3120 from "module_3120" /* 3120 */;
import _modDef14421 from "module_14421" /* 14421 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 8546 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(5349).GAME_SERVER_POWERUP_SKU_ID;
const GuildPowerupType = fn(5348).GuildPowerupType;
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
        obj.title = intl.string(_modDef3120["B3OfL/"]);
        const intl2 = util.intl;
        const obj2 = { gameName, gameName2 };
        obj.description = intl2.format(_modDef3120["+UqyGU"], obj2);
        obj.cost = tmp2;
        obj.dependencies = [];
        obj.type = GuildPowerupType.PERK;
        obj.animatedImageUrl = _modDef14421;
        obj.staticImageUrl = _modDef14421;
        tmp = obj;
      }
    }
    return tmp;
  }, items1);
};