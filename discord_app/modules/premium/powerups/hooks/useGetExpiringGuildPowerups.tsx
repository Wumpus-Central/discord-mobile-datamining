// === Module 12232: useGetExpiringGuildPowerups ===

// Module 12232 (useGetExpiringGuildPowerups)
import GlobalUtils from "GlobalUtils" /* 1375 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12167 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4773 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let allPowerups;
  let closure_0;
  let first;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (null != stateFromStores) {
    let tmp10;
    allPowerups = stateFromStores.allPowerups;
    const unlockedPowerups = stateFromStores.unlockedPowerups;
    if (cResult[4] === allPowerups) {
      let tmp9;
      if (cResult[5] === unlockedPowerups) {
        tmp9 = cResult[6];
      }
      tmp8 = tmp9;
    }
    const _Object = Object;
    const tmpResult2 = require("getExpiringGuildEntitlements");
    const expiringGuildEntitlements = tmpResult2.getExpiringGuildEntitlements(Object.values(unlockedPowerups));
    if (cResult[7] !== allPowerups) {
      const fn2 = function _(arg0) {
        return allPowerups[arg0.sku_id];
      };
      cResult[7] = allPowerups;
      cResult[8] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[8];
    }
    const mapped = expiringGuildEntitlements.map(tmp10);
    const found = mapped.filter(tmp(tmp2[6]).isNotNullish);
    cResult[4] = allPowerups;
    cResult[5] = unlockedPowerups;
    cResult[6] = found;
    tmp9 = found;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [];
      cResult[3] = items1;
      tmp8 = items1;
    } else {
      tmp8 = cResult[3];
    }
  }
  return tmp8;
}) : ((arg0) => {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildPowerupsStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const items1 = [stateFromStores];
  return react.useMemo(() => {
    if (null == stateFromStores) {
      return [];
    } else {
      const allPowerups = stateFromStores.allPowerups;
      const unlockedPowerups = stateFromStores.unlockedPowerups;
      const _Object = Object;
      const obj = getExpiringGuildEntitlements;
      const expiringGuildEntitlements = obj.getExpiringGuildEntitlements(Object.values(unlockedPowerups));
      const mapped = expiringGuildEntitlements.map((item) => allPowerups[item.sku_id]);
      return mapped.filter(GlobalUtils.isNotNullish);
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default tmp2;