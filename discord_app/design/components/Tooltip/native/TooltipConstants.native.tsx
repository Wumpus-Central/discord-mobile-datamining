// === Module 9274: tooltipEnterExitAnimation ===

// Module 9274 (tooltipEnterExitAnimation)
import obj132 from "obj132" /* 2 */;

let closure_2 = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let closure_3 = { code: "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}" };
const result = obj132.fileFinishedImporting("design/components/Tooltip/native/TooltipConstants.native.tsx");

export const tooltipEnterExitAnimation = function tooltipEnterExitAnimation(position) {
  let num = -8;
  if ("top" === position) {
    num = 8;
  }
  const fn = function o(value, fn2) {
    num(dependencyMap[0]);
    let obj = { transform: null, opacity: null };
    obj = { translateY: obj.withSpring(num, closure_1_2, "respect-motion-settings", fn2) };
    const items = [obj];
    obj[0] = items;
    obj[1] = 0(dependencyMap[0]).withSpring(value, closure_1_2, "respect-motion-settings", fn2);
    return obj;
  };
  fn.__closure = { withSpring: num(4744).withSpring, translateY: num, TOOLTIP_SPRING: closure_2 };
  fn.__workletHash = 7727487832145;
  fn.__initData = closure_3;
  return fn;
};