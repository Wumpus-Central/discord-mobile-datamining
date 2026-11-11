// === Module 13520: ConjureTipSwap ===

// Module 13520 (ConjureTipSwap)
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
function TipFade(children) {
  _require = undefined;
  const sharedValue = require("module_1652").useSharedValue(0);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj2 = { duration: 260, easing: null };
    const Easing = _mod1652.Easing;
    obj2.easing = Easing.out(_mod1652.Easing.ease);
    const result = _undefined.set(timing_timing.withTiming(1, obj2));
    return () => c0(dependencyMap[2]).cancelAnimation(_undefined);
  }, items);
  const obj = require("module_1652");
  const items1 = [closure_5, sharedValue];
  _require = undefined;
  [tmp4, tmp5] = items1;
  class ConjureTipSwapTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp5];
  ConjureTipSwapTsx1.__closure = items2;
  ConjureTipSwapTsx1.__workletHash = 17472917410134;
  ConjureTipSwapTsx1.__initData = tmp4;
  const style = require("module_1652").useAnimatedStyle(ConjureTipSwapTsx1);
  return jsx(_modDef1652.View, { style, children: children.children });
}
const jsx = fn(21).jsx;
let closure_5 = { code: "(function ConjureTipSwapTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipSwap.tsx");

export default function ConjureTipSwap(presentation) {
  presentation = presentation.presentation;
  return <TipFade key={presentation}>{presentation.render(presentation)}</TipFade>;
};