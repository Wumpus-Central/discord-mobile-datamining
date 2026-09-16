// _runtime/06933_BottomSheetFooterContainer.js
import _mod19 from "metro/00019__.js";
import value2 from "06736_value2.js";
import DEFAULT_HANDLE_HEIGHT from "06739_DEFAULT_HANDLE_HEIGHT.js";

let closure_2 = {
  code: "function pnpm_BottomSheetFooterContainerTsx1(){const{animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedKeyboardHeightInContainer,animatedContainerHeight,animatedPosition,animatedKeyboardState,animatedFooterHeight,KEYBOARD_STATE}=this.__closure;const handleHeight=animatedHandleHeight.get();if(handleHeight===INITIAL_HANDLE_HEIGHT){return 0;}const keyboardHeight=animatedKeyboardHeightInContainer.get();const containerHeight=animatedContainerHeight.get();const position=animatedPosition.get();const keyboardState=animatedKeyboardState.get();const footerHeight=animatedFooterHeight.get();let footerTranslateY=Math.max(0,containerHeight-position);if(keyboardState===KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-keyboardHeight;}footerTranslateY=footerTranslateY-footerHeight-handleHeight;return footerTranslateY;}",
};
const memoResult = _mod19.memo((renderFooter) => {
  let animatedContainerHeight;
  let animatedHandleHeight;
  const bottomSheetInternal = animatedContainerHeight(animatedHandleHeight[1]).useBottomSheetInternal();
  animatedContainerHeight = bottomSheetInternal.animatedContainerHeight;
  animatedHandleHeight = bottomSheetInternal.animatedHandleHeight;
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedPosition = bottomSheetInternal.animatedPosition;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const animatedKeyboardHeightInContainer = bottomSheetInternal.animatedKeyboardHeightInContainer;
  const obj2 = { animatedFooterPosition: null };
  const obj = animatedContainerHeight(animatedHandleHeight[1]);
  const fn = function o() {
    value = animatedHandleHeight.get();
    if (value === DEFAULT_HANDLE_HEIGHT.INITIAL_HANDLE_HEIGHT) {
      return 0;
    } else {
      const value6 = animatedKeyboardHeightInContainer.get();
      const value7 = animatedContainerHeight.get();
      const value8 = animatedPosition.get();
      const value9 = animatedKeyboardState.get();
      const _Math = Math;
      const value10 = animatedFooterHeight.get();
      const bound = Math.max(0, value7 - value8);
      let diff = bound;
      if (value9 === value2.KEYBOARD_STATE.SHOWN) {
        diff = bound - value6;
      }
      return diff - value10 - value;
    }
  };
  const obj3 = animatedContainerHeight(animatedHandleHeight[2]);
  fn.__closure = {
    animatedHandleHeight,
    INITIAL_HANDLE_HEIGHT: animatedContainerHeight(animatedHandleHeight[3]).INITIAL_HANDLE_HEIGHT,
    animatedKeyboardHeightInContainer,
    animatedContainerHeight,
    animatedPosition,
    animatedKeyboardState,
    animatedFooterHeight,
    KEYBOARD_STATE: animatedContainerHeight(animatedHandleHeight[4]).KEYBOARD_STATE,
  };
  fn.__workletHash = 8297656659240;
  fn.__initData = animatedFooterHeight;
  const items = [
    animatedKeyboardHeightInContainer,
    animatedContainerHeight,
    animatedPosition,
    animatedKeyboardState,
    animatedFooterHeight,
    animatedHandleHeight,
  ];
  obj2.animatedFooterPosition = obj3.useDerivedValue(fn, items);
  return renderFooter.renderFooter(obj2);
});
memoResult.displayName = "BottomSheetFooterContainer";

export const BottomSheetFooterContainer = memoResult;
