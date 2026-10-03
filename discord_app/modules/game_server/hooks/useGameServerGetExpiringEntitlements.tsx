// discord_app/modules/game_server/hooks/useGameServerGetExpiringEntitlements.tsx
import getExpiringGuildEntitlements from "../../premium/powerups/utils/getExpiringGuildEntitlements.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameServerStore from "../GameServerStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerGetExpiringEntitlements.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameServerStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return GameServerStore.getStateForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      let entitlements;
      if (stateFromStores != null) {
        entitlements = stateFromStores.entitlements;
      }
      if (cResult[3] !== entitlements) {
        let entitlements1;
        if (stateFromStores != null) {
          entitlements1 = stateFromStores.entitlements;
        }
        if (entitlements1 == null) {
          entitlements1 = {};
        }
        const values = Object.values(entitlements1);
        if (0 !== values.length) {
          let expiringGuildEntitlements = tmp(12152).getExpiringGuildEntitlements(values);
          const tmpResult2 = tmp(12152);
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
        let tmp9 = expiringGuildEntitlements;
      } else {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  : (arg0) => {
      _require = arg0;
      let items = [GameServerStore];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        GameServerStore.getStateForGuild(closure_0),
      );
      let entitlements;
      if (stateFromStores != null) {
        entitlements = stateFromStores.entitlements;
      }
      const items1 = [entitlements];
      return noop.useMemo(() => {
        let entitlements;
        if (stateFromStores != null) {
          entitlements = stateFromStores.entitlements;
        }
        if (entitlements == null) {
          entitlements = {};
        }
        const values = Object.values(entitlements);
        if (0 === values.length) {
          let items = [];
        } else {
          items = getExpiringGuildEntitlements.getExpiringGuildEntitlements(values);
        }
        return items;
      }, items1);
    };
