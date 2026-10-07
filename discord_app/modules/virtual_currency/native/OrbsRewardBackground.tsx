// === Module 10978: OrbsRewardBackground ===

// Module 10978 (OrbsRewardBackground)
import FastImageDefault from "FastImage" /* 5981 */;
import _modDef10979 from "module_10979" /* 10979 */;
import _modDef10980 from "module_10980" /* 10980 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import AppStateStore from "AppStateStore" /* 1986 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbsRewardBackground.tsx");

export const OrbsRewardBackground = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onReady(576).c(20);
  ({ style, onReady } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function y() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = onReady(576);
  const stateFromStores = onReady(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    const fn2 = function _() {
      return state.getState();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = onReady(504);
  const stateFromStores1 = onReady(504).useStateFromStores(tmp8, tmp9);
  const tmpResult2 = onReady(504);
  [tmp13, importDefault] = noop.useState(false);
  const tmp12 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = _slicedToArray(noop.useState(false), 2)[1];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_1(true);
      }
    }
    cResult[4] = R;
  } else {
    class R {
      constructor() {
        return closure_1(true);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return closure_2(true);
      }
    }
    cResult[5] = B;
  } else {
    class B {
      constructor() {
        return closure_2(true);
      }
    }
  }
  if (!tmp17) {
    class B {
      constructor() {
        return closure_2(true);
      }
    }
    if (!stateFromStores) {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
    }
  }
  _slicedToArray = tmp17;
  noop = obj4.useRef(false);
  if (cResult[6] === tmp17) {
    class B {
      constructor() {
        return closure_2(true);
      }
    }
    const effect = obj4.useEffect(L, items2);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
      tmp20[0] = _modDef10979;
      cResult[10] = tmp20;
    } else {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
    }
    if (cResult[11] !== style) {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
      const obj2 = { source: tmp20, style, resizeMode: "cover", onLoad: R };
      const tmp24 = closure_7(FastImageDefault, obj2);
      cResult[11] = style;
      cResult[12] = tmp24;
    } else {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
    }
    const tmp25 = stateFromStores1 === onReady(1105).AppStates.ACTIVE;
    if (cResult[13] === tmp25) {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
    }
    let tmp27 = !stateFromStores;
    if (!stateFromStores) {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
    }
    if (tmp27) {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
      const obj3 = { source: null, style: null, resizeMode: "cover", onLoad: null, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
      const obj5 = { uri: _modDef10980 };
      obj3.source = obj5;
      obj3.style = style;
      obj3.onLoad = B;
      tmp27 = closure_7(onReady(7993).VideoComponent, obj3);
    }
    cResult[13] = tmp25;
    cResult[14] = stateFromStores;
    cResult[15] = style;
    cResult[16] = tmp27;
  }
  class L {
    constructor() {
      tmp = closure_3;
      if (closure_3) {
        tmp2 = closure_4;
        tmp = !closure_4.current;
      }
      if (tmp) {
        tmp3 = closure_4;
        flag = true;
        closure_4.current = true;
        tmp4 = onReady;
        tmp5 = onReady();
      }
      return;
    }
  }
  items2 = [tmp17, onReady];
  cResult[6] = tmp17;
  cResult[7] = onReady;
  cResult[8] = L;
  cResult[9] = items2;
  const tmp14 = _slicedToArray(noop.useState(false), 2);
}) : ((arg0) => {
  ({ style, onReady } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const items = [AccessibilityStore];
  const stateFromStores = onReady(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = onReady(504);
  const items1 = [AppStateStore];
  const stateFromStores1 = onReady(504).useStateFromStores(items1, () => state.getState());
  const obj2 = onReady(504);
  [tmp6, c1] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined(true), []);
  const callback1 = noop.useCallback(() => _undefined2(true), []);
  if (!tmp6) {
    const tmp11 = !stateFromStores;
  }
  _slicedToArray = tmp6;
  noop = obj3.useRef(false);
  const items2 = [tmp6, onReady];
  const effect = obj3.useEffect(() => {
    let tmp = c3;
    if (c3) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      onReady();
    }
  }, items2);
  const obj4 = { source: null, style: null, resizeMode: "cover", onLoad: null };
  const obj5 = { uri: null };
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  obj5.uri = _modDef10979;
  obj4.source = obj5;
  obj4.style = style;
  obj4.onLoad = callback;
  const children = [closure_7(FastImageDefault, obj4), ];
  let tmp14Result = !stateFromStores;
  if (!stateFromStores) {
    tmp14Result = stateFromStores1 === onReady(1105).AppStates.ACTIVE;
  }
  if (tmp14Result) {
    const obj6 = { source: null, style: null, resizeMode: "cover", onLoad: null, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj7 = { uri: _modDef10980 };
    obj6.source = obj7;
    obj6.style = style;
    obj6.onLoad = callback1;
    tmp14Result = closure_7(onReady(7993).VideoComponent, obj6);
  }
  children[1] = tmp14Result;
  return closure_8(noop.Fragment, { children });
});