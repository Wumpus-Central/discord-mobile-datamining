// discord_app/modules/user_profile/native/useSheetDismissPointerEvents.tsx
import _mod1655 from "../../../../_runtime/metro/01655__.js";
import BottomSheetModal from "../../../../_runtime/05570_BottomSheetModal.js";
import LegacyBaseButton from "../../../../_runtime/05598_LegacyBaseButton.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = {
  code: "(function useSheetDismissPointerEventsTsx1(){let[contentGestureState,State,handleGestureState]=this.__closure;var _contentGestureState,_handleGestureState;const isDragging=((_contentGestureState=contentGestureState)===null||_contentGestureState===void 0?void 0:_contentGestureState.get())===State.ACTIVE||((_handleGestureState=handleGestureState)===null||_handleGestureState===void 0?void 0:_handleGestureState.get())===State.ACTIVE;return{pointerEvents:isDragging?'none':'box-none'};})",
};
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
      let value2;
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
  return _mod1655.useAnimatedStyle(useSheetDismissPointerEventsTsx1);
}
