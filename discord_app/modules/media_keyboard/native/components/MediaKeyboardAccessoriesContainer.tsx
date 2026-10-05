// === Module 16610: MediaKeyboardAccessoriesContainer ===

// Module 16610 (MediaKeyboardAccessoriesContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import react from "react" /* 19 */;
import NativeMenuStore_mod from "NativeMenuStore" /* 9612 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let flag, obj1, tmp3, tmp5;

let obj2;
const StyleSheet = react_native.StyleSheet;
let NativeMenuStore = NativeMenuStore_mod;
const jsx = Fragment.jsx;
const IS_ANDROID = PlatformUtils.isAndroid();
let createStyles = createStyles_mod;
let obj = { androidContainer: { flex: 1 }, iosContainer: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const __initData = { code: "function MediaKeyboardAccessoriesContainerTsx1(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}" };
const __initData2 = { code: "function MediaKeyboardAccessoriesContainerTsx2(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((animatedIndex) => {
  let animateOnMount;
  let children;
  let initialPosition;
  let ref;
  let tmp14;
  let tmp15;
  let tmp7;
  let tmp = animatedIndex;
  let obj = animatedIndex(animateOnMount[7]);
  const cResult = obj.c(14);
  animatedIndex = animatedIndex.animatedIndex;
  const animatedPosition = animatedIndex.animatedPosition;
  animateOnMount = animatedIndex.animateOnMount;
  ({ children, initialPosition } = animatedIndex);
  const tmp4 = closure_7();
  const tmp6 = IS_ANDROID ? tmp4.androidContainer : tmp4.iosContainer;
  if (cResult[0] !== tmp6) {
    let obj2 = { overflow: "hidden" };
    const merged = Object.assign(tmp6);
    let num = 0;
    cResult[0] = tmp6;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  NativeMenuStore = initialPosition.useRef(false);
  const tmpResult = tmp(animateOnMount[8]);
  const sharedValue = tmpResult.useSharedValue(false);
  if (cResult[2] !== sharedValue) {
    class M {
      constructor() {
        if (!closure_4.current) {
          flag = true;
          tmp.current = true;
          tmp2 = closure_5;
          result = closure_5.set(true);
        }
        return;
      }
    }
    cResult[2] = sharedValue;
    cResult[3] = M;
  } else {
    class M {
      constructor() {
        if (!closure_4.current) {
          flag = true;
          tmp.current = true;
          tmp2 = closure_5;
          result = closure_5.set(true);
        }
        return;
      }
    }
  }
  const tmpResult3 = tmp(animateOnMount[8]);
  class A {
    constructor() {
      tmp = !animateOnMount;
      if (tmp) {
        tmp2 = closure_5;
        tmp = !closure_5.get();
      }
      num = 0;
      if (!tmp) {
        tmp3 = globalThis;
        _Math = Math;
        tmp4 = animatedIndex;
        num = Math.min(animatedIndex.get(), 0);
      }
      if (tmp) {
        value = initialPosition;
      } else {
        tmp5 = animatedPosition;
        value = animatedPosition.get();
      }
      obj = { translateY: null };
      obj2 = closure_0(closure_2[8]);
      obj.translateY = obj2.interpolate(num, [-1, 0], [100, 0]);
      items = [];
      items[0] = obj;
      tmp7 = closure_6;
      if (tmp7) {
        obj1 = { marginTop: null, transform: null };
        obj1.marginTop = value;
        obj1.transform = items;
        obj5 = obj1;
      } else {
        obj5 = { top: null, transform: null };
        obj5.top = value;
        obj5.transform = items;
      }
      return obj5;
    }
  }
  let obj3 = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: tmp(tmp2[8]).interpolate, IS_ANDROID };
  A.__closure = obj3;
  A.__workletHash = 10575537164844;
  A.__initData = __initData;
  const animatedStyle = tmpResult3.useAnimatedStyle(A);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        if (!closure_4.current) {
          flag = true;
          tmp.current = true;
          tmp2 = closure_5;
          result = closure_5.set(true);
        }
        return;
      }
    }
    let items = [NativeMenuStore];
    class L {
      constructor() {
        return closure_4.isOpen();
      }
    }
    cResult[4] = items;
    cResult[5] = L;
    tmp15 = L;
    tmp14 = items;
  } else {
    class M {
      constructor() {
        if (!closure_4.current) {
          flag = true;
          tmp.current = true;
          tmp2 = closure_5;
          result = closure_5.set(true);
        }
        return;
      }
    }
    tmp15 = cResult[5];
  }
  const tmpResult4 = tmp(animateOnMount[9]);
  if (tmpResult4.useStateFromStores(tmp14, tmp15)) {
    class M {
      constructor() {
        if (!closure_4.current) {
          flag = true;
          tmp.current = true;
          tmp2 = closure_5;
          result = closure_5.set(true);
        }
        return;
      }
    }
  }
  if (cResult[6] === animatedStyle) {
    class M {
      constructor() {
        if (!closure_4.current) {
          flag = true;
          tmp.current = true;
          tmp2 = closure_5;
          result = closure_5.set(true);
        }
        return;
      }
    }
    if (cResult[9] === children) {
      class M {
        constructor() {
          if (!closure_4.current) {
            flag = true;
            tmp.current = true;
            tmp2 = closure_5;
            result = closure_5.set(true);
          }
          return;
        }
      }
    }
    class L {
      constructor() {
        return closure_4.isOpen();
      }
    }
    let obj4 = { importantForAccessibility: tmp16, style: tmp17, onLayout: M, pointerEvents: "box-none", children };
    cResult[9] = children;
    cResult[10] = M;
    cResult[11] = tmp16;
    cResult[12] = tmp17;
    cResult[13] = sharedValue(animatedPosition(animateOnMount[8]).View, obj4);
    const tmp20 = sharedValue(animatedPosition(animateOnMount[8]).View, obj4);
  }
  const items1 = [tmp7, animatedStyle];
  cResult[6] = animatedStyle;
  cResult[7] = tmp7;
  cResult[8] = items1;
}) : ((animatedIndex) => {
  let items3;
  animatedIndex = animatedIndex.animatedIndex;
  const animatedPosition = animatedIndex.animatedPosition;
  const animateOnMount = animatedIndex.animateOnMount;
  const initialPosition = animatedIndex.initialPosition;
  const children = animatedIndex.children;
  let tmp = closure_7();
  const open = tmp;
  let items = [tmp];
  const memo = initialPosition.useMemo(() => {
    const obj = { overflow: "hidden" };
    const tmp2 = IS_ANDROID ? open.androidContainer : open.iosContainer;
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  const ref = initialPosition.useRef(false);
  let obj = animatedIndex(animateOnMount[8]);
  const sharedValue = obj.useSharedValue(false);
  const items1 = [sharedValue];
  const callback = initialPosition.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      const result = sharedValue.set(true);
    }
  }, items1);
  let obj2 = animatedIndex(animateOnMount[8]);
  const fn = function _() {
    let obj2;
    let obj4;
    let value;
    const tmp = !animateOnMount && !sharedValue.get();
    let num = 0;
    if (!tmp) {
      const _Math = Math;
      num = Math.min(animatedIndex.get(), 0);
    }
    if (tmp) {
      value = initialPosition;
    } else {
      value = animatedPosition.get();
    }
    const obj = { translateY: obj2.interpolate(num, [-1, 0], [100, 0]) };
    const items = [obj];
    obj2 = ReanimatedRexport;
    if (IS_ANDROID) {
      obj4 = { marginTop: value, transform: items };
      const obj3 = { marginTop: value, transform: items };
    } else {
      obj4 = { top: value, transform: items };
    }
    return obj4;
  };
  let obj3 = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: animatedIndex(animateOnMount[8]).interpolate, IS_ANDROID: sharedValue };
  fn.__closure = obj3;
  fn.__workletHash = 449178126799;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = animatedIndex(animateOnMount[9]);
  const items2 = [open];
  const stateFromStores = obj4.useStateFromStores(items2, () => open.isOpen());
  let str;
  const View = animatedPosition(animateOnMount[8]).View;
  const tmp7 = ref;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  const obj5 = { importantForAccessibility: str, style: items3, onLayout: callback, pointerEvents: "box-none", children };
  items3 = [memo, animatedStyle];
  return tmp7(View, obj5);
});
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx");

export default tmp4;