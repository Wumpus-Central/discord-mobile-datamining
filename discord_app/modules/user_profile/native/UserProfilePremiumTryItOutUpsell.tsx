// discord_app/modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const UserProfileUpsellCardV2Default = UserProfileUpsellCardV2;

require = fn;
const PROFILE_SIDE_PADDING = fn(6898).PROFILE_SIDE_PADDING;
const jsx = fn(21).jsx;
let c5 = 0.9;
const FLOATING_UPSELL_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles((bottom) => {
  const obj = {
    container: { position: "absolute", bottom, start: 0, end: 0 },
    card: { marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH },
  };
  return obj;
});
const __initData = {
  code: "function UserProfilePremiumTryItOutUpsellTsx1(){const{isVisible,withSpring,FLOATING_UPSELL_SPRING,DISMISSED_TRANSLATE_Y,DISMISSED_SCALE}=this.__closure;const visible=isVisible.get();return{opacity:withSpring(visible?1:0,FLOATING_UPSELL_SPRING),transform:[{translateY:withSpring(visible?0:DISMISSED_TRANSLATE_Y,FLOATING_UPSELL_SPRING)},{scale:withSpring(visible?1:DISMISSED_SCALE,FLOATING_UPSELL_SPRING)}]};}",
};
const __initData2 = {
  code: 'function UserProfilePremiumTryItOutUpsellTsx2(){const{isVisible}=this.__closure;const visible_0=isVisible.get();return{pointerEvents:visible_0?"box-none":"none",accessibilityElementsHidden:!visible_0,importantForAccessibility:visible_0?"auto":"no-hide-descendants"};}',
};
const __initData3 = {
  code: "function UserProfilePremiumTryItOutUpsellTsx3(){const{isVisible,withSpring,FLOATING_UPSELL_SPRING,DISMISSED_TRANSLATE_Y,DISMISSED_SCALE}=this.__closure;const visible=isVisible.get();return{opacity:withSpring(visible?1:0,FLOATING_UPSELL_SPRING),transform:[{translateY:withSpring(visible?0:DISMISSED_TRANSLATE_Y,FLOATING_UPSELL_SPRING)},{scale:withSpring(visible?1:DISMISSED_SCALE,FLOATING_UPSELL_SPRING)}]};}",
};
const __initData4 = {
  code: "function UserProfilePremiumTryItOutUpsellTsx4(){const{isVisible}=this.__closure;const visible_0=isVisible.get();return{pointerEvents:visible_0?'box-none':'none',accessibilityElementsHidden:!visible_0,importantForAccessibility:visible_0?'auto':'no-hide-descendants'};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfilePremiumTryItOutUpsell(isVisible) {
      const cResult = isVisible(576).c(12);
      isVisible = isVisible.isVisible;
      const onPreviewPremium = isVisible.onPreviewPremium;
      const tmp5 = closure_7(useSafeAreaInsetsDefault().bottom);
      let obj = isVisible(576);
      const fn = function c() {
        value = isVisible.get();
        let num = 0;
        if (value) {
          num = 1;
        }
        const obj2 = { opacity: spring.withSpring(num, closure_6), transform: null };
        let num2 = 60;
        if (value) {
          num2 = 0;
        }
        const tmp2Result = spring;
        const items = [{ translateY: spring.withSpring(num2, closure_6) }];
        const obj3 = { translateY: spring.withSpring(num2, closure_6) };
        let num3 = 1;
        if (!value) {
          num3 = c5;
        }
        const tmp2Result2 = spring;
        items[1] = { scale: spring.withSpring(num3, closure_6) };
        obj2.transform = items;
        return obj2;
      };
      let obj2 = isVisible(4811);
      fn.__closure = {
        isVisible,
        withSpring: isVisible(5375).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      fn.__workletHash = 7434922701119;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let obj3 = {
        isVisible,
        withSpring: isVisible(5375).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      const fn2 = function u() {
        value = isVisible.get();
        let str = "none";
        if (value) {
          str = "box-none";
        }
        const obj = { pointerEvents: str, accessibilityElementsHidden: !value, importantForAccessibility: null };
        let str2 = "no-hide-descendants";
        if (value) {
          str2 = "auto";
        }
        obj.importantForAccessibility = str2;
        return obj;
      };
      fn2.__closure = { isVisible };
      fn2.__workletHash = 5163998995941;
      fn2.__initData = __initData2;
      const animatedProps = isVisible(4811).useAnimatedProps(fn2);
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === tmp5.container) {
          let tmp8 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["MswR/h"]);
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.PxUx8e);
          cResult[3] = stringResult;
          cResult[4] = stringResult1;
          let tmp11 = stringResult1;
          let tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
          tmp11 = cResult[4];
        }
        if (cResult[5] === onPreviewPremium) {
          if (cResult[6] === tmp5.card) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] === animatedProps) {
            if (cResult[9] === tmp8) {
              if (cResult[10] === tmp14) {
                let tmp17 = cResult[11];
              }
              return tmp17;
            }
          }
          const obj5 = { animatedProps, style: tmp8, children: tmp14 };
          const tmp19 = jsx(ReanimatedRexportDefault.View, { animatedProps, style: tmp8, children: tmp14 });
          cResult[8] = animatedProps;
          cResult[9] = tmp8;
          cResult[10] = tmp14;
          cResult[11] = tmp19;
          tmp17 = tmp19;
        }
        const obj6 = {
          style: tmp5.card,
          text: tmp10,
          buttonText: tmp11,
          onButtonPress: onPreviewPremium,
          buttonVariant: "primary",
        };
        const tmp16 = jsx(UserProfileUpsellCardV2Default, {
          style: tmp5.card,
          text: tmp10,
          buttonText: tmp11,
          onButtonPress: onPreviewPremium,
          buttonVariant: "primary",
        });
        cResult[5] = onPreviewPremium;
        cResult[6] = tmp5.card;
        cResult[7] = tmp16;
        tmp14 = tmp16;
      }
      let items = [tmp5.container, animatedStyle];
      cResult[0] = animatedStyle;
      cResult[1] = tmp5.container;
      cResult[2] = items;
      tmp8 = items;
      const obj4 = isVisible(4811);
    }
  : function UserProfilePremiumTryItOutUpsell(isVisible) {
      isVisible = isVisible.isVisible;
      const tmp = closure_7(useSafeAreaInsetsDefault().bottom);
      const fn = function _() {
        value = isVisible.get();
        let num = 0;
        if (value) {
          num = 1;
        }
        const obj2 = { opacity: spring.withSpring(num, closure_6), transform: null };
        let num2 = 60;
        if (value) {
          num2 = 0;
        }
        const tmp2Result = spring;
        const items = [{ translateY: spring.withSpring(num2, closure_6) }];
        const obj3 = { translateY: spring.withSpring(num2, closure_6) };
        let num3 = 1;
        if (!value) {
          num3 = c5;
        }
        const tmp2Result2 = spring;
        items[1] = { scale: spring.withSpring(num3, closure_6) };
        obj2.transform = items;
        return obj2;
      };
      let obj = isVisible(4811);
      fn.__closure = {
        isVisible,
        withSpring: isVisible(5375).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      fn.__workletHash = 14790282051517;
      fn.__initData = __initData3;
      const animatedStyle = obj.useAnimatedStyle(fn);
      let obj2 = {
        isVisible,
        withSpring: isVisible(5375).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      class I {
        constructor() {
          value = isVisible.get();
          str = "none";
          if (value) {
            str = "box-none";
          }
          obj = { pointerEvents: str, accessibilityElementsHidden: !value, importantForAccessibility: null };
          str2 = "no-hide-descendants";
          if (value) {
            str2 = "auto";
          }
          obj.importantForAccessibility = str2;
          return obj;
        }
      }
      I.__closure = { isVisible };
      I.__workletHash = 15404222413955;
      I.__initData = __initData4;
      const animatedProps = isVisible(4811).useAnimatedProps(I);
      const obj4 = { animatedProps, style: null, children: null };
      let items = [tmp.container, animatedStyle];
      obj4.style = items;
      const obj5 = { style: tmp.card, text: null, buttonText: null, onButtonPress: null, buttonVariant: "primary" };
      let obj3 = isVisible(4811);
      const intl = isVisible(1126).intl;
      obj5.text = intl.string(isVisible(1126).t["MswR/h"]);
      const intl2 = isVisible(1126).intl;
      obj5.buttonText = intl2.string(isVisible(1126).t.PxUx8e);
      obj5.onButtonPress = isVisible.onPreviewPremium;
      obj4.children = jsx(UserProfileUpsellCardV2Default, {
        style: tmp.card,
        text: null,
        buttonText: null,
        onButtonPress: null,
        buttonVariant: "primary",
      });
      return jsx(ReanimatedRexportDefault.View, { animatedProps, style: null, children: null });
    };
