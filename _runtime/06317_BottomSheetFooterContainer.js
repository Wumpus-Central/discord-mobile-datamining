// === Module 6317: BottomSheetFooterContainer ===

// Module 6317 (BottomSheetFooterContainer)
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6120 */;
import DEFAULT_HANDLE_HEIGHT from "DEFAULT_HANDLE_HEIGHT" /* 6123 */;

let renderFooter;

let closure_2 = { code: "function pnpm_BottomSheetFooterContainerTsx1(){const{animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedKeyboardHeightInContainer,animatedContainerHeight,animatedPosition,animatedKeyboardState,animatedFooterHeight,KEYBOARD_STATE}=this.__closure;const handleHeight=animatedHandleHeight.get();if(handleHeight===INITIAL_HANDLE_HEIGHT){return 0;}const keyboardHeight=animatedKeyboardHeightInContainer.get();const containerHeight=animatedContainerHeight.get();const position=animatedPosition.get();const keyboardState=animatedKeyboardState.get();const footerHeight=animatedFooterHeight.get();let footerTranslateY=Math.max(0,containerHeight-position);if(keyboardState===KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-keyboardHeight;}footerTranslateY=footerTranslateY-footerHeight-handleHeight;return footerTranslateY;}" };
const memoResult = react.memo((renderFooter) => {
  let fn;
  let items;
  let obj3;
  let animatedContainerHeight;
  let animatedHandleHeight;
  renderFooter = renderFooter.renderFooter;
  const obj = animatedContainerHeight(animatedHandleHeight[1]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedContainerHeight = bottomSheetInternal.animatedContainerHeight;
  animatedHandleHeight = bottomSheetInternal.animatedHandleHeight;
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedPosition = bottomSheetInternal.animatedPosition;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const animatedKeyboardHeightInContainer = bottomSheetInternal.animatedKeyboardHeightInContainer;
  const obj2 = { animatedFooterPosition: obj3.useDerivedValue(fn, items) };
  fn = function o() {
    const value = animatedHandleHeight.get();
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
      if (value9 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
        diff = bound - value6;
      }
      return diff - value10 - value;
    }
  };
  obj3 = animatedContainerHeight(animatedHandleHeight[2]);
  fn.__closure = { animatedHandleHeight, INITIAL_HANDLE_HEIGHT: animatedContainerHeight(animatedHandleHeight[3]).INITIAL_HANDLE_HEIGHT, animatedKeyboardHeightInContainer, animatedContainerHeight, animatedPosition, animatedKeyboardState, animatedFooterHeight, KEYBOARD_STATE: animatedContainerHeight(animatedHandleHeight[4]).KEYBOARD_STATE };
  fn.__workletHash = 8297656659240;
  fn.__initData = animatedFooterHeight;
  items = [animatedKeyboardHeightInContainer, animatedContainerHeight, animatedPosition, animatedKeyboardState, animatedFooterHeight, animatedHandleHeight];
  ({ animatedHandleHeight, INITIAL_HANDLE_HEIGHT: animatedContainerHeight(animatedHandleHeight[3]).INITIAL_HANDLE_HEIGHT, animatedKeyboardHeightInContainer, animatedContainerHeight, animatedPosition, animatedKeyboardState, animatedFooterHeight, KEYBOARD_STATE: animatedContainerHeight(animatedHandleHeight[4]).KEYBOARD_STATE });
  return renderFooter(obj2);
});
memoResult.displayName = "BottomSheetFooterContainer";

export const BottomSheetFooterContainer = memoResult;