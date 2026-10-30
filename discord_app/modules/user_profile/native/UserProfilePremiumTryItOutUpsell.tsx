// discord_app/modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const UserProfileUpsellCardV2Default = UserProfileUpsellCardV2;

require = fn;
const PROFILE_SIDE_PADDING = fn(7371).PROFILE_SIDE_PADDING;
const jsx = fn(21).jsx;
const FLOATING_UPSELL_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles((bottom) => {
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
  code: "function UserProfilePremiumTryItOutUpsellTsx2(){const{isVisible}=this.__closure;const visible=isVisible.get();return{pointerEvents:visible?'box-none':'none',accessibilityElementsHidden:!visible,importantForAccessibility:visible?'auto':'no-hide-descendants'};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx");

export default function UserProfilePremiumTryItOutUpsell(isVisible) {
  isVisible = isVisible.isVisible;
  const tmp = closure_6(useSafeAreaInsetsDefault().bottom);
  const fn = function c() {
    value = isVisible.get();
    let num = 0;
    if (value) {
      num = 1;
    }
    const obj2 = { opacity: spring.withSpring(num, closure_5), transform: null };
    let num2 = 60;
    if (value) {
      num2 = 0;
    }
    const tmp2Result = spring;
    const items = [{ translateY: spring.withSpring(num2, closure_5) }];
    const obj3 = { translateY: spring.withSpring(num2, closure_5) };
    let num3 = 0.9;
    if (value) {
      num3 = 1;
    }
    const tmp2Result2 = spring;
    items[1] = { scale: spring.withSpring(num3, closure_5) };
    obj2.transform = items;
    return obj2;
  };
  let obj = isVisible(5090);
  fn.__closure = {
    isVisible,
    withSpring: isVisible(5632).withSpring,
    FLOATING_UPSELL_SPRING,
    DISMISSED_TRANSLATE_Y: 60,
    DISMISSED_SCALE: 0.9,
  };
  fn.__workletHash = 7434922701119;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = {
    isVisible,
    withSpring: isVisible(5632).withSpring,
    FLOATING_UPSELL_SPRING,
    DISMISSED_TRANSLATE_Y: 60,
    DISMISSED_SCALE: 0.9,
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
  fn2.__workletHash = 4173826125285;
  fn2.__initData = __initData2;
  const animatedProps = isVisible(5090).useAnimatedProps(fn2);
  const obj4 = { animatedProps, style: null, children: null };
  let items = [tmp.container, animatedStyle];
  obj4.style = items;
  const obj5 = { style: tmp.card, text: null, buttonText: null, onButtonPress: null, buttonVariant: "primary" };
  let obj3 = isVisible(5090);
  const intl = isVisible(1114).intl;
  obj5.text = intl.string(isVisible(1114).t["MswR/h"]);
  const intl2 = isVisible(1114).intl;
  obj5.buttonText = intl2.string(isVisible(1114).t.PxUx8e);
  obj5.onButtonPress = isVisible.onPreviewPremium;
  obj4.children = jsx(UserProfileUpsellCardV2Default, {
    style: tmp.card,
    text: null,
    buttonText: null,
    onButtonPress: null,
    buttonVariant: "primary",
  });
  return jsx(ReanimatedRexportDefault.View, { animatedProps, style: null, children: null });
}
