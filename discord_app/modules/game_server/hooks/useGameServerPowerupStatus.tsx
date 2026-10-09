// discord_app/modules/game_server/hooks/useGameServerPowerupStatus.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2597 from "../../premium/powerups/GuildPowerups.messages.js";
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameServerStore from "../GameServerStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPowerupStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGameServerPowerupStatus(arg0) {
      _require = arg0;
      const cResult = require("c").c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameServerStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          const stateForGuild = GameServerStore.getStateForGuild(closure_0);
          let entitlements;
          if (stateForGuild != null) {
            entitlements = stateForGuild.entitlements;
          }
          return entitlements;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      let stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
      let ends_at = useGameServerGetExpiringEntitlementsDefault(arg0);
      if (stateFromStores == null) {
        stateFromStores = {};
      }
      let tmp9;
      if (0 !== Object.values(stateFromStores).length) {
        if (ends_at.length > 0) {
          if (cResult[4] !== ends_at[0].ends_at) {
            const obj2 = { type: "expiring", expiringAt: ends_at[0].ends_at };
            ends_at = ends_at[0].ends_at;
            cResult[4] = ends_at;
            cResult[5] = obj2;
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { type: "active", statusText: null };
            const intl = tmp(1126).intl;
            obj3.statusText = intl.string(_modDef2597.FFLkmx);
            cResult[6] = obj3;
            let tmp10 = obj3;
          } else {
            tmp10 = cResult[6];
          }
          tmp9 = tmp10;
        }
      }
      return tmp9;
    }
  : function useGameServerPowerupStatus(arg0) {
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
      const tmp2 = stateFromStores(12251)(arg0);
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
            obj3.statusText = intl.string(_modDef2597.FFLkmx);
          }
          return obj3;
        }
      }, items2);
    };
