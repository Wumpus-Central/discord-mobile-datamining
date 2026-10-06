// === Module 16987: YouScreenNavIconMeasurer ===

// Module 16987 (YouScreenNavIconMeasurer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ContextUtilsDefault from "ContextUtils" /* 6947 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, deleteResult, map, tmp3;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
const PixelRatio = react_native.PixelRatio;
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
[metroImportDefault, metroImportAll] = ContextUtilsDefault();
_slicedToArray(ContextUtilsDefault(), 2);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function(children) {
  let first;
  let ref;
  let tmp10;
  let tmp6;
  const obj = require("react");
  const cResult = obj.c(7);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    cResult[0] = map;
    first = map;
  } else {
    first = cResult[0];
  }
  _require = react.useRef(first);
  [tmp6, dependencyMap] = _slicedToArray(react.useState(), 2);
  const tmp5 = _slicedToArray(react.useState(), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0, arg1) {
        if (null == arg1) {
          tmp3 = closure_0;
          current2 = closure_0.current;
          deleteResult = current2.delete(children);
          tmp = closure_0;
        } else {
          tmp = closure_0;
          current = closure_0.current;
          result = current.set(children, arg1);
        }
        current3 = tmp.current;
        items = [0, ...current3.values()];
        tmp5 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
        return;
      }
    }
    cResult[1] = M;
  } else {
    class M {
      constructor(arg0, arg1) {
        if (null == arg1) {
          tmp3 = closure_0;
          current2 = closure_0.current;
          deleteResult = current2.delete(children);
          tmp = closure_0;
        } else {
          tmp = closure_0;
          current = closure_0.current;
          result = current.set(children, arg1);
        }
        current3 = tmp.current;
        items = [0, ...current3.values()];
        tmp5 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
        return;
      }
    }
  }
  if (cResult[2] !== tmp6) {
    class M {
      constructor(arg0, arg1) {
        if (null == arg1) {
          tmp3 = closure_0;
          current2 = closure_0.current;
          deleteResult = current2.delete(children);
          tmp = closure_0;
        } else {
          tmp = closure_0;
          current = closure_0.current;
          result = current.set(children, arg1);
        }
        current3 = tmp.current;
        items = [0, ...current3.values()];
        tmp5 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
        return;
      }
    }
    tmp9[0] = tmp6;
    tmp9[1] = M;
    cResult[2] = tmp6;
    cResult[3] = tmp9;
  } else {
    class M {
      constructor(arg0, arg1) {
        if (null == arg1) {
          tmp3 = closure_0;
          current2 = closure_0.current;
          deleteResult = current2.delete(children);
          tmp = closure_0;
        } else {
          tmp = closure_0;
          current = closure_0.current;
          result = current.set(children, arg1);
        }
        current3 = tmp.current;
        items = [0, ...current3.values()];
        tmp5 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
        return;
      }
    }
  }
  if (cResult[4] === children) {
    class M {
      constructor(arg0, arg1) {
        if (null == arg1) {
          tmp3 = closure_0;
          current2 = closure_0.current;
          deleteResult = current2.delete(children);
          tmp = closure_0;
        } else {
          tmp = closure_0;
          current = closure_0.current;
          result = current.set(children, arg1);
        }
        current3 = tmp.current;
        items = [0, ...current3.values()];
        tmp5 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
        return;
      }
    }
    return tmp10;
  }
  tmp10 = <redux.Provider value={tmp9}>{children}</redux.Provider>;
  cResult[4] = children;
  cResult[5] = tmp9;
  cResult[6] = tmp10;
}) : ((children) => {
  let closure_2;
  let width;
  width = undefined;
  _slicedToArray = undefined;
  let onWidthMeasured;
  children = children.children;
  const useRef = onWidthMeasured.useRef;
  map = new Map();
  const ref = useRef(map);
  [width, _slicedToArray] = onWidthMeasured.useState();
  onWidthMeasured = onWidthMeasured.useCallback((arg0, arg1) => {
    let tmp;
    if (null == arg1) {
      const current2 = ref.current;
      current2.delete(arg0);
      tmp = ref;
    } else {
      tmp = ref;
      const current = ref.current;
      const result = current.set(arg0, arg1);
    }
    const current3 = tmp.current;
    const items = [0, ...current3.values()];
    closure_2(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
  }, []);
  let items = [width, onWidthMeasured];
  return <redux.Provider value={onWidthMeasured.useMemo(() => ({ width, onWidthMeasured }), items)}>{children}</redux.Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(6);
  const tmp2 = metroImportAll();
  const onWidthMeasured = tmp2.onWidthMeasured;
  const width = tmp2.width;
  const id = react.useId();
  const ref = react.useRef(null);
  let closure_3 = _slicedToArray(react.useState(false), 2)[1];
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === id) {
    let tmp7;
    let tmp8;
    let tmp11;
    if (cResult[1] === onWidthMeasured) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const layoutEffect = react.useLayoutEffect(tmp7, tmp8);
    let tmp10;
    if (tmp6) {
      tmp10 = width;
    }
    if (cResult[4] !== tmp10) {
      const obj3 = { containerRef: ref, width: tmp10 };
      cResult[4] = tmp10;
      cResult[5] = obj3;
      tmp11 = obj3;
    } else {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const fn = function n() {
    const current = ref.current;
    if (null != current) {
      current.measureLayout(current, (arg0, arg1, arg2) => {
        onWidthMeasured(id, arg2);
        closure_1_3(true);
      });
      return () => onWidthMeasured(id, null);
    }
  };
  const items = [id, onWidthMeasured];
  cResult[0] = id;
  cResult[1] = onWidthMeasured;
  cResult[2] = fn;
  cResult[3] = items;
  tmp8 = items;
  tmp7 = fn;
}) : (() => {
  let closure_3;
  let first;
  let tmp7;
  const tmp = metroImportAll();
  const onWidthMeasured = tmp.onWidthMeasured;
  const width = tmp.width;
  const id = react.useId();
  const ref = react.useRef(null);
  [first, closure_3] = react.useState(false);
  const items = [id, onWidthMeasured];
  const layoutEffect = react.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.measureLayout(current, (arg0, arg1, arg2) => {
        onWidthMeasured(id, arg2);
        closure_1_3(true);
      });
      return () => onWidthMeasured(id, null);
    }
  }, items);
  const obj = { containerRef: ref, width: tmp7 };
  tmp7 = undefined;
  if (first) {
    tmp7 = width;
  }
  return obj;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconMeasurer.tsx");

export const YouScreenNavIconMeasurer = tmp4;
export const useYouScreenNavIconMeasurement = tmp5;