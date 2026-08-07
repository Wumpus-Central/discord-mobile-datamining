// discord_app/modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ content: { width: "100%" } });
let closure_8 = { code: "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}" };
let closure_9 = { code: "function FadeOutLottieAnimationTsx2(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished)runOnJS(setIsFadeOut)(false);}" };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default function FadeOutLottieAnimation(onComplete) {
  onComplete = onComplete.onComplete;
  const merged = Object.assign(onComplete, Object.create(null));
  let first;
  let dependencyMap;
  let first1;
  let React;
  const tmp3 = first1(React.useState(false), 2);
  first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = first1(React.useState(true), 2);
  first1 = tmp5[0];
  React = tmp7;
  let obj = onComplete(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = React.useEffect(() => {
    dependencyMap(false);
  }, []);
  onComplete(4162);
  class T {
    constructor() {
      if (c1) {
        tmp = useState;
        if (useState) {
          obj = { opacity: null };
          tmp2 = onComplete;
          tmp3 = useState;
          obj3 = onComplete(useState[7]);
          fn = function t(arg0) {
            if (arg0) {
              outer1_0(outer1_2[6]).runOnJS(noop)(false);
              const obj = outer1_0(outer1_2[6]);
            }
          };
          obj1 = { runOnJS: null, setIsFadeOut: null };
          obj1[0] = onComplete(useState[6]).runOnJS;
          tmp4 = c4;
          obj1[1] = c4;
          fn.__closure = obj1;
          num = 14133863353798;
          fn.__workletHash = 14133863353798;
          tmp5 = outer1_9;
          fn.__initData = outer1_9;
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
  obj = { isAnimationComplete: first, isFadeOut: first1, withTiming: onComplete(4303).withTiming, runOnJS: onComplete(4162).runOnJS, setIsFadeOut: tmp7 };
  T.__closure = obj;
  T.__workletHash = 1137618554665;
  T.__initData = closure_8;
  if (!first) {
    obj = { style: null, children: null };
    obj[0] = tmp12;
    const obj1 = { style: null, speed: null, onAnimationFinish: null };
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
    obj[1] = jsx(first(5659), { style: null, speed: null, onAnimationFinish: null });
    let tmp14Result = tmp14(first(4162).View, obj);
    const tmp16 = first(5659);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
};