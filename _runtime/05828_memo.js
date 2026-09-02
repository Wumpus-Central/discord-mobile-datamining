// _runtime/05828_memo.js
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import noop from "00019_noop.js";

({ useCallback: c3, useMemo: c4, useRef: c5, memo } = noop);
noopDefault;
const jsx = jsxProd.jsx;
let closure_7 = {
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
  let animatedFooterHeight;
  let animatedKeyboardState;
  let animatedStyle;
  const tmp = animatedStyle(null);
  let obj = animatedFooterPosition(style[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const fn = function c() {
    let value = animatedFooterPosition.get();
    value = animatedKeyboardState.get();
    let diff = value;
    if (value !== animatedFooterPosition(style[4]).KEYBOARD_STATE.SHOWN) {
      diff = value - num;
    }
    let obj = { transform: null };
    obj = { translateY: Math.max(0, diff) };
    const items = [obj];
    obj[0] = items;
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
  fn.__initData = closure_7;
  let items = [num, animatedKeyboardState, animatedFooterPosition];
  animatedStyle = animatedFooterPosition(style[3]).useAnimatedStyle(fn, items);
  const items1 = [style, animatedStyle];
  const items2 = [animatedFooterHeight];
  const obj2 = animatedFooterPosition(style[3]);
  const tmp2 = style;
  const items3 = [animatedFooterHeight];
  const tmp5 = animatedKeyboardState(() => {
    const items = [animatedFooterPosition(style[5]).styles.container, style, animatedStyle];
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
    obj = { ref: null, onLayout: null, style: null, children: null };
    obj[0] = tmp;
    obj[1] = tmp6;
    obj[2] = tmp5;
    obj[3] = children;
    tmp9 = jsx(num(tmp2[3]).View, { ref: null, onLayout: null, style: null, children: null });
  }
  return tmp9;
});
memoResult.displayName = "BottomSheetFooter";

export const BottomSheetFooter = memoResult;
