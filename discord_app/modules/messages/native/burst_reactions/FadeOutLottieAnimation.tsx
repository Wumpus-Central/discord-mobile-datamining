// === Module 7827: FadeOutLottieAnimation ===

// Module 7827 (FadeOutLottieAnimation)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ content: { width: "100%" } });
const __initData = { code: "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}" };
const __initData2 = { code: "function FadeOutLottieAnimationTsx2(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished)runOnJS(setIsFadeOut)(false);}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default function FadeOutLottieAnimation(onComplete) {
  onComplete = onComplete.onComplete;
  const merged = Object.assign(onComplete, Object.assign({ onComplete: 0 }));
  let first1;
  setIsFadeOut = undefined;
  const tmp3 = first1(setIsFadeOut.useState(false), 2);
  const isAnimationComplete = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = first1(setIsFadeOut.useState(true), 2);
  first1 = tmp5[0];
  setIsFadeOut = tmp7;
  let obj = onComplete(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = setIsFadeOut.useEffect(() => {
    closure_2(false);
  }, []);
  onComplete(4296);
  class T {
    constructor() {
      if (closure_1) {
        tmp = closure_3;
        if (closure_3) {
          obj = { opacity: null };
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj3 = closure_0(closure_2[7]);
          fn = function t(arg0) {
            if (arg0) {
              onComplete(dependencyMap[6]).runOnJS(setIsFadeOut)(false);
              const obj = onComplete(dependencyMap[6]);
            }
          };
          obj1 = { runOnJS: null, setIsFadeOut: null };
          obj1.runOnJS = closure_0(closure_2[6]).runOnJS;
          tmp4 = closure_4;
          obj1.setIsFadeOut = closure_4;
          fn.__closure = obj1;
          num = 14133863353798;
          fn.__workletHash = 14133863353798;
          tmp5 = closure_9;
          fn.__initData = closure_9;
          str = "respect-motion-settings";
          num2 = 0;
          tmp6 = obj3;
          tmp7 = fn;
          obj.opacity = obj3.withTiming(0, { duration: 300 }, "respect-motion-settings", fn);
        } else {
          obj = { opacity: 0 };
        }
        tmp8 = obj;
      } else {
        return { opacity: 1 };
      }
      return;
    }
  }
  obj = { isAnimationComplete, isFadeOut: first1, withTiming: onComplete(4561).withTiming, runOnJS: onComplete(4296).runOnJS, setIsFadeOut: tmp7 };
  T.__closure = obj;
  T.__workletHash = 1137618554665;
  T.__initData = __initData;
  if (!isAnimationComplete) {
    obj = { style: tmp12, children: null };
    const obj1 = { style: tmp2.content, speed: null, onAnimationFinish: null };
    let num = 1;
    if (stateFromStores) {
      num = 0.5;
    }
    obj1.speed = num;
    obj1.onAnimationFinish = function onAnimationFinish(isCancelled) {
      if (onComplete != null) {
        tmp(isCancelled);
      }
      closure_2(true);
    };
    const merged1 = Object.assign(merged);
    obj.children = jsx(isAnimationComplete(5529), { style: tmp2.content, speed: null, onAnimationFinish: null });
    let tmp14Result = tmp14(isAnimationComplete(4296).View, obj);
    const tmp16 = isAnimationComplete(5529);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
};