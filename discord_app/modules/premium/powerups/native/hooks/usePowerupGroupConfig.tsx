// === Module 12223: usePowerupGroupConfig ===

// Module 12223 (usePowerupGroupConfig)
import intl4 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import _modDef2553 from "module_2553" /* 2553 */;
import GuildTagUtils from "GuildTagUtils" /* 7847 */;
import _modDef12224 from "module_12224" /* 12224 */;
import _modDef12225 from "module_12225" /* 12225 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, group) => {
  let closure_0;
  let first;
  let tmp17;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const guild = GuildStore.getGuild(closure_0);
      let guildSupportsTagsResult = null != guild;
      if (guildSupportsTagsResult) {
        const obj = GuildTagUtils;
        guildSupportsTagsResult = obj.guildSupportsTags(guild);
      }
      return guildSupportsTagsResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if ("guildTagsBadgePacks" !== group.group) {
    const tmpResult2 = require("GlobalUtils");
    tmpResult2.assertNever(group.group);
  } else {
    let tmp10;
    let tmp9;
    let tmp8;
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(_modDef2553.KC9HRW);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(_modDef2553.GJiSmP);
      const obj2 = { staticUrl: _modDef12224, animatedUrl: _modDef12225 };
      cResult[3] = stringResult;
      cResult[4] = stringResult1;
      cResult[5] = obj2;
      tmp10 = obj2;
      tmp9 = stringResult1;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    if (cResult[6] !== stateFromStores) {
      let stringResult2;
      if (!stateFromStores) {
        const intl3 = tmp(1126).intl;
        stringResult2 = intl3.string(_modDef2553.lvk1Gc);
      }
      cResult[6] = stateFromStores;
      cResult[7] = stringResult2;
      tmp14 = stringResult2;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== tmp14) {
      const obj3 = { title: tmp8, description: tmp9, image: tmp10, disabledReason: tmp14, badge: "IconComponent", forceStaticImages: "IconComponent" };
      cResult[8] = tmp14;
      cResult[9] = obj3;
      tmp17 = obj3;
    } else {
      tmp17 = cResult[9];
    }
  }
  return tmp17;
}) : ((arg0, arg1) => {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  const group = arg1;
  let obj = require("get initialized");
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let guildSupportsTagsResult = null != guild;
    if (guildSupportsTagsResult) {
      const obj = GuildTagUtils;
      guildSupportsTagsResult = obj.guildSupportsTags(guild);
    }
    return guildSupportsTagsResult;
  });
  const items1 = [arg1, stateFromStores];
  return react.useMemo(() => {
    let intl;
    let intl2;
    let obj3;
    let stringResult;
    if ("guildTagsBadgePacks" === group.group) {
      const obj2 = { title: intl.string(_modDef2553.KC9HRW), description: intl2.string(_modDef2553.GJiSmP), image: obj3, disabledReason: stringResult, badge: "IconComponent", forceStaticImages: "IconComponent" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef12224, animatedUrl: _modDef12225 };
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(_modDef2553.lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default tmp2;