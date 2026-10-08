// discord_app/modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const PROFILE_SIDE_PADDING = fn(6891).PROFILE_SIDE_PADDING;
const jsx = fn(21).jsx;
let c6 = 0.9;
const FLOATING_UPSELL_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles((bottom) => {
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
      const cResult = isVisible(576).c(16);
      isVisible = isVisible.isVisible;
      const onPreviewPremium = isVisible.onPreviewPremium;
      let obj = isVisible(576);
      analyticsLocations = analyticsLocations(6841)(
        analyticsLocations(6865).USER_SETTINGS_TRY_OUT_PREMIUM,
      ).analyticsLocations;
      const tmp6 = closure_8(analyticsLocations(1630)().bottom);
      if (cResult[0] !== analyticsLocations) {
        const fn = function n() {
          const obj = {
            analyticsLocations,
            premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
          };
          openPremiumModalDefault(obj);
        };
        cResult[0] = analyticsLocations;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const tmp5 = analyticsLocations(6841);
      class L {
        constructor() {
          value = isVisible.get();
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[13]);
          num = 0;
          if (value) {
            num = 1;
          }
          obj1 = { opacity: obj.withSpring(num, closure_7), transform: null };
          tmp4 = closure_7;
          tmp2Result = tmp2(tmp3[13]);
          num2 = 60;
          if (value) {
            num2 = 0;
          }
          obj7 = { translateY: tmp2Result.withSpring(num2, tmp4) };
          items = [,];
          items[0] = obj7;
          tmp2Result1 = tmp2(tmp3[13]);
          num3 = 1;
          if (!value) {
            num3 = c6;
          }
          obj8 = { scale: tmp2Result1.withSpring(num3, tmp4) };
          items[1] = obj8;
          obj1.transform = items;
          return obj1;
        }
      }
      const tmpResult = isVisible(4810);
      L.__closure = {
        isVisible,
        withSpring: isVisible(5374).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      L.__workletHash = 7434922701119;
      L.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(L);
      let obj2 = {
        isVisible,
        withSpring: isVisible(5374).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      class T {
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
      T.__closure = { isVisible };
      T.__workletHash = 5163998995941;
      T.__initData = __initData2;
      const animatedProps = isVisible(4810).useAnimatedProps(T);
      if (cResult[2] === animatedStyle) {
        if (cResult[3] === tmp6.container) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] !== tmp7) {
          const intl = tmp(1126).intl;
          let obj3 = { onClick: tmp7 };
          const formatResult = intl.format(tmp(1126).t.TmfgI2, obj3);
          cResult[5] = tmp7;
          cResult[6] = formatResult;
          let tmp11 = formatResult;
        } else {
          tmp11 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(tmp(1126).t.PxUx8e);
          cResult[7] = stringResult;
          let tmp14 = stringResult;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === onPreviewPremium) {
          if (cResult[9] === tmp6.card) {
            if (cResult[10] === tmp11) {
              let tmp16 = cResult[11];
            }
            if (cResult[12] === animatedProps) {
              if (cResult[13] === tmp10) {
                if (cResult[14] === tmp16) {
                  let tmp19 = cResult[15];
                }
                return tmp19;
              }
            }
            const obj4 = { animatedProps, style: tmp10, children: tmp16 };
            const tmp21 = jsx(tmp4(4810).View, { animatedProps, style: tmp10, children: tmp16 });
            cResult[12] = animatedProps;
            cResult[13] = tmp10;
            cResult[14] = tmp16;
            cResult[15] = tmp21;
            tmp19 = tmp21;
          }
        }
        const obj5 = {
          style: tmp6.card,
          text: tmp11,
          buttonText: tmp14,
          onButtonPress: onPreviewPremium,
          buttonVariant: "primary",
        };
        const tmp18 = jsx(tmp4(14750), {
          style: tmp6.card,
          text: tmp11,
          buttonText: tmp14,
          onButtonPress: onPreviewPremium,
          buttonVariant: "primary",
        });
        cResult[8] = onPreviewPremium;
        class L {
          constructor() {
            value = isVisible.get();
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[13]);
            num = 0;
            if (value) {
              num = 1;
            }
            obj1 = { opacity: obj.withSpring(num, closure_7), transform: null };
            tmp4 = closure_7;
            tmp2Result = tmp2(tmp3[13]);
            num2 = 60;
            if (value) {
              num2 = 0;
            }
            obj7 = { translateY: tmp2Result.withSpring(num2, tmp4) };
            items = [,];
            items[0] = obj7;
            tmp2Result1 = tmp2(tmp3[13]);
            num3 = 1;
            if (!value) {
              num3 = c6;
            }
            obj8 = { scale: tmp2Result1.withSpring(num3, tmp4) };
            items[1] = obj8;
            obj1.transform = items;
            return obj1;
          }
        }
        cResult[9] = tmp6.card;
        cResult[10] = tmp11;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      let items = [tmp6.container, animatedStyle];
      cResult[2] = animatedStyle;
      cResult[3] = tmp6.container;
      cResult[4] = items;
      tmp10 = items;
      const tmpResult2 = isVisible(4810);
    }
  : function UserProfilePremiumTryItOutUpsell(isVisible) {
      isVisible = isVisible.isVisible;
      let analyticsLocations;
      analyticsLocations = analyticsLocations(6841)(
        analyticsLocations(6865).USER_SETTINGS_TRY_OUT_PREMIUM,
      ).analyticsLocations;
      const tmp2 = closure_8(analyticsLocations(1630)().bottom);
      let items = [analyticsLocations];
      const callback = noop.useCallback(() => {
        const obj = {
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
        };
        openPremiumModalDefault(obj);
      }, items);
      const tmp = analyticsLocations(6841);
      const fn = function c() {
        value = isVisible.get();
        let num = 0;
        if (value) {
          num = 1;
        }
        const obj2 = { opacity: spring.withSpring(num, closure_7), transform: null };
        let num2 = 60;
        if (value) {
          num2 = 0;
        }
        const tmp2Result = spring;
        const items = [{ translateY: spring.withSpring(num2, closure_7) }];
        const obj3 = { translateY: spring.withSpring(num2, closure_7) };
        let num3 = 1;
        if (!value) {
          num3 = c6;
        }
        const tmp2Result2 = spring;
        items[1] = { scale: spring.withSpring(num3, closure_7) };
        obj2.transform = items;
        return obj2;
      };
      let obj = isVisible(4810);
      fn.__closure = {
        isVisible,
        withSpring: isVisible(5374).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      fn.__workletHash = 14790282051517;
      fn.__initData = __initData3;
      const animatedStyle = obj.useAnimatedStyle(fn);
      let obj2 = {
        isVisible,
        withSpring: isVisible(5374).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      class E {
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
      E.__closure = { isVisible };
      E.__workletHash = 15404222413955;
      E.__initData = __initData4;
      const animatedProps = isVisible(4810).useAnimatedProps(E);
      const obj4 = { animatedProps, style: null, children: null };
      const items1 = [tmp2.container, animatedStyle];
      obj4.style = items1;
      const obj5 = { style: tmp2.card, text: null, buttonText: null, onButtonPress: null, buttonVariant: "primary" };
      let obj3 = isVisible(4810);
      const intl = isVisible(1126).intl;
      obj5.text = intl.format(isVisible(1126).t.TmfgI2, { onClick: callback });
      const intl2 = isVisible(1126).intl;
      obj5.buttonText = intl2.string(isVisible(1126).t.PxUx8e);
      obj5.onButtonPress = isVisible.onPreviewPremium;
      obj4.children = jsx(analyticsLocations(14750), {
        style: tmp2.card,
        text: null,
        buttonText: null,
        onButtonPress: null,
        buttonVariant: "primary",
      });
      return jsx(analyticsLocations(4810).View, { animatedProps, style: null, children: null });
    };
