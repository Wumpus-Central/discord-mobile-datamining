// _runtime/05745_memo.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import "noop";
import { jsx } from "jsxProd";

let c4;
let c5;
let closure_6;
let error;
let memo;
let metroImportAll;
const require = arg1;
({ useCallback: c4, useEffect: c5, useMemo: closure_6, useRef: error, useState: metroImportAll, memo } = noop);
let closure_10 = { code: "function pnpm_BottomSheetBackdropTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}" };
let closure_11 = { code: "function pnpm_BottomSheetBackdropTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity,Extrapolation}=this.__closure;return{opacity:interpolate(animatedIndex.value,[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity],Extrapolation.CLAMP)};}" };
let closure_12 = { code: "function pnpm_BottomSheetBackdropTsx3(){const{animatedIndex,disappearsOnIndex}=this.__closure;return animatedIndex.value<=disappearsOnIndex;}" };
let closure_13 = { code: "function pnpm_BottomSheetBackdropTsx4(shouldDisableTouchability,previous){const{runOnJS,handleContainerTouchability}=this.__closure;if(shouldDisableTouchability===previous){return;}runOnJS(handleContainerTouchability)(shouldDisableTouchability);}" };
const memoResult = memo((animatedIndex) => {
  let ViewComponent;
  let appearsOnIndex;
  let children;
  let disappearsOnIndex;
  let enableTouchThrough;
  let opacity;
  let pressBehavior;
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
  let snapToIndex;
  let close;
  let callback;
  opacity = undefined;
  appearsOnIndex = undefined;
  disappearsOnIndex = undefined;
  let closure_10;
  let c11;
  let c12;
  let animatedStyle;
  let obj = animatedIndex(onPress[5]);
  const bottomSheet = obj.useBottomSheet();
  snapToIndex = bottomSheet.snapToIndex;
  close = bottomSheet.close;
  callback = opacity(false);
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
  closure_10 = tmp17[1];
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
  c11 = tmp18;
  const tmp19 = snapToIndex((arg0) => {
    if (ref.current) {
      let str = "auto";
      if (arg0) {
        str = "none";
      }
      closure_10(str);
      const tmp2 = closure_10;
    }
  }, []);
  c12 = tmp19;
  let items1 = [tmp18];
  let tmp13Result = tmp13(tmp14[4]);
  class P {
    constructor() {
      obj = { opacity: null };
      obj2 = animatedIndex(onPress[4]);
      items = [-1];
      items[1] = disappearsOnIndex;
      items[2] = DEFAULT_APPEARS_ON_INDEX;
      items1 = [0, 0];
      items1[2] = DEFAULT_OPACITY;
      obj[0] = obj2.interpolate(animatedIndex.value, items, items1, animatedIndex(onPress[4]).Extrapolation.CLAMP);
      return obj;
    }
  }
  obj = { interpolate: tmp13(tmp14[4]).interpolate, animatedIndex, disappearsOnIndex, appearsOnIndex, opacity, Extrapolation: tmp13(tmp14[4]).Extrapolation };
  P.__closure = obj;
  P.__workletHash = 7085425846204;
  P.__initData = c11;
  const items2 = [animatedIndex, appearsOnIndex, disappearsOnIndex, opacity];
  animatedStyle = tmp13Result.useAnimatedStyle(P, items2);
  const items3 = [style, animatedStyle];
  const tmp16 = appearsOnIndex;
  const tmp20 = callback(() => {
    const Gesture = animatedIndex(onPress[6]).Gesture;
    const fn = function n() {
      outer1_0(outer1_2[4]).runOnJS(closure_11)();
    };
    const TapResult = Gesture.Tap();
    fn.__closure = { runOnJS: animatedIndex(onPress[4]).runOnJS, handleOnPress: c11 };
    fn.__workletHash = 10704059633145;
    fn.__initData = closure_10;
    return TapResult.onEnd(fn);
  }, items1);
  tmp13Result = tmp13(tmp14[4]);
  class H {
    constructor() {
      return animatedIndex.value <= disappearsOnIndex;
    }
  }
  H.__closure = { animatedIndex, disappearsOnIndex };
  H.__workletHash = 8948110613973;
  H.__initData = c12;
  let fn = function k(arg0, arg1) {
    if (arg0 !== arg1) {
      animatedIndex(onPress[4]).runOnJS(c12)(arg0);
      const obj = animatedIndex(onPress[4]);
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
      closure_6.current = false;
    };
  }, []);
  const obj1 = {
    style: callback(() => {
      const items = [animatedIndex(onPress[7]).styles.backdrop, style, animatedStyle];
      return items;
    }, items3),
    pointerEvents: tmp17[0],
    accessible: null,
    accessibilityRole: null,
    accessibilityLabel: null,
    accessibilityHint: null,
    children: null
  };
  obj1[2] = DEFAULT_ACCESSIBLE;
  obj1[3] = DEFAULT_ACCESSIBILITY_ROLE;
  obj1[4] = DEFAULT_ACCESSIBILITY_LABEL;
  if (!DEFAULT_ACCESSIBILITY_HINT) {
    let str2 = "move";
    if (typeof pressBehavior === "string") {
      str2 = pressBehavior;
    }
    const _HermesInternal = HermesInternal;
    DEFAULT_ACCESSIBILITY_HINT = "Tap to " + str2 + " the Bottom Sheet";
  }
  obj1[5] = DEFAULT_ACCESSIBILITY_HINT;
  obj1[6] = children;
  let tmp25Result = tmp25(ViewComponent, obj1);
  if ("none" !== pressBehavior) {
    const obj2 = { gesture: null, children: null };
    obj2[0] = tmp20;
    obj2[1] = tmp25Result;
    tmp25Result = tmp25(tmp13(tmp14[6]).GestureDetector, obj2);
  }
  return tmp25Result;
});
memoResult.displayName = "BottomSheetBackdrop";

export const BottomSheetBackdrop = memoResult;