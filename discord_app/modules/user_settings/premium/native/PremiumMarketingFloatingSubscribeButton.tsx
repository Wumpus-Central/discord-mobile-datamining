// === Module 12639: PremiumMarketingFloatingSubscribeButton ===

// Module 12639 (PremiumMarketingFloatingSubscribeButton)
import noop from "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 1 }, gradient: { position: "absolute", left: 0, right: 0, bottom: 0, top: -64 }, buttonContainer: null };
createCacheKey = { marginLeft: "auto", marginRight: "auto", width: "100%", paddingHorizontal: 12, paddingTop: require("Themes").space.PX_12 };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx1(){const{withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX}=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};}" };
let closure_11 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx2(){const{isVisible}=this.__closure;return{pointerEvents:isVisible.get()?'box-none':'none',accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?'auto':'no-hide-descendants'};}" };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx");

export default function PremiumMarketingFloatingSubscribeButton(isVisible) {
  let buttonText;
  let openPayment;
  isVisible = isVisible.isVisible;
  const backgroundColor = isVisible.backgroundColor;
  let stateFromStores;
  const tmp = createCacheKey();
  let obj = isVisible(stateFromStores[8]);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp3 = backgroundColor(stateFromStores[9]);
  const items1 = [backgroundColor];
  ({ openPayment, buttonText } = backgroundColor(stateFromStores[9])(backgroundColor(stateFromStores[10]).PREMIUM_MARKETING_FLOATING_CTA));
  const memo = React.useMemo(() => {
    const obj = backgroundColor(stateFromStores[11])(backgroundColor);
    const items = [backgroundColor(stateFromStores[11])(backgroundColor).alpha(0).hex(), backgroundColor, backgroundColor];
    return items;
  }, items1);
  let obj1 = isVisible(stateFromStores[12]);
  class A {
    constructor() {
      tmp = isVisible;
      tmp2 = c2;
      obj = isVisible(c2[13]);
      obj2 = isVisible;
      num = 0;
      if (isVisible.get()) {
        num = 1;
      }
      num2 = 150;
      num3 = 150;
      tmp3 = c2;
      if (c2) {
        num3 = 0;
      }
      obj = { opacity: obj.withTiming(num, { duration: num3 }), transform: null };
      tmpResult = tmp(tmp2[13]);
      num4 = 12;
      if (obj2.get()) {
        num4 = 0;
      }
      if (tmp3) {
        num2 = 0;
      }
      obj1 = { translateY: tmpResult.withTiming(num4, { duration: num2 }) };
      items = [];
      items[0] = obj1;
      obj[1] = items;
      return obj;
    }
  }
  obj = { withTiming: isVisible(stateFromStores[13]).withTiming, isVisible, useReducedMotion: stateFromStores, FADE_DURATION_MS: 150, ENTER_TRANSLATE_PX: 12 };
  A.__closure = obj;
  A.__workletHash = 4035217753570;
  A.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(A);
  let obj3 = isVisible(stateFromStores[12]);
  class E {
    constructor() {
      obj = isVisible;
      str = "none";
      if (isVisible.get()) {
        str = "box-none";
      }
      obj = { pointerEvents: str, accessibilityElementsHidden: !obj.get(), importantForAccessibility: null };
      str2 = "no-hide-descendants";
      if (obj.get()) {
        str2 = "auto";
      }
      obj[2] = str2;
      return obj;
    }
  }
  E.__closure = { isVisible };
  E.__workletHash = 14964730036713;
  E.__initData = closure_11;
  const animatedProps = obj3.useAnimatedProps(E);
  obj = { animatedProps, style: items2, children: null };
  items2 = [tmp.container, animatedStyle];
  obj1 = { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [0, 0.75, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  const items3 = [callback(backgroundColor(stateFromStores[14]), obj1), ];
  const obj2 = { style: null, children: null };
  const items4 = [tmp.buttonContainer, , ];
  obj3 = { paddingBottom: Math.max(backgroundColor(stateFromStores[7])().bottom, backgroundColor(stateFromStores[6]).space.PX_16) };
  items4[1] = obj3;
  items4[2] = isVisible.style;
  obj2[0] = items4;
  obj2[1] = callback(backgroundColor(stateFromStores[15]), { onPress: openPayment, text: buttonText });
  items3[1] = callback(View, obj2);
  obj[2] = items3;
  return callback2(backgroundColor(stateFromStores[12]).View, obj);
};