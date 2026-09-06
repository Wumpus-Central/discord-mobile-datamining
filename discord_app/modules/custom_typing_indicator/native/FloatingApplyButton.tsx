// === Module 15405: FloatingApplyButton ===

// Module 15405 (FloatingApplyButton)
import nativeDefault from "native" /* 576 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const MEDIA_PICKER_SEND_BUTTON_SPRING = fn(1607).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = fn(21).jsx;
const __initData = { code: "function FloatingApplyButtonTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
const __initData2 = { code: "function FloatingApplyButtonTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/FloatingApplyButton.tsx");

export default function FloatingApplyButton(visible) {
  visible = visible.visible;
  ({ disabled, text, onPress } = visible);
  const renderButton = visible.renderButton;
  let stateFromStores;
  let obj = visible(stateFromStores[4]);
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = visible(stateFromStores[6]);
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
  I.__initData = __initData;
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
      rect = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: closure_1(closure_2[7]).space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: null, opacity: null };
      tmp2 = closure_2;
      tmp3 = closure_2;
      withSpringResult = num2;
      if (!closure_2) {
        tmp5 = closure_0;
        obj2 = closure_0(tmp2[8]);
        tmp6 = closure_5;
        withSpringResult = obj2.withSpring(num2, closure_5);
      }
      items = [, ];
      items[0] = { translateY: withSpringResult };
      withSpringResult1 = num3;
      if (!tmp3) {
        tmp8 = closure_0;
        obj3 = closure_0(tmp2[8]);
        tmp9 = closure_5;
        withSpringResult1 = obj3.withSpring(num3, closure_5);
      }
      items[1] = { scale: withSpringResult1 };
      rect.transform = items;
      withSpringResult2 = num;
      if (!tmp3) {
        tmp11 = closure_0;
        obj4 = closure_0(tmp2[8]);
        tmp12 = closure_5;
        withSpringResult2 = obj4.withSpring(num, closure_5);
      }
      rect.opacity = withSpringResult2;
      return rect;
    }
  }
  obj = { visible, tokens: onPress(stateFromStores[7]), reducedMotion: stateFromStores, withSpring: visible(stateFromStores[8]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
  P.__closure = obj;
  P.__workletHash = 17409059357308;
  P.__initData = __initData2;
  const items1 = [onPress];
  const animatedStyle = obj2.useAnimatedStyle(P);
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  obj = { style: animatedStyle, children: null };
  obj1 = { style: { marginBottom: onPress(stateFromStores[5])().bottom }, animatedProps, children: null };
  let renderButtonResult;
  if (renderButton != null) {
    obj2 = { text, disabled, onPress: callback };
    renderButtonResult = renderButton(obj2);
  }
  if (renderButtonResult == null) {
    let obj3 = { variant: "primary", size: "lg", disabled, onPress: callback, text, loading: visible.loading };
    renderButtonResult = tmp7(visible(stateFromStores[10]).Button, obj3);
  }
  obj1.children = renderButtonResult;
  obj.children = jsx(onPress(stateFromStores[6]).View, { style: { marginBottom: onPress(stateFromStores[5])().bottom }, animatedProps, children: null });
  return jsx(onPress(stateFromStores[6]).View, { style: animatedStyle, children: null });
};