// discord_app/modules/user_profile/native/UserProfileTabPages.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import useIsScreenReaderEnabled from "../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const _modDef1652 = tmp(1652);
require = fn;
const ScrollView = fn(17).ScrollView;
let jsx = fn(21).jsx;
let closure_7 = {
  code: "(function UserProfileTabPagesTsx1(){let[isDragging,activeIndex,pageHeights]=this.__closure;if(isDragging.get())return-1;const index=Math.round(activeIndex.get());return pageHeights.get()[index]==null?-1:index;})",
};
let closure_8 = {
  code: "(function UserProfileTabPagesTsx2(index){let[destinationIndex,scrollPosition,fillHeight,pagerHeight,pageHeights,scheduleOnRN,scrollUpToFit]=this.__closure;if(index===-1||index===destinationIndex.get())return;const isInitialPage=destinationIndex.get()===-1;destinationIndex.set(index);if(isInitialPage||scrollPosition==null||fillHeight<=0)return;const heightDelta=pagerHeight.get()-Math.max(pageHeights.get()[index],fillHeight);if(heightDelta>0){scheduleOnRN(scrollUpToFit,heightDelta,scrollPosition.get());}})",
};
let closure_9 = {
  code: "(function UserProfileTabPagesTsx3(){let[pageHeights,visiblePageRange,fillHeight,scrollPosition,releaseScrollY]=this.__closure;var _heights$lo,_heights$hi,_scrollPosition$get,_scrollPosition;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);return[Math.max(contentHeight,fillHeight),(_scrollPosition$get=(_scrollPosition=scrollPosition)===null||_scrollPosition===void 0?void 0:_scrollPosition.get())!==null&&_scrollPosition$get!==void 0?_scrollPosition$get:0,releaseScrollY.get()];})",
};
let closure_10 = {
  code: "(function UserProfileTabPagesTsx4([targetHeight,scrollY,releaseY]){let[pagerHeight,scrollPosition,fillHeight,releaseScrollY]=this.__closure;const currentHeight=pagerHeight.get();let nextHeight=targetHeight;if(targetHeight<currentHeight&&scrollPosition!=null&&fillHeight>0){if(releaseY>=0&&scrollY<=releaseY+1){releaseScrollY.set(-1);}else{nextHeight=Math.max(targetHeight,Math.min(currentHeight,scrollY+fillHeight));}}if(nextHeight!==currentHeight){pagerHeight.set(nextHeight);}})",
};
let closure_11 = {
  code: "(function UserProfileTabPagesTsx5(){let[pagerHeight]=this.__closure;const height=pagerHeight.get();return height>0?{height:height}:{};})",
};
let closure_12 = { code: "(function UserProfileTabPagesTsx6(){let[isDragging]=this.__closure;isDragging.set(true);})" };
let closure_13 = {
  code: "(function UserProfileTabPagesTsx7(){let[isDragging]=this.__closure;isDragging.set(false);})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTabPages.tsx");

