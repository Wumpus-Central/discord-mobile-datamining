// discord_app/modules/user_profile/native/useSegmentedPagesHeight.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";

const require = arg1;
let closure_5 = { code: "function useSegmentedPagesHeightTsx1(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}" };
let result = require("set").fileFinishedImporting("modules/user_profile/native/useSegmentedPagesHeight.tsx");

export const usePageHeights = function usePageHeights() {
  let obj = sharedValue(4217);
  sharedValue = obj.useSharedValue([]);
  closure_1 = React.useRef([]);
  let items = [sharedValue];
  obj = {
    pageHeights: sharedValue,
    handlePageContentSize: React.useCallback((arg0, arg1, arg2) => {
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
  const height = bottom(1493)().height;
  bottom = bottom(1628)().bottom;
  const tmp = ref(React.useState(0), 2);
  dependencyMap = tmp[1];
  ref = React.useRef(null);
  const items = [height, bottom];
  return {
    pagerRef: ref,
    fillHeight: tmp[0],
    measureFill: React.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, arg1) => {
          const diff = closure_0 - arg1 - closure_1;
          let num = 0;
          if (diff > 0) {
            num = diff;
          }
          closure_2(num);
        });
      }
    }, items)
  };
};
export const usePagesHeightStyle = function usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight) {
  const _require = pageHeights;
  let num = fillHeight;
  if (fillHeight === undefined) {
    num = 0;
  }
  let visiblePageRange;
  visiblePageRange = segmentedControlState.visiblePageRange;
  const fn = function u() {
    const value = pageHeights.get();
    const tmp2 = closure_1_3(visiblePageRange.get(), 2);
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
      let obj = { height: null };
      obj[0] = bound;
    } else {
      obj = {};
    }
    return obj;
  };
  fn.__closure = { pageHeights, visiblePageRange, fillHeight: num };
  fn.__workletHash = 7484186791578;
  fn.__initData = closure_5;
  return _require(visiblePageRange[2]).useAnimatedStyle(fn);
};