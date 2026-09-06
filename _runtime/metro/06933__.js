// === Module 6933: ? ===

// Module 6933
import cancelAnimation from "cancelAnimation" /* 1636 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import _mod6935 from "module_6935" /* 6935 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useRef: closure_7, useState: closure_8, memo } = noop);
const jsx = fn(21).jsx;
let closure_10 = { code: "function pnpm_BottomSheetBackdropTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}" };
let __initData = { code: "function pnpm_BottomSheetBackdropTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity,Extrapolation}=this.__closure;return{opacity:interpolate(animatedIndex.value,[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity],Extrapolation.CLAMP)};}" };
let __initData2 = { code: "function pnpm_BottomSheetBackdropTsx3(){const{animatedIndex,disappearsOnIndex}=this.__closure;return Math.round(animatedIndex.value)<=disappearsOnIndex;}" };
let closure_13 = { code: "function pnpm_BottomSheetBackdropTsx4(shouldDisableTouchability,previous){const{runOnJS,handleContainerTouchability}=this.__closure;if(shouldDisableTouchability===previous){return;}runOnJS(handleContainerTouchability)(shouldDisableTouchability);}" };
const memoResult = memo((animatedIndex) => {
  animatedIndex = animatedIndex.animatedIndex;
  ({ opacity, appearsOnIndex, disappearsOnIndex, enableTouchThrough, pressBehavior } = animatedIndex);
  if (pressBehavior === undefined) {
    pressBehavior = animatedIndex(onPress[3]).DEFAULT_PRESS_BEHAVIOR;
  }
  onPress = animatedIndex.onPress;
  const style = animatedIndex.style;
  ({ ViewComponent, children } = animatedIndex);
  if (ViewComponent === undefined) {
    ViewComponent = pressBehavior(onPress[4]).View;
  }
  let DEFAULT_ACCESSIBLE = animatedIndex.accessible;
  if (DEFAULT_ACCESSIBLE === undefined) {
    DEFAULT_ACCESSIBLE = animatedIndex(onPress[3]).DEFAULT_ACCESSIBLE;
  }
  let DEFAULT_ACCESSIBILITY_ROLE = animatedIndex.accessibilityRole;
  if (DEFAULT_ACCESSIBILITY_ROLE === undefined) {
    DEFAULT_ACCESSIBILITY_ROLE = animatedIndex(onPress[3]).DEFAULT_ACCESSIBILITY_ROLE;
  }
  let DEFAULT_ACCESSIBILITY_LABEL = animatedIndex.accessibilityLabel;
  if (DEFAULT_ACCESSIBILITY_LABEL === undefined) {
    DEFAULT_ACCESSIBILITY_LABEL = animatedIndex(onPress[3]).DEFAULT_ACCESSIBILITY_LABEL;
  }
  let DEFAULT_ACCESSIBILITY_HINT = animatedIndex.accessibilityHint;
  if (DEFAULT_ACCESSIBILITY_HINT === undefined) {
    DEFAULT_ACCESSIBILITY_HINT = animatedIndex(onPress[3]).DEFAULT_ACCESSIBILITY_HINT;
  }
  opacity = undefined;
  appearsOnIndex = undefined;
  disappearsOnIndex = undefined;
  __initData = undefined;
  __initData2 = undefined;
  let animatedStyle;
  let obj = animatedIndex(onPress[5]);
  const bottomSheet = obj.useBottomSheet();
  const snapToIndex = bottomSheet.snapToIndex;
  const close = bottomSheet.close;
  const ref = opacity(false);
  if (opacity == null) {
    opacity = tmp13(tmp14[3]).DEFAULT_OPACITY;
  }
  if (appearsOnIndex == null) {
    appearsOnIndex = tmp13(tmp14[3]).DEFAULT_APPEARS_ON_INDEX;
  }
  if (disappearsOnIndex == null) {
    disappearsOnIndex = tmp13(tmp14[3]).DEFAULT_DISAPPEARS_ON_INDEX;
  }
  if (enableTouchThrough == null) {
    enableTouchThrough = tmp13(tmp14[3]).DEFAULT_ENABLE_TOUCH_THROUGH;
  }
  let str = "auto";
  if (enableTouchThrough) {
    str = "none";
  }
  const tmp17 = style(appearsOnIndex(str), 2);
  let items = [snapToIndex, close, disappearsOnIndex, pressBehavior, onPress];
  const tmp18 = snapToIndex(() => {
    if (onPress != null) {
      tmp();
    }
    if ("close" === pressBehavior) {
      close();
    } else if ("collapse" === tmp3) {
      snapToIndex(disappearsOnIndex);
    } else if (typeof tmp3 === "number") {
      snapToIndex(tmp3);
    }
  }, items);
  __initData = tmp18;
  const tmp19 = snapToIndex((arg0) => {
    if (ref.current) {
      let str = "auto";
      if (arg0) {
        str = "none";
      }
      __initData(str);
    }
  }, []);
  __initData2 = tmp19;
  let items1 = [tmp18];
  let tmp13Result = tmp13(tmp14[4]);
  class P {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[4]);
      items = [-1];
      items[1] = closure_9;
      items[2] = DEFAULT_APPEARS_ON_INDEX;
      items1 = [0, 0];
      items1[2] = DEFAULT_OPACITY;
      obj.opacity = obj2.interpolate(animatedIndex.value, items, items1, closure_0(closure_2[4]).Extrapolation.CLAMP);
      return obj;
    }
  }
  obj = { interpolate: tmp13(tmp14[4]).interpolate, animatedIndex, disappearsOnIndex, appearsOnIndex, opacity, Extrapolation: tmp13(tmp14[4]).Extrapolation };
  P.__closure = obj;
  P.__workletHash = 7085425846204;
  P.__initData = __initData;
  const items2 = [animatedIndex, appearsOnIndex, disappearsOnIndex, opacity];
  animatedStyle = tmp13Result.useAnimatedStyle(P, items2);
  const items3 = [style, animatedStyle];
  const tmp20 = ref(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function n() {
      animatedIndex(onPress[4]).runOnJS(handleOnPress)();
    };
    const TapResult = Gesture.Tap();
    fn.__closure = { runOnJS: cancelAnimation.runOnJS, handleOnPress };
    fn.__workletHash = 10704059633145;
    fn.__initData = __initData;
    return TapResult.onEnd(fn);
  }, items1);
  tmp13Result = tmp13(tmp14[4]);
  class H {
    constructor() {
      return Math.round(animatedIndex.value) <= closure_9;
    }
  }
  H.__closure = { animatedIndex, disappearsOnIndex };
  H.__workletHash = 17177056692744;
  H.__initData = __initData2;
  let fn = function k(arg0, arg1) {
    if (arg0 !== arg1) {
      cancelAnimation.runOnJS(closure_12)(arg0);
    }
  };
  obj = { runOnJS: tmp13(tmp14[4]).runOnJS, handleContainerTouchability: tmp19 };
  fn.__closure = obj;
  fn.__workletHash = 17426135168622;
  fn.__initData = animatedStyle;
  const items4 = [disappearsOnIndex];
  const animatedReaction = tmp13Result.useAnimatedReaction(H, fn, items4);
  close(() => {
    closure_6.current = true;
    return () => {
      ref.current = false;
    };
  }, []);
  const obj1 = {
    style: ref(() => {
      const items = [_mod6935.styles.backdrop, style, animatedStyle];
      return items;
    }, items3),
    pointerEvents: tmp17[0],
    accessible: DEFAULT_ACCESSIBLE,
    accessibilityRole: DEFAULT_ACCESSIBILITY_ROLE,
    accessibilityLabel: DEFAULT_ACCESSIBILITY_LABEL,
    accessibilityHint: null,
    children: null
  };
  if (!DEFAULT_ACCESSIBILITY_HINT) {
    let str2 = "move";
    if (typeof pressBehavior === "string") {
      str2 = pressBehavior;
    }
    const _HermesInternal = HermesInternal;
    DEFAULT_ACCESSIBILITY_HINT = "Tap to " + str2 + " the Bottom Sheet";
  }
  obj1.accessibilityHint = DEFAULT_ACCESSIBILITY_HINT;
  obj1.children = children;
  let tmp25Result = tmp25(ViewComponent, obj1);
  if ("none" !== pressBehavior) {
    const obj2 = { gesture: tmp20, children: tmp25Result };
    tmp25Result = tmp25(tmp13(tmp14[6]).GestureDetector, obj2);
  }
  return tmp25Result;
});
memoResult.displayName = "BottomSheetBackdrop";

export const BottomSheetBackdrop = memoResult;