export default noop.memo(function UserProfileTabPages(arg0) {
  ({ state, pageHeights, scrollPosition, scrollViewRef } = arg0);
  _require = scrollPosition;
  c3 = undefined;
  noop = undefined;
  const height = useWindowDimensionsDefault().height;
  importDefault = height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  [tmp4, c3] = c3(noop.useState(0), 2);
  const ref = noop.useRef(null);
  noop = ref;
  items = [height, bottom, scrollPosition];
  const callback = noop.useCallback(() => {
    const current = _undefined5.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1) => {
        let num;
        if (_undefined != null) {
          num = _undefined.get();
        }
        if (num == null) {
          num = 0;
        }
        const diff = _undefined2 - (arg1 + num) - _undefined3;
        let num2 = 0;
        if (diff > 0) {
          num2 = diff;
        }
        _undefined4(num2);
      });
    }
  }, items);
  ({ activeIndex, visiblePageRange } = state);
  const tmp3 = c3(noop.useState(0), 2);
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj2 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(-1);
  const obj3 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue2 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const obj4 = require("../../../../_runtime/metro/01652__.js");
  const useReducedMotion = state.useReducedMotion;
  _require = scrollViewRef;
  const items1 = [scrollViewRef, sharedValue1, useReducedMotion];
  const sharedValue3 = require("../../../../_runtime/metro/01652__.js").useSharedValue(-1);
  const callback1 = noop.useCallback((arg0, arg1) => {
    _undefined = arg0;
    closure_1 = arg1;
    let current;
    if (_undefined != null) {
      current = _undefined.current;
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
          const result = c1.set(bound);
          if (closure_1 > bound) {
            const obj = { y: bound, animated: null };
            let tmp5 = !c2;
            if (!c2) {
              tmp5 = !useIsScreenReaderEnabled.getIsScreenReaderEnabled();
            }
            obj.animated = tmp5;
            current.scrollTo(obj);
          }
        });
      });
    }
  }, items1);
  const obj5 = require("../../../../_runtime/metro/01652__.js");
  const items2 = [closure_7, sharedValue2, activeIndex, pageHeights];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items2;
  class UserProfileTabPagesTsx1 {
    constructor() {
      if (closure_0.get()) {
        num2 = -1;
        return -1;
      } else {
        tmp = globalThis;
        _Math = Math;
        tmp2 = closure_1;
        rounded = Math.round(closure_1.get());
        tmp4 = closure_2;
        tmp5 = null;
        num = -1;
        if (null != closure_2.get()[rounded]) {
          num = rounded;
        }
        return num;
      }
    }
  }
  const items3 = [tmp14, tmp15, tmp16];
  UserProfileTabPagesTsx1.__closure = items3;
  UserProfileTabPagesTsx1.__workletHash = 12657345027755;
  UserProfileTabPagesTsx1.__initData = tmp13;
  const items4 = [
    closure_8,
    sharedValue3,
    scrollPosition,
    tmp4,
    sharedValue,
    pageHeights,
    require("../../../../_runtime/metro/01705__.js").scheduleOnRN,
    callback1,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  jsx = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items4;
  class UserProfileTabPagesTsx2 {
    constructor(arg0) {
      if (-1 !== arg0) {
        obj2 = closure_0;
        if (arg0 !== closure_0.get()) {
          value = obj2.get();
          result = obj2.set(arg0);
          if (-1 !== value) {
            obj = closure_1;
            tmp = null;
            if (null != closure_1) {
              num = 0;
              if (closure_2 > 0) {
                tmp3 = closure_3;
                tmp5 = globalThis;
                _Math = Math;
                tmp6 = closure_4;
                value1 = closure_3.get();
                diff = value1 - Math.max(closure_4.get()[arg0], tmp2);
                if (diff > 0) {
                  tmp8 = closure_5;
                  tmp9 = closure_6;
                  tmp10 = closure_5(closure_6, diff, obj.get());
                }
              }
            }
          }
        }
      }
      return;
    }
  }
  const items5 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
  UserProfileTabPagesTsx2.__closure = items5;
  UserProfileTabPagesTsx2.__workletHash = 17354990160146;
  UserProfileTabPagesTsx2.__initData = tmp17;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    UserProfileTabPagesTsx1,
    UserProfileTabPagesTsx2,
  );
  const obj6 = require("../../../../_runtime/metro/01652__.js");
  const items6 = [closure_9, pageHeights, visiblePageRange, tmp4, scrollPosition, sharedValue1];
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items6;
  class UserProfileTabPagesTsx3 {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_3(closure_1.get(), 2);
      num = value[tmp2[0]];
      if (num == null) {
        num = 0;
      }
      num2 = value[tmp2[1]];
      if (num2 == null) {
        num2 = 0;
      }
      items = [, ,];
      items[0] = Math.max(Math.max(num, num2), closure_2);
      obj = closure_3;
      num3 = undefined;
      if (closure_3 != null) {
        num3 = obj.get();
      }
      if (num3 == null) {
        num3 = 0;
      }
      items[1] = num3;
      items[2] = closure_4.get();
      return items;
    }
  }
  const items7 = [tmp27, tmp28, tmp29, tmp30, tmp31];
  UserProfileTabPagesTsx3.__closure = items7;
  UserProfileTabPagesTsx3.__workletHash = 5507427512978;
  UserProfileTabPagesTsx3.__initData = tmp26;
  const items8 = [closure_10, sharedValue, scrollPosition, tmp4, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36] = items8;
  class UserProfileTabPagesTsx4 {
    constructor(arg0) {
      [tmp, tmp2, tmp3] = arg0;
      obj = closure_0;
      value = closure_0.get();
      tmp5 = tmp < value;
      if (tmp5) {
        tmp6 = closure_1;
        tmp7 = null;
        tmp5 = null != closure_1;
      }
      if (tmp5) {
        tmp8 = closure_2;
        num = 0;
        tmp5 = closure_2 > 0;
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
          tmp10 = closure_2;
          bound = Math.max(tmp, Math.min(value, tmp2 + closure_2));
          tmp14 = bound;
        } else {
          num3 = 1;
        }
        tmp12 = closure_3;
        num4 = -1;
        result1 = closure_3.set(-1);
        bound = tmp;
      }
      return;
    }
  }
  const items9 = [tmp33, tmp34, tmp35, tmp36];
  UserProfileTabPagesTsx4.__closure = items9;
  UserProfileTabPagesTsx4.__workletHash = 12442150107490;
  UserProfileTabPagesTsx4.__initData = tmp32;
  const animatedReaction1 = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    UserProfileTabPagesTsx3,
    UserProfileTabPagesTsx4,
  );
  const tmp7Result = require("../../../../_runtime/metro/01652__.js");
  const items10 = [closure_11, sharedValue];
  _require = undefined;
  [tmp38, tmp39] = items10;
  class UserProfileTabPagesTsx5 {
    constructor() {
      value = closure_0.get();
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
  const items11 = [tmp39];
  UserProfileTabPagesTsx5.__closure = items11;
  UserProfileTabPagesTsx5.__workletHash = 14364504137498;
  UserProfileTabPagesTsx5.__initData = tmp38;
  const items12 = [closure_12, sharedValue2];
  _require = undefined;
  [tmp41, tmp42] = items12;
  class UserProfileTabPagesTsx6 {
    constructor() {
      result = closure_0.set(true);
      return;
    }
  }
  const items13 = [tmp42];
  UserProfileTabPagesTsx6.__closure = items13;
  UserProfileTabPagesTsx6.__workletHash = 5669274193379;
  UserProfileTabPagesTsx6.__initData = tmp41;
  const items14 = [sharedValue2];
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(UserProfileTabPagesTsx5);
  const items15 = [closure_13, sharedValue2];
  _require = undefined;
  [tmp44, tmp45] = items15;
  class UserProfileTabPagesTsx7 {
    constructor() {
      result = closure_0.set(false);
      return;
    }
  }
  const items16 = [tmp45];
  UserProfileTabPagesTsx7.__closure = items16;
  UserProfileTabPagesTsx7.__workletHash = 9823673150153;
  UserProfileTabPagesTsx7.__initData = tmp44;
  const items17 = [sharedValue2];
  const callback2 = obj.useCallback(UserProfileTabPagesTsx6, items14);
  const callback3 = obj.useCallback(UserProfileTabPagesTsx7, items17);
  const tmp7Result2 = require("../../../../_runtime/metro/01652__.js");
  return jsx(_modDef1652.View, {
    ref,
    onLayout: callback,
    style: animatedStyle,
    children: jsx(require("SegmentedControlPages").SegmentedControlPages, {
      state,
      bounces: false,
      onBeginDragWorklet: callback2,
      onEndDragWorklet: callback3,
    }),
  });
});
export function useMeasuredTabItems(memo) {
  _require = memo;
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue([]);
  dependencyMap = noop.useRef([]);
  items = [sharedValue];
  const callback = noop.useCallback((arg0, arg1) => {
    let tmp = arg1 <= 0;
    if (!tmp) {
      tmp = ref.current[arg0] === arg1;
    }
    if (!tmp) {
      ref.current[arg0] = arg1;
      items = [];
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
