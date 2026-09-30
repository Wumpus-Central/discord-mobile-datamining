// === Module 14408: UserProfilePremiumTryItOutUpsell ===

// Module 14408 (UserProfilePremiumTryItOutUpsell)
import spring from "spring" /* 5476 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8862 */;
import openPremiumModalDefault from "openPremiumModal" /* 8894 */;
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2" /* 14367 */;
import noop from "module_19" /* 19 */;

require = fn;
const PROFILE_SIDE_PADDING = fn(6825).PROFILE_SIDE_PADDING;
const jsx = fn(21).jsx;
const FLOATING_UPSELL_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
const createStyles = fn(4866);
let closure_7 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0 }, card: { marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH } };
  return obj;
});
const __initData = { code: "function UserProfilePremiumTryItOutUpsellTsx1(){const{isVisible,withSpring,FLOATING_UPSELL_SPRING,DISMISSED_TRANSLATE_Y,DISMISSED_SCALE}=this.__closure;const visible=isVisible.get();return{opacity:withSpring(visible?1:0,FLOATING_UPSELL_SPRING),transform:[{translateY:withSpring(visible?0:DISMISSED_TRANSLATE_Y,FLOATING_UPSELL_SPRING)},{scale:withSpring(visible?1:DISMISSED_SCALE,FLOATING_UPSELL_SPRING)}]};}" };
const __initData2 = { code: "function UserProfilePremiumTryItOutUpsellTsx2(){const{isVisible}=this.__closure;const visible=isVisible.get();return{pointerEvents:visible?'box-none':'none',accessibilityElementsHidden:!visible,importantForAccessibility:visible?'auto':'no-hide-descendants'};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx");

export default function UserProfilePremiumTryItOutUpsell(isVisible) {
  isVisible = isVisible.isVisible;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6779)(analyticsLocations(6799).USER_SETTINGS_TRY_OUT_PREMIUM).analyticsLocations;
  const tmp2 = closure_7(analyticsLocations(1613)().bottom);
  let items = [analyticsLocations];
  const callback = noop.useCallback(() => {
    const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  }, items);
  const tmp = analyticsLocations(6779);
  const fn = function u() {
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
    const items = [{ translateY: spring.withSpring(num2, closure_6) }, ];
    const obj3 = { translateY: spring.withSpring(num2, closure_6) };
    let num3 = 0.9;
    if (value) {
      num3 = 1;
    }
    const tmp2Result2 = spring;
    items[1] = { scale: spring.withSpring(num3, closure_6) };
    obj2.transform = items;
    return obj2;
  };
  let obj = isVisible(4596);
  fn.__closure = { isVisible, withSpring: isVisible(5476).withSpring, FLOATING_UPSELL_SPRING, DISMISSED_TRANSLATE_Y: 60, DISMISSED_SCALE: 0.9 };
  fn.__workletHash = 7434922701119;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = { isVisible, withSpring: isVisible(5476).withSpring, FLOATING_UPSELL_SPRING, DISMISSED_TRANSLATE_Y: 60, DISMISSED_SCALE: 0.9 };
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
  I.__workletHash = 4173826125285;
  I.__initData = __initData2;
  const animatedProps = isVisible(4596).useAnimatedProps(I);
  const obj4 = { animatedProps, style: null, children: null };
  const items1 = [tmp2.container, animatedStyle];
  obj4.style = items1;
  const obj5 = { style: tmp2.card, text: null, buttonText: null, onButtonPress: null, buttonVariant: "primary" };
  let obj3 = isVisible(4596);
  const intl = isVisible(1115).intl;
  obj5.text = intl.format(isVisible(1115).t.TmfgI2, { onClick: callback });
  const intl2 = isVisible(1115).intl;
  obj5.buttonText = intl2.string(isVisible(1115).t.PxUx8e);
  obj5.onButtonPress = isVisible.onPreviewPremium;
  obj4.children = jsx(analyticsLocations(14367), { style: tmp2.card, text: null, buttonText: null, onButtonPress: null, buttonVariant: "primary" });
  return jsx(analyticsLocations(4596).View, { animatedProps, style: null, children: null });
};