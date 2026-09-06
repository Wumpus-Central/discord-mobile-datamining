// === Module 13070: useSegmentedPagesHeight ===

// Module 13070 (useSegmentedPagesHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const __initData = { code: "function useSegmentedPagesHeightTsx1(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/useSegmentedPagesHeight.tsx");

export const usePageHeights = function usePageHeights() {
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue([]);
  noop.useRef([]);
  let items = [sharedValue];
  obj = {
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
  return obj;
};
export const usePagerFillHeight = function usePagerFillHeight() {
  const height = useWindowDimensionsDefault().height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_2 = tmp[1];
  const ref = noop.useRef(null);
  const items = [height, bottom];
  return {
    pagerRef: ref,
    fillHeight: tmp[0],
    measureFill: noop.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, arg1) => {
          const diff = height - arg1 - bottom;
          let num = 0;
          if (diff > 0) {
            num = diff;
          }
          closure_1_2(num);
        });
      }
    }, items)
  };
};
export const usePagesHeightStyle = function usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight) {
  _require = pageHeights;
  let num = fillHeight;
  if (fillHeight === undefined) {
    num = 0;
  }
  const visiblePageRange = segmentedControlState.visiblePageRange;
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
      let obj = { height: bound };
    } else {
      obj = {};
    }
    return obj;
  };
  fn.__closure = { pageHeights, visiblePageRange, fillHeight: num };
  fn.__workletHash = 7484186791578;
  fn.__initData = __initData;
  return require("ReanimatedRexport").useAnimatedStyle(fn);
};