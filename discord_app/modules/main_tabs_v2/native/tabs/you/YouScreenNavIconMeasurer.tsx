// === Module 13001: YouScreenNavIconMeasurer ===

// Module 13001 (YouScreenNavIconMeasurer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ContextUtilsDefault from "ContextUtils" /* 7147 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const PixelRatio = fn(17).PixelRatio;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
[closure_7, closure_8] = ContextUtilsDefault();
fn(558);
const importDefaultResultResult = _slicedToArray(ContextUtilsDefault(), 2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenNavIconMeasurer(children) {
  const cResult = require("c").c(7);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Map = Map;
    const map = new Map();
    cResult[0] = map;
    let first = map;
  } else {
    first = cResult[0];
  }
  _require = noop.useRef(first);
  const obj = require("c");
  [tmp8, dependencyMap] = noop.useState();
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
        items = [0];
        arraySpreadResult = HermesBuiltin.arraySpread(current3.values(), 1);
        tmp6 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
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
        items = [0];
        arraySpreadResult = HermesBuiltin.arraySpread(current3.values(), 1);
        tmp6 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
        return;
      }
    }
  }
  if (cResult[2] !== tmp8) {
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
        items = [0];
        arraySpreadResult = HermesBuiltin.arraySpread(current3.values(), 1);
        tmp6 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
        return;
      }
    }
    tmp11[0] = tmp8;
    tmp11[1] = M;
    cResult[2] = tmp8;
    cResult[3] = tmp11;
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
        items = [0];
        arraySpreadResult = HermesBuiltin.arraySpread(current3.values(), 1);
        tmp6 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
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
        items = [0];
        arraySpreadResult = HermesBuiltin.arraySpread(current3.values(), 1);
        tmp6 = closure_1(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
        return;
      }
    }
    return tmp12;
  }
  tmp12 = <redux.Provider value={tmp11}>{children}</redux.Provider>;
  cResult[4] = children;
  cResult[5] = tmp11;
  cResult[6] = tmp12;
  const tmp7 = _slicedToArray(noop.useState(), 2);
}) : (function YouScreenNavIconMeasurer(children) {
  width = undefined;
  _slicedToArray = undefined;
  let onWidthMeasured;
  onWidthMeasured.useRef(new Map());
  [width, _slicedToArray] = onWidthMeasured.useState();
  onWidthMeasured = onWidthMeasured.useCallback((arg0, arg1) => {
    if (null == arg1) {
      const current2 = ref.current;
      current2.delete(arg0);
      let tmp = ref;
    } else {
      tmp = ref;
      const current = ref.current;
      const result = current.set(arg0, arg1);
    }
    const current3 = tmp.current;
    const items = [0];
    HermesBuiltin.arraySpread(current3.values(), 1);
    closure_2(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
  }, []);
  let items = [width, onWidthMeasured];
  const map = new Map();
  return <redux.Provider value={onWidthMeasured.useMemo(() => ({ width, onWidthMeasured }), items)}>{children.children}</redux.Provider>;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconMeasurer.tsx");

export const YouScreenNavIconMeasurer = tmp4;
export const useYouScreenNavIconMeasurement = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouScreenNavIconMeasurement() {
  const cResult = c.c(6);
  const tmp2 = closure_1_8();
  const onWidthMeasured = tmp2.onWidthMeasured;
  const id = noop.useId();
  const ref = noop.useRef(null);
  closure_3 = _slicedToArray(noop.useState(false), 2)[1];
  if (cResult[0] === id) {
    if (cResult[1] === onWidthMeasured) {
      let tmp7 = cResult[2];
      let tmp8 = cResult[3];
    }
    const layoutEffect = noop.useLayoutEffect(tmp7, tmp8);
    let width;
    if (tmp6) {
      width = tmp2.width;
    }
    if (cResult[4] !== width) {
      const obj3 = { containerRef: ref, width };
      cResult[4] = width;
      cResult[5] = obj3;
      let tmp11 = obj3;
    } else {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const fn = function t() {
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
  const tmp5 = _slicedToArray(noop.useState(false), 2);
}) : (function useYouScreenNavIconMeasurement() {
  const tmp = closure_1_8();
  const onWidthMeasured = tmp.onWidthMeasured;
  const id = noop.useId();
  const ref = noop.useRef(null);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  closure_3 = tmp4[1];
  const items = [id, onWidthMeasured];
  const layoutEffect = noop.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.measureLayout(current, (arg0, arg1, arg2) => {
        onWidthMeasured(id, arg2);
        closure_1_3(true);
      });
      return () => onWidthMeasured(id, null);
    }
  }, items);
  const obj = { containerRef: ref, width: null };
  let width;
  if (tmp4[0]) {
    width = tmp.width;
  }
  obj.width = width;
  return obj;
});