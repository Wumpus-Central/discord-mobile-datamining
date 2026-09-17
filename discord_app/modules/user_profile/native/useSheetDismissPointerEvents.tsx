// discord_app/modules/user_profile/native/useSheetDismissPointerEvents.tsx
import LegacyBaseButton from "../../../../_runtime/06766_LegacyBaseButton.js";
import size from "../../../../_runtime/metro/00002__.js";

const __initData = {
  code: "function useSheetDismissPointerEventsTsx1(){const{contentGestureState,State,handleGestureState}=this.__closure;var _contentGestureState,_handleGestureState;const isDragging=((_contentGestureState=contentGestureState)===null||_contentGestureState===void 0?void 0:_contentGestureState.get())===State.ACTIVE||((_handleGestureState=handleGestureState)===null||_handleGestureState===void 0?void 0:_handleGestureState.get())===State.ACTIVE;return{pointerEvents:isDragging?'none':'box-none'};}",
};
const result = size.fileFinishedImporting("modules/user_profile/native/useSheetDismissPointerEvents.tsx");

export default function useSheetDismissPointerEvents() {
  const bottomSheetInternal = prop(prop1[0]).useBottomSheetInternal(true);
  prop = undefined;
  if (bottomSheetInternal != null) {
    prop = bottomSheetInternal.animatedContentGestureState;
  }
  prop1 = undefined;
  if (bottomSheetInternal != null) {
    prop1 = bottomSheetInternal.animatedHandleGestureState;
  }
  const obj = prop(prop1[0]);
  const fn = function n() {
    value = undefined;
    if (prop != null) {
      value = prop.get();
    }
    if (value === LegacyBaseButton.State.ACTIVE) {
      let pointerEvents = "none";
    } else {
      value2 = undefined;
      if (prop1 != null) {
        value2 = prop1.get();
      }
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  const tmpResult = prop(prop1[1]);
  fn.__closure = { contentGestureState: prop, State: prop(prop1[2]).State, handleGestureState: prop1 };
  fn.__workletHash = 16631714570992;
  fn.__initData = __initData;
  return tmpResult.useAnimatedStyle(fn);
}
