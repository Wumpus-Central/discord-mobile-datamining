// === Module 16877: UserProfilePremiumTryItOutUpsell ===

// Module 16877 (UserProfilePremiumTryItOutUpsell)
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5761 */;
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2" /* 16854 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;
const UserProfileUpsellCardV2Default = UserProfileUpsellCardV2;

require = fn;
const PROFILE_SIDE_PADDING = fn(7437).PROFILE_SIDE_PADDING;
const jsx = fn(21).jsx;
let closure_5 = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
const createStyles = fn(5140);
let closure_6 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0 }, card: { marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH } };
  return obj;
});
let closure_7 = { code: "(function UserProfilePremiumTryItOutUpsellTsx1(){let[isVisible,withSpring,FLOATING_UPSELL_SPRING,DISMISSED_TRANSLATE_Y,DISMISSED_SCALE]=this.__closure;const visible=isVisible.get();return{opacity:withSpring(visible?1:0,FLOATING_UPSELL_SPRING),transform:[{translateY:withSpring(visible?0:DISMISSED_TRANSLATE_Y,FLOATING_UPSELL_SPRING)},{scale:withSpring(visible?1:DISMISSED_SCALE,FLOATING_UPSELL_SPRING)}]};})" };
let closure_8 = { code: "(function UserProfilePremiumTryItOutUpsellTsx2(){let[isVisible]=this.__closure;const visible=isVisible.get();return{pointerEvents:visible?'box-none':'none',accessibilityElementsHidden:!visible,importantForAccessibility:visible?'auto':'no-hide-descendants'};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx");

export default function UserProfilePremiumTryItOutUpsell(isVisible) {
  isVisible = isVisible.isVisible;
  const tmp3 = closure_6(useSafeAreaInsetsDefault().bottom);
  items = [closure_7, isVisible, spring_spring.withSpring, closure_5, 60, 0.9];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class UserProfilePremiumTryItOutUpsellTsx1 {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_1;
      num = 0;
      if (value) {
        num = 1;
      }
      obj = { opacity: tmp2(num, closure_2), transform: null };
      tmp3 = closure_2;
      num2 = 0;
      if (!value) {
        num2 = closure_3;
      }
      obj1 = { translateY: tmp2(num2, tmp3) };
      items = [, ];
      items[0] = obj1;
      num3 = 1;
      if (!value) {
        num3 = closure_4;
      }
      obj4 = { scale: tmp2(num3, tmp3) };
      items[1] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  UserProfilePremiumTryItOutUpsellTsx1.__closure = items1;
  UserProfilePremiumTryItOutUpsellTsx1.__workletHash = 3911087995142;
  UserProfilePremiumTryItOutUpsellTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(UserProfilePremiumTryItOutUpsellTsx1);
  const items2 = [closure_8, isVisible];
  c0 = undefined;
  [tmp12, tmp13] = items2;
  class UserProfilePremiumTryItOutUpsellTsx2 {
    constructor() {
      value = closure_0.get();
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
  const items3 = [tmp13];
  UserProfilePremiumTryItOutUpsellTsx2.__closure = items3;
  UserProfilePremiumTryItOutUpsellTsx2.__workletHash = 15138098665436;
  UserProfilePremiumTryItOutUpsellTsx2.__initData = tmp12;
  const animatedProps = _mod1652.useAnimatedProps(UserProfilePremiumTryItOutUpsellTsx2);
  let obj2 = { animatedProps, style: null, children: null };
  const items4 = [tmp3.container, animatedStyle];
  obj2.style = items4;
  const obj3 = { style: tmp3.card, text: null, buttonText: null, onButtonPress: null, buttonVariant: "primary" };
  const tmp4Result = _mod1652;
  const intl = util.intl;
  obj3.text = intl.string(util.t["MswR/h"]);
  const intl2 = util.intl;
  obj3.buttonText = intl2.string(util.t.PxUx8e);
  obj3.onButtonPress = isVisible.onPreviewPremium;
  obj2.children = jsx(UserProfileUpsellCardV2Default, { style: tmp3.card, text: null, buttonText: null, onButtonPress: null, buttonVariant: "primary" });
  return jsx(_modDef1652.View, { animatedProps, style: null, children: null });
};