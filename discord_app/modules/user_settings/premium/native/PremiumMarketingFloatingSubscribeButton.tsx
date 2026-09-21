// === Module 13760: PremiumMarketingFloatingSubscribeButton ===

// Module 13760 (PremiumMarketingFloatingSubscribeButton)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import timing from "timing" /* 4757 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 1 }, gradient: { position: "absolute", left: 0, right: 0, bottom: 0, top: -64 }, buttonContainer: { marginLeft: "auto", marginRight: "auto", width: "100%", paddingHorizontal: 12, paddingTop: nativeDefault.space.PX_12 } };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function PremiumMarketingFloatingSubscribeButtonTsx1(){const{withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX}=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};}" };
const __initData2 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx2(){const{isVisible}=this.__closure;return{pointerEvents:isVisible.get()?'box-none':'none',accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?'auto':'no-hide-descendants'};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx");

export default function PremiumMarketingFloatingSubscribeButton(isVisible) {
  isVisible = isVisible.isVisible;
  const backgroundColor = isVisible.backgroundColor;
  let stateFromStores;
  const tmp = closure_9();
  let items = [AccessibilityStore];
  stateFromStores = isVisible(stateFromStores[8]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = isVisible(stateFromStores[8]);
  const tmp3 = backgroundColor(stateFromStores[9]);
  const items1 = [backgroundColor];
  ({ openPayment, buttonText } = backgroundColor(stateFromStores[9])(backgroundColor(stateFromStores[10]).PREMIUM_MARKETING_FLOATING_CTA));
  const memo = noop.useMemo(() => {
    const obj = _modDef672(backgroundColor);
    const items = [_modDef672(backgroundColor).alpha(0).hex(), backgroundColor, backgroundColor];
    return items;
  }, items1);
  const tmp3Result = backgroundColor(stateFromStores[9])(backgroundColor(stateFromStores[10]).PREMIUM_MARKETING_FLOATING_CTA);
  class A {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[13]);
      obj2 = isVisible;
      num = 0;
      if (isVisible.get()) {
        num = 1;
      }
      num2 = 150;
      num3 = 150;
      tmp3 = closure_2;
      if (closure_2) {
        num3 = 0;
      }
      obj1 = { opacity: obj.withTiming(num, { duration: num3 }), transform: null };
      tmpResult = tmp(tmp2[13]);
      num4 = 12;
      if (obj2.get()) {
        num4 = 0;
      }
      if (tmp3) {
        num2 = 0;
      }
      obj6 = { translateY: tmpResult.withTiming(num4, { duration: num2 }) };
      items = [];
      items[0] = obj6;
      obj1.transform = items;
      return obj1;
    }
  }
  let obj2 = isVisible(stateFromStores[12]);
  A.__closure = { withTiming: isVisible(stateFromStores[13]).withTiming, isVisible, useReducedMotion: stateFromStores, FADE_DURATION_MS: 150, ENTER_TRANSLATE_PX: 12 };
  A.__workletHash = 4035217753570;
  A.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(A);
  let obj3 = { withTiming: isVisible(stateFromStores[13]).withTiming, isVisible, useReducedMotion: stateFromStores, FADE_DURATION_MS: 150, ENTER_TRANSLATE_PX: 12 };
  class E {
    constructor() {
      obj = isVisible;
      str = "none";
      if (isVisible.get()) {
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
  E.__closure = { isVisible };
  E.__workletHash = 14964730036713;
  E.__initData = __initData2;
  const animatedProps = isVisible(stateFromStores[12]).useAnimatedProps(E);
  const obj5 = { animatedProps, style: null, children: null };
  const items2 = [tmp.container, animatedStyle];
  obj5.style = items2;
  const items3 = [closure_7(backgroundColor(stateFromStores[14]), { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [0, 0.75, 1], start: VerticalGradient.START, end: VerticalGradient.END }), ];
  const obj7 = { style: null, children: null };
  const items4 = [tmp.buttonContainer, , ];
  const obj4 = isVisible(stateFromStores[12]);
  const obj6 = { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [0, 0.75, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  items4[1] = { paddingBottom: Math.max(backgroundColor(stateFromStores[7])().bottom, backgroundColor(stateFromStores[6]).space.PX_16) };
  items4[2] = isVisible.style;
  obj7.style = items4;
  obj7.children = closure_7(backgroundColor(stateFromStores[15]), { onPress: openPayment, text: buttonText });
  items3[1] = closure_7(View, obj7);
  obj5.children = items3;
  return closure_8(backgroundColor(stateFromStores[12]).View, obj5);
};