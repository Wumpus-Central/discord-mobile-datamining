// discord_app/modules/user_profile/native/UserProfileTabPages.tsx
import c from "../../../../_runtime/00576_c.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useIsScreenReaderEnabled from "../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import SegmentedControlPages from "../../../design/components/SegmentedControl/native/SegmentedControlPages.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
fn(558);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePagerFillHeight(arg0) {
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
    }
  : function usePagerFillHeight(arg0) {
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
        }, items),
      };
    };
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useScrollUpToFit(arg0, arg1, arg2) {
      _require = arg0;
      closure_1 = arg1;
      dependencyMap = arg2;
      const cResult = require("c").c(4);
      if (cResult[0] === arg1) {
        if (cResult[1] === arg0) {
          if (cResult[2] === arg2) {
            let tmp2 = cResult[3];
          }
          return tmp2;
        }
      }
      const fn = function n(arg0, arg1) {
        closure_1 = arg1;
        let current;
        if (arg0 != null) {
          current = ref.current;
        }
        let nativeScrollRef;
        if (current != null) {
          nativeScrollRef = current.getNativeScrollRef();
        }
        let innerViewRef;
        if (current != null) {
          innerViewRef = current.getInnerViewRef();
        }
        if (tmp4) {
          nativeScrollRef.measure((arg0, arg1, arg2, arg3) => {
            closure_0 = arg3;
            innerViewRef.measure((arg0, arg1, arg2, arg3) => {
              const bound = Math.max(arg3 - closure_0 - closure_0, 0);
              const result = closure_1.set(bound);
              if (closure_1 > bound) {
                const obj = { y: bound, animated: null };
                let tmp5 = !closure_2;
                if (!closure_2) {
                  tmp5 = !useIsScreenReaderEnabled.getIsScreenReaderEnabled();
                }
                obj.animated = tmp5;
                current.scrollTo(obj);
              }
            });
          });
        }
      };
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = arg2;
      cResult[3] = fn;
      tmp2 = fn;
    }
  : function useScrollUpToFit(arg0, arg1, arg2) {
      closure_1 = arg1;
      closure_2 = arg2;
      const items = [arg0, arg1, arg2];
      return noop.useCallback((arg0, arg1) => {
        closure_1 = arg1;
        let current;
        if (arg0 != null) {
          current = ref.current;
        }
        let nativeScrollRef;
        if (current != null) {
          nativeScrollRef = current.getNativeScrollRef();
        }
        let innerViewRef;
        if (current != null) {
          innerViewRef = current.getInnerViewRef();
        }
        if (tmp4) {
          nativeScrollRef.measure((arg0, arg1, arg2, arg3) => {
            closure_0 = arg3;
            innerViewRef.measure((arg0, arg1, arg2, arg3) => {
              const bound = Math.max(arg3 - closure_0 - closure_0, 0);
              const result = closure_1.set(bound);
              if (closure_1 > bound) {
                const obj = { y: bound, animated: null };
                let tmp5 = !closure_2;
                if (!closure_2) {
                  tmp5 = !useIsScreenReaderEnabled.getIsScreenReaderEnabled();
                }
                obj.animated = tmp5;
                current.scrollTo(obj);
              }
            });
          });
        }
      }, items);
    };
