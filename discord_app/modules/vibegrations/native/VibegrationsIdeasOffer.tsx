// === Module 16626: VibegrationsIdeasOffer ===

// Module 16626 (VibegrationsIdeasOffer)
import timing from "timing" /* 4846 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4834 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const __initData = { code: "function VibegrationsIdeasOfferTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsIdeasOffer.tsx");

export default function VibegrationsIdeasOffer(onAsk) {
  onAsk = onAsk.onAsk;
  let stateFromStores;
  let sharedValue;
  ({ style, attribution } = onAsk);
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = stateFromStores(504);
  let num = 0;
  if (stateFromStores) {
    num = 1;
  }
  sharedValue = stateFromStores(4595).useSharedValue(num);
  const items1 = [sharedValue, stateFromStores];
  const effect = noop.useEffect(() => {
    let num = 1;
    if (!stateFromStores) {
      num = timing.withTiming(1, { duration: 180 });
    }
    const result = sharedValue.set(num);
    return () => stateFromStores(dependencyMap[4]).cancelAnimation(sharedValue);
  }, items1);
  const obj2 = stateFromStores(4595);
  const fn = function b() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14150175995676;
  fn.__initData = __initData;
  const animatedStyle = stateFromStores(4595).useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items2 = [style, animatedStyle];
  obj3.style = items2;
  const items3 = [attribution, , ];
  const obj4 = { source: null };
  const tmpResult = stateFromStores(4595);
  const intl = tmp(1115).intl;
  obj4.source = intl.string(sharedValue(3714).tG5PBo);
  items3[1] = closure_5(sharedValue(16576), obj4);
  const obj5 = { direction: "horizontal", children: null };
  const obj6 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = tmp(1115).intl;
  obj6.text = intl2.string(sharedValue(3714).cwTe5o);
  obj5.children = closure_5(stateFromStores(5465).Button, obj6);
  items3[2] = closure_5(stateFromStores(5463).Stack, obj5);
  obj3.children = items3;
  return closure_6(sharedValue(4595).View, obj3);
};