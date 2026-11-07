// === Module 5709: BottomSheetBackdrop ===

// Module 5709 (BottomSheetBackdrop)
import _mod1652 from "module_1652" /* 1652 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5420 */;
import _mod5711 from "module_5711" /* 5711 */;
import _slicedToArray from "module_32" /* 32 */;
import noop_mod from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
let noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty, useMemo: closure_6, useRef: metroImportDefault, useState: closure_8, memo } = noop);
let noop = noop_mod;
const jsx = fn(21).jsx;
let closure_10 = { code: "(function pnpm_BottomSheetBackdropTsx1(){let[runOnJS,handleOnPress]=this.__closure;runOnJS(handleOnPress)();})" };
let closure_11 = { code: "(function pnpm_BottomSheetBackdropTsx2(){let[interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity,Extrapolation]=this.__closure;return{opacity:interpolate(animatedIndex.value,[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity],Extrapolation.CLAMP)};})" };
let closure_12 = { code: "(function pnpm_BottomSheetBackdropTsx3(){let[animatedIndex,disappearsOnIndex]=this.__closure;return Math.round(animatedIndex.value)<=disappearsOnIndex;})" };
let closure_13 = { code: "(function pnpm_BottomSheetBackdropTsx4(shouldDisableTouchability,previous){let[runOnJS,handleContainerTouchability]=this.__closure;if(shouldDisableTouchability===previous){return;}runOnJS(handleContainerTouchability)(shouldDisableTouchability);})" };
const memoResult = memo((onPress) => {
  ({ animatedIndex, opacity, appearsOnIndex, disappearsOnIndex, enableTouchThrough, pressBehavior } = onPress);
  if (pressBehavior === undefined) {
    pressBehavior = require("DEFAULT_OPACITY").DEFAULT_PRESS_BEHAVIOR;
  }
  _require = pressBehavior;
  onPress = onPress.onPress;
  importDefault = onPress;
  const style = onPress.style;
  dependencyMap = style;
  ({ ViewComponent, children } = onPress);
  if (ViewComponent === undefined) {
    ViewComponent = _modDef1652.View;
  }
  let DEFAULT_ACCESSIBLE = onPress.accessible;
  if (DEFAULT_ACCESSIBLE === undefined) {
    DEFAULT_ACCESSIBLE = require("DEFAULT_OPACITY").DEFAULT_ACCESSIBLE;
  }
  let DEFAULT_ACCESSIBILITY_ROLE = onPress.accessibilityRole;
  if (DEFAULT_ACCESSIBILITY_ROLE === undefined) {
    DEFAULT_ACCESSIBILITY_ROLE = require("DEFAULT_OPACITY").DEFAULT_ACCESSIBILITY_ROLE;
  }
  let DEFAULT_ACCESSIBILITY_LABEL = onPress.accessibilityLabel;
  if (DEFAULT_ACCESSIBILITY_LABEL === undefined) {
    DEFAULT_ACCESSIBILITY_LABEL = require("DEFAULT_OPACITY").DEFAULT_ACCESSIBILITY_LABEL;
  }
  let DEFAULT_ACCESSIBILITY_HINT = onPress.accessibilityHint;
  if (DEFAULT_ACCESSIBILITY_HINT === undefined) {
    DEFAULT_ACCESSIBILITY_HINT = require("DEFAULT_OPACITY").DEFAULT_ACCESSIBILITY_HINT;
  }
  disappearsOnIndex = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  let animatedStyle;
  const bottomSheet = require("module_5397").useBottomSheet();
  const snapToIndex = bottomSheet.snapToIndex;
  _slicedToArray = snapToIndex;
  const close = bottomSheet.close;
  c4 = close;
  c5 = closure_7(false);
  if (opacity == null) {
    opacity = tmp13(5710).DEFAULT_OPACITY;
  }
  if (appearsOnIndex == null) {
    appearsOnIndex = tmp13(5710).DEFAULT_APPEARS_ON_INDEX;
  }
  if (disappearsOnIndex == null) {
    disappearsOnIndex = tmp13(5710).DEFAULT_DISAPPEARS_ON_INDEX;
  }
  if (enableTouchThrough == null) {
    enableTouchThrough = tmp13(5710).DEFAULT_ENABLE_TOUCH_THROUGH;
  }
  let str = "auto";
  if (enableTouchThrough) {
    str = "none";
  }
  const tmp17 = _slicedToArray(closure_8(str), 2);
  closure_7 = tmp17[1];
  items = [snapToIndex, close, disappearsOnIndex, pressBehavior, onPress];
  const tmp18 = c4(() => {
    if (c1 != null) {
      tmp();
    }
    if ("close" === c0) {
      _undefined4();
    } else if ("collapse" === c0) {
      _undefined3(disappearsOnIndex);
    } else if (typeof c0 === "number") {
      _undefined3(c0);
    }
  }, items);
  closure_8 = tmp18;
  let items1 = [tmp18];
  let obj = require("module_5397");
  const tmp19 = c4((arg0) => {
    if (_undefined5.current) {
      let str = "auto";
      if (arg0) {
        str = "none";
      }
      closure_7(str);
    }
  }, []);
  const tmp20 = disappearsOnIndex;
  const tmp21 = disappearsOnIndex(() => {
    const Gesture = LegacyBaseButton.Gesture;
    items = [closure_10, _mod1652.runOnJS, closure_8];
    c0 = undefined;
    c1 = undefined;
    [tmp, tmp2, tmp3] = items;
    function pnpm_BottomSheetBackdropTsx1() {
      _undefined(c1)();
    }
    const items1 = [tmp2, tmp3];
    pnpm_BottomSheetBackdropTsx1.__closure = items1;
    pnpm_BottomSheetBackdropTsx1.__workletHash = 5911610326560;
    pnpm_BottomSheetBackdropTsx1.__initData = tmp;
    return Gesture.Tap().onEnd(pnpm_BottomSheetBackdropTsx1);
  }, items1);
  const items2 = [closure_11, require("module_1652").interpolate, animatedIndex, disappearsOnIndex, appearsOnIndex, opacity, require("module_1652").Extrapolation];
  _require = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
  function pnpm_BottomSheetBackdropTsx2() {
    const obj = { opacity: null };
    items = [-1, c2, c3];
    const items1 = [0, 0, c4];
    obj.opacity = _undefined(_undefined2.value, items, items1, _undefined5.CLAMP);
    return obj;
  }
  const items3 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  pnpm_BottomSheetBackdropTsx2.__closure = items3;
  pnpm_BottomSheetBackdropTsx2.__workletHash = 2617863468453;
  pnpm_BottomSheetBackdropTsx2.__initData = tmp22;
  const items4 = [animatedIndex, appearsOnIndex, disappearsOnIndex, opacity];
  animatedStyle = require("module_1652").useAnimatedStyle(pnpm_BottomSheetBackdropTsx2, items4);
  const items5 = [style, animatedStyle];
  const tmp13Result = require("module_1652");
  const tmp20Result = tmp20(() => {
    items = [_mod5711.styles.backdrop, c2, animatedStyle];
    return items;
  }, items5);
  const items6 = [closure_12, animatedIndex, disappearsOnIndex];
  _require = undefined;
  [tmp31, tmp32, tmp33] = items6;
  function pnpm_BottomSheetBackdropTsx3() {
    return Math.round(_undefined.value) <= c1;
  }
  const items7 = [tmp32, tmp33];
  pnpm_BottomSheetBackdropTsx3.__closure = items7;
  pnpm_BottomSheetBackdropTsx3.__workletHash = 5714761068433;
  pnpm_BottomSheetBackdropTsx3.__initData = tmp31;
  const items8 = [closure_13, require("module_1652").runOnJS, tmp19];
  _require = undefined;
  importDefault = undefined;
  [tmp34, tmp35, tmp36] = items8;
  function pnpm_BottomSheetBackdropTsx4(arg0, arg1) {
    if (arg0 !== arg1) {
      _undefined(c1)(arg0);
    }
  }
  const items9 = [tmp35, tmp36];
  pnpm_BottomSheetBackdropTsx4.__closure = items9;
  pnpm_BottomSheetBackdropTsx4.__workletHash = 3849870476375;
  pnpm_BottomSheetBackdropTsx4.__initData = tmp34;
  const items10 = [disappearsOnIndex];
  const animatedReaction = require("module_1652").useAnimatedReaction(pnpm_BottomSheetBackdropTsx3, pnpm_BottomSheetBackdropTsx4, items10);
  c5(() => {
    c5.current = true;
    return () => {
      _undefined5.current = false;
    };
  }, []);
  const obj2 = { style: tmp20Result, pointerEvents: tmp17[0], accessible: DEFAULT_ACCESSIBLE, accessibilityRole: DEFAULT_ACCESSIBILITY_ROLE, accessibilityLabel: DEFAULT_ACCESSIBILITY_LABEL, accessibilityHint: null, children: null };
  if (!DEFAULT_ACCESSIBILITY_HINT) {
    let str2 = "move";
    if (typeof pressBehavior === "string") {
      str2 = pressBehavior;
    }
    const _HermesInternal = HermesInternal;
    DEFAULT_ACCESSIBILITY_HINT = "Tap to " + str2 + " the Bottom Sheet";
  }
  obj2.accessibilityHint = DEFAULT_ACCESSIBILITY_HINT;
  obj2.children = children;
  const tmp39Result = animatedStyle(ViewComponent, obj2);
  let tmp39Result2 = tmp39Result;
  if ("none" !== pressBehavior) {
    const obj3 = { gesture: tmp21, children: tmp39Result };
    tmp39Result2 = tmp39(tmp13(5420).GestureDetector, obj3);
  }
  return tmp39Result2;
});
memoResult.displayName = "BottomSheetBackdrop";

export const BottomSheetBackdrop = memoResult;