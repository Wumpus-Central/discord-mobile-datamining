// === Module 6241: ? ===

// Module 6241
import jsxProd from "jsxProd" /* 21 */;
import value22 from "value2" /* 6046 */;
import _mod6242 from "module_6242" /* 6242 */;
import noop_mod from "module_19" /* 19 */;

let noop = noop_mod;
({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty, memo } = noop);
let noop = noop_mod;
const jsx = jsxProd.jsx;
const __initData = { code: "function pnpm_BottomSheetFooterTsx1(){const{animatedFooterPosition,animatedKeyboardState,KEYBOARD_STATE,bottomInset}=this.__closure;let footerTranslateY=animatedFooterPosition.get();if(animatedKeyboardState.get()!==KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-bottomInset;}return{transform:[{translateY:Math.max(0,footerTranslateY)}]};}" };
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
  const bottomSheetInternal = animatedFooterPosition(style[2]).useBottomSheetInternal();
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  let obj = animatedFooterPosition(style[2]);
  const tmp2 = style;
  const fn = function c() {
    value = animatedFooterPosition.get();
    value2 = animatedKeyboardState.get();
    let diff = value;
    if (value2 !== value22.KEYBOARD_STATE.SHOWN) {
      diff = value - num;
    }
    const obj = { transform: null };
    const items = [{ translateY: Math.max(0, diff) }];
    obj.transform = items;
    return obj;
  };
  const obj2 = animatedFooterPosition(style[3]);
  fn.__closure = { animatedFooterPosition, animatedKeyboardState, KEYBOARD_STATE: animatedFooterPosition(style[4]).KEYBOARD_STATE, bottomInset: num };
  fn.__workletHash = 5322275157644;
  fn.__initData = __initData;
  let items = [num, animatedKeyboardState, animatedFooterPosition];
  animatedStyle = obj2.useAnimatedStyle(fn, items);
  const items1 = [style, animatedStyle];
  const items2 = [animatedFooterHeight];
  const obj3 = { animatedFooterPosition, animatedKeyboardState, KEYBOARD_STATE: animatedFooterPosition(style[4]).KEYBOARD_STATE, bottomInset: num };
  const items3 = [animatedFooterHeight];
  const tmp5 = animatedKeyboardState(() => {
    const items = [_mod6242.styles.container, style, animatedStyle];
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
    const obj5 = { ref: tmp, onLayout: tmp6, style: tmp5, children };
    tmp9 = jsx(num(tmp2[3]).View, { ref: tmp, onLayout: tmp6, style: tmp5, children });
  }
  return tmp9;
});
memoResult.displayName = "BottomSheetFooter";

export const BottomSheetFooter = memoResult;