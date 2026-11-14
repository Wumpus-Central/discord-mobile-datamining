// discord_app/modules/conjure/chat/native/ConjureAwaitingUser.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(5306);
let obj2 = { ring: null };
const rect = {
  position: "absolute",
  top: -PX_4,
  right: -PX_4,
  bottom: -PX_4,
  left: -PX_4,
  borderWidth: PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: fn(13211).CONJURE_NATIVE_CARD_RADIUS + PX_4,
};
obj2.ring = rect;
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = {
  code: "(function ConjureAwaitingUserTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAwaitingUser.tsx");

export function ConjureAwaitingPulseRing() {
  const tmp = closure_6();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  _require = stateFromStores;
  let obj = require("initialize");
  const sharedValue = require("../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  const items1 = [sharedValue, stateFromStores];
  const effect = noop.useEffect(() => {
    if (c0) {
      _mod1655.cancelAnimation(sharedValue);
      const result = sharedValue.set(0);
    } else {
      const obj = _mod1655;
      const obj3 = { duration: 1000, easing: null };
      const Easing = _mod1655.Easing;
      obj3.easing = Easing.inOut(_mod1655.Easing.ease);
      const result1 = sharedValue.set(obj.withRepeat(timing_timing.withTiming(0.35, obj3), -1, true));
      const fn = () => c0(dependencyMap[7]).cancelAnimation(sharedValue);
    }
    return fn;
  }, items1);
  let obj2 = require("../../../../../_runtime/metro/01655__.js");
  const items2 = [closure_7, sharedValue];
  _require = undefined;
  [tmp6, tmp7] = items2;
  class ConjureAwaitingUserTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp7];
  ConjureAwaitingUserTsx1.__closure = items3;
  ConjureAwaitingUserTsx1.__workletHash = 10338450331605;
  ConjureAwaitingUserTsx1.__initData = tmp6;
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(ConjureAwaitingUserTsx1);
  let obj4 = { pointerEvents: "none", style: null };
  const items4 = [tmp.ring, animatedStyle];
  obj4.style = items4;
  return jsx(sharedValue(1655).View, { pointerEvents: "none", style: null });
}
