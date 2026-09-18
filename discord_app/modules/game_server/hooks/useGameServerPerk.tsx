// === Module 12819: useGameServerPerk ===

// Module 12819 (useGameServerPerk)
import util from "util" /* 1115 */;
import _modDef2934 from "module_2934" /* 2934 */;
import _modDef12821 from "module_12821" /* 12821 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4631 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(4612).GAME_SERVER_POWERUP_SKU_ID;
const GuildPowerupType = fn(4611).GuildPowerupType;
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
        obj.title = intl.string(_modDef2934["B3OfL/"]);
        const intl2 = util.intl;
        const obj2 = { gameName, gameName2 };
        obj.description = intl2.format(_modDef2934["+UqyGU"], obj2);
        obj.cost = tmp2;
        obj.dependencies = [];
        obj.type = GuildPowerupType.PERK;
        obj.animatedImageUrl = _modDef12821;
        obj.staticImageUrl = _modDef12821;
        tmp = obj;
      }
    }
    return tmp;
  }, items1);
};