let __initData = {
  code: "function UserProfileTabPagesTsx1(){const{isDragging,activeIndex,pageHeights}=this.__closure;if(isDragging.get()){return-1;}const index=Math.round(activeIndex.get());return pageHeights.get()[index]==null?-1:index;}",
};
const __initData2 = {
  code: "function UserProfileTabPagesTsx2(index_0){const{destinationIndex,scrollPosition,fillHeight,pagerHeight,pageHeights,runOnJS,scrollUpToFit}=this.__closure;if(index_0===-1||index_0===destinationIndex.get()){return;}const isInitialPage=destinationIndex.get()===-1;destinationIndex.set(index_0);if(isInitialPage||scrollPosition==null||fillHeight<=0){return;}const heightDelta=pagerHeight.get()-Math.max(pageHeights.get()[index_0],fillHeight);if(heightDelta>0){runOnJS(scrollUpToFit)(heightDelta,scrollPosition.get());}}",
};
const __initData3 = {
  code: "function UserProfileTabPagesTsx3(){const{pageHeights,visiblePageRange,fillHeight,scrollPosition,releaseScrollY}=this.__closure;var _heights$lo,_heights$hi,_scrollPosition$get,_scrollPosition;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);return[Math.max(contentHeight,fillHeight),(_scrollPosition$get=(_scrollPosition=scrollPosition)===null||_scrollPosition===void 0?void 0:_scrollPosition.get())!==null&&_scrollPosition$get!==void 0?_scrollPosition$get:0,releaseScrollY.get()];}",
};
const __initData4 = {
  code: "function UserProfileTabPagesTsx4(t1){const{pagerHeight,scrollPosition,fillHeight,releaseScrollY}=this.__closure;const[targetHeight,scrollY,releaseY]=t1;const currentHeight=pagerHeight.get();let nextHeight=targetHeight;if(targetHeight<currentHeight&&scrollPosition!=null&&fillHeight>0){if(releaseY>=0&&scrollY<=releaseY+1){releaseScrollY.set(-1);}else{nextHeight=Math.max(targetHeight,Math.min(currentHeight,scrollY+fillHeight));}}if(nextHeight!==currentHeight){pagerHeight.set(nextHeight);}}",
};
const __initData5 = {
  code: "function UserProfileTabPagesTsx5(){const{pagerHeight}=this.__closure;const height=pagerHeight.get();return height>0?{height:height}:{};}",
};
const __initData6 = {
  code: "function UserProfileTabPagesTsx6(){const{isDragging}=this.__closure;isDragging.set(true);}",
};
const __initData7 = {
  code: "function UserProfileTabPagesTsx7(){const{isDragging}=this.__closure;isDragging.set(false);}",
};
const __initData8 = {
  code: "function UserProfileTabPagesTsx8(){const{isDragging,activeIndex,pageHeights}=this.__closure;if(isDragging.get())return-1;const index=Math.round(activeIndex.get());return pageHeights.get()[index]==null?-1:index;}",
};
const __initData9 = {
  code: "function UserProfileTabPagesTsx9(index_0){const{destinationIndex,scrollPosition,fillHeight,pagerHeight,pageHeights,runOnJS,scrollUpToFit}=this.__closure;if(index_0===-1||index_0===destinationIndex.get())return;const isInitialPage=destinationIndex.get()===-1;destinationIndex.set(index_0);if(isInitialPage||scrollPosition==null||fillHeight<=0)return;const heightDelta=pagerHeight.get()-Math.max(pageHeights.get()[index_0],fillHeight);if(heightDelta>0){runOnJS(scrollUpToFit)(heightDelta,scrollPosition.get());}}",
};
const __initData10 = {
  code: "function UserProfileTabPagesTsx10(){const{pageHeights,visiblePageRange,fillHeight,scrollPosition,releaseScrollY}=this.__closure;var _heights$lo,_heights$hi,_scrollPosition$get,_scrollPosition;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);return[Math.max(contentHeight,fillHeight),(_scrollPosition$get=(_scrollPosition=scrollPosition)===null||_scrollPosition===void 0?void 0:_scrollPosition.get())!==null&&_scrollPosition$get!==void 0?_scrollPosition$get:0,releaseScrollY.get()];}",
};
const __initData11 = {
  code: "function UserProfileTabPagesTsx11([targetHeight,scrollY,releaseY]){const{pagerHeight,scrollPosition,fillHeight,releaseScrollY}=this.__closure;const currentHeight=pagerHeight.get();let nextHeight=targetHeight;if(targetHeight<currentHeight&&scrollPosition!=null&&fillHeight>0){if(releaseY>=0&&scrollY<=releaseY+1){releaseScrollY.set(-1);}else{nextHeight=Math.max(targetHeight,Math.min(currentHeight,scrollY+fillHeight));}}if(nextHeight!==currentHeight){pagerHeight.set(nextHeight);}}",
};
const __initData12 = {
  code: "function UserProfileTabPagesTsx12(){const{pagerHeight}=this.__closure;const height=pagerHeight.get();return height>0?{height:height}:{};}",
};
const __initData13 = {
  code: "function UserProfileTabPagesTsx13(){const{isDragging}=this.__closure;isDragging.set(true);}",
};
const __initData14 = {
  code: "function UserProfileTabPagesTsx14(){const{isDragging}=this.__closure;isDragging.set(false);}",
};
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePagerHeight(fillHeight) {
      const cResult = pageHeights(scrollPosition[5]).c(8);
      ({ state, pageHeights } = fillHeight);
      fillHeight = fillHeight.fillHeight;
      scrollPosition = fillHeight.scrollPosition;
      const activeIndex = state.activeIndex;
      const visiblePageRange = state.visiblePageRange;
      let obj = pageHeights(scrollPosition[5]);
      const sharedValue = pageHeights(scrollPosition[6]).useSharedValue(0);
      let obj2 = pageHeights(scrollPosition[6]);
      const sharedValue1 = pageHeights(scrollPosition[6]).useSharedValue(-1);
      const obj3 = pageHeights(scrollPosition[6]);
      const sharedValue2 = pageHeights(scrollPosition[6]).useSharedValue(false);
      const obj4 = pageHeights(scrollPosition[6]);
      const sharedValue3 = pageHeights(scrollPosition[6]).useSharedValue(-1);
      let tmp6 = sharedValue3(fillHeight.scrollViewRef, sharedValue1, state.useReducedMotion);
      __initData = tmp6;
      const obj5 = pageHeights(scrollPosition[6]);
      const fn = function n() {
        if (sharedValue2.get()) {
          return -1;
        } else {
          const _Math = Math;
          const rounded = Math.round(activeIndex.get());
          let num = -1;
          if (null != pageHeights.get()[rounded]) {
            num = rounded;
          }
          return num;
        }
      };
      fn.__closure = { isDragging: sharedValue2, activeIndex, pageHeights };
      fn.__workletHash = 10588286791764;
      fn.__initData = __initData;
      const fn2 = function s(arg0) {
        if (-1 !== arg0) {
          if (arg0 !== sharedValue3.get()) {
            value = sharedValue3.get();
            const result = sharedValue3.set(arg0);
            if (-1 !== value) {
              if (null != scrollPosition) {
                if (fillHeight > 0) {
                  const _Math = Math;
                  value2 = sharedValue.get();
                  const diff = value2 - Math.max(pageHeights.get()[arg0], tmp);
                  if (diff > 0) {
                    ReanimatedRexport.runOnJS(closure_9)(diff, scrollPosition.get());
                    const runOnJSResult = ReanimatedRexport.runOnJS(closure_9);
                  }
                }
              }
            }
          }
        }
      };
      const obj6 = pageHeights(scrollPosition[6]);
      fn2.__closure = {
        destinationIndex: sharedValue3,
        scrollPosition,
        fillHeight,
        pagerHeight: sharedValue,
        pageHeights,
        runOnJS: pageHeights(scrollPosition[6]).runOnJS,
        scrollUpToFit: tmp6,
      };
      fn2.__workletHash = 9697768950729;
      fn2.__initData = __initData2;
      const animatedReaction = obj6.useAnimatedReaction(fn, fn2);
      const obj7 = {
        destinationIndex: sharedValue3,
        scrollPosition,
        fillHeight,
        pagerHeight: sharedValue,
        pageHeights,
        runOnJS: pageHeights(scrollPosition[6]).runOnJS,
        scrollUpToFit: tmp6,
      };
      const fn3 = function h() {
        value = pageHeights.get();
        const tmp2 = _slicedToArray(visiblePageRange.get(), 2);
        let num = value[tmp2[0]];
        if (num == null) {
          num = 0;
        }
        let num2 = value[tmp2[1]];
        if (num2 == null) {
          num2 = 0;
        }
        const items = [Math.max(Math.max(num, num2), fillHeight), ,];
        let num3;
        if (scrollPosition != null) {
          num3 = scrollPosition.get();
        }
        if (num3 == null) {
          num3 = 0;
        }
        items[1] = num3;
        items[2] = sharedValue1.get();
        return items;
      };
      fn3.__closure = { pageHeights, visiblePageRange, fillHeight, scrollPosition, releaseScrollY: sharedValue1 };
      fn3.__workletHash = 11095612385739;
      fn3.__initData = __initData3;
      const fn4 = function o(arg0) {
        [tmp2, tmp3, tmp4] = arg0;
        value = sharedValue.get();
        let tmp6 = tmp2 < value;
        if (tmp6) {
          tmp6 = null != scrollPosition;
        }
        if (tmp6) {
          tmp6 = fillHeight > 0;
        }
        if (!tmp6) {
          if (tmp2 !== value) {
            const result = sharedValue.set(tmp2);
          }
        } else {
          if (tmp4 < 0) {
            const _Math = Math;
            const _Math2 = Math;
            let bound = Math.max(tmp2, Math.min(value, tmp3 + fillHeight));
          }
          const result1 = sharedValue1.set(-1);
          bound = tmp2;
        }
        const tmp = _slicedToArray(arg0, 3);
      };
      fn4.__closure = { pagerHeight: sharedValue, scrollPosition, fillHeight, releaseScrollY: sharedValue1 };
      fn4.__workletHash = 3948345174808;
      fn4.__initData = __initData4;
      const animatedReaction1 = pageHeights(scrollPosition[6]).useAnimatedReaction(fn3, fn4);
      const obj8 = pageHeights(scrollPosition[6]);
      class V {
        constructor() {
          value = closure_5.get();
          if (value > 0) {
            obj1 = { height: null };
            obj1.height = value;
            obj = obj1;
          } else {
            obj = {};
          }
          return obj;
        }
      }
      V.__closure = { pagerHeight: sharedValue };
      V.__workletHash = 2768145020675;
      V.__initData = __initData5;
      const animatedStyle = pageHeights(scrollPosition[6]).useAnimatedStyle(V);
      if (cResult[0] !== sharedValue2) {
        class E {
          constructor() {
            result = closure_7.set(true);
            return;
          }
        }
        const obj10 = { isDragging: sharedValue2 };
        E.__closure = obj10;
        E.__workletHash = 9355002885402;
        E.__initData = __initData6;
        cResult[0] = sharedValue2;
        cResult[1] = E;
      } else {
        class E {
          constructor() {
            result = closure_7.set(true);
            return;
          }
        }
      }
      if (cResult[2] !== sharedValue2) {
        class O {
          constructor() {
            result = closure_7.set(false);
            return;
          }
        }
        const obj11 = { isDragging: sharedValue2 };
        O.__closure = obj11;
        O.__workletHash = 6291407031184;
        O.__initData = __initData7;
        cResult[2] = sharedValue2;
        cResult[3] = O;
      } else {
        class O {
          constructor() {
            result = closure_7.set(false);
            return;
          }
        }
      }
      if (cResult[4] === E) {
        class O {
          constructor() {
            result = closure_7.set(false);
            return;
          }
        }
      }
      cResult[4] = E;
      cResult[5] = O;
      cResult[6] = animatedStyle;
      cResult[7] = { pagesHeightStyle: animatedStyle, handleBeginDrag: E, handleEndDrag: O };
      const obj12 = { pagesHeightStyle: animatedStyle, handleBeginDrag: E, handleEndDrag: O };
      const obj9 = pageHeights(scrollPosition[6]);
    }
  : function usePagerHeight(fillHeight) {
      ({ state, pageHeights } = fillHeight);
      fillHeight = fillHeight.fillHeight;
      const scrollPosition = fillHeight.scrollPosition;
      const activeIndex = state.activeIndex;
      const visiblePageRange = state.visiblePageRange;
      const sharedValue = pageHeights(scrollPosition[6]).useSharedValue(0);
      let obj = pageHeights(scrollPosition[6]);
      const sharedValue1 = pageHeights(scrollPosition[6]).useSharedValue(-1);
      let obj2 = pageHeights(scrollPosition[6]);
      const sharedValue2 = pageHeights(scrollPosition[6]).useSharedValue(false);
      const obj3 = pageHeights(scrollPosition[6]);
      const sharedValue3 = pageHeights(scrollPosition[6]).useSharedValue(-1);
      let tmp5 = sharedValue3(fillHeight.scrollViewRef, sharedValue1, state.useReducedMotion);
      closure_9 = tmp5;
      const obj4 = pageHeights(scrollPosition[6]);
      const fn = function f() {
        if (sharedValue2.get()) {
          return -1;
        } else {
          const _Math = Math;
          const rounded = Math.round(activeIndex.get());
          let num = -1;
          if (null != pageHeights.get()[rounded]) {
            num = rounded;
          }
          return num;
        }
      };
      fn.__closure = { isDragging: sharedValue2, activeIndex, pageHeights };
      fn.__workletHash = 7720313060059;
      fn.__initData = __initData8;
      const fn2 = function _(arg0) {
        if (-1 !== arg0) {
          if (arg0 !== sharedValue3.get()) {
            value = sharedValue3.get();
            const result = sharedValue3.set(arg0);
            if (-1 !== value) {
              if (null != scrollPosition) {
                if (fillHeight > 0) {
                  const _Math = Math;
                  value2 = sharedValue.get();
                  const diff = value2 - Math.max(pageHeights.get()[arg0], tmp);
                  if (diff > 0) {
                    ReanimatedRexport.runOnJS(closure_9)(diff, scrollPosition.get());
                    const runOnJSResult = ReanimatedRexport.runOnJS(closure_9);
                  }
                }
              }
            }
          }
        }
      };
      const obj5 = pageHeights(scrollPosition[6]);
      fn2.__closure = {
        destinationIndex: sharedValue3,
        scrollPosition,
        fillHeight,
        pagerHeight: sharedValue,
        pageHeights,
        runOnJS: pageHeights(scrollPosition[6]).runOnJS,
        scrollUpToFit: tmp5,
      };
      fn2.__workletHash = 9625045135330;
      fn2.__initData = __initData9;
      const animatedReaction = obj5.useAnimatedReaction(fn, fn2);
      const obj6 = {
        destinationIndex: sharedValue3,
        scrollPosition,
        fillHeight,
        pagerHeight: sharedValue,
        pageHeights,
        runOnJS: pageHeights(scrollPosition[6]).runOnJS,
        scrollUpToFit: tmp5,
      };
      class P {
        constructor() {
          value = pageHeights.get();
          tmp2 = closure_3(visiblePageRange.get(), 2);
          num = value[tmp2[0]];
          if (num == null) {
            num = 0;
          }
          num2 = value[tmp2[1]];
          if (num2 == null) {
            num2 = 0;
          }
          items = [, ,];
          items[0] = Math.max(Math.max(num, num2), fillHeight);
          obj = scrollPosition;
          num3 = undefined;
          if (scrollPosition != null) {
            num3 = obj.get();
          }
          if (num3 == null) {
            num3 = 0;
          }
          items[1] = num3;
          items[2] = closure_6.get();
          return items;
        }
      }
      P.__closure = { pageHeights, visiblePageRange, fillHeight, scrollPosition, releaseScrollY: sharedValue1 };
      P.__workletHash = 14713913772153;
      P.__initData = __initData10;
      class H {
        constructor(arg0) {
          [tmp, tmp2, tmp3] = fillHeight;
          obj = closure_5;
          value = closure_5.get();
          tmp5 = tmp < value;
          if (tmp5) {
            tmp6 = scrollPosition;
            tmp7 = null;
            tmp5 = null != scrollPosition;
          }
          if (tmp5) {
            tmp8 = fillHeight;
            num = 0;
            tmp5 = fillHeight > 0;
          }
          if (!tmp5) {
            if (tmp !== value) {
              result = obj.set(tmp);
            }
            return;
          } else {
            num2 = 0;
            if (tmp3 < 0) {
              tmp9 = globalThis;
              _Math = Math;
              _Math2 = Math;
              tmp10 = fillHeight;
              bound = Math.max(tmp, Math.min(value, tmp2 + fillHeight));
              tmp14 = bound;
            } else {
              num3 = 1;
            }
            tmp12 = closure_6;
            num4 = -1;
            result1 = closure_6.set(-1);
            bound = tmp;
          }
          return;
        }
      }
      H.__closure = { pagerHeight: sharedValue, scrollPosition, fillHeight, releaseScrollY: sharedValue1 };
      H.__workletHash = 14235497050767;
      H.__initData = __initData11;
      const animatedReaction1 = pageHeights(scrollPosition[6]).useAnimatedReaction(P, H);
      const obj8 = { pagesHeightStyle: null, handleBeginDrag: null, handleEndDrag: null };
      const obj7 = pageHeights(scrollPosition[6]);
      const fn3 = function x() {
        value = sharedValue.get();
        if (value > 0) {
          const obj2 = { height: value };
          let obj = obj2;
        } else {
          obj = {};
        }
        return obj;
      };
      fn3.__closure = { pagerHeight: sharedValue };
      fn3.__workletHash = 14164427905717;
      fn3.__initData = __initData12;
      obj8.pagesHeightStyle = pageHeights(scrollPosition[6]).useAnimatedStyle(fn3);
      const fn4 = function p() {
        const result = sharedValue2.set(true);
      };
      fn4.__closure = { isDragging: sharedValue2 };
      fn4.__workletHash = 1927346605902;
      fn4.__initData = __initData13;
      let items = [sharedValue2];
      obj8.handleBeginDrag = visiblePageRange.useCallback(fn4, items);
      class I {
        constructor() {
          result = closure_7.set(false);
          return;
        }
      }
      I.__closure = { isDragging: sharedValue2 };
      I.__workletHash = 14913930866690;
      I.__initData = __initData14;
      const items1 = [sharedValue2];
      obj8.handleEndDrag = visiblePageRange.useCallback(I, items1);
      return obj8;
    };
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMeasuredTabItems(arr) {
      const cResult = sharedValue(576).c(11);
      let obj = sharedValue(576);
      sharedValue = sharedValue(5053).useSharedValue([]);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      noop.useRef(first);
      if (cResult[1] !== sharedValue) {
        const fn = function u(arg0, arg1) {
          let tmp = arg1 <= 0;
          if (!tmp) {
            tmp = ref.current[arg0] === arg1;
          }
          if (!tmp) {
            ref.current[arg0] = arg1;
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
      dependencyMap = tmp4;
      if (cResult[3] === tmp4) {
        if (cResult[4] === arr) {
          if (cResult[8] === cResult[5]) {
            if (cResult[9] === sharedValue) {
              let tmp8 = cResult[10];
            }
            return tmp8;
          }
          const obj3 = { items: cResult[5], pageHeights: sharedValue };
          cResult[8] = cResult[5];
          cResult[9] = sharedValue;
          cResult[10] = obj3;
          tmp8 = obj3;
        }
      }
      if (cResult[6] !== tmp4) {
        class H {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            obj = {};
            merged = Object.assign(arr);
            obj1 = {
              scrollEnabled: false,
              onContentSizeChange(arg0, arg1) {
                return closure_2(closure_0, arg1);
              },
              children: arr.page,
            };
            obj.page = closure_1_6(closure_1_5, obj1, arr.id);
            return obj;
          }
        }
        cResult[6] = tmp4;
        cResult[7] = H;
      } else {
        class H {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            obj = {};
            merged = Object.assign(arr);
            obj1 = {
              scrollEnabled: false,
              onContentSizeChange(arg0, arg1) {
                return closure_2(closure_0, arg1);
              },
              children: arr.page,
            };
            obj.page = closure_1_6(closure_1_5, obj1, arr.id);
            return obj;
          }
        }
      }
      const mapped = arr.map(H);
      cResult[3] = tmp4;
      cResult[4] = arr;
      cResult[5] = mapped;
      const obj2 = sharedValue(5053);
    }
  : function useMeasuredTabItems(arg0) {
      _require = arg0;
      const sharedValue = require("ReanimatedRexport").useSharedValue([]);
      dependencyMap = noop.useRef([]);
      let items = [sharedValue];
      const callback = noop.useCallback((arg0, arg1) => {
        let tmp = arg1 <= 0;
        if (!tmp) {
          tmp = ref.current[arg0] === arg1;
        }
        if (!tmp) {
          ref.current[arg0] = arg1;
          const items = [];
          HermesBuiltin.arraySpread(ref.current, 0);
          const result = sharedValue.set(items);
        }
      }, items);
      const obj2 = { items: null, pageHeights: sharedValue };
      const items1 = [arg0, callback];
      obj2.items = noop.useMemo(
        () =>
          closure_0.map((children, index) => {
            closure_0 = index;
            const obj = {};
            const merged = Object.assign(children);
            obj.page = closure_1_6(
              closure_1_5,
              {
                scrollEnabled: false,
                onContentSizeChange(arg0, arg1) {
                  return callback(closure_0, arg1);
                },
                children: children.page,
              },
              children.id,
            );
            return obj;
          }),
        items1,
      );
      return obj2;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTabPages.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function UserProfileTabPages(arg0) {
        const cResult = c.c(15);
        ({ state, pageHeights, scrollPosition, scrollViewRef } = arg0);
        ({ pagerRef, fillHeight, measureFill } = closure_7(scrollPosition));
        if (cResult[0] === fillHeight) {
          if (cResult[1] === pageHeights) {
            if (cResult[2] === scrollPosition) {
              if (cResult[3] === scrollViewRef) {
                if (cResult[4] === state) {
                  let tmp5 = cResult[5];
                }
                ({ pagesHeightStyle, handleBeginDrag, handleEndDrag } = closure_23(tmp5));
                if (cResult[6] === handleBeginDrag) {
                  if (cResult[7] === handleEndDrag) {
                    if (cResult[8] === state) {
                      let tmp8 = cResult[9];
                    }
                    if (cResult[10] === measureFill) {
                      if (cResult[11] === pagerRef) {
                        if (cResult[12] === pagesHeightStyle) {
                          if (cResult[13] === tmp8) {
                            let tmp11 = cResult[14];
                          }
                          return tmp11;
                        }
                      }
                    }
                    const obj2 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: tmp8 };
                    const tmp14 = jsx(ReanimatedRexportDefault.View, {
                      ref: pagerRef,
                      onLayout: measureFill,
                      style: pagesHeightStyle,
                      children: tmp8,
                    });
                    cResult[10] = measureFill;
                    cResult[11] = pagerRef;
                    cResult[12] = pagesHeightStyle;
                    cResult[13] = tmp8;
                    cResult[14] = tmp14;
                    tmp11 = tmp14;
                  }
                }
                const obj3 = { state, onBeginDragWorklet: handleBeginDrag, onEndDragWorklet: handleEndDrag };
                const tmp10 = jsx(SegmentedControlPages.SegmentedControlPages, {
                  state,
                  onBeginDragWorklet: handleBeginDrag,
                  onEndDragWorklet: handleEndDrag,
                });
                cResult[6] = handleBeginDrag;
                cResult[7] = handleEndDrag;
                cResult[8] = state;
                cResult[9] = tmp10;
                tmp8 = tmp10;
                const tmp7 = closure_23(tmp5);
              }
            }
          }
        }
        const obj4 = { state, pageHeights, fillHeight, scrollPosition, scrollViewRef };
        cResult[0] = fillHeight;
        cResult[1] = pageHeights;
        cResult[2] = scrollPosition;
        cResult[3] = scrollViewRef;
        cResult[4] = state;
        cResult[5] = obj4;
        tmp5 = obj4;
        const tmp4 = closure_7(scrollPosition);
      }
    : function UserProfileTabPages(arg0) {
        ({ state, scrollPosition } = arg0);
        ({ pageHeights, scrollViewRef } = arg0);
        const tmp = closure_7(scrollPosition);
        ({ pagerRef, measureFill } = tmp);
        ({ pagesHeightStyle, handleBeginDrag, handleEndDrag } = closure_23({
          state,
          pageHeights,
          fillHeight: tmp.fillHeight,
          scrollPosition,
          scrollViewRef,
        }));
        const obj = { state, pageHeights, fillHeight: tmp.fillHeight, scrollPosition, scrollViewRef };
        const tmp2 = closure_23({ state, pageHeights, fillHeight: tmp.fillHeight, scrollPosition, scrollViewRef });
        return jsx(ReanimatedRexportDefault.View, {
          ref: pagerRef,
          onLayout: measureFill,
          style: pagesHeightStyle,
          children: jsx(SegmentedControlPages.SegmentedControlPages, {
            state,
            onBeginDragWorklet: handleBeginDrag,
            onEndDragWorklet: handleEndDrag,
          }),
        });
      },
);
export const useMeasuredTabItems = tmp2;
