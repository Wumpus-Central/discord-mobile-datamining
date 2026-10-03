// === Module 9789: useChannelSafetyWarning ===

// Module 9789 (useChannelSafetyWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 9786 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/hooks/useChannelSafetyWarning.tsx");

export const useChannelSafetyWarning = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSafetyWarningsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return ChannelSafetyWarningsStore.getChannelSafetyWarnings(closure_0);
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
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === arg1) {
      return cResult[6];
    }
  }
  if (cResult[7] !== arg1) {
    const fn2 = function y(type) {
      return type.type === closure_1;
    };
    cResult[7] = arg1;
    cResult[8] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[8];
  }
  const found = stateFromStores.filter(tmp8);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function _(dismiss_timestamp) {
      let tmp = null == dismiss_timestamp.dismiss_timestamp;
      if (tmp) {
        let expiry;
        if (dismiss_timestamp != null) {
          expiry = dismiss_timestamp.expiry;
        }
        let tmp3 = null == expiry;
        if (!tmp3) {
          const _Date = Date;
          const _Date2 = Date;
          const parsed = Date.parse(dismiss_timestamp.expiry);
          tmp3 = parsed > Date.now();
        }
        tmp = tmp3;
      }
      return tmp;
    };
    cResult[9] = fn3;
    let tmp9 = fn3;
  } else {
    tmp9 = cResult[9];
  }
  const found1 = found.find(tmp9);
  cResult[4] = stateFromStores;
  cResult[5] = arg1;
  cResult[6] = found1;
  const tmpResult = require("initialize");
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [ChannelSafetyWarningsStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarnings(closure_0), items1);
  const found = stateFromStores.filter((type) => type.type === closure_1);
  return found.find((dismiss_timestamp) => {
    let tmp = null == dismiss_timestamp.dismiss_timestamp;
    if (tmp) {
      let expiry;
      if (dismiss_timestamp != null) {
        expiry = dismiss_timestamp.expiry;
      }
      let tmp3 = null == expiry;
      if (!tmp3) {
        const _Date = Date;
        const _Date2 = Date;
        const parsed = Date.parse(dismiss_timestamp.expiry);
        tmp3 = parsed > Date.now();
      }
      tmp = tmp3;
    }
    return tmp;
  });
});