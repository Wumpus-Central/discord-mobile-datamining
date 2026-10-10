// === Module 9447: TooltipConstants ===

// Module 9447 (TooltipConstants)
import spring from "spring" /* 5378 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const TOOLTIP_SPRING = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
const __initData = { code: "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translate,TOOLTIP_SPRING,isHorizontal}=this.__closure;const offset=withSpring(visible===1?0:translate,TOOLTIP_SPRING,'respect-motion-settings',cleanUp);return{transform:isHorizontal?[{translateX:offset}]:[{translateY:offset}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}" };
const result = size.fileFinishedImporting("design/components/Tooltip/native/TooltipConstants.native.tsx");

export const tooltipEnterExitAnimation = function tooltipEnterExitAnimation(position) {
  let tmp2 = tmp;
  if ("left" !== position) {
    tmp2 = "right" === position;
  }
  _require = tmp2;
  if ("top" === position) {
    let num = 8;
  } else {
    num = -8;
  }
  const fn = function o(value, fn) {
    const withSpringResult = spring.withSpring(0, closure_2, "respect-motion-settings", fn);
    if (closure_0) {
      const obj2 = { translateX: withSpringResult };
      const items = [obj2];
      let items1 = items;
    } else {
      const obj3 = { translateY: withSpringResult };
      items1 = [obj3];
    }
    const obj4 = { transform: items1, opacity: null };
    obj4.opacity = spring.withSpring(value, closure_2, "respect-motion-settings", fn);
    return obj4;
  };
  fn.__closure = { withSpring: require("spring").withSpring, translate: num, TOOLTIP_SPRING, isHorizontal: tmp2 };
  fn.__workletHash = 12524569976242;
  fn.__initData = __initData;
  return fn;
};