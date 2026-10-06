// === Module 16640: useConjureControlBar ===

// Module 16640 (useConjureControlBar)
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 12924 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const interruptTurn = ConjureConnectionStore.interruptTurn;
let c6 = 2400;
let c7 = 5000;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let first;
  let tmp10;
  let tmp11;
  let tmp3;
  let tmp4;
  const obj = first(576);
  const cResult = obj.c(3);
  [tmp3, tmp4] = _slicedToArray(react.useState(arg0), 2);
  const tmp2 = _slicedToArray(react.useState(arg0), 2);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  if (arg0 !== tmp3) {
    tmp4(arg0);
    tmp5[1](!arg0);
  }
  if (cResult[0] !== first) {
    const fn = function o() {
      let closure_0;
      let timeout;
      const tmp = timeout;
      if (tmp) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_1(false), closure_1_6);
        return () => clearTimeout(closure_0);
      }
    };
    const items = [first];
    cResult[0] = first;
    cResult[1] = fn;
    cResult[2] = items;
    tmp11 = items;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const effect = react.useEffect(tmp10, tmp11);
  let str = "controlling";
  if (!arg0) {
    let str2 = "idle";
    if (first) {
      str2 = "handoff";
    }
    str = str2;
  }
  return str;
}) : ((arg0) => {
  let tmp2;
  let tmp3;
  let tmp = _slicedToArray(react.useState(arg0), 2);
  [tmp2, tmp3] = tmp;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  const first = tmp4[0];
  let closure_1 = tmp6;
  if (arg0 !== tmp2) {
    tmp3(arg0);
    tmp4[1](!arg0);
  }
  const items = [first];
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    const tmp = timeout;
    if (tmp) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1(false), closure_1_6);
      return () => clearTimeout(closure_0);
    }
  }, items);
  let str = "controlling";
  if (!arg0) {
    let str2 = "idle";
    if (first) {
      str2 = "handoff";
    }
    str = str2;
  }
  return str;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_2;
  let first;
  let first1;
  let obj2;
  let tmp15;
  let tmp6;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(11);
  const tmp2 = first1;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureChatStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      const isThinkingResult = null != closure_0 && ConjureChatStore.isThinking(tmp);
      return isThinkingResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[6]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp8 = _slicedToArray(react.useState(false), 2);
  first1 = tmp8[0];
  _slicedToArray = tmp10;
  const tmp11 = _slicedToArray(react.useState(stateFromStores), 2);
  if (stateFromStores !== tmp11[0]) {
    tmp11[1](stateFromStores);
    if (!stateFromStores) {
      tmp8[1](false);
    }
  }
  if (cResult[3] !== first1) {
    class T {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          tmp3 = closure_1_7;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_7);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    const items1 = [first1];
    cResult[3] = first1;
    cResult[4] = T;
    cResult[5] = items1;
    tmp15 = items1;
  } else {
    class T {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          tmp3 = closure_1_7;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_7);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    tmp15 = cResult[5];
  }
  const effect = react.useEffect(T, tmp15);
  if (cResult[6] !== arg0) {
    class T {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          tmp3 = closure_1_7;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_7);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    cResult[6] = arg0;
    cResult[7] = tmp18;
  } else {
    class T {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          tmp3 = closure_1_7;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_7);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
  }
  if (stateFromStores) {
    class T {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          tmp3 = closure_1_7;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_7);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
  }
  if (cResult[8] === first1) {
    class T {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          tmp3 = closure_1_7;
          closure_0 = setTimeout(() => closure_1_2(false), closure_1_7);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    return obj2;
  }
  obj2 = { stop: null, stopping: first1 };
  cResult[8] = first1;
  cResult[9] = null;
  cResult[10] = obj2;
}) : ((arg0) => {
  let closure_0;
  let closure_2;
  let stopping;
  _require = arg0;
  const items = [ConjureChatStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const isThinkingResult = null != closure_0 && ConjureChatStore.isThinking(tmp);
    return isThinkingResult;
  });
  const tmp2 = _slicedToArray(react.useState(false), 2);
  stopping = tmp2[0];
  _slicedToArray = tmp4;
  const tmp5 = _slicedToArray(react.useState(stateFromStores), 2);
  if (stateFromStores !== tmp5[0]) {
    tmp5[1](stateFromStores);
    if (!stateFromStores) {
      tmp2[1](false);
    }
  }
  const items1 = [stopping];
  const effect = react.useEffect(() => {
    if (stopping) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), closure_1_7);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [arg0];
  let stop = null;
  if (stateFromStores) {
    stop = react.useCallback(() => {
      if (null != closure_0) {
        closure_2(true);
        interruptTurn(tmp);
      }
    }, items2);
  }
  return { stop, stopping };
});
const result = size.fileFinishedImporting("modules/conjure/preview/useConjureControlBar.tsx");

export const CONJURE_CONTROL_HANDOFF_MS = 2400;
export const CONJURE_CONTROL_STOP_RETRY_MS = 5000;
export const useConjureControlPhase = tmp2;
export const useConjureControlStop = tmp3;