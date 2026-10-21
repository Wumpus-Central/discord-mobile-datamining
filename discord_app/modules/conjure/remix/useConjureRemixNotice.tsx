// === Module 12224: useConjureRemixNotice ===

// Module 12224 (useConjureRemixNotice)
import _modDef3830 from "module_3830" /* 3830 */;
import conjureRemixConnection from "conjureRemixConnection" /* 10759 */;
import noop from "module_19" /* 19 */;
import ConjureRemixStore from "ConjureRemixStore" /* 10673 */;

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemixNotice(arg0) {
  _require = arg0;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureRemixStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureRemixStore.getFailure(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== arg0) {
    const fn2 = function l() {
      return conjureRemixConnection.sendRetryRemix(closure_0);
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[5] !== stateFromStores) {
      const intl = tmp(1128).intl;
      const obj2 = { reason: stateFromStores };
      const formatResult = intl.format(_modDef3830.Up6Ssw, obj2);
      cResult[5] = stateFromStores;
      cResult[6] = formatResult;
      let tmp9 = formatResult;
    } else {
      tmp9 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1128).intl;
      const stringResult = intl2.string(_modDef3830["ywA+ET"]);
      cResult[7] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] !== tmp8) {
      const obj3 = { text: tmp12, onClick: tmp8 };
      cResult[8] = tmp8;
      cResult[9] = obj3;
      let tmp15 = obj3;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] === tmp9) {
    }
    const obj4 = { message: tmp9, retry: tmp15 };
    cResult[10] = tmp9;
    cResult[11] = tmp15;
    cResult[12] = obj4;
  }
  const tmpResult = require("initialize");
}) : (function useConjureRemixNotice(arg0) {
  _require = arg0;
  const items = [ConjureRemixStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureRemixStore.getFailure(closure_0));
  [][0] = arg0;
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { message: null, retry: null };
    const intl = tmp(1128).intl;
    const obj3 = { reason: stateFromStores };
    obj2.message = intl.format(_modDef3830.Up6Ssw, obj3);
    const obj4 = { text: null, onClick: null };
    const intl2 = tmp(1128).intl;
    obj4.text = intl2.string(_modDef3830["ywA+ET"]);
    obj4.onClick = tmp4;
    obj2.retry = obj4;
    tmp5 = obj2;
  }
  return tmp5;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixNotice.tsx");

export default tmp2;
export const useConjureRemixStartedAt = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemixStartedAt(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureRemixStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureRemixStore.getSetupStartedAt(closure_0);
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
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureRemixStartedAt(arg0) {
  _require = arg0;
  const items = [ConjureRemixStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => ConjureRemixStore.getSetupStartedAt(closure_0), items1);
});