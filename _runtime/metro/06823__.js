// _runtime/metro/06823__.js
import jsxProd from "../react/00021_jsxProd.js";
import GESTURE_SOURCE from "../06628_GESTURE_SOURCE.js";
import _mod6824 from "06824__.js";
import noop from "00019__.js";

({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty, memo } = noop);
const jsx = jsxProd.jsx;
const __initData = {
  code: "function pnpm_BottomSheetFooterTsx1(){const{animatedFooterPosition,animatedKeyboardState,KEYBOARD_STATE,bottomInset}=this.__closure;let footerTranslateY=animatedFooterPosition.get();if(animatedKeyboardState.get()!==KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-bottomInset;}return{transform:[{translateY:Math.max(0,footerTranslateY)}]};}",
};
const memoResult = memo(function BottomSheetFooterComponent(animatedFooterPosition) {
  animatedFooterPosition = animatedFooterPosition.animatedFooterPosition;
  let num = animatedFooterPosition.bottomInset;
  if (num === undefined) {
    num = 0;
  }
  const style = animatedFooterPosition.style;
  const children = animatedFooterPosition.children;
  let animatedStyle;
  const tmp = animatedStyle(null);
  let obj = animatedFooterPosition(style[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const fn = function c() {
    animatedFooterPosition.get();
    value = animatedKeyboardState.get();
    let diff = value;
    if (value !== GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
      diff = value - num;
    }
    let obj = { transform: null };
    obj = { translateY: Math.max(0, diff) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = {
    animatedFooterPosition,
    animatedKeyboardState,
    KEYBOARD_STATE: animatedFooterPosition(style[4]).KEYBOARD_STATE,
    bottomInset: num,
  };
  fn.__closure = obj;
  fn.__workletHash = 5322275157644;
  fn.__initData = __initData;
  let items = [num, animatedKeyboardState, animatedFooterPosition];
  animatedStyle = animatedFooterPosition(style[3]).useAnimatedStyle(fn, items);
  const items1 = [style, animatedStyle];
  const items2 = [animatedFooterHeight];
  const obj2 = animatedFooterPosition(style[3]);
  const tmp2 = style;
  const items3 = [animatedFooterHeight];
  const tmp5 = animatedKeyboardState(() => {
    const items = [_mod6824.styles.container, style, animatedStyle];
    return items;
  }, items1);
  const tmp6 = animatedFooterHeight((nativeEvent) => {
    const result = animatedFooterHeight.set(nativeEvent.nativeEvent.layout.height);
  }, items2);
  const tmp7 = animatedFooterHeight((height) => {
    const result = animatedFooterHeight.set(height.height);
  }, items3);
  const boundingClientRect = animatedFooterPosition(style[2]).useBoundingClientRect(tmp, tmp7);
  let tmp9 = null;
  if (null !== children) {
    obj = { ref: tmp, onLayout: tmp6, style: tmp5, children };
    tmp9 = jsx(num(tmp2[3]).View, { ref: tmp, onLayout: tmp6, style: tmp5, children });
  }
  return tmp9;
});
memoResult.displayName = "BottomSheetFooter";

export const BottomSheetFooter = memoResult;
