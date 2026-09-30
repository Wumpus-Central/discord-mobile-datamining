// discord_app/modules/vibegrations/native/VibegrationsAwaitingUser.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(4866);
let obj2 = { ring: null };
const rect = {
  position: "absolute",
  top: -PX_4,
  right: -PX_4,
  bottom: -PX_4,
  left: -PX_4,
  borderWidth: PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.md,
};
obj2.ring = rect;
let closure_6 = createStyles.createStyles(obj2);
const __initData = {
  code: "function VibegrationsAwaitingUserTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAwaitingUser.tsx");

export const VibegrationsAwaitingPulseRing = function VibegrationsAwaitingPulseRing() {
  const tmp = closure_6();
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = stateFromStores(504);
  const sharedValue = stateFromStores(4596).useSharedValue(0);
  const items1 = [sharedValue, stateFromStores];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      ReanimatedRexport.cancelAnimation(sharedValue);
      const result = sharedValue.set(0);
    } else {
      const obj = ReanimatedRexport;
      const obj3 = { duration: 1000, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj3.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
      const result1 = sharedValue.set(obj.withRepeat(timing.withTiming(0.35, obj3), -1, true));
      const fn = () => stateFromStores(dependencyMap[6]).cancelAnimation(sharedValue);
    }
    return fn;
  }, items1);
  let obj2 = stateFromStores(4596);
  let fn = function p() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 7009775530053;
  fn.__initData = __initData;
  const animatedStyle = stateFromStores(4596).useAnimatedStyle(fn);
  let obj4 = { pointerEvents: "none", style: null };
  const items2 = [tmp.ring, animatedStyle];
  obj4.style = items2;
  return jsx(sharedValue(4596).View, { pointerEvents: "none", style: null });
};
