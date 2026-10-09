// === Module 12940: OrbsRewardBackground ===

// Module 12940 (OrbsRewardBackground)
import FastImageDefault from "FastImage" /* 6163 */;
import _modDef12941 from "module_12941" /* 12941 */;
import _modDef12942 from "module_12942" /* 12942 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import AppStateStore from "AppStateStore" /* 1999 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbsRewardBackground.tsx");

export const OrbsRewardBackground = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsRewardBackground(arg0) {
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
  [tmp13, importDefault] = first(noop.useState(false), 2);
  const tmp14 = first(noop.useState(false), 2);
  dependencyMap = tmp14[1];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function k() {
      return importDefault(true);
    };
    cResult[4] = fn3;
    let tmp15 = fn3;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function w() {
      return closure_2(true);
    };
    cResult[5] = fn4;
    let tmp16 = fn4;
  } else {
    tmp16 = cResult[5];
  }
  if (!tmp13) {
    first = !stateFromStores;
    if (!stateFromStores) {
      first = tmp14[0];
    }
  }
  first = tmp13;
  noop = obj4.useRef(false);
  if (cResult[6] === tmp13) {
    if (cResult[7] === onReady) {
      let tmp18 = cResult[8];
      let tmp19 = cResult[9];
    }
    const effect = obj4.useEffect(tmp18, tmp19);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { uri: _modDef12941 };
      cResult[10] = obj2;
      let tmp21 = obj2;
    } else {
      tmp21 = cResult[10];
    }
    if (cResult[11] !== style) {
      const obj3 = { source: tmp21, style, resizeMode: "cover", onLoad: tmp15 };
      const tmp26 = closure_7(FastImageDefault, obj3);
      cResult[11] = style;
      cResult[12] = tmp26;
      let tmp23 = tmp26;
    } else {
      tmp23 = cResult[12];
    }
    const tmp27 = stateFromStores1 === onReady(1105).AppStates.ACTIVE;
    if (cResult[13] === tmp27) {
      if (cResult[14] === stateFromStores) {
        if (cResult[15] === style) {
          let tmp28 = cResult[16];
        }
        if (cResult[17] === tmp23) {
          if (cResult[18] === tmp28) {
            let tmp32 = cResult[19];
          }
          return tmp32;
        }
        const obj5 = { children: null };
        const items2 = [tmp23, tmp28];
        obj5.children = items2;
        const tmp34 = closure_8(obj4.Fragment, obj5);
        cResult[17] = tmp23;
        cResult[18] = tmp28;
        cResult[19] = tmp34;
        tmp32 = tmp34;
      }
    }
    let tmp29 = !stateFromStores;
    if (!stateFromStores) {
      tmp29 = tmp27;
    }
    if (tmp29) {
      const obj6 = { source: null, style: null, resizeMode: "cover", onLoad: null, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
      const obj7 = { uri: _modDef12942 };
      obj6.source = obj7;
      obj6.style = style;
      obj6.onLoad = tmp16;
      tmp29 = closure_7(onReady(8409).VideoComponent, obj6);
    }
    cResult[13] = tmp27;
    cResult[14] = stateFromStores;
    cResult[15] = style;
    cResult[16] = tmp29;
    tmp28 = tmp29;
  }
  class A {
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
  const items3 = [tmp13, onReady];
  cResult[6] = tmp13;
  cResult[7] = onReady;
  cResult[8] = A;
  cResult[9] = items3;
  tmp19 = items3;
  tmp18 = A;
  const tmp12 = first(noop.useState(false), 2);
}) : (function OrbsRewardBackground(arg0) {
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
  obj5.uri = _modDef12941;
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
    const obj7 = { uri: _modDef12942 };
    obj6.source = obj7;
    obj6.style = style;
    obj6.onLoad = callback1;
    tmp14Result = closure_7(onReady(8409).VideoComponent, obj6);
  }
  children[1] = tmp14Result;
  return closure_8(noop.Fragment, { children });
});