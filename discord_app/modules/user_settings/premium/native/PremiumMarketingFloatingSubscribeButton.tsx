// === Module 15611: PremiumMarketingFloatingSubscribeButton ===

// Module 15611 (PremiumMarketingFloatingSubscribeButton)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5723 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10468 */;
import useOpenPremiumMarketingPaymentDefault from "useOpenPremiumMarketingPayment" /* 15609 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { container: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 1 }, gradient: { position: "absolute", left: 0, right: 0, bottom: 0, top: -64 }, buttonContainer: { marginLeft: "auto", marginRight: "auto", width: "100%", paddingHorizontal: 12, paddingTop: nativeDefault.space.PX_12 } };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { code: "(function PremiumMarketingFloatingSubscribeButtonTsx1(){let[withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX]=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};})" };
let closure_11 = { code: "(function PremiumMarketingFloatingSubscribeButtonTsx2(){let[isVisible]=this.__closure;return{pointerEvents:isVisible.get()?'box-none':'none',accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?'auto':'no-hide-descendants'};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx");

export default function PremiumMarketingFloatingSubscribeButton(style) {
  ({ isVisible, backgroundColor } = style);
  _require = backgroundColor;
  const tmp = closure_9();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  const tmp4 = _require;
  const items1 = [backgroundColor];
  ({ openPayment, buttonText } = useOpenPremiumMarketingPaymentDefault(AnalyticsLocationDefault.PREMIUM_MARKETING_FLOATING_CTA));
  const memo = noop.useMemo(() => {
    const obj = _modDef671(c0);
    items = [_modDef671(c0).alpha(0).hex(), c0, c0];
    return items;
  }, items1);
  const tmp6Result = useOpenPremiumMarketingPaymentDefault(AnalyticsLocationDefault.PREMIUM_MARKETING_FLOATING_CTA);
  const items2 = [closure_10, require("timing/timing").withTiming, isVisible, stateFromStores, 150, 12];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class PremiumMarketingFloatingSubscribeButtonTsx1 {
    constructor() {
      tmp = closure_0;
      obj = closure_1;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      num2 = 0;
      tmp2 = closure_2;
      if (!closure_2) {
        num2 = closure_3;
      }
      obj1 = { opacity: tmp(num, { duration: num2 }), transform: null };
      num3 = 0;
      if (!obj.get()) {
        num3 = closure_4;
      }
      num4 = 0;
      if (!tmp2) {
        num4 = closure_3;
      }
      obj4 = { translateY: tmp(num3, { duration: num4 }) };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  PremiumMarketingFloatingSubscribeButtonTsx1.__closure = items3;
  PremiumMarketingFloatingSubscribeButtonTsx1.__workletHash = 2100931871963;
  PremiumMarketingFloatingSubscribeButtonTsx1.__initData = tmp9;
  const animatedStyle = require("module_1652").useAnimatedStyle(PremiumMarketingFloatingSubscribeButtonTsx1);
  let obj2 = require("module_1652");
  const items4 = [closure_11, isVisible];
  _require = undefined;
  [tmp16, tmp17] = items4;
  class PremiumMarketingFloatingSubscribeButtonTsx2 {
    constructor() {
      obj = closure_0;
      str = "none";
      if (closure_0.get()) {
        str = "box-none";
      }
      obj1 = { pointerEvents: str, accessibilityElementsHidden: !obj.get(), importantForAccessibility: null };
      str2 = "no-hide-descendants";
      if (obj.get()) {
        str2 = "auto";
      }
      obj1.importantForAccessibility = str2;
      return obj1;
    }
  }
  const items5 = [tmp17];
  PremiumMarketingFloatingSubscribeButtonTsx2.__closure = items5;
  PremiumMarketingFloatingSubscribeButtonTsx2.__workletHash = 4354740509872;
  PremiumMarketingFloatingSubscribeButtonTsx2.__initData = tmp16;
  const animatedProps = tmp4(1652).useAnimatedProps(PremiumMarketingFloatingSubscribeButtonTsx2);
  const obj3 = { animatedProps, style: null, children: null };
  const items6 = [tmp.container, animatedStyle];
  obj3.style = items6;
  const items7 = [closure_7(LinearGradientDefault, { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [0, 0.75, 1], start: VerticalGradient.START, end: VerticalGradient.END }), ];
  const obj5 = { style: null, children: null };
  const items8 = [tmp.buttonContainer, , ];
  const obj4 = { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [0, 0.75, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  const tmp4Result = tmp4(1652);
  items8[1] = { paddingBottom: Math.max(useSafeAreaInsetsDefault().bottom, nativeDefault.space.PX_16) };
  items8[2] = style.style;
  obj5.style = items8;
  obj5.children = closure_7(NitroUpsellButtonDefault, { onPress: openPayment, text: buttonText });
  items7[1] = closure_7(c4, obj5);
  obj3.children = items7;
  return closure_8(_modDef1652.View, obj3);
};