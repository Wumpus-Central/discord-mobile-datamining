// discord_app/modules/user_profile/native/UserProfileTabPages.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useIsScreenReaderEnabled from "../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import LegacyBaseButton from "../../../../_runtime/05298_LegacyBaseButton.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const __initData = {
  code: "function UserProfileTabPagesTsx1(){const{isDragging,activeIndex,pageHeights}=this.__closure;if(isDragging.get())return-1;const index=Math.round(activeIndex.get());return pageHeights.get()[index]==null?-1:index;}",
};
const __initData2 = {
  code: "function UserProfileTabPagesTsx2(index){const{destinationIndex,scrollPosition,fillHeight,pagerHeight,pageHeights,runOnJS,scrollUpToFit}=this.__closure;if(index===-1||index===destinationIndex.get())return;const isInitialPage=destinationIndex.get()===-1;destinationIndex.set(index);if(isInitialPage||scrollPosition==null||fillHeight<=0)return;const heightDelta=pagerHeight.get()-Math.max(pageHeights.get()[index],fillHeight);if(heightDelta>0){runOnJS(scrollUpToFit)(heightDelta,scrollPosition.get());}}",
};
const __initData3 = {
  code: "function UserProfileTabPagesTsx3(){const{pageHeights,visiblePageRange,fillHeight,scrollPosition,releaseScrollY}=this.__closure;var _heights$lo,_heights$hi,_scrollPosition$get,_scrollPosition;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);return[Math.max(contentHeight,fillHeight),(_scrollPosition$get=(_scrollPosition=scrollPosition)===null||_scrollPosition===void 0?void 0:_scrollPosition.get())!==null&&_scrollPosition$get!==void 0?_scrollPosition$get:0,releaseScrollY.get()];}",
};
const __initData4 = {
  code: "function UserProfileTabPagesTsx4([targetHeight,scrollY,releaseY]){const{pagerHeight,scrollPosition,fillHeight,releaseScrollY}=this.__closure;const currentHeight=pagerHeight.get();let nextHeight=targetHeight;if(targetHeight<currentHeight&&scrollPosition!=null&&fillHeight>0){if(releaseY>=0&&scrollY<=releaseY+1){releaseScrollY.set(-1);}else{nextHeight=Math.max(targetHeight,Math.min(currentHeight,scrollY+fillHeight));}}if(nextHeight!==currentHeight){pagerHeight.set(nextHeight);}}",
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTabPages.tsx");

export default noop.memo(function UserProfileTabPages(arg0) {
  ({ state, pageHeights, scrollPosition, scrollViewRef, parentPagerGesture } = arg0);
  let height;
  let bottom;
  _slicedToArray = undefined;
  let ref;
  height = height(bottom[5])().height;
  bottom = height(bottom[6])().bottom;
  [tmp2, c3] = ref.useState(0);
  ref = ref.useRef(null);
  let items = [height, bottom, scrollPosition];
  closure_129_0 = pageHeights;
  closure_129_1 = tmp2;
  closure_129_2 = scrollPosition;
  const activeIndex = state.activeIndex;
  closure_129_3 = activeIndex;
  const visiblePageRange = state.visiblePageRange;
  closure_129_4 = visiblePageRange;
  const callback = ref.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1) => {
        let num;
        if (scrollPosition != null) {
          num = scrollPosition.get();
        }
        if (num == null) {
          num = 0;
        }
        const diff = height - (arg1 + num) - bottom;
        let num2 = 0;
        if (diff > 0) {
          num2 = diff;
        }
        _undefined(num2);
      });
    }
  }, items);
  const tmp = _slicedToArray(ref.useState(0), 2);
  const sharedValue = scrollPosition(bottom[4]).useSharedValue(0);
  closure_129_5 = sharedValue;
  let obj = scrollPosition(bottom[4]);
  const sharedValue1 = scrollPosition(bottom[4]).useSharedValue(-1);
  closure_129_6 = sharedValue1;
  let obj2 = scrollPosition(bottom[4]);
  const sharedValue2 = scrollPosition(bottom[4]).useSharedValue(false);
  closure_129_7 = sharedValue2;
  const obj3 = scrollPosition(bottom[4]);
  const sharedValue3 = scrollPosition(bottom[4]).useSharedValue(-1);
  closure_129_8 = sharedValue3;
  const useReducedMotion = state.useReducedMotion;
  closure_130_0 = scrollViewRef;
  closure_130_1 = sharedValue1;
  closure_130_2 = useReducedMotion;
  const items1 = [scrollViewRef, sharedValue1, useReducedMotion];
  const callback1 = ref.useCallback((arg0, arg1) => {
    scrollPosition = arg0;
    closure_1 = arg1;
    let current;
    if (scrollPosition != null) {
      current = scrollPosition.current;
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
          const result = height.set(bound);
          if (closure_1 > bound) {
            const obj = { y: bound, animated: null };
            let tmp5 = !bottom;
            if (!bottom) {
              tmp5 = !useIsScreenReaderEnabled.getIsScreenReaderEnabled();
            }
            obj.animated = tmp5;
            current.scrollTo(obj);
          }
        });
      });
    }
  }, items1);
  closure_129_9 = callback1;
  const obj4 = scrollPosition(bottom[4]);
  const fn = function b() {
    if (__initData.get()) {
      return -1;
    } else {
      const _Math = Math;
      const rounded = Math.round(_undefined.get());
      let num = -1;
      if (null != scrollPosition.get()[rounded]) {
        num = rounded;
      }
      return num;
    }
  };
  fn.__closure = { isDragging: sharedValue2, activeIndex, pageHeights };
  fn.__workletHash = 5702222355442;
  fn.__initData = __initData;
  const fn2 = function v(arg0) {
    if (-1 !== arg0) {
      if (arg0 !== __initData2.get()) {
        value = __initData2.get();
        const result = __initData2.set(arg0);
        if (-1 !== value) {
          if (null != bottom) {
            if (height > 0) {
              const _Math = Math;
              value2 = ScrollView.get();
              const diff = value2 - Math.max(scrollPosition.get()[arg0], tmp);
              if (diff > 0) {
                ReanimatedRexport.runOnJS(__initData3)(diff, bottom.get());
                const runOnJSResult = ReanimatedRexport.runOnJS(__initData3);
              }
            }
          }
        }
      }
    }
  };
  const obj5 = scrollPosition(bottom[4]);
  fn2.__closure = {
    destinationIndex: sharedValue3,
    scrollPosition,
    fillHeight: tmp2,
    pagerHeight: sharedValue,
    pageHeights,
    runOnJS: scrollPosition(bottom[4]).runOnJS,
    scrollUpToFit: callback1,
  };
  fn2.__workletHash = 14291429985222;
  fn2.__initData = __initData2;
  const animatedReaction = obj5.useAnimatedReaction(fn, fn2);
  const obj6 = {
    destinationIndex: sharedValue3,
    scrollPosition,
    fillHeight: tmp2,
    pagerHeight: sharedValue,
    pageHeights,
    runOnJS: scrollPosition(bottom[4]).runOnJS,
    scrollUpToFit: callback1,
  };
  class D {
    constructor() {
      value = scrollPosition.get();
      tmp2 = closure_3(closure_4.get(), 2);
      num = value[tmp2[0]];
      if (num == null) {
        num = 0;
      }
      num2 = value[tmp2[1]];
      if (num2 == null) {
        num2 = 0;
      }
      items = [, ,];
      items[0] = Math.max(Math.max(num, num2), height);
      obj = bottom;
      num3 = undefined;
      if (bottom != null) {
        num3 = obj.get();
      }
      if (num3 == null) {
        num3 = 0;
      }
      items[1] = num3;
      items[2] = closure_1_6.get();
      return items;
    }
  }
  D.__closure = { pageHeights, visiblePageRange, fillHeight: tmp2, scrollPosition, releaseScrollY: sharedValue1 };
  D.__workletHash = 11095612385739;
  D.__initData = __initData3;
  class S {
    constructor(arg0) {
      [tmp, tmp2, tmp3] = arg0;
      obj = closure_1_5;
      value = closure_1_5.get();
      tmp5 = tmp < value;
      if (tmp5) {
        tmp6 = bottom;
        tmp7 = null;
        tmp5 = null != bottom;
      }
      if (tmp5) {
        tmp8 = height;
        num = 0;
        tmp5 = height > 0;
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
          tmp10 = height;
          bound = Math.max(tmp, Math.min(value, tmp2 + height));
          tmp14 = bound;
        } else {
          num3 = 1;
        }
        tmp12 = closure_1_6;
        num4 = -1;
        result1 = closure_1_6.set(-1);
        bound = tmp;
      }
      return;
    }
  }
  S.__closure = { pagerHeight: sharedValue, scrollPosition, fillHeight: tmp2, releaseScrollY: sharedValue1 };
  S.__workletHash = 8135984088379;
  S.__initData = __initData4;
  const animatedReaction1 = scrollPosition(bottom[4]).useAnimatedReaction(D, S);
  const obj7 = scrollPosition(bottom[4]);
  class T {
    constructor() {
      value = closure_1_5.get();
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
  T.__closure = { pagerHeight: sharedValue };
  T.__workletHash = 2768145020675;
  T.__initData = __initData5;
  class M {
    constructor() {
      result = closure_1_7.set(true);
      return;
    }
  }
  M.__closure = { isDragging: sharedValue2 };
  M.__workletHash = 9355002885402;
  M.__initData = __initData6;
  const items2 = [sharedValue2];
  const animatedStyle = scrollPosition(bottom[4]).useAnimatedStyle(T);
  class I {
    constructor() {
      result = closure_1_7.set(false);
      return;
    }
  }
  I.__closure = { isDragging: sharedValue2 };
  I.__workletHash = 6291407031184;
  I.__initData = __initData7;
  const items3 = [sharedValue2];
  const callback2 = ref.useCallback(M, items2);
  const items4 = [parentPagerGesture];
  const callback3 = ref.useCallback(I, items3);
  const memo = ref.useMemo(() => {
    let result;
    if (null != scrollPosition) {
      const Gesture = LegacyBaseButton.Gesture;
      result = Gesture.Native().blocksExternalGesture(tmp);
      const NativeResult = Gesture.Native();
    }
    return result;
  }, items4);
  const obj8 = scrollPosition(bottom[4]);
  return jsx(height(bottom[4]).View, {
    ref,
    onLayout: callback,
    style: animatedStyle,
    children: jsx(scrollPosition(bottom[9]).SegmentedControlPages, {
      state,
      nativeGesture: memo,
      onBeginDragWorklet: callback2,
      onEndDragWorklet: callback3,
    }),
  });
});
export function useMeasuredTabItems(memo) {
  _require = memo;
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
  const items1 = [memo, callback];
  obj2.items = noop.useMemo(
    () =>
      memo.map((children, index) => {
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
}
