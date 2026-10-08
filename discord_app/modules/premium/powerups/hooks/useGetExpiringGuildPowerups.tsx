// === Module 12311: useGetExpiringGuildPowerups ===

// Module 12311 (useGetExpiringGuildPowerups)
import GlobalUtils from "GlobalUtils" /* 1387 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12246 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4967 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGetExpiringGuildPowerups(arg0) {
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
      class G {
        constructor(arg0) {
          return allPowerups[arg0.sku_id];
        }
      }
      cResult[7] = allPowerups;
      cResult[8] = G;
    } else {
      class G {
        constructor(arg0) {
          return allPowerups[arg0.sku_id];
        }
      }
    }
    const mapped = expiringGuildEntitlements.map(G);
    found = mapped.filter(tmp(found[6]).isNotNullish);
    cResult[4] = allPowerups;
    cResult[5] = unlockedPowerups;
    cResult[6] = found;
    const tmpResult2 = tmp(found[5]);
  } else {
    class G {
      constructor(arg0) {
        return allPowerups[arg0.sku_id];
      }
    }
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          return allPowerups[arg0.sku_id];
        }
      }
      cResult[3] = tmp9;
    } else {
      class G {
        constructor(arg0) {
          return allPowerups[arg0.sku_id];
        }
      }
    }
    return tmp9;
  }
  const tmpResult = require("initialize");
}) : (function useGetExpiringGuildPowerups(arg0) {
  _require = arg0;
  const items = [GuildPowerupsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const items1 = [stateFromStores];
  return noop.useMemo(() => {
    if (null == stateFromStores) {
      return [];
    } else {
      const allPowerups = stateFromStores.allPowerups;
      const _Object = Object;
      const expiringGuildEntitlements = getExpiringGuildEntitlements.getExpiringGuildEntitlements(Object.values(stateFromStores.unlockedPowerups));
      const mapped = expiringGuildEntitlements.map((item) => allPowerups[item.sku_id]);
      return mapped.filter(GlobalUtils.isNotNullish);
    }
  }, items1);
});