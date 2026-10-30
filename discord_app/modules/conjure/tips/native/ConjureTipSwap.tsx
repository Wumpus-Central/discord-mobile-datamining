// discord_app/modules/conjure/tips/native/ConjureTipSwap.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function TipFade(children) {
  let sharedValue;
  sharedValue = sharedValue(5090).useSharedValue(0);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj2 = { duration: 260, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj2.easing = Easing.out(ReanimatedRexport.Easing.ease);
    const result = sharedValue.set(timing.withTiming(1, obj2));
    return () => sharedValue(dependencyMap[2]).cancelAnimation(closure_1_0);
  }, items);
  const obj = sharedValue(5090);
  const fn = function u() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14074417751279;
  fn.__initData = __initData;
  const style = sharedValue(5090).useAnimatedStyle(fn);
  return jsx(ReanimatedRexportDefault.View, { style, children: children.children });
}
const jsx = fn(21).jsx;
const __initData = {
  code: "function ConjureTipSwapTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipSwap.tsx");

export default function ConjureTipSwap(presentation) {
  presentation = presentation.presentation;
  return <TipFade key={presentation}>{presentation.render(presentation)}</TipFade>;
}
