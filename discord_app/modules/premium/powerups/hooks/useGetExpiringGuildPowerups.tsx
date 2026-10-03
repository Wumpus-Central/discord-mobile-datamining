// discord_app/modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import getExpiringGuildEntitlements from "../utils/getExpiringGuildEntitlements.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      let found = allPowerups;
      const cResult = require("c").c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildPowerupsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return GuildPowerupsStore.getStateForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (null != stateFromStores) {
        allPowerups = stateFromStores.allPowerups;
        const unlockedPowerups = stateFromStores.unlockedPowerups;
        const _Object = Object;
        const expiringGuildEntitlements = tmp(found[5]).getExpiringGuildEntitlements(Object.values(unlockedPowerups));
        if (cResult[7] !== allPowerups) {
          const fn2 = function _(arg0) {
            return allPowerups[arg0.sku_id];
          };
          cResult[7] = allPowerups;
          cResult[8] = fn2;
          let tmp9 = fn2;
        } else {
          tmp9 = cResult[8];
        }
        const mapped = expiringGuildEntitlements.map(tmp9);
        found = mapped.filter(tmp(found[6]).isNotNullish);
        cResult[4] = allPowerups;
        cResult[5] = unlockedPowerups;
        cResult[6] = found;
        const tmpResult2 = tmp(found[5]);
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [];
          cResult[3] = items1;
          let tmp8 = items1;
        } else {
          tmp8 = cResult[3];
        }
        return tmp8;
      }
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      _require = arg0;
      const items = [GuildPowerupsStore];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildPowerupsStore.getStateForGuild(closure_0),
      );
      const items1 = [stateFromStores];
      return noop.useMemo(() => {
        if (null == stateFromStores) {
          return [];
        } else {
          const allPowerups = stateFromStores.allPowerups;
          const _Object = Object;
          const expiringGuildEntitlements = getExpiringGuildEntitlements.getExpiringGuildEntitlements(
            Object.values(stateFromStores.unlockedPowerups),
          );
          const mapped = expiringGuildEntitlements.map((item) => allPowerups[item.sku_id]);
          return mapped.filter(GlobalUtils.isNotNullish);
        }
      }, items1);
    };
