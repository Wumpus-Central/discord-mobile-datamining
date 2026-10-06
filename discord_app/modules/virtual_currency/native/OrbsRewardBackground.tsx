// === Module 10978: OrbsRewardBackground ===

// Module 10978 (OrbsRewardBackground)
import FastImageDefault from "FastImage" /* 5981 */;
import _modDef10979 from "module_10979" /* 10979 */;
import _modDef10980 from "module_10980" /* 10980 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Fragment_mod from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_2;
  let closure_3;
  let items2;
  let obj5;
  let onReady;
  let ref;
  let state;
  let style;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  const obj = onReady(576);
  const cResult = obj.c(20);
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
  const tmpResult = onReady(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    const fn2 = function _() {
      return state.getState();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = onReady(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  const ACTIVE = onReady(1105).AppStates.ACTIVE;
  [tmp13, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  dependencyMap = _slicedToArray(react.useState(false), 2)[1];
  _slicedToArray(react.useState(false), 2);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return importDefault(true);
      }
    }
    cResult[4] = R;
  } else {
    class R {
      constructor() {
        return importDefault(true);
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
  }
  _slicedToArray = tmp17;
  react = obj4.useRef(false);
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
      cResult[11] = style;
      cResult[12] = closure_7(FastImageDefault, obj2);
      const tmp24 = closure_7(FastImageDefault, obj2);
    } else {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
    }
    if (cResult[13] === stateFromStores1 === ACTIVE) {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
    }
    let tmp27 = !stateFromStores && tmp25;
    if (tmp27) {
      class B {
        constructor() {
          return closure_2(true);
        }
      }
      const obj3 = { source: obj5, style, resizeMode: "cover", onLoad: B, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
      obj5 = { uri: _modDef10980 };
      const VideoComponent = onReady(7993).VideoComponent;
      tmp27 = closure_7(VideoComponent, obj3);
    }
    cResult[13] = stateFromStores1 === ACTIVE;
    cResult[14] = stateFromStores;
    cResult[15] = style;
    cResult[16] = tmp27;
  }
  class L {
    constructor() {
      const tmp = _slicedToArray && !ref.current;
      if (tmp) {
        ref.current = true;
        onReady();
      }
    }
  }
  items2 = [tmp17, onReady];
  cResult[6] = tmp17;
  cResult[7] = onReady;
  cResult[8] = L;
  cResult[9] = items2;
}) : ((arg0) => {
  let _undefined;
  let _undefined2;
  let c1;
  let c2;
  let closure_3;
  let obj5;
  let obj7;
  let onReady;
  let ref;
  let state;
  let style;
  let tmp6;
  let tmp8;
  let useReducedMotion;
  ({ style, onReady } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const items = [AccessibilityStore];
  const obj = onReady(504);
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [AppStateStore];
  const obj2 = onReady(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState());
  const ACTIVE = onReady(1105).AppStates.ACTIVE;
  [tmp6, c1] = _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp8, c2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined(true), []);
  const callback1 = react.useCallback(() => _undefined2(true), []);
  _slicedToArray = tmp6;
  react = obj3.useRef(false);
  const items2 = [tmp6, onReady];
  const effect = obj3.useEffect(() => {
    const tmp = closure_3 && !ref.current;
    if (tmp) {
      ref.current = true;
      onReady();
    }
  }, items2);
  const Fragment = obj3.Fragment;
  const obj4 = { source: obj5, style, resizeMode: "cover", onLoad: callback };
  obj5 = { uri: _modDef10979 };
  const tmp16 = FastImageDefault;
  const children = [closure_7(tmp16, obj4), ];
  let tmp14Result = !stateFromStores && stateFromStores1 === ACTIVE;
  if (tmp14Result) {
    const obj6 = { source: obj7, style, resizeMode: "cover", onLoad: callback1, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
    obj7 = { uri: _modDef10980 };
    const VideoComponent = onReady(7993).VideoComponent;
    tmp14Result = closure_7(VideoComponent, obj6);
  }
  children[1] = tmp14Result;
  return closure_8(Fragment, { children });
});
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbsRewardBackground.tsx");

export const OrbsRewardBackground = tmp3;