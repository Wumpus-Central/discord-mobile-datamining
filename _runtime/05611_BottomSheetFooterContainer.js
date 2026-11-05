// _runtime/05611_BottomSheetFooterContainer.js
import _mod19 from "metro/00019__.js";
import _mod1652 from "metro/01652__.js";
import value2 from "05403_value2.js";
import DEFAULT_HANDLE_HEIGHT from "05406_DEFAULT_HANDLE_HEIGHT.js";
import _mod5407 from "metro/05407__.js";

let closure_2 = {
  code: "(function pnpm_BottomSheetFooterContainerTsx1(){let[animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedKeyboardHeightInContainer,animatedContainerHeight,animatedPosition,animatedKeyboardState,animatedFooterHeight,KEYBOARD_STATE]=this.__closure;const handleHeight=animatedHandleHeight.get();if(handleHeight===INITIAL_HANDLE_HEIGHT){return 0;}const keyboardHeight=animatedKeyboardHeightInContainer.get();const containerHeight=animatedContainerHeight.get();const position=animatedPosition.get();const keyboardState=animatedKeyboardState.get();const footerHeight=animatedFooterHeight.get();let footerTranslateY=Math.max(0,containerHeight-position);if(keyboardState===KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-keyboardHeight;}footerTranslateY=footerTranslateY-footerHeight-handleHeight;return footerTranslateY;})",
};
const memoResult = _mod19.memo((renderFooter) => {
  const bottomSheetInternal = _mod5407.useBottomSheetInternal();
  ({
    animatedContainerHeight,
    animatedHandleHeight,
    animatedFooterHeight,
    animatedPosition,
    animatedKeyboardState,
    animatedKeyboardHeightInContainer,
  } = bottomSheetInternal);
  items = [
    _undefined2,
    animatedHandleHeight,
    DEFAULT_HANDLE_HEIGHT.INITIAL_HANDLE_HEIGHT,
    animatedKeyboardHeightInContainer,
    animatedContainerHeight,
    animatedPosition,
    animatedKeyboardState,
    animatedFooterHeight,
    value2.KEYBOARD_STATE,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  function pnpm_BottomSheetFooterContainerTsx1() {
    value = _undefined.get();
    if (value === c1) {
      return 0;
    } else {
      const value6 = _undefined2.get();
      const value7 = _undefined3.get();
      const value8 = _undefined4.get();
      const value9 = _undefined5.get();
      const _Math = Math;
      const value10 = _undefined6.get();
      const bound = Math.max(0, value7 - value8);
      let diff = bound;
      if (value9 === _undefined7.SHOWN) {
        diff = bound - value6;
      }
      return diff - value10 - value;
    }
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  pnpm_BottomSheetFooterContainerTsx1.__closure = items1;
  pnpm_BottomSheetFooterContainerTsx1.__workletHash = 12738622226289;
  pnpm_BottomSheetFooterContainerTsx1.__initData = tmp2;
  const items2 = [
    animatedKeyboardHeightInContainer,
    animatedContainerHeight,
    animatedPosition,
    animatedKeyboardState,
    animatedFooterHeight,
    animatedHandleHeight,
  ];
  return renderFooter.renderFooter({
    animatedFooterPosition: _mod1652.useDerivedValue(pnpm_BottomSheetFooterContainerTsx1, items2),
  });
});
memoResult.displayName = "BottomSheetFooterContainer";

export const BottomSheetFooterContainer = memoResult;
