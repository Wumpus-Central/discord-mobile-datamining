// discord_app/modules/game_server/hooks/useGameServerPerk.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleGameServerInstanceCreated" /* 4282 */;
import { GAME_SERVER_POWERUP_SKU_ID as closure_5 } from "str11" /* 4263 */;
import { GuildPowerupType } from "BoostedGuildTiers" /* 4262 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_server/hooks/useGameServerPerk.tsx");

export default function useGameServerPerk(guildId) {
  const _require = guildId;
  const gameServerEnabled = _require(stateFromStores[4]).useGameServerEnabled(guildId, "useGameServerPerk");
  let obj = _require(stateFromStores[4]);
  const items = [gameName2];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => gameName2.getLowestGameCostForGuild(closure_0));
  const tmp3 = gameServerEnabled(stateFromStores[6])();
  const gameName = tmp3.gameName;
  gameName2 = tmp3.gameName2;
  const items1 = [gameServerEnabled, stateFromStores, gameName, gameName2];
  return gameName.useMemo(() => {
    let tmp = null;
    if (gameServerEnabled) {
      tmp = null;
      if (null != stateFromStores) {
        let obj = { skuId: null, title: null, description: null, cost: null, dependencies: null, type: null, animatedImageUrl: null, staticImageUrl: null };
        obj[0] = closure_1_5;
        const intl = guildId(stateFromStores[7]).intl;
        obj[1] = intl.string(gameServerEnabled(stateFromStores[8])["B3OfL/"]);
        const intl2 = guildId(stateFromStores[7]).intl;
        obj = { gameName: null, gameName2: null };
        obj[0] = gameName;
        obj[1] = gameName2;
        obj[2] = intl2.format(gameServerEnabled(stateFromStores[8])["+UqyGU"], obj);
        obj[3] = tmp2;
        obj[4] = [];
        obj[5] = closure_1_6.PERK;
        obj[6] = gameServerEnabled(stateFromStores[9]);
        obj[7] = gameServerEnabled(stateFromStores[9]);
        tmp = obj;
      }
    }
    return tmp;
  }, items1);
};