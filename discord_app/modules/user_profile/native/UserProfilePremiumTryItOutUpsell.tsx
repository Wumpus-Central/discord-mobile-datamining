// discord_app/modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import Constants from "Constants.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
const jsx = Fragment.jsx;
let c6 = 0.9;
const FLOATING_UPSELL_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
let closure_8 = createStyles.createStyles((bottom) => {
  let obj2;
  const obj = {
    container: obj2,
    card: { marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH },
  };
  obj2 = { position: "absolute", bottom, start: 0, end: 0 };
  ({ marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH });
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isVisible) => {
      let analyticsLocations;
      let tmp7;
      let tmp = isVisible;
      let obj = isVisible(576);
      const cResult = obj.c(16);
      isVisible = isVisible.isVisible;
      const onPreviewPremium = isVisible.onPreviewPremium;
      const tmp4 = analyticsLocations;
      const tmp5 = analyticsLocations(6657);
      analyticsLocations = tmp5(analyticsLocations(6681).USER_SETTINGS_TRY_OUT_PREMIUM).analyticsLocations;
      const tmp6 = closure_8(analyticsLocations(1618)().bottom);
      if (cResult[0] !== analyticsLocations) {
        const fn = function n() {
          const obj = {
            analyticsLocations,
            premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
          };
          const tmp = openPremiumModalDefault;
          tmp(obj);
        };
        let num = 0;
        cResult[0] = analyticsLocations;
        let num2 = 1;
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult = tmp(4612);
      class P {
        constructor() {
          let items;
          const value = isVisible.get();
          let num = 0;
          const withSpring = spring.withSpring;
          spring;
          if (value) {
            num = 1;
          }
          let num2 = 60;
          const obj = { opacity: withSpring(num, FLOATING_UPSELL_SPRING), transform: items };
          const withSpring2 = spring.withSpring;
          spring;
          if (value) {
            num2 = 0;
          }
          items = [{ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) }];
          ({ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) });
          let num3 = 1;
          const withSpring3 = spring.withSpring;
          spring;
          if (!value) {
            num3 = c6;
          }
          items[1] = { scale: withSpring3(num3, FLOATING_UPSELL_SPRING) };
          ({ scale: withSpring3(num3, FLOATING_UPSELL_SPRING) });
          return obj;
        }
      }
      const obj2 = {
        isVisible,
        withSpring: tmp(5597).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      P.__closure = obj2;
      P.__workletHash = 7434922701119;
      P.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(P);
      const tmpResult2 = tmp(4612);
      class T {
        constructor() {
          let str2;
          const value = isVisible.get();
          let str = "none";
          if (value) {
            str = "box-none";
          }
          const obj = { pointerEvents: str, accessibilityElementsHidden: !value, importantForAccessibility: str2 };
          str2 = "no-hide-descendants";
          if (value) {
            str2 = "auto";
          }
          return obj;
        }
      }
      T.__closure = { isVisible };
      T.__workletHash = 5163998995941;
      T.__initData = __initData2;
      const animatedProps = tmpResult2.useAnimatedProps(T);
      if (cResult[2] === animatedStyle) {
        let tmp10;
        let tmp11;
        let tmp14;
        if (cResult[3] === tmp6.container) {
          tmp10 = cResult[4];
        }
        const card = tmp6.card;
        if (cResult[5] !== tmp7) {
          const intl = tmp(1126).intl;
          const obj3 = { onClick: tmp7 };
          const formatResult = intl.format(tmp(1126).t.TmfgI2, obj3);
          let num3 = 5;
          cResult[5] = tmp7;
          cResult[6] = formatResult;
          tmp11 = formatResult;
        } else {
          tmp11 = cResult[6];
        }
        const _Symbol = Symbol;
        let str = "react.memo_cache_sentinel";
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(tmp(1126).t.PxUx8e);
          cResult[7] = stringResult;
          tmp14 = stringResult;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === onPreviewPremium) {
          if (cResult[9] === tmp6.card) {
            let tmp16;
            if (cResult[10] === tmp11) {
              tmp16 = cResult[11];
            }
            if (cResult[12] === animatedProps) {
              if (cResult[13] === tmp10) {
                let tmp19;
                if (cResult[14] === tmp16) {
                  tmp19 = cResult[15];
                }
                return tmp19;
              }
            }
            const tmp21 = jsx(tmp4(4612).View, { animatedProps, style: tmp10, children: tmp16 });
            cResult[12] = animatedProps;
            cResult[13] = tmp10;
            cResult[14] = tmp16;
            cResult[15] = tmp21;
            tmp19 = tmp21;
          }
        }
        const tmp18 = jsx(tmp4(14474), {
          style: card,
          text: tmp11,
          buttonText: tmp14,
          onButtonPress: onPreviewPremium,
          buttonVariant: "primary",
        });
        cResult[8] = onPreviewPremium;
        class P {
          constructor() {
            let items;
            const value = isVisible.get();
            let num = 0;
            const withSpring = spring.withSpring;
            spring;
            if (value) {
              num = 1;
            }
            let num2 = 60;
            const obj = { opacity: withSpring(num, FLOATING_UPSELL_SPRING), transform: items };
            const withSpring2 = spring.withSpring;
            spring;
            if (value) {
              num2 = 0;
            }
            items = [{ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) }];
            ({ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) });
            let num3 = 1;
            const withSpring3 = spring.withSpring;
            spring;
            if (!value) {
              num3 = c6;
            }
            items[1] = { scale: withSpring3(num3, FLOATING_UPSELL_SPRING) };
            ({ scale: withSpring3(num3, FLOATING_UPSELL_SPRING) });
            return obj;
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
    }
  : (isVisible) => {
      let intl;
      let intl2;
      isVisible = isVisible.isVisible;
      let analyticsLocations;
      const onPreviewPremium = isVisible.onPreviewPremium;
      let tmp = analyticsLocations(6657);
      analyticsLocations = tmp(analyticsLocations(6681).USER_SETTINGS_TRY_OUT_PREMIUM).analyticsLocations;
      const tmp2 = closure_8(analyticsLocations(1618)().bottom);
      let items = [analyticsLocations];
      const callback = react.useCallback(() => {
        const obj = {
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
        };
        const tmp = openPremiumModalDefault;
        tmp(obj);
      }, items);
      let obj = isVisible(4612);
      const fn = function c() {
        let items;
        const value = isVisible.get();
        let num = 0;
        const withSpring = spring.withSpring;
        spring;
        if (value) {
          num = 1;
        }
        let num2 = 60;
        const obj = { opacity: withSpring(num, FLOATING_UPSELL_SPRING), transform: items };
        const withSpring2 = spring.withSpring;
        spring;
        if (value) {
          num2 = 0;
        }
        items = [{ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) }];
        ({ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) });
        let num3 = 1;
        const withSpring3 = spring.withSpring;
        spring;
        if (!value) {
          num3 = c6;
        }
        items[1] = { scale: withSpring3(num3, FLOATING_UPSELL_SPRING) };
        ({ scale: withSpring3(num3, FLOATING_UPSELL_SPRING) });
        return obj;
      };
      const obj2 = {
        isVisible,
        withSpring: isVisible(5597).withSpring,
        FLOATING_UPSELL_SPRING,
        DISMISSED_TRANSLATE_Y: 60,
        DISMISSED_SCALE,
      };
      fn.__closure = obj2;
      fn.__workletHash = 14790282051517;
      fn.__initData = __initData3;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj3 = isVisible(4612);
      class E {
        constructor() {
          let str2;
          const value = isVisible.get();
          let str = "none";
          if (value) {
            str = "box-none";
          }
          const obj = { pointerEvents: str, accessibilityElementsHidden: !value, importantForAccessibility: str2 };
          str2 = "no-hide-descendants";
          if (value) {
            str2 = "auto";
          }
          return obj;
        }
      }
      E.__closure = { isVisible };
      E.__workletHash = 15404222413955;
      E.__initData = __initData4;
      const animatedProps = obj3.useAnimatedProps(E);
      const items1 = [tmp2.container, animatedStyle];
      const View = analyticsLocations(4612).View;
      ({
        style: tmp2.card,
        text: intl.format(isVisible(1126).t.TmfgI2, { onClick: callback }),
        buttonText: intl2.string(isVisible(1126).t.PxUx8e),
        onButtonPress: onPreviewPremium,
        buttonVariant: "primary",
      });
      analyticsLocations(14474);
      intl = isVisible(1126).intl;
      intl2 = isVisible(1126).intl;
      return (
        <View animatedProps={animatedProps} style={items1}>
          {null}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx");

export default tmp2;
