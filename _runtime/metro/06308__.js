// === Module 6308: ? ===

// Module 6308
import Fragment from "Fragment" /* 21 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6113 */;
import react_native from "react-native" /* 6309 */;
import react_mod from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
let memo;
let react = react_mod;
({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty, memo } = react);
react = react_mod;
const jsx = Fragment.jsx;
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
  let obj = animatedFooterPosition(style[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const obj2 = animatedFooterPosition(style[3]);
  const fn = function c() {
    let items;
    const value = animatedFooterPosition.get();
    const value2 = animatedKeyboardState.get();
    let diff = value;
    if (value2 !== GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
      diff = value - num;
    }
    const obj = { transform: items };
    items = [{ translateY: Math.max(0, diff) }];
    ({ translateY: Math.max(0, diff) });
    return obj;
  };
  fn.__closure = { animatedFooterPosition, animatedKeyboardState, KEYBOARD_STATE: animatedFooterPosition(style[4]).KEYBOARD_STATE, bottomInset: num };
  fn.__workletHash = 5322275157644;
  fn.__initData = __initData;
  let items = [num, animatedKeyboardState, animatedFooterPosition];
  ({ animatedFooterPosition, animatedKeyboardState, KEYBOARD_STATE: animatedFooterPosition(style[4]).KEYBOARD_STATE, bottomInset: num });
  animatedStyle = obj2.useAnimatedStyle(fn, items);
  const items1 = [style, animatedStyle];
  const items2 = [animatedFooterHeight];
  const items3 = [animatedFooterHeight];
  const tmp5 = animatedKeyboardState(() => {
    const items = [react_native.styles.container, style, animatedStyle];
    return items;
  }, items1);
  const tmp6 = animatedFooterHeight((nativeEvent) => {
    const result = animatedFooterHeight.set(nativeEvent.nativeEvent.layout.height);
  }, items2);
  const tmp7 = animatedFooterHeight((height) => {
    const result = animatedFooterHeight.set(height.height);
  }, items3);
  const obj4 = animatedFooterPosition(style[2]);
  const boundingClientRect = obj4.useBoundingClientRect(tmp, tmp7);
  let tmp9 = null;
  const tmp2 = style;
  if (null !== children) {
    tmp9 = jsx(num(tmp2[3]).View, { ref: tmp, onLayout: tmp6, style: tmp5, children });
  }
  return tmp9;
});
memoResult.displayName = "BottomSheetFooter";

export const BottomSheetFooter = memoResult;