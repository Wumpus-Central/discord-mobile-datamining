// discord_app/modules/game_server/hooks/useGameServerPerk.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3019 from "../GameServer.messages.js";
import useGameServerFeaturedGameNamesDefault from "useGameServerFeaturedGameNames.tsx";
import _modDef12270 from "../../../../discord_assets/assets/premium/game_servers/game_server_tile.png.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GameServerStore from "../GameServerStore.tsx";

const require = globalThis.__r;

require = fn;
const skuId = fn(4970).GAME_SERVER_POWERUP_SKU_ID;
const GuildPowerupType = fn(4969).GuildPowerupType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPerk.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGameServerPerk(arg0) {
      _require = arg0;
      let tmp9Result = dependencyMap;
      const cResult = require("c").c(11);
      const obj = require("c");
      const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(arg0, "useGameServerPerk");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameServerStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          return GameServerStore.getLowestGameCostForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj2 = require("GameServerExperiment");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      const tmpResult = require("initialize");
      ({ gameName, gameName2 } = useGameServerFeaturedGameNamesDefault());
      let tmp11 = null;
      if (gameServerEnabled) {
        tmp11 = null;
        if (null != stateFromStores) {
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(_modDef3019["B3OfL/"]);
            cResult[3] = stringResult;
            let tmp12 = stringResult;
          } else {
            tmp12 = cResult[3];
          }
          if (cResult[4] === gameName) {
            if (cResult[5] === gameName2) {
              let tmp14 = cResult[6];
            }
            const _Symbol2 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const items1 = [];
              cResult[7] = items1;
              let tmp16 = items1;
            } else {
              tmp16 = cResult[7];
            }
            if (cResult[8] === stateFromStores) {
            }
            const obj3 = {
              skuId,
              title: tmp12,
              description: tmp14,
              cost: stateFromStores,
              dependencies: tmp16,
              type: GuildPowerupType.PERK,
              animatedImageUrl: _modDef12270,
              staticImageUrl: null,
            };
            tmp9Result = _modDef12270;
            obj3.staticImageUrl = tmp9Result;
            cResult[8] = stateFromStores;
            cResult[9] = tmp14;
            cResult[10] = obj3;
          }
          const intl2 = tmp(1126).intl;
          const obj4 = { gameName, gameName2 };
          const formatResult = intl2.format(_modDef3019["+UqyGU"], obj4);
          cResult[4] = gameName;
          cResult[5] = gameName2;
          cResult[6] = formatResult;
          tmp14 = formatResult;
        }
      }
      return tmp11;
    }
  : function useGameServerPerk(arg0) {
      _require = arg0;
      const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(arg0, "useGameServerPerk");
      let obj = require("GameServerExperiment");
      const items = [gameName2];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        GameServerStore.getLowestGameCostForGuild(closure_0),
      );
      const tmp3 = gameServerEnabled(stateFromStores[8])();
      const gameName = tmp3.gameName;
      gameName2 = tmp3.gameName2;
      const items1 = [gameServerEnabled, stateFromStores, gameName, gameName2];
      return gameName.useMemo(() => {
        let tmp = null;
        if (gameServerEnabled) {
          tmp = null;
          if (null != stateFromStores) {
            const obj = {
              skuId,
              title: null,
              description: null,
              cost: null,
              dependencies: null,
              type: null,
              animatedImageUrl: null,
              staticImageUrl: null,
            };
            const intl = util.intl;
            obj.title = intl.string(_modDef3019["B3OfL/"]);
            const intl2 = util.intl;
            const obj2 = { gameName, gameName2 };
            obj.description = intl2.format(_modDef3019["+UqyGU"], obj2);
            obj.cost = tmp2;
            obj.dependencies = [];
            obj.type = GuildPowerupType.PERK;
            obj.animatedImageUrl = _modDef12270;
            obj.staticImageUrl = _modDef12270;
            tmp = obj;
          }
        }
        return tmp;
      }, items1);
    };
