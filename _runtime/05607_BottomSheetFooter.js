// === Module 5607: BottomSheetFooter ===

// Module 5607 (BottomSheetFooter)
import jsxProd from "jsxProd" /* 21 */;
import _mod5608 from "module_5608" /* 5608 */;
import noop_mod from "module_19" /* 19 */;

const require = globalThis.__r;

let noop = noop_mod;
({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty, memo } = noop);
let noop = noop_mod;
const jsx = jsxProd.jsx;
let closure_7 = { code: "(function pnpm_BottomSheetFooterTsx1(){let[animatedFooterPosition,animatedKeyboardState,KEYBOARD_STATE,bottomInset]=this.__closure;let footerTranslateY=animatedFooterPosition.get();if(animatedKeyboardState.get()!==KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-bottomInset;}return{transform:[{translateY:Math.max(0,footerTranslateY)}]};})" };
const memoResult = memo(function BottomSheetFooterComponent(style) {
  ({ animatedFooterPosition, bottomInset } = style);
  if (bottomInset === undefined) {
    bottomInset = 0;
  }
  style = style.style;
  _require = style;
  const children = style.children;
  let animatedStyle;
  const tmp = closure_5(null);
  const bottomSheetInternal = require("module_5405").useBottomSheetInternal();
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  let obj = require("module_5405");
  const tmp2 = _require;
  items = [closure_7, animatedFooterPosition, animatedKeyboardState, require("value2").KEYBOARD_STATE, bottomInset];
  _require = undefined;
  importDefault = undefined;
  animatedStyle = undefined;
  c3 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_BottomSheetFooterTsx1() {
    value = _undefined.get();
    let diff = value;
    if (_undefined2.get() !== animatedStyle.SHOWN) {
      diff = value - c3;
    }
    const obj = { transform: null };
    items = [{ translateY: Math.max(0, diff) }];
    obj.transform = items;
    return obj;
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9];
  pnpm_BottomSheetFooterTsx1.__closure = items1;
  pnpm_BottomSheetFooterTsx1.__workletHash = 7213837238869;
  pnpm_BottomSheetFooterTsx1.__initData = tmp5;
  const items2 = [bottomInset, animatedKeyboardState, animatedFooterPosition];
  animatedStyle = require("module_1652").useAnimatedStyle(pnpm_BottomSheetFooterTsx1, items2);
  const items3 = [style, animatedStyle];
  const items4 = [animatedFooterHeight];
  const obj2 = require("module_1652");
  const items5 = [animatedFooterHeight];
  const tmp11 = closure_4(() => {
    items = [_mod5608.styles.container, c0, animatedStyle];
    return items;
  }, items3);
  const tmp12 = c3((nativeEvent) => {
    const result = _undefined2.set(nativeEvent.nativeEvent.layout.height);
  }, items4);
  const tmp13 = c3((height) => {
    const result = _undefined2.set(height.height);
  }, items5);
  const boundingClientRect = tmp2(animatedStyle[2]).useBoundingClientRect(tmp, tmp13);
  let tmp15 = null;
  if (null !== children) {
    const obj3 = { ref: tmp, onLayout: tmp12, style: tmp11, children };
    tmp15 = jsx(require("module_1652").View, { ref: tmp, onLayout: tmp12, style: tmp11, children });
  }
  return tmp15;
});
memoResult.displayName = "BottomSheetFooter";

export const BottomSheetFooter = memoResult;