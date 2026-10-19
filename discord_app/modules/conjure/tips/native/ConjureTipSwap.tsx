// === Module 12189: ConjureTipSwap ===

// Module 12189 (ConjureTipSwap)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5014 */;
import timing from "timing" /* 5167 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const jsx = fn(21).jsx;
fn(558);
const __initData = { code: "function ConjureTipSwapTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function ConjureTipSwapTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function TipFade(children) {
  const cResult = sharedValue(576).c(6);
  children = children.children;
  const obj = sharedValue(576);
  const tmp = sharedValue;
  sharedValue = sharedValue(5014).useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function s() {
      const obj2 = { duration: 260, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj2.easing = Easing.out(ReanimatedRexport.Easing.ease);
      const result = sharedValue.set(timing.withTiming(1, obj2));
      return () => sharedValue(dependencyMap[4]).cancelAnimation(closure_1_0);
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  let obj2 = sharedValue(5014);
  const fn2 = function f() {
    return { opacity: sharedValue.get() };
  };
  fn2.__closure = { opacity: sharedValue };
  fn2.__workletHash = 14074417751279;
  fn2.__initData = __initData;
  const animatedStyle = tmp(5014).useAnimatedStyle(fn2);
  if (cResult[3] === children) {
    if (cResult[4] === animatedStyle) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp10 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children });
  cResult[3] = children;
  cResult[4] = animatedStyle;
  cResult[5] = tmp10;
  tmp9 = tmp10;
  const tmpResult = tmp(5014);
}) : (function TipFade(children) {
  let sharedValue;
  sharedValue = sharedValue(5014).useSharedValue(0);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj2 = { duration: 260, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj2.easing = Easing.out(ReanimatedRexport.Easing.ease);
    const result = sharedValue.set(timing.withTiming(1, obj2));
    return () => sharedValue(dependencyMap[4]).cancelAnimation(closure_1_0);
  }, items);
  const obj = sharedValue(5014);
  const fn = function u() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 13445232887916;
  fn.__initData = __initData2;
  const style = sharedValue(5014).useAnimatedStyle(fn);
  return jsx(ReanimatedRexportDefault.View, { style, children: children.children });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipSwap.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipSwap(arg0) {
  const cResult = c.c(6);
  ({ presentation, render } = arg0);
  if (cResult[0] === presentation) {
    if (cResult[1] === render) {
      let tmp2 = cResult[2];
    }
    if (cResult[3] === presentation) {
      if (cResult[4] === tmp2) {
        let tmp4 = cResult[5];
      }
      return tmp4;
    }
    const obj2 = { children: tmp2 };
    const tmp7 = <closure_7 key={presentation}>{tmp2}</closure_7>;
    cResult[3] = presentation;
    cResult[4] = tmp2;
    cResult[5] = tmp7;
    tmp4 = tmp7;
  }
  const renderResult = render(presentation);
  cResult[0] = presentation;
  cResult[1] = render;
  cResult[2] = renderResult;
  tmp2 = renderResult;
}) : (function ConjureTipSwap(presentation) {
  presentation = presentation.presentation;
  return <closure_7 key={presentation}>{presentation.render(presentation)}</closure_7>;
});