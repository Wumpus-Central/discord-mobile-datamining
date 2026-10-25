// === Module 11878: useConjurePublishProgressLabel ===

// Module 11878 (useConjurePublishProgressLabel)
import _modDef3830 from "module_3830" /* 3830 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;

const require = globalThis.__r;

const require = fn;
let obj = { preparing: _modDef3830.GQeas1, approval: _modDef3830["TkHHD+"], setup: _modDef3830["F+AxgM"], build: _modDef3830.oQeMIy, deploy: _modDef3830.LqZvZ2, discord: _modDef3830.LFcGAT, activating: _modDef3830.ff1Fq1 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishProgressLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishProgressLabel(arg0) {
  _require = arg0;
  let formatElapsed = _require;
  let formatElapsedResult2 = dependencyMap;
  obj = require("c");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjurePublishStatusStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let publishProgress = null;
      if (null != closure_0) {
        publishProgress = ConjurePublishStatusStore.getPublishProgress(tmp);
      }
      return publishProgress;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
  }
  let stageStartedAt = formatElapsed(504).useStateFromStores(first, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      return Date.now();
    };
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  const formatElapsedResult = formatElapsed(504);
  [stage, dependencyMap] = noop.useState(tmp6);
  if (cResult[4] !== stageStartedAt) {
    class S {
      constructor() {
        if (null != closure_1) {
          tmp = closure_2;
          tmp2 = globalThis;
          _Date = Date;
          tmp3 = closure_2(Date.now());
          _setInterval = setInterval;
          num = 1000;
          closure_0 = setInterval(() => closure_1_2(Date.now()), 1000);
          return () => clearInterval(closure_0);
        } else {
          return;
        }
      }
    }
    const items1 = [stageStartedAt];
    cResult[4] = stageStartedAt;
    cResult[5] = S;
    cResult[6] = items1;
    let tmp9 = items1;
  } else {
    class S {
      constructor() {
        if (null != closure_1) {
          tmp = closure_2;
          tmp2 = globalThis;
          _Date = Date;
          tmp3 = closure_2(Date.now());
          _setInterval = setInterval;
          num = 1000;
          closure_0 = setInterval(() => closure_1_2(Date.now()), 1000);
          return () => clearInterval(closure_0);
        } else {
          return;
        }
      }
    }
    tmp9 = cResult[6];
  }
  const effect = noop.useEffect(S, tmp9);
  if (null == stageStartedAt) {
    class S {
      constructor() {
        if (null != closure_1) {
          tmp = closure_2;
          tmp2 = globalThis;
          _Date = Date;
          tmp3 = closure_2(Date.now());
          _setInterval = setInterval;
          num = 1000;
          closure_0 = setInterval(() => closure_1_2(Date.now()), 1000);
          return () => clearInterval(closure_0);
        } else {
          return;
        }
      }
    }
  } else {
    class S {
      constructor() {
        if (null != closure_1) {
          tmp = closure_2;
          tmp2 = globalThis;
          _Date = Date;
          tmp3 = closure_2(Date.now());
          _setInterval = setInterval;
          num = 1000;
          closure_0 = setInterval(() => closure_1_2(Date.now()), 1000);
          return () => clearInterval(closure_0);
        } else {
          return;
        }
      }
    }
    const intl = formatElapsed(1128).intl;
    const obj2 = { action: null, detail: null };
    const intl2 = formatElapsed(1128).intl;
    obj2.action = intl2.string(obj[stageStartedAt.stage]);
    formatElapsed = formatElapsed(11879).formatElapsed;
    formatElapsedResult2 = formatElapsed(stage - stageStartedAt.stageStartedAt);
    obj2.detail = formatElapsedResult2;
    const formatToPlainStringResult = intl.formatToPlainString(stageStartedAt(3830)["ndkR+x"], obj2);
    cResult[7] = stage;
    stage = stageStartedAt.stage;
    cResult[8] = stage;
    stageStartedAt = stageStartedAt.stageStartedAt;
    cResult[9] = stageStartedAt;
    cResult[10] = formatToPlainStringResult;
    const formatElapsedResult1 = formatElapsed(11879);
  }
  const tmp7 = _slicedToArray(noop.useState(tmp6), 2);
}) : (function useConjurePublishProgressLabel(arg0) {
  _require = arg0;
  obj = require("initialize");
  const items = [ConjurePublishStatusStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let publishProgress = null;
    if (null != closure_0) {
      publishProgress = ConjurePublishStatusStore.getPublishProgress(tmp);
    }
    return publishProgress;
  });
  const tmp4 = _slicedToArray(noop.useState(() => Date.now()), 2);
  dependencyMap = tmp4[1];
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      const _Date = Date;
      closure_2(Date.now());
      const _setInterval = setInterval;
      const interval = setInterval(() => closure_1_2(Date.now()), 1000);
      return () => clearInterval(closure_0);
    }
  }, items1);
  let formatToPlainStringResult = null;
  if (null != stateFromStores) {
    const intl = tmp(1128).intl;
    const obj2 = { action: null, detail: null };
    const intl2 = tmp(1128).intl;
    obj2.action = intl2.string(obj[stateFromStores.stage]);
    obj2.detail = tmp(11879).formatElapsed(tmp4[0] - stateFromStores.stageStartedAt);
    formatToPlainStringResult = intl.formatToPlainString(stateFromStores(3830)["ndkR+x"], obj2);
    const tmpResult = tmp(11879);
  }
  return formatToPlainStringResult;
});