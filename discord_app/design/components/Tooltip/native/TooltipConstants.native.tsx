// === Module 11132: TooltipConstants ===

// Module 11132 (TooltipConstants)
import spring from "spring" /* 4974 */;
import size from "module_2" /* 2 */;

const TOOLTIP_SPRING = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
const __initData = { code: "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}" };
const result = size.fileFinishedImporting("design/components/Tooltip/native/TooltipConstants.native.tsx");

export const tooltipEnterExitAnimation = function tooltipEnterExitAnimation(position) {
  let num = -8;
  if ("top" === position) {
    num = 8;
  }
  const fn = function o(value, fn) {
    let obj = { transform: null, opacity: null };
    obj = { translateY: obj.withSpring(num, closure_2, "respect-motion-settings", fn) };
    const items = [obj];
    obj.transform = items;
    obj.opacity = spring.withSpring(value, closure_2, "respect-motion-settings", fn);
    return obj;
  };
  fn.__closure = { withSpring: num(4974).withSpring, translateY: num, TOOLTIP_SPRING };
  fn.__workletHash = 7727487832145;
  fn.__initData = __initData;
  return fn;
};