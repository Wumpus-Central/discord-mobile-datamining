// === Module 6825: BottomSheetFooterContainer ===

// Module 6825 (BottomSheetFooterContainer)
import _mod19 from "module_19" /* 19 */;
import DEFAULT_HANDLE_HEIGHT from "DEFAULT_HANDLE_HEIGHT" /* 6631 */;

const GESTURE_SOURCE = tmp2(6628);
let closure_2 = { code: "function pnpm_BottomSheetFooterContainerTsx1(){const{animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedKeyboardHeightInContainer,animatedContainerHeight,animatedPosition,animatedKeyboardState,animatedFooterHeight,KEYBOARD_STATE}=this.__closure;const handleHeight=animatedHandleHeight.get();if(handleHeight===INITIAL_HANDLE_HEIGHT){return 0;}const keyboardHeight=animatedKeyboardHeightInContainer.get();const containerHeight=animatedContainerHeight.get();const position=animatedPosition.get();const keyboardState=animatedKeyboardState.get();const footerHeight=animatedFooterHeight.get();let footerTranslateY=Math.max(0,containerHeight-position);if(keyboardState===KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-keyboardHeight;}footerTranslateY=footerTranslateY-footerHeight-handleHeight;return footerTranslateY;}" };
const memoResult = _mod19.memo((renderFooter) => {
  let animatedContainerHeight;
  let animatedHandleHeight;
  let obj = animatedContainerHeight(animatedHandleHeight[1]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedContainerHeight = bottomSheetInternal.animatedContainerHeight;
  animatedHandleHeight = bottomSheetInternal.animatedHandleHeight;
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedPosition = bottomSheetInternal.animatedPosition;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const animatedKeyboardHeightInContainer = bottomSheetInternal.animatedKeyboardHeightInContainer;
  obj = { animatedFooterPosition: null };
  const fn = function o() {
    value = animatedHandleHeight.get();
    if (value === DEFAULT_HANDLE_HEIGHT.INITIAL_HANDLE_HEIGHT) {
      return 0;
    } else {
      value = animatedKeyboardHeightInContainer.get();
      const value1 = animatedContainerHeight.get();
      value2 = animatedPosition.get();
      const value3 = animatedKeyboardState.get();
      const _Math = Math;
      const value4 = animatedFooterHeight.get();
      const bound = Math.max(0, value1 - value2);
      let diff = bound;
      if (value3 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
        diff = bound - value;
      }
      return diff - value4 - value;
    }
  };
  obj = { animatedHandleHeight, INITIAL_HANDLE_HEIGHT: animatedContainerHeight(animatedHandleHeight[3]).INITIAL_HANDLE_HEIGHT, animatedKeyboardHeightInContainer, animatedContainerHeight, animatedPosition, animatedKeyboardState, animatedFooterHeight, KEYBOARD_STATE: animatedContainerHeight(animatedHandleHeight[4]).KEYBOARD_STATE };
  fn.__closure = obj;
  fn.__workletHash = 8297656659240;
  fn.__initData = animatedFooterHeight;
  const items = [animatedKeyboardHeightInContainer, animatedContainerHeight, animatedPosition, animatedKeyboardState, animatedFooterHeight, animatedHandleHeight];
  obj.animatedFooterPosition = animatedContainerHeight(animatedHandleHeight[2]).useDerivedValue(fn, items);
  return renderFooter.renderFooter(obj);
});
memoResult.displayName = "BottomSheetFooterContainer";

export const BottomSheetFooterContainer = memoResult;