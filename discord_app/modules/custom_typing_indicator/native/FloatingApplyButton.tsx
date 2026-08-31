// === Module 14970: FloatingApplyButton ===

// Module 14970 (FloatingApplyButton)
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import { MEDIA_PICKER_SEND_BUTTON_SPRING as closure_5 } from "DRAG_HANDLE" /* 1623 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_7 = { code: "function FloatingApplyButtonTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
let closure_8 = { code: "function FloatingApplyButtonTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
let result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/FloatingApplyButton.tsx");

export default function FloatingApplyButton(visible) {
  visible = visible.visible;
  ({ disabled, text, onPress } = visible);
  const renderButton = visible.renderButton;
  let stateFromStores;
  let obj = visible(stateFromStores[4]);
  let items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = visible(stateFromStores[6]);
  class I {
    constructor() {
      pointerEvents = "none";
      if (visible) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  I.__closure = { visible };
  I.__workletHash = 8866673550486;
  I.__initData = closure_7;
  const animatedProps = obj1.useAnimatedProps(I);
  let obj2 = visible(stateFromStores[6]);
  class P {
    constructor() {
      tmp = visible;
      num = 0;
      if (visible) {
        num = 1;
      }
      num2 = 60;
      if (tmp) {
        num2 = 0;
      }
      num3 = 0.9;
      if (tmp) {
        num3 = 1;
      }
      obj = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: onPress(closure_2[7]).space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: null, opacity: null };
      tmp2 = closure_2;
      tmp3 = closure_2;
      withSpringResult = num2;
      if (!closure_2) {
        tmp5 = visible;
        obj2 = visible(tmp2[8]);
        tmp6 = closure_1_5;
        withSpringResult = obj2.withSpring(num2, closure_1_5);
      }
      items = [, ];
      items[0] = { translateY: withSpringResult };
      withSpringResult1 = num3;
      if (!tmp3) {
        tmp8 = visible;
        obj3 = visible(tmp2[8]);
        tmp9 = closure_1_5;
        withSpringResult1 = obj3.withSpring(num3, closure_1_5);
      }
      items[1] = { scale: withSpringResult1 };
      obj[7] = items;
      withSpringResult2 = num;
      if (!tmp3) {
        tmp11 = visible;
        obj4 = visible(tmp2[8]);
        tmp12 = closure_1_5;
        withSpringResult2 = obj4.withSpring(num, closure_1_5);
      }
      obj[8] = withSpringResult2;
      return obj;
    }
  }
  obj = { visible, tokens: onPress(stateFromStores[7]), reducedMotion: stateFromStores, withSpring: visible(stateFromStores[8]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: closure_5 };
  P.__closure = obj;
  P.__workletHash = 17409059357308;
  P.__initData = closure_8;
  const items1 = [onPress];
  const animatedStyle = obj2.useAnimatedStyle(P);
  const callback = React.useCallback(() => {
    const result = visible(stateFromStores[9]).triggerHapticFeedback(visible(stateFromStores[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  obj = { style: animatedStyle, children: null };
  obj1 = { style: { marginBottom: onPress(stateFromStores[5])().bottom }, animatedProps, children: null };
  let renderButtonResult;
  if (renderButton != null) {
    obj2 = { text: null, disabled: null, onPress: null };
    obj2[0] = text;
    obj2[1] = disabled;
    obj2[2] = callback;
    renderButtonResult = renderButton(obj2);
  }
  if (renderButtonResult == null) {
    let obj3 = { variant: "primary", size: "lg", disabled: null, onPress: null, text: null, loading: null };
    obj3[2] = disabled;
    obj3[3] = callback;
    obj3[4] = text;
    obj3[5] = visible.loading;
    renderButtonResult = tmp7(visible(stateFromStores[10]).Button, obj3);
  }
  obj1[2] = renderButtonResult;
  obj[1] = jsx(onPress(stateFromStores[6]).View, { style: { marginBottom: onPress(stateFromStores[5])().bottom }, animatedProps, children: null });
  return jsx(onPress(stateFromStores[6]).View, { style: animatedStyle, children: null });
};