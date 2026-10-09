// === Module 17038: MediaKeyboardAccessoriesContainer ===

// Module 17038 (MediaKeyboardAccessoriesContainer)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9664 */;

require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1382);
const IS_ANDROID = PlatformUtils.isAndroid();
const createStyles = fn(5091);
let obj3 = { androidContainer: { flex: 1 }, iosContainer: null };
let merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.iosContainer = {};
let closure_7 = createStyles.createStyles(obj3);
const __initData = { code: "function MediaKeyboardAccessoriesContainerTsx1(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}" };
const __initData2 = { code: "function MediaKeyboardAccessoriesContainerTsx2(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MediaKeyboardAccessoriesContainer(animatedIndex) {
  const cResult = animatedIndex(animateOnMount[7]).c(14);
  animatedIndex = animatedIndex.animatedIndex;
  const animatedPosition = animatedIndex.animatedPosition;
  animateOnMount = animatedIndex.animateOnMount;
  ({ children, initialPosition } = animatedIndex);
  const tmp4 = closure_7();
  const tmp6 = IS_ANDROID ? tmp4.androidContainer : tmp4.iosContainer;
  if (cResult[0] !== tmp6) {
    const obj2 = {};
    const merged = Object.assign(tmp6);
    obj2.overflow = "hidden";
    cResult[0] = tmp6;
    cResult[1] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  NativeMenuStore = initialPosition.useRef(false);
  let obj = animatedIndex(animateOnMount[7]);
  const sharedValue = animatedIndex(animateOnMount[8]).useSharedValue(false);
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
  const tmpResult = animatedIndex(animateOnMount[8]);
  const fn = function x() {
    let tmp = !animateOnMount;
    if (!animateOnMount) {
      tmp = !sharedValue.get();
    }
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
    const obj = { translateY: ReanimatedRexport.interpolate(num, [-1, 0], [100, 0]) };
    const items = [obj];
    if (closure_6) {
      const obj3 = { marginTop: value, transform: items };
      let obj4 = obj3;
    } else {
      obj4 = { top: value, transform: items };
    }
    return obj4;
  };
  const tmpResult3 = animatedIndex(animateOnMount[8]);
  fn.__closure = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: animatedIndex(animateOnMount[8]).interpolate, IS_ANDROID };
  fn.__workletHash = 10575537164844;
  fn.__initData = __initData;
  const animatedStyle = tmpResult3.useAnimatedStyle(fn);
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
    let tmp15 = L;
    const tmp14 = items;
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
  let obj3 = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: animatedIndex(animateOnMount[8]).interpolate, IS_ANDROID };
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
    const tmp20 = sharedValue(animatedPosition(tmp2[8]).View, obj4);
    cResult[9] = children;
    cResult[10] = M;
    cResult[11] = tmp16;
    cResult[12] = tmp17;
    cResult[13] = tmp20;
  }
  const items1 = [tmp7, animatedStyle];
  cResult[6] = animatedStyle;
  cResult[7] = tmp7;
  cResult[8] = items1;
  tmpResult4 = animatedIndex(animateOnMount[9]);
}) : (function MediaKeyboardAccessoriesContainer(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  const animatedPosition = animatedIndex.animatedPosition;
  const animateOnMount = animatedIndex.animateOnMount;
  const initialPosition = animatedIndex.initialPosition;
  let tmp = closure_7();
  const open = tmp;
  let items = [tmp];
  const memo = initialPosition.useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_6 ? open.androidContainer : open.iosContainer);
    obj.overflow = "hidden";
    return obj;
  }, items);
  const ref = initialPosition.useRef(false);
  const sharedValue = animatedIndex(animateOnMount[8]).useSharedValue(false);
  const items1 = [sharedValue];
  const callback = initialPosition.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      const result = sharedValue.set(true);
    }
  }, items1);
  let obj = animatedIndex(animateOnMount[8]);
  class D {
    constructor() {
      tmp = !animateOnMount;
      if (!animateOnMount) {
        tmp2 = closure_6;
        tmp = !closure_6.get();
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
      if (closure_6) {
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
  const obj2 = animatedIndex(animateOnMount[8]);
  D.__closure = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: animatedIndex(animateOnMount[8]).interpolate, IS_ANDROID: sharedValue };
  D.__workletHash = 449178126799;
  D.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(D);
  let obj3 = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: animatedIndex(animateOnMount[8]).interpolate, IS_ANDROID: sharedValue };
  const items2 = [open];
  const stateFromStores = animatedIndex(animateOnMount[9]).useStateFromStores(items2, () => open.isOpen());
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  const obj5 = { importantForAccessibility: str, style: null, onLayout: callback, pointerEvents: "box-none", children: animatedIndex.children };
  const items3 = [memo, animatedStyle];
  obj5.style = items3;
  return ref(animatedPosition(animateOnMount[8]).View, obj5);
});