// === Module 15081: useSheetDismissPointerEvents ===

// Module 15081 (useSheetDismissPointerEvents)
import _mod1652 from "module_1652" /* 1652 */;
import BottomSheetModal from "BottomSheetModal" /* 5394 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5422 */;
import size from "module_2" /* 2 */;

let closure_2 = { code: "(function useSheetDismissPointerEventsTsx1(){let[contentGestureState,State,handleGestureState]=this.__closure;var _contentGestureState,_handleGestureState;const isDragging=((_contentGestureState=contentGestureState)===null||_contentGestureState===void 0?void 0:_contentGestureState.get())===State.ACTIVE||((_handleGestureState=handleGestureState)===null||_handleGestureState===void 0?void 0:_handleGestureState.get())===State.ACTIVE;return{pointerEvents:isDragging?'none':'box-none'};})" };
const result = size.fileFinishedImporting("modules/user_profile/native/useSheetDismissPointerEvents.tsx");

export default function useSheetDismissPointerEvents() {
  const bottomSheetInternal = BottomSheetModal.useBottomSheetInternal(true);
  let prop;
  if (bottomSheetInternal != null) {
    prop = bottomSheetInternal.animatedContentGestureState;
  }
  let prop1;
  if (bottomSheetInternal != null) {
    prop1 = bottomSheetInternal.animatedHandleGestureState;
  }
  items = [_undefined2, prop, LegacyBaseButton.State, prop1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items;
  function useSheetDismissPointerEventsTsx1() {
    value = undefined;
    if (_undefined != null) {
      value = _undefined.get();
    }
    if (value === _undefined.ACTIVE) {
      let pointerEvents = "none";
    } else {
      value2 = undefined;
      if (_undefined2 != null) {
        value2 = _undefined2.get();
      }
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  }
  const items1 = [tmp7, tmp8, tmp9];
  useSheetDismissPointerEventsTsx1.__closure = items1;
  useSheetDismissPointerEventsTsx1.__workletHash = 6909948922505;
  useSheetDismissPointerEventsTsx1.__initData = tmp6;
  return _mod1652.useAnimatedStyle(useSheetDismissPointerEventsTsx1);
};