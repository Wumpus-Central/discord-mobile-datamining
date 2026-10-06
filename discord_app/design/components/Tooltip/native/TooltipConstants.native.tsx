// discord_app/design/components/Tooltip/native/TooltipConstants.native.tsx
import spring from "../../../animation/reanimated/spring/spring.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const TOOLTIP_SPRING = {
  overshootClamping: true,
  damping: 35,
  stiffness: 450,
  mass: 0.5,
  restDisplacementThreshold: 0.001,
};
const __initData = {
  code: "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}",
};
const result = size.fileFinishedImporting("design/components/Tooltip/native/TooltipConstants.native.tsx");

export const tooltipEnterExitAnimation = function tooltipEnterExitAnimation(position) {
  let num = -8;
  if ("top" === position) {
    num = 8;
  }
  const fn = function o(targetHeight, fn) {
    let items;
    let tmpResult;
    const withSpring = spring.withSpring;
    const obj = {
      transform: items,
      opacity: tmpResult.withSpring(targetHeight, TOOLTIP_SPRING, "respect-motion-settings", fn),
    };
    spring;
    items = [{ translateY: withSpring(0, TOOLTIP_SPRING, "respect-motion-settings", fn) }];
    ({ translateY: withSpring(0, TOOLTIP_SPRING, "respect-motion-settings", fn) });
    tmpResult = spring;
    return obj;
  };
  let obj = { withSpring: num(5604).withSpring, translateY: num, TOOLTIP_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 7727487832145;
  fn.__initData = __initData;
  return fn;
};
