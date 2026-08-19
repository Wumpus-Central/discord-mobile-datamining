// === Module 7574: FadeOutLottieAnimation ===

// Module 7574 (FadeOutLottieAnimation)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_7 = createCacheKey.createStyles({ content: { width: "100%" } });
let closure_8 = { code: "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}" };
let closure_9 = { code: "function FadeOutLottieAnimationTsx2(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished)runOnJS(setIsFadeOut)(false);}" };
const result = require("obj132").fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default function FadeOutLottieAnimation(onComplete) {
  onComplete = onComplete.onComplete;
  const merged = Object.assign(onComplete, Object.create(null));
  let first1;
  let React;
  const tmp3 = first1(React.useState(false), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = first1(React.useState(true), 2);
  first1 = tmp5[0];
  React = tmp7;
  let obj = onComplete(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = React.useEffect(() => {
    dependencyMap(false);
  }, []);
  onComplete(4115);
  class T {
    constructor() {
      if (closure_1) {
        tmp = closure_3;
        if (closure_3) {
          obj = { opacity: null };
          tmp2 = onComplete;
          tmp3 = closure_2;
          obj3 = onComplete(closure_2[7]);
          fn = function t(arg0) {
            if (arg0) {
              onComplete(closure_1_2[6]).runOnJS(closure_4)(false);
              const obj = onComplete(closure_1_2[6]);
            }
          };
          obj1 = { runOnJS: null, setIsFadeOut: null };
          obj1[0] = onComplete(closure_2[6]).runOnJS;
          tmp4 = closure_4;
          obj1[1] = closure_4;
          fn.__closure = obj1;
          num = 14133863353798;
          fn.__workletHash = 14133863353798;
          tmp5 = closure_1_9;
          fn.__initData = closure_1_9;
          str = "respect-motion-settings";
          num2 = 0;
          tmp6 = obj3;
          tmp7 = fn;
          obj[0] = obj3.withTiming(0, { duration: 300 }, "respect-motion-settings", fn);
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
  obj = { isAnimationComplete: first, isFadeOut: first1, withTiming: onComplete(4664).withTiming, runOnJS: onComplete(4115).runOnJS, setIsFadeOut: tmp7 };
  T.__closure = obj;
  T.__workletHash = 1137618554665;
  T.__initData = closure_8;
  if (!first) {
    obj = { style: null, children: null };
    obj[0] = tmp12;
    obj1 = { style: null, speed: null, onAnimationFinish: null };
    obj1[0] = tmp2.content;
    let num = 1;
    if (stateFromStores) {
      num = 0.5;
    }
    obj1[1] = num;
    obj1[2] = function onAnimationFinish(isCancelled) {
      if (onComplete != null) {
        tmp(isCancelled);
      }
      dependencyMap(true);
    };
    const merged1 = Object.assign(merged);
    obj[1] = jsx(first(7130), { style: null, speed: null, onAnimationFinish: null });
    let tmp14Result = jsx(first(4115).View, { style: null, children: null });
    const tmp16 = first(7130);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
};