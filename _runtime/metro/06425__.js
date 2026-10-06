// _runtime/metro/06425__.js
import Fragment from "../react/00021_Fragment.js";
import _mod1643 from "01643__.js";
import LegacyBaseButton from "../06147_LegacyBaseButton.js";
import react_native from "../06427_react-native.js";
import _slicedToArray from "00032__slicedToArray.js";
import react_mod from "../00019_react.js";

let closure_4;
let hasOwnProperty;
let memo;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({
  useCallback: closure_4,
  useEffect: hasOwnProperty,
  useMemo: metroRequire,
  useRef: metroImportDefault,
  useState: metroImportAll,
  memo,
} = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_10 = {
  code: "function pnpm_BottomSheetBackdropTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}",
};
let __initData = {
  code: "function pnpm_BottomSheetBackdropTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity,Extrapolation}=this.__closure;return{opacity:interpolate(animatedIndex.value,[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity],Extrapolation.CLAMP)};}",
};
let __initData2 = {
  code: "function pnpm_BottomSheetBackdropTsx3(){const{animatedIndex,disappearsOnIndex}=this.__closure;return Math.round(animatedIndex.value)<=disappearsOnIndex;}",
};
let closure_13 = {
  code: "function pnpm_BottomSheetBackdropTsx4(shouldDisableTouchability,previous){const{runOnJS,handleContainerTouchability}=this.__closure;if(shouldDisableTouchability===previous){return;}runOnJS(handleContainerTouchability)(shouldDisableTouchability);}",
};
const memoResult = memo((animatedIndex) => {
  let ViewComponent;
  let appearsOnIndex;
  let children;
  let disappearsOnIndex;
  let enableTouchThrough;
  let handleOnPress;
  let onPress;
  let opacity;
  let pressBehavior;
  animatedIndex = animatedIndex.animatedIndex;
  ({ opacity, appearsOnIndex, disappearsOnIndex, enableTouchThrough, pressBehavior } = animatedIndex);
  if (pressBehavior === undefined) {
    const tmp = animatedIndex;
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
  const tmp16 = appearsOnIndex;
  if (enableTouchThrough) {
    str = "none";
  }
  const tmp17 = style(tmp16(str), 2);
  let items = [snapToIndex, close, disappearsOnIndex, pressBehavior, onPress];
  const first = tmp17[0];
  const tmp19 = snapToIndex(() => {
    if (onPress != null) {
      tmp();
    }
    if ("close" === pressBehavior) {
      close();
    } else if ("collapse" === pressBehavior) {
      snapToIndex(disappearsOnIndex);
    } else if (typeof pressBehavior === "number") {
      snapToIndex(pressBehavior);
    }
  }, items);
  __initData = tmp19;
  const tmp20 = snapToIndex((arg0) => {
    if (ref.current) {
      let str = "auto";
      if (arg0) {
        str = "none";
      }
      __initData(str);
    }
  }, []);
  __initData2 = tmp20;
  let items1 = [tmp19];
  const tmp21 = ref(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function n() {
      const obj = animatedIndex(onPress[4]);
      obj.runOnJS(handleOnPress)();
    };
    const TapResult = Gesture.Tap();
    let obj = { runOnJS: _mod1643.runOnJS, handleOnPress };
    fn.__closure = obj;
    fn.__workletHash = 10704059633145;
    fn.__initData = __initData;
    return TapResult.onEnd(fn);
  }, items1);
  const tmp13Result = animatedIndex(onPress[4]);
  class P {
    constructor() {
      let items;
      let items1;
      let obj2;
      const obj = { opacity: obj2.interpolate(animatedIndex.value, items, items1, _mod1643.Extrapolation.CLAMP) };
      items = [-1, disappearsOnIndex, appearsOnIndex];
      items1 = [0, 0, opacity];
      obj2 = _mod1643;
      return obj;
    }
  }
  let obj2 = {
    interpolate: tmp13(tmp14[4]).interpolate,
    animatedIndex,
    disappearsOnIndex,
    appearsOnIndex,
    opacity,
    Extrapolation: tmp13(tmp14[4]).Extrapolation,
  };
  P.__closure = obj2;
  P.__workletHash = 7085425846204;
  P.__initData = __initData;
  const items2 = [animatedIndex, appearsOnIndex, disappearsOnIndex, opacity];
  animatedStyle = tmp13Result.useAnimatedStyle(P, items2);
  const items3 = [style, animatedStyle];
  const tmp23 = ref(() => {
    const items = [react_native.styles.backdrop, style, animatedStyle];
    return items;
  }, items3);
  const tmp13Result2 = animatedIndex(onPress[4]);
  class H {
    constructor() {
      return Math.round(animatedIndex.value) <= disappearsOnIndex;
    }
  }
  H.__closure = { animatedIndex, disappearsOnIndex };
  H.__workletHash = 17177056692744;
  H.__initData = __initData2;
  let fn = function k(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = _mod1643;
      obj.runOnJS(closure_12)(arg0);
    }
  };
  fn.__closure = { runOnJS: animatedIndex(onPress[4]).runOnJS, handleContainerTouchability: tmp20 };
  fn.__workletHash = 17426135168622;
  fn.__initData = animatedStyle;
  const items4 = [disappearsOnIndex];
  ({ runOnJS: animatedIndex(onPress[4]).runOnJS, handleContainerTouchability: tmp20 });
  const animatedReaction = tmp13Result2.useAnimatedReaction(H, fn, items4);
  close(() => {
    ref.current = true;
    return () => {
      ref.current = false;
    };
  }, []);
  const obj4 = {
    style: tmp23,
    pointerEvents: first,
    accessible: DEFAULT_ACCESSIBLE,
    accessibilityRole: DEFAULT_ACCESSIBILITY_ROLE,
    accessibilityLabel: DEFAULT_ACCESSIBILITY_LABEL,
    accessibilityHint: DEFAULT_ACCESSIBILITY_HINT,
    children,
  };
  if (!DEFAULT_ACCESSIBILITY_HINT) {
    let str2 = "move";
    if (typeof pressBehavior === "string") {
      str2 = pressBehavior;
    }
    const _HermesInternal = HermesInternal;
    DEFAULT_ACCESSIBILITY_HINT = "Tap to " + str2 + " the Bottom Sheet";
  }
  const tmp26Result = disappearsOnIndex(ViewComponent, obj4);
  let tmp26Result2 = tmp26Result;
  if ("none" !== pressBehavior) {
    const obj5 = { gesture: tmp21, children: tmp26Result };
    tmp26Result2 = tmp26(tmp13(tmp14[6]).GestureDetector, obj5);
  }
  return tmp26Result2;
});
memoResult.displayName = "BottomSheetBackdrop";

export const BottomSheetBackdrop = memoResult;
