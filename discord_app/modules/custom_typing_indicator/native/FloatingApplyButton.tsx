// discord_app/modules/custom_typing_indicator/native/FloatingApplyButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const MEDIA_PICKER_SEND_BUTTON_SPRING = fn(1626).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = fn(21).jsx;
const __initData = {
  code: 'function FloatingApplyButtonTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?"box-none":"none"};}',
};
const __initData2 = {
  code: 'function FloatingApplyButtonTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:"absolute",bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:"column",justifyContent:"flex-end",transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}',
};
const __initData3 = {
  code: "function FloatingApplyButtonTsx3(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}",
};
const __initData4 = {
  code: "function FloatingApplyButtonTsx4(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/FloatingApplyButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FloatingApplyButton(visible) {
      const cResult = visible(stateFromStores[5]).c(19);
      visible = visible.visible;
      ({ disabled, text, onPress } = visible);
      ({ renderButton, loading } = visible);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function u() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = visible(stateFromStores[5]);
      stateFromStores = visible(stateFromStores[6]).useStateFromStores(tmp4, tmp5);
      const bottom = onPress(tmp2[7])().bottom;
      const tmpResult = visible(stateFromStores[6]);
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
      const animatedProps = visible(stateFromStores[8]).useAnimatedProps(fn2);
      const tmpResult3 = visible(stateFromStores[8]);
      class T {
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
          rect = {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            marginHorizontal: closure_1(closure_2[9]).space.PX_16,
            flexDirection: "column",
            justifyContent: "flex-end",
            transform: null,
            opacity: null,
          };
          tmp2 = closure_2;
          tmp3 = closure_2;
          withSpringResult = num2;
          if (!closure_2) {
            tmp5 = closure_0;
            obj2 = closure_0(tmp2[10]);
            tmp6 = closure_5;
            withSpringResult = obj2.withSpring(num2, closure_5);
          }
          items = [,];
          items[0] = { translateY: withSpringResult };
          withSpringResult1 = num3;
          if (!tmp3) {
            tmp8 = closure_0;
            obj3 = closure_0(tmp2[10]);
            tmp9 = closure_5;
            withSpringResult1 = obj3.withSpring(num3, closure_5);
          }
          items[1] = { scale: withSpringResult1 };
          rect.transform = items;
          withSpringResult2 = num;
          if (!tmp3) {
            tmp11 = closure_0;
            obj4 = closure_0(tmp2[10]);
            tmp12 = closure_5;
            withSpringResult2 = obj4.withSpring(num, closure_5);
          }
          rect.opacity = withSpringResult2;
          return rect;
        }
      }
      const tmpResult4 = visible(stateFromStores[8]);
      T.__closure = {
        visible,
        tokens: onPress(stateFromStores[9]),
        reducedMotion: stateFromStores,
        withSpring: visible(stateFromStores[10]).withSpring,
        MEDIA_PICKER_SEND_BUTTON_SPRING,
      };
      T.__workletHash = 16100600202140;
      T.__initData = __initData2;
      const animatedStyle = tmpResult4.useAnimatedStyle(T);
      if (cResult[2] !== onPress) {
        const fn3 = function y() {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          onPress();
        };
        cResult[2] = onPress;
        cResult[3] = fn3;
        let tmp11 = fn3;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== bottom) {
        let obj3 = { marginBottom: bottom };
        cResult[4] = bottom;
        cResult[5] = obj3;
        let tmp12 = obj3;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === disabled) {
        if (cResult[7] === tmp11) {
          if (cResult[8] === loading) {
            if (cResult[9] === renderButton) {
              if (cResult[10] === text) {
                let tmp13 = cResult[11];
              }
              if (cResult[12] === animatedProps) {
                if (cResult[13] === tmp12) {
                  if (cResult[14] === tmp13) {
                    let tmp16 = cResult[15];
                  }
                  if (cResult[16] === animatedStyle) {
                    if (cResult[17] === tmp16) {
                      let tmp19 = cResult[18];
                    }
                    return tmp19;
                  }
                  let obj4 = { style: animatedStyle, children: tmp16 };
                  const tmp21 = jsx(onPress(tmp2[8]).View, { style: animatedStyle, children: tmp16 });
                  cResult[16] = animatedStyle;
                  cResult[17] = tmp16;
                  cResult[18] = tmp21;
                  tmp19 = tmp21;
                }
              }
              const obj5 = { style: tmp12, animatedProps, children: tmp13 };
              const tmp18 = jsx(onPress(tmp2[8]).View, { style: tmp12, animatedProps, children: tmp13 });
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
        const obj7 = { variant: "primary", size: "lg", disabled, onPress: tmp11, text, loading };
        renderButtonResult = jsx(tmp(tmp2[12]).Button, {
          variant: "primary",
          size: "lg",
          disabled,
          onPress: tmp11,
          text,
          loading,
        });
      }
      cResult[6] = disabled;
      cResult[7] = tmp11;
      cResult[8] = loading;
      cResult[9] = renderButton;
      cResult[10] = text;
      cResult[11] = renderButtonResult;
      tmp13 = renderButtonResult;
      let obj2 = {
        visible,
        tokens: onPress(stateFromStores[9]),
        reducedMotion: stateFromStores,
        withSpring: visible(stateFromStores[10]).withSpring,
        MEDIA_PICKER_SEND_BUTTON_SPRING,
      };
    }
  : function FloatingApplyButton(visible) {
      visible = visible.visible;
      ({ disabled, text, onPress } = visible);
      const renderButton = visible.renderButton;
      let stateFromStores;
      let items = [AccessibilityStore];
      stateFromStores = visible(stateFromStores[6]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const obj = visible(stateFromStores[6]);
      const tmp = visible;
      const tmp2 = stateFromStores;
      class P {
        constructor() {
          pointerEvents = "none";
          if (visible) {
            pointerEvents = "box-none";
          }
          return { pointerEvents };
        }
      }
      P.__closure = { visible };
      P.__workletHash = 10073095413332;
      P.__initData = __initData3;
      const animatedProps = visible(stateFromStores[8]).useAnimatedProps(P);
      let obj2 = visible(stateFromStores[8]);
      class I {
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
          rect = {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            marginHorizontal: closure_1(closure_2[9]).space.PX_16,
            flexDirection: "column",
            justifyContent: "flex-end",
            transform: null,
            opacity: null,
          };
          tmp2 = closure_2;
          tmp3 = closure_2;
          withSpringResult = num2;
          if (!closure_2) {
            tmp5 = closure_0;
            obj2 = closure_0(tmp2[10]);
            tmp6 = closure_5;
            withSpringResult = obj2.withSpring(num2, closure_5);
          }
          items = [,];
          items[0] = { translateY: withSpringResult };
          withSpringResult1 = num3;
          if (!tmp3) {
            tmp8 = closure_0;
            obj3 = closure_0(tmp2[10]);
            tmp9 = closure_5;
            withSpringResult1 = obj3.withSpring(num3, closure_5);
          }
          items[1] = { scale: withSpringResult1 };
          rect.transform = items;
          withSpringResult2 = num;
          if (!tmp3) {
            tmp11 = closure_0;
            obj4 = closure_0(tmp2[10]);
            tmp12 = closure_5;
            withSpringResult2 = obj4.withSpring(num, closure_5);
          }
          rect.opacity = withSpringResult2;
          return rect;
        }
      }
      let obj3 = visible(stateFromStores[8]);
      I.__closure = {
        visible,
        tokens: onPress(stateFromStores[9]),
        reducedMotion: stateFromStores,
        withSpring: visible(stateFromStores[10]).withSpring,
        MEDIA_PICKER_SEND_BUTTON_SPRING,
      };
      I.__workletHash = 13322399381306;
      I.__initData = __initData4;
      const items1 = [onPress];
      const animatedStyle = obj3.useAnimatedStyle(I);
      const callback = noop.useCallback(() => {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onPress();
      }, items1);
      const obj5 = { style: animatedStyle, children: null };
      const obj6 = { style: { marginBottom: onPress(stateFromStores[7])().bottom }, animatedProps, children: null };
      let renderButtonResult;
      if (renderButton != null) {
        const obj7 = { text, disabled, onPress: callback };
        renderButtonResult = renderButton(obj7);
      }
      if (renderButtonResult == null) {
        const obj8 = { variant: "primary", size: "lg", disabled, onPress: callback, text, loading: visible.loading };
        renderButtonResult = jsx(tmp(tmp2[12]).Button, {
          variant: "primary",
          size: "lg",
          disabled,
          onPress: callback,
          text,
          loading: visible.loading,
        });
      }
      obj6.children = renderButtonResult;
      obj5.children = jsx(onPress(stateFromStores[8]).View, {
        style: { marginBottom: onPress(stateFromStores[7])().bottom },
        animatedProps,
        children: null,
      });
      return jsx(onPress(stateFromStores[8]).View, { style: animatedStyle, children: null });
    };
