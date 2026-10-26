// === Module 12358: useConjureRemixSettingsRequest ===

// Module 12358 (useConjureRemixSettingsRequest)
import conjureSettingsRequest from "conjureSettingsRequest" /* 12359 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10716 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixSettingsRequest.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemixSettingsRequest(arg0, type) {
  _require = arg0;
  const cResult = require("c").c(8);
  let settings_keys;
  if ("remixed" === type.type) {
    settings_keys = type.settings_keys;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === settings_keys) {
    if (cResult[2] === arg0) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === settings_keys) {
        let tmp10 = cResult[7];
      }
      return tmp10;
    }
    let tmp12 = null;
    if (stateFromStores) {
      tmp12 = null;
      if (null != settings_keys) {
        let obj2 = { keys: settings_keys, note: null };
        const intl = tmp(1128).intl;
        obj2.note = intl.string(settings_keys(3830).F2yVHg);
        tmp12 = obj2;
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = settings_keys;
    cResult[7] = tmp12;
    tmp10 = tmp12;
    const tmpResult = tmp(504);
  }
  const fn = function l() {
    let result = null != settings_keys;
    if (result) {
      result = settings_keys.length > 0;
    }
    if (result) {
      const obj2 = { keys: settings_keys };
      result = conjureSettingsRequest.conjureSettingsRequestBlocks(obj2, ConjureSettingsStore.getSettings(closure_0));
    }
    return result;
  };
  const items1 = [settings_keys, arg0];
  cResult[1] = settings_keys;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  let obj = require("c");
}) : (function useConjureRemixSettingsRequest(arg0, type) {
  _require = arg0;
  let settings_keys;
  if ("remixed" === type.type) {
    settings_keys = type.settings_keys;
  }
  const items = [ConjureSettingsStore];
  const items1 = [settings_keys, arg0];
  let tmp4 = null;
  if (obj.useStateFromStores(items, () => {
    let result = null != settings_keys;
    if (result) {
      result = settings_keys.length > 0;
    }
    if (result) {
      const obj2 = { keys: settings_keys };
      result = conjureSettingsRequest.conjureSettingsRequestBlocks(obj2, ConjureSettingsStore.getSettings(closure_0));
    }
    return result;
  }, items1)) {
    tmp4 = null;
    if (null != settings_keys) {
      let obj2 = { keys: settings_keys, note: null };
      const intl = require("util").intl;
      obj2.note = intl.string(settings_keys(3830).F2yVHg);
      tmp4 = obj2;
    }
  }
  return tmp4;
});