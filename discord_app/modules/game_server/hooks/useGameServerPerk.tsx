// discord_app/modules/game_server/hooks/useGameServerPerk.tsx
import intl3 from "../../../intl/index.native.tsx";
import _modDef2947 from "../GameServer.messages.js";
import GuildPowerupsConstants from "../../premium/powerups/constants/GuildPowerupsConstants.tsx";
import GameServerConstants from "../GameServerConstants.tsx";
import useGameServerFeaturedGameNamesDefault from "useGameServerFeaturedGameNames.tsx";
import _modDef12237 from "../../../../discord_assets/assets/premium/game_servers/game_server_tile.png.js";
import react from "../../../../_runtime/00019_react.js";
import GameServerStore from "../GameServerStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const skuId = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let gameName;
      let gameName2;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(11);
      const obj2 = require("GameServerExperiment");
      const gameServerEnabled = obj2.useGameServerEnabled(arg0, "useGameServerPerk");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameServerStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          return GameServerStore.getLowestGameCostForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      ({ gameName, gameName2 } = useGameServerFeaturedGameNamesDefault());
      let tmp11 = null;
      useGameServerFeaturedGameNamesDefault();
      if (gameServerEnabled) {
        tmp11 = null;
        if (null != stateFromStores) {
          let tmp12;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(_modDef2947["B3OfL/"]);
            cResult[3] = stringResult;
            tmp12 = stringResult;
          } else {
            tmp12 = cResult[3];
          }
          if (cResult[4] === gameName) {
            let tmp14;
            let tmp16;
            if (cResult[5] === gameName2) {
              tmp14 = cResult[6];
            }
            const _Symbol2 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const items1 = [];
              cResult[7] = items1;
              tmp16 = items1;
            } else {
              tmp16 = cResult[7];
            }
            if (cResult[8] === stateFromStores) {
              let tmp17;
              if (cResult[9] === tmp14) {
                tmp17 = cResult[10];
              }
              tmp11 = tmp17;
            }
            const obj3 = {
              skuId,
              title: tmp12,
              description: tmp14,
              cost: stateFromStores,
              dependencies: tmp16,
              type: GuildPowerupType.PERK,
              animatedImageUrl: _modDef12237,
              staticImageUrl: _modDef12237,
            };
            cResult[8] = stateFromStores;
            cResult[9] = tmp14;
            cResult[10] = obj3;
            tmp17 = obj3;
          }
          const intl2 = tmp(1126).intl;
          const obj4 = { gameName, gameName2 };
          const formatResult = intl2.format(_modDef2947["+UqyGU"], obj4);
          cResult[4] = gameName;
          cResult[5] = gameName2;
          cResult[6] = formatResult;
          tmp14 = formatResult;
        }
      }
      return tmp11;
    }
  : (arg0) => {
      let closure_0;
      let gameName2;
      let stateFromStores;
      _require = arg0;
      let obj = require("GameServerExperiment");
      const gameServerEnabled = obj.useGameServerEnabled(arg0, "useGameServerPerk");
      let obj2 = require("get initialized");
      const items = [gameName2];
      stateFromStores = obj2.useStateFromStores(items, () => GameServerStore.getLowestGameCostForGuild(closure_0));
      const tmp3 = gameServerEnabled(stateFromStores[8])();
      const gameName = tmp3.gameName;
      gameName2 = tmp3.gameName2;
      const items1 = [gameServerEnabled, stateFromStores, gameName, gameName2];
      return gameName.useMemo(() => {
        let intl;
        let intl2;
        let obj2;
        let tmp = null;
        if (gameServerEnabled) {
          tmp = null;
          if (null != stateFromStores) {
            const obj = {
              skuId,
              title: intl.string(_modDef2947["B3OfL/"]),
              description: intl2.format(_modDef2947["+UqyGU"], obj2),
              cost: tmp2,
              dependencies: [],
              type: GuildPowerupType.PERK,
              animatedImageUrl: _modDef12237,
              staticImageUrl: _modDef12237,
            };
            intl = intl3.intl;
            intl2 = intl3.intl;
            tmp = obj;
            obj2 = { gameName, gameName2 };
          }
        }
        return tmp;
      }, items1);
    };
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPerk.tsx");

export default tmp2;
