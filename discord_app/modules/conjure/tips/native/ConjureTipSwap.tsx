// discord_app/modules/conjure/tips/native/ConjureTipSwap.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
function TipFade(children) {
  _require = undefined;
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj2 = { duration: 260, easing: null };
    const Easing = _mod1652.Easing;
    obj2.easing = Easing.out(_mod1652.Easing.ease);
    const result = _undefined.set(timing_timing.withTiming(1, obj2));
    return () => c0(dependencyMap[2]).cancelAnimation(_undefined);
  }, items);
  const obj = require("../../../../../_runtime/metro/01652__.js");
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
  const style = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(ConjureTipSwapTsx1);
  return jsx(_modDef1652.View, { style, children: children.children });
}
const jsx = fn(21).jsx;
let closure_5 = { code: "(function ConjureTipSwapTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipSwap.tsx");

export default function ConjureTipSwap(presentation) {
  presentation = presentation.presentation;
  return <TipFade key={presentation}>{presentation.render(presentation)}</TipFade>;
}
