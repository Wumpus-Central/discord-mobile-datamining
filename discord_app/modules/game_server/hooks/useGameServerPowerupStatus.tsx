// discord_app/modules/game_server/hooks/useGameServerPowerupStatus.tsx
import intl2 from "../../../intl/index.native.tsx";
import _modDef2525 from "../../premium/powerups/GuildPowerups.messages.js";
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements.tsx";
import react from "../../../../_runtime/00019_react.js";
import GameServerStore from "../GameServerStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let intl;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameServerStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = require("get initialized");
      let stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      const arr3 = useGameServerGetExpiringEntitlementsDefault(arg0);
      const _Object = Object;
      if (stateFromStores == null) {
        stateFromStores = {};
      }
      let tmp9;
      if (0 !== values(stateFromStores).length) {
        if (arr3.length > 0) {
          let tmp11;
          if (cResult[4] !== arr3[0].ends_at) {
            const obj2 = { type: "expiring", expiringAt: arr3[0].ends_at };
            cResult[4] = arr3[0].ends_at;
            cResult[5] = obj2;
            tmp11 = obj2;
          } else {
            tmp11 = cResult[5];
          }
          tmp9 = tmp11;
        } else {
          let tmp10;
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { type: "active", statusText: intl.string(_modDef2525.FFLkmx) };
            intl = tmp(1126).intl;
            cResult[6] = obj3;
            tmp10 = obj3;
          } else {
            tmp10 = cResult[6];
          }
          tmp9 = tmp10;
        }
      }
      return tmp9;
    }
  : (arg0) => {
      let closure_0;
      let length;
      _require = arg0;
      let obj = require("get initialized");
      const items = [GameServerStore];
      const items1 = [arg0];
      const stateFromStores = obj.useStateFromStores(
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
      const tmp2 = stateFromStores(12218)(arg0);
      dependencyMap = tmp2;
      const items2 = [tmp2, stateFromStores];
      return react.useMemo(() => {
        let intl;
        let obj = stateFromStores;
        const _Object = Object;
        if (stateFromStores == null) {
          obj = {};
        }
        if (0 !== values(obj).length) {
          let obj3;
          if (length.length > 0) {
            obj3 = { type: "expiring", expiringAt: tmp[0].ends_at };
            const obj2 = { type: "expiring", expiringAt: tmp[0].ends_at };
          } else {
            obj3 = { type: "active", statusText: intl.string(_modDef2525.FFLkmx) };
            intl = intl2.intl;
          }
          return obj3;
        }
      }, items2);
    };
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPowerupStatus.tsx");

export default tmp2;
