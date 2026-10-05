// discord_app/modules/user_profile/native/useSegmentedPagesHeight.tsx
import react2 from "../../../../_runtime/00576_react.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, set;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(6);
      const obj2 = ReanimatedRexport;
      const sharedValue = obj2.useSharedValue([]);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      let closure_1 = react.useRef(first);
      if (cResult[1] !== sharedValue) {
        const fn = function l(arg0, arg1, arg2) {
          const tmp2 = arg2 <= 0 || ref.current[arg0] === arg2;
          if (!tmp2) {
            ref.current[arg0] = arg2;
            const items = [];
            set = sharedValue.set;
            HermesBuiltin.arraySpread(items, ref.current, 0);
            const result = set(items);
          }
        };
        cResult[1] = sharedValue;
        cResult[2] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[2];
      }
      if (cResult[3] === tmp4) {
        let tmp5;
        if (cResult[4] === sharedValue) {
          tmp5 = cResult[5];
        }
        return tmp5;
      }
      const obj3 = { pageHeights: sharedValue, handlePageContentSize: tmp4 };
      cResult[3] = tmp4;
      cResult[4] = sharedValue;
      cResult[5] = obj3;
      tmp5 = obj3;
    }
  : () => {
      const obj = ReanimatedRexport;
      const sharedValue = obj.useSharedValue([]);
      let closure_1 = react.useRef([]);
      let items = [sharedValue];
      const obj2 = {
        pageHeights: sharedValue,
        handlePageContentSize: react.useCallback((arg0, arg1, arg2) => {
          const tmp2 = arg2 <= 0 || ref.current[arg0] === arg2;
          if (!tmp2) {
            ref.current[arg0] = arg2;
            const items = [];
            set = sharedValue.set;
            HermesBuiltin.arraySpread(items, ref.current, 0);
            const result = set(items);
          }
        }, items),
      };
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const __initData = {
  code: "function useSegmentedPagesHeightTsx1(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}",
};
const __initData2 = {
  code: "function useSegmentedPagesHeightTsx2(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_129_3;
      let tmp3;
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(7);
      const height = useWindowDimensionsDefault().height;
      const bottom = useSafeAreaInsetsDefault().bottom;
      [tmp3, closure_129_3] = react.useState(0);
      _slicedToArray(react.useState(0), 2);
      const ref = react.useRef(null);
      if (cResult[0] === bottom) {
        if (cResult[1] === arg0) {
          let tmp5;
          if (cResult[2] === height) {
            tmp5 = cResult[3];
          }
          if (cResult[4] === tmp3) {
            let tmp6;
            if (cResult[5] === tmp5) {
              tmp6 = cResult[6];
            }
            return tmp6;
          }
          const obj2 = { pagerRef: ref, fillHeight: tmp3, measureFill: tmp5 };
          let num = 4;
          cResult[4] = tmp3;
          let num2 = 5;
          cResult[5] = tmp5;
          cResult[6] = obj2;
          tmp6 = obj2;
        }
      }
      const fn = function s() {
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
    }
  : (arg0) => {
      let closure_3;
      let first;
      let closure_0 = arg0;
      const height = useWindowDimensionsDefault().height;
      const bottom = useSafeAreaInsetsDefault().bottom;
      [first, closure_3] = react.useState(0);
      const ref = react.useRef(null);
      const items = [height, bottom, arg0];
      const obj = {
        pagerRef: ref,
        fillHeight: first,
        measureFill: react.useCallback(() => {
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
        }, items),
      };
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visiblePageRange, pageHeights, arg2) => {
      _require = pageHeights;
      let num = 0;
      if (undefined !== arg2) {
        num = arg2;
      }
      visiblePageRange = visiblePageRange.visiblePageRange;
      let obj = require("ReanimatedRexport");
      const fn = function o() {
        let obj;
        const value = pageHeights.get();
        const tmp2 = _slicedToArray(visiblePageRange.get(), 2);
        num = value[tmp2[0]];
        const _Math = Math;
        const tmp3 = tmp2[1];
        if (num == null) {
          num = 0;
        }
        let num2 = value[tmp3];
        if (num2 == null) {
          num2 = 0;
        }
        const bound = Math.max(max(num, num2), num);
        if (bound > 0) {
          obj = { height: bound };
          const obj2 = { height: bound };
        } else {
          obj = {};
        }
        return obj;
      };
      fn.__closure = { pageHeights, visiblePageRange, fillHeight: num };
      fn.__workletHash = 7484186791578;
      fn.__initData = __initData;
      return obj.useAnimatedStyle(fn);
    }
  : (visiblePageRange, pageHeights) => {
      _require = pageHeights;
      let num = arg2;
      if (arg2 === undefined) {
        num = 0;
      }
      visiblePageRange = undefined;
      visiblePageRange = visiblePageRange.visiblePageRange;
      let obj = require("ReanimatedRexport");
      const fn = function l() {
        let obj;
        const value = pageHeights.get();
        const tmp2 = _slicedToArray(visiblePageRange.get(), 2);
        num = value[tmp2[0]];
        const _Math = Math;
        const tmp3 = tmp2[1];
        if (num == null) {
          num = 0;
        }
        let num2 = value[tmp3];
        if (num2 == null) {
          num2 = 0;
        }
        const bound = Math.max(max(num, num2), num);
        if (bound > 0) {
          obj = { height: bound };
          const obj2 = { height: bound };
        } else {
          obj = {};
        }
        return obj;
      };
      fn.__closure = { pageHeights, visiblePageRange, fillHeight: num };
      fn.__workletHash = 6752367174009;
      fn.__initData = __initData2;
      return obj.useAnimatedStyle(fn);
    };
let result = size.fileFinishedImporting("modules/user_profile/native/useSegmentedPagesHeight.tsx");

export const usePageHeights = tmp2;
export const usePagerFillHeight = tmp3;
export const usePagesHeightStyle = tmp4;
