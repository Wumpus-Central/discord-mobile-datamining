// discord_app/modules/game_server/hooks/useGameServerGetExpiringEntitlements.tsx
import getExpiringGuildEntitlements from "../../premium/powerups/utils/getExpiringGuildEntitlements.tsx";
import react from "../../../../_runtime/00019_react.js";
import GameServerStore from "../GameServerStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp10;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameServerStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return GameServerStore.getStateForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let entitlements;
      const tmp8 = cResult[3];
      if (stateFromStores != null) {
        entitlements = stateFromStores.entitlements;
      }
      if (tmp8 !== entitlements) {
        let expiringGuildEntitlements;
        let entitlements1;
        const _Object = Object;
        if (stateFromStores != null) {
          entitlements1 = stateFromStores.entitlements;
        }
        if (entitlements1 == null) {
          entitlements1 = {};
        }
        const values2 = values(entitlements1);
        if (0 !== values2.length) {
          const tmpResult2 = require("getExpiringGuildEntitlements");
          expiringGuildEntitlements = tmpResult2.getExpiringGuildEntitlements(values2);
        } else {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [];
            cResult[5] = items1;
            expiringGuildEntitlements = items1;
          } else {
            expiringGuildEntitlements = cResult[5];
          }
        }
        let entitlements2;
        if (stateFromStores != null) {
          entitlements2 = stateFromStores.entitlements;
        }
        cResult[3] = entitlements2;
        cResult[4] = expiringGuildEntitlements;
        tmp10 = expiringGuildEntitlements;
      } else {
        tmp10 = cResult[4];
      }
      return tmp10;
    }
  : (arg0) => {
      let closure_0;
      let stateFromStores;
      _require = arg0;
      let items = [GameServerStore];
      const obj = require("get initialized");
      stateFromStores = obj.useStateFromStores(items, () => GameServerStore.getStateForGuild(closure_0));
      let entitlements;
      const useMemo = react.useMemo;
      if (stateFromStores != null) {
        entitlements = stateFromStores.entitlements;
      }
      const items1 = [entitlements];
      return useMemo(() => {
        let items;
        let entitlements;
        const _Object = Object;
        if (stateFromStores != null) {
          entitlements = stateFromStores.entitlements;
        }
        if (entitlements == null) {
          entitlements = {};
        }
        const values2 = values(entitlements);
        if (0 === values2.length) {
          items = [];
        } else {
          const obj2 = getExpiringGuildEntitlements;
          items = obj2.getExpiringGuildEntitlements(values2);
        }
        return items;
      }, items1);
    };
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerGetExpiringEntitlements.tsx");

export default tmp2;
