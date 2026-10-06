// === Module 15242: FloatingApplyButton ===

// Module 15242 (FloatingApplyButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1614 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import spring from "spring" /* 5604 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MEDIA_PICKER_SEND_BUTTON_SPRING = MediaKeyboardConstants.MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = Fragment.jsx;
const __initData = { code: "function FloatingApplyButtonTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?\"box-none\":\"none\"};}" };
const __initData2 = { code: "function FloatingApplyButtonTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:\"absolute\",bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:\"column\",justifyContent:\"flex-end\",transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
const __initData3 = { code: "function FloatingApplyButtonTsx3(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
const __initData4 = { code: "function FloatingApplyButtonTsx4(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let disabled;
  let loading;
  let onPress;
  let renderButton;
  let stateFromStores;
  let text;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  let obj = visible(stateFromStores[5]);
  const cResult = obj.c(19);
  visible = visible.visible;
  ({ disabled, text, onPress } = visible);
  ({ renderButton, loading } = visible);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = visible(stateFromStores[6]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const bottom = onPress(tmp2[7])().bottom;
  const fn2 = function h() {
    let pointerEvents = "none";
    if (visible) {
      pointerEvents = "box-none";
    }
    return { pointerEvents };
  };
  fn2.__closure = { visible };
  fn2.__workletHash = 16933977340438;
  fn2.__initData = __initData;
  const tmpResult3 = visible(stateFromStores[8]);
  const animatedProps = tmpResult3.useAnimatedProps(fn2);
  const tmpResult4 = visible(stateFromStores[8]);
  class T {
    constructor() {
      let items;
      let withSpringResult2;
      let num = 0;
      if (visible) {
        num = 1;
      }
      let num2 = 60;
      if (visible) {
        num2 = 0;
      }
      let num3 = 0.9;
      if (visible) {
        num3 = 1;
      }
      const rect = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: items, opacity: withSpringResult2 };
      let withSpringResult = num2;
      if (!stateFromStores) {
        const obj2 = spring;
        withSpringResult = obj2.withSpring(num2, MEDIA_PICKER_SEND_BUTTON_SPRING);
      }
      items = [{ translateY: withSpringResult }, ];
      let withSpringResult1 = num3;
      if (!stateFromStores) {
        const obj3 = spring;
        withSpringResult1 = obj3.withSpring(num3, MEDIA_PICKER_SEND_BUTTON_SPRING);
      }
      items[1] = { scale: withSpringResult1 };
      withSpringResult2 = num;
      if (!stateFromStores) {
        const obj4 = spring;
        withSpringResult2 = obj4.withSpring(num, MEDIA_PICKER_SEND_BUTTON_SPRING);
      }
      return rect;
    }
  }
  let obj2 = { visible, tokens: onPress(tmp2[9]), reducedMotion: stateFromStores, withSpring: tmp(tmp2[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
  T.__closure = obj2;
  T.__workletHash = 16100600202140;
  T.__initData = __initData2;
  const animatedStyle = tmpResult4.useAnimatedStyle(T);
  if (cResult[2] !== onPress) {
    const fn3 = function v() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      onPress();
    };
    let num3 = 2;
    cResult[2] = onPress;
    cResult[3] = fn3;
    tmp11 = fn3;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== bottom) {
    let obj3 = { marginBottom: bottom };
    cResult[4] = bottom;
    cResult[5] = obj3;
    tmp12 = obj3;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === disabled) {
    if (cResult[7] === tmp11) {
      if (cResult[8] === loading) {
        if (cResult[9] === renderButton) {
          let tmp13;
          if (cResult[10] === text) {
            tmp13 = cResult[11];
          }
          if (cResult[12] === animatedProps) {
            if (cResult[13] === tmp12) {
              let tmp16;
              if (cResult[14] === tmp13) {
                tmp16 = cResult[15];
              }
              if (cResult[16] === animatedStyle) {
                let tmp19;
                if (cResult[17] === tmp16) {
                  tmp19 = cResult[18];
                }
                return tmp19;
              }
              const tmp21 = jsx(onPress(stateFromStores[8]).View, { style: animatedStyle, children: tmp16 });
              cResult[16] = animatedStyle;
              cResult[17] = tmp16;
              cResult[18] = tmp21;
              tmp19 = tmp21;
            }
          }
          const tmp18 = jsx(onPress(stateFromStores[8]).View, { style: tmp12, animatedProps, children: tmp13 });
          cResult[12] = animatedProps;
          cResult[13] = tmp12;
          cResult[14] = tmp13;
          cResult[15] = tmp18;
          tmp16 = tmp18;
        }
      }
    }
  }
  let renderButtonResult;
  if (renderButton != null) {
    const obj6 = { text, disabled, onPress: tmp11 };
    renderButtonResult = renderButton(obj6);
  }
  if (renderButtonResult == null) {
    renderButtonResult = jsx(tmp(tmp2[12]).Button, { variant: "primary", size: "lg", disabled, onPress: tmp11, text, loading });
  }
  cResult[6] = disabled;
  cResult[7] = tmp11;
  cResult[8] = loading;
  cResult[9] = renderButton;
  cResult[10] = text;
  cResult[11] = renderButtonResult;
  tmp13 = renderButtonResult;
}) : ((visible) => {
  let disabled;
  let onPress;
  let text;
  let useReducedMotion;
  visible = visible.visible;
  ({ disabled, text, onPress } = visible);
  const renderButton = visible.renderButton;
  let stateFromStores;
  const loading = visible.loading;
  let obj = visible(stateFromStores[6]);
  let items = [AccessibilityStore];
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const bottom = onPress(stateFromStores[7])().bottom;
  let obj2 = visible(stateFromStores[8]);
  const tmp = visible;
  class P {
    constructor() {
      let pointerEvents = "none";
      if (visible) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  P.__closure = { visible };
  P.__workletHash = 10073095413332;
  P.__initData = __initData3;
  const animatedProps = obj2.useAnimatedProps(P);
  let obj3 = visible(stateFromStores[8]);
  class I {
    constructor() {
      let items;
      let withSpringResult2;
      let num = 0;
      if (visible) {
        num = 1;
      }
      let num2 = 60;
      if (visible) {
        num2 = 0;
      }
      let num3 = 0.9;
      if (visible) {
        num3 = 1;
      }
      const rect = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: items, opacity: withSpringResult2 };
      let withSpringResult = num2;
      if (!stateFromStores) {
        const obj2 = spring;
        withSpringResult = obj2.withSpring(num2, MEDIA_PICKER_SEND_BUTTON_SPRING);
      }
      items = [{ translateY: withSpringResult }, ];
      let withSpringResult1 = num3;
      if (!stateFromStores) {
        const obj3 = spring;
        withSpringResult1 = obj3.withSpring(num3, MEDIA_PICKER_SEND_BUTTON_SPRING);
      }
      items[1] = { scale: withSpringResult1 };
      withSpringResult2 = num;
      if (!stateFromStores) {
        const obj4 = spring;
        withSpringResult2 = obj4.withSpring(num, MEDIA_PICKER_SEND_BUTTON_SPRING);
      }
      return rect;
    }
  }
  let obj4 = { visible, tokens: onPress(stateFromStores[9]), reducedMotion: stateFromStores, withSpring: visible(stateFromStores[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
  I.__closure = obj4;
  I.__workletHash = 13322399381306;
  I.__initData = __initData4;
  const items1 = [onPress];
  const animatedStyle = obj3.useAnimatedStyle(I);
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  const View = onPress(stateFromStores[8]).View;
  let renderButtonResult;
  const View2 = onPress(stateFromStores[8]).View;
  if (renderButton != null) {
    const obj7 = { text, disabled, onPress: callback };
    renderButtonResult = renderButton(obj7);
  }
  if (renderButtonResult == null) {
    renderButtonResult = jsx(tmp(tmp2[12]).Button, { variant: "primary", size: "lg", disabled, onPress: callback, text, loading });
  }
  return <View style={animatedStyle}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/FloatingApplyButton.tsx");

export default tmp2;