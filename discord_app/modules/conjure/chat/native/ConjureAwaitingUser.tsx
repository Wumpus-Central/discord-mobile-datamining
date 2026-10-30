// === Module 12443: ConjureAwaitingUser ===

// Module 12443 (ConjureAwaitingUser)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;

require = fn;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(5009);
let obj2 = { ring: null };
const rect = { position: "absolute", top: -PX_4, right: -PX_4, bottom: -PX_4, left: -PX_4, borderWidth: PX_4, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: fn(12442).CONJURE_NATIVE_CARD_RADIUS + PX_4 };
obj2.ring = rect;
let closure_6 = createStyles.createStyles(obj2);
const __initData = { code: "function ConjureAwaitingUserTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAwaitingUser.tsx");

export function ConjureAwaitingPulseRing() {
  const tmp = closure_6();
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = stateFromStores(504);
  const sharedValue = stateFromStores(5090).useSharedValue(0);
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
      const fn = () => stateFromStores(dependencyMap[7]).cancelAnimation(sharedValue);
    }
    return fn;
  }, items1);
  let obj2 = stateFromStores(5090);
  let fn = function p() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8512415125100;
  fn.__initData = __initData;
  const animatedStyle = stateFromStores(5090).useAnimatedStyle(fn);
  let obj4 = { pointerEvents: "none", style: null };
  const items2 = [tmp.ring, animatedStyle];
  obj4.style = items2;
  return jsx(sharedValue(5090).View, { pointerEvents: "none", style: null });
}