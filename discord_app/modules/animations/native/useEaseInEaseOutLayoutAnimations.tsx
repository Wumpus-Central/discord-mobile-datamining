// === Module 7681: useEaseInEaseOutLayoutAnimations ===

// Module 7681 (useEaseInEaseOutLayoutAnimations)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1652 from "module_1652" /* 1652 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;

require = fn;
const Easing = fn(1652).Easing;
let closure_5 = Easing.inOut(fn(1652).Easing.ease);
const size = fn(2);
const result = size.fileFinishedImporting("modules/animations/native/useEaseInEaseOutLayoutAnimations.tsx");

export default function useEaseInEaseOutLayoutAnimations() {
  items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [stateFromStores];
  return noop.useMemo(() => {
    if (obj.isAndroid()) {
      return { entering: "enabled", exiting: "Array", layout: "isArray" };
    } else {
      const ReduceMotion = _mod1652.ReduceMotion;
      const tmp4 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
      const obj2 = { entering: null, exiting: null, layout: null };
      const FadeIn = _mod1652.FadeIn;
      const durationResult = FadeIn.duration(300);
      obj2.entering = FadeIn.duration(300).easing(closure_5).reduceMotion(tmp4);
      const FadeOut = _mod1652.FadeOut;
      const easingResult = FadeIn.duration(300).easing(closure_5);
      const durationResult1 = FadeOut.duration(300);
      obj2.exiting = FadeOut.duration(300).easing(closure_5).reduceMotion(tmp4);
      const LinearTransition = _mod1652.LinearTransition;
      const easingResult1 = FadeOut.duration(300).easing(closure_5);
      const durationResult2 = LinearTransition.duration(300);
      obj2.layout = LinearTransition.duration(300).easing(closure_5).reduceMotion(tmp4);
      return obj2;
    }
    obj = PlatformUtils;
  }, items1);
};
export function useTriggeredLayoutTransition() {
  items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [stateFromStores];
  let obj = stateFromStores(504);
  [tmp3, stateFromStores] = noop.useState(false);
  dependencyMap = noop.useRef(undefined);
  const effect = noop.useEffect(() => () => clearTimeout(ref.current), []);
  let layout;
  if (tmp3) {
    layout = noop.useMemo(() => {
      if (obj.isAndroid()) {
        return { entering: "enabled", exiting: "Array", layout: "isArray" };
      } else {
        const ReduceMotion = _mod1652.ReduceMotion;
        const tmp4 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
        const obj2 = { entering: null, exiting: null, layout: null };
        const FadeIn = _mod1652.FadeIn;
        const durationResult = FadeIn.duration(300);
        obj2.entering = FadeIn.duration(300).easing(closure_5).reduceMotion(tmp4);
        const FadeOut = _mod1652.FadeOut;
        const easingResult = FadeIn.duration(300).easing(closure_5);
        const durationResult1 = FadeOut.duration(300);
        obj2.exiting = FadeOut.duration(300).easing(closure_5).reduceMotion(tmp4);
        const LinearTransition = _mod1652.LinearTransition;
        const easingResult1 = FadeOut.duration(300).easing(closure_5);
        const durationResult2 = LinearTransition.duration(300);
        obj2.layout = LinearTransition.duration(300).easing(closure_5).reduceMotion(tmp4);
        return obj2;
      }
      obj = PlatformUtils;
    }, items1).layout;
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  return {
    layout,
    trigger: noop.useCallback(() => {
      stateFromStores(true);
      clearTimeout(ref.current);
      ref.current = setTimeout(() => stateFromStores(false), 400);
    }, [])
  };
}