// === Module 13225: useSegmentedPagesHeight ===

// Module 13225 (useSegmentedPagesHeight)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const __initData = { code: "function useSegmentedPagesHeightTsx1(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}" };
const __initData2 = { code: "function useSegmentedPagesHeightTsx2(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePageHeights() {
  const cResult = c.c(6);
  const sharedValue = ReanimatedRexport.useSharedValue([]);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  noop.useRef(first);
  if (cResult[1] !== sharedValue) {
    const fn = function l(arg0, arg1, arg2) {
      let tmp = arg2 <= 0;
      if (!tmp) {
        tmp = ref.current[arg0] === arg2;
      }
      if (!tmp) {
        ref.current[arg0] = arg2;
        const items = [];
        HermesBuiltin.arraySpread(ref.current, 0);
        const result = sharedValue.set(items);
      }
    };
    cResult[1] = sharedValue;
    cResult[2] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === sharedValue) {
      let tmp5 = cResult[5];
    }
    return tmp5;
  }
  const obj3 = { pageHeights: sharedValue, handlePageContentSize: tmp4 };
  cResult[3] = tmp4;
  cResult[4] = sharedValue;
  cResult[5] = obj3;
  tmp5 = obj3;
}) : (function usePageHeights() {
  const sharedValue = ReanimatedRexport.useSharedValue([]);
  noop.useRef([]);
  let items = [sharedValue];
  return {
    pageHeights: sharedValue,
    handlePageContentSize: noop.useCallback((arg0, arg1, arg2) => {
      let tmp = arg2 <= 0;
      if (!tmp) {
        tmp = ref.current[arg0] === arg2;
      }
      if (!tmp) {
        ref.current[arg0] = arg2;
        const items = [];
        HermesBuiltin.arraySpread(ref.current, 0);
        const result = sharedValue.set(items);
      }
    }, items)
  };
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePagerFillHeight(arg0) {
  closure_0 = arg0;
  const cResult = c.c(7);
  const height = useWindowDimensionsDefault().height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  [tmp3, _slicedToArray] = noop.useState(0);
  const ref = noop.useRef(null);
  if (cResult[0] === bottom) {
    if (cResult[1] === arg0) {
      if (cResult[2] === height) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === tmp3) {
        if (cResult[5] === tmp5) {
          let tmp6 = cResult[6];
        }
        return tmp6;
      }
      const obj2 = { pagerRef: ref, fillHeight: tmp3, measureFill: tmp5 };
      cResult[4] = tmp3;
      cResult[5] = tmp5;
      cResult[6] = obj2;
      tmp6 = obj2;
    }
  }
  const fn = function n() {
    const current = ref.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1) => {
        let num;
        if (closure_1_0 != null) {
          num = closure_1_0.get();
        }
        if (num == null) {
          num = 0;
        }
        const diff = height - (arg1 + num) - bottom;
        let num2 = 0;
        if (diff > 0) {
          num2 = diff;
        }
        closure_1_3(num2);
      });
    }
  };
  cResult[0] = bottom;
  cResult[1] = arg0;
  cResult[2] = height;
  cResult[3] = fn;
  tmp5 = fn;
}) : (function usePagerFillHeight(arg0) {
  closure_0 = arg0;
  const height = useWindowDimensionsDefault().height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_3 = tmp[1];
  const ref = noop.useRef(null);
  const items = [height, bottom, arg0];
  return {
    pagerRef: ref,
    fillHeight: tmp[0],
    measureFill: noop.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, arg1) => {
          let num;
          if (closure_1_0 != null) {
            num = closure_1_0.get();
          }
          if (num == null) {
            num = 0;
          }
          const diff = height - (arg1 + num) - bottom;
          let num2 = 0;
          if (diff > 0) {
            num2 = diff;
          }
          closure_1_3(num2);
        });
      }
    }, items)
  };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/useSegmentedPagesHeight.tsx");

export const usePageHeights = tmp2;
export const usePagerFillHeight = tmp3;
export const usePagesHeightStyle = ReactCompilerGating.isReactCompilerEnabled() ? (function usePagesHeightStyle(visiblePageRange, pageHeights, arg2) {
  _require = pageHeights;
  let num = 0;
  if (undefined !== arg2) {
    num = arg2;
  }
  visiblePageRange = visiblePageRange.visiblePageRange;
  const fn = function u() {
    value = pageHeights.get();
    const tmp2 = _slicedToArray(visiblePageRange.get(), 2);
    num = value[tmp2[0]];
    if (num == null) {
      num = 0;
    }
    let num2 = value[tmp2[1]];
    if (num2 == null) {
      num2 = 0;
    }
    const bound = Math.max(Math.max(num, num2), num);
    if (bound > 0) {
      const obj2 = { height: bound };
      let obj = obj2;
    } else {
      obj = {};
    }
    return obj;
  };
  fn.__closure = { pageHeights, visiblePageRange, fillHeight: num };
  fn.__workletHash = 7484186791578;
  fn.__initData = __initData;
  return require("ReanimatedRexport").useAnimatedStyle(fn);
}) : (function usePagesHeightStyle(visiblePageRange, pageHeights) {
  _require = pageHeights;
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  visiblePageRange = undefined;
  visiblePageRange = visiblePageRange.visiblePageRange;
  const fn = function l() {
    value = pageHeights.get();
    const tmp2 = _slicedToArray(visiblePageRange.get(), 2);
    num = value[tmp2[0]];
    if (num == null) {
      num = 0;
    }
    let num2 = value[tmp2[1]];
    if (num2 == null) {
      num2 = 0;
    }
    const bound = Math.max(Math.max(num, num2), num);
    if (bound > 0) {
      const obj2 = { height: bound };
      let obj = obj2;
    } else {
      obj = {};
    }
    return obj;
  };
  fn.__closure = { pageHeights, visiblePageRange, fillHeight: num };
  fn.__workletHash = 6752367174009;
  fn.__initData = __initData2;
  return require("ReanimatedRexport").useAnimatedStyle(fn);
});