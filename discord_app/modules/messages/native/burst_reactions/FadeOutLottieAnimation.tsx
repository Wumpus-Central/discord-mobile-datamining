// === Module 7941: FadeOutLottieAnimation ===

// Module 7941 (FadeOutLottieAnimation)
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["onComplete"];
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles({ content: { width: "100%" } });
const __initData = { code: "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},\"respect-motion-settings\",function(finished){if(finished){runOnJS(setIsFadeOut)(false);}})};}return{opacity:0};}" };
const __initData2 = { code: "function FadeOutLottieAnimationTsx2(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished){runOnJS(setIsFadeOut)(false);}}" };
const __initData3 = { code: "function FadeOutLottieAnimationTsx3(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}" };
let closure_13 = { code: "function FadeOutLottieAnimationTsx4(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished)runOnJS(setIsFadeOut)(false);}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FadeOutLottieAnimation(onComplete) {
  const cResult = require("c").c(17);
  if (cResult[0] !== onComplete) {
    onComplete = onComplete.onComplete;
    _require = onComplete;
    const tmp8 = _objectWithoutProperties(onComplete, first1);
    cResult[0] = onComplete;
    cResult[1] = onComplete;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_9();
  const tmp10 = setIsFadeOut(noop.useState(false), 2);
  const isAnimationComplete = tmp10[0];
  dependencyMap = tmp10[1];
  const tmp12 = setIsFadeOut(noop.useState(true), 2);
  first1 = tmp12[0];
  setIsFadeOut = tmp14;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    let fn = function y() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[3] = items;
    cResult[4] = fn;
    let tmp16 = fn;
    let tmp15 = items;
  } else {
    tmp15 = cResult[3];
    tmp16 = cResult[4];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp15, tmp16);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b() {
      closure_2(false);
    };
    const items1 = [];
    cResult[5] = fn2;
    cResult[6] = items1;
    let tmp20 = items1;
    let tmp19 = fn2;
  } else {
    tmp19 = cResult[5];
    tmp20 = cResult[6];
  }
  const effect = noop.useEffect(tmp19, tmp20);
  const tmpResult = require("initialize");
  class H {
    constructor() {
      if (closure_1) {
        tmp = closure_3;
        if (closure_3) {
          obj1 = { opacity: null };
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj3 = closure_0(closure_2[10]);
          fn = function t(arg0) {
            if (arg0) {
              closure_0(dependencyMap[9]).runOnJS(setIsFadeOut)(false);
              const obj = closure_0(dependencyMap[9]);
            }
          };
          obj5 = { runOnJS: null, setIsFadeOut: null };
          obj5.runOnJS = closure_0(closure_2[9]).runOnJS;
          tmp4 = closure_4;
          obj5.setIsFadeOut = closure_4;
          fn.__closure = obj5;
          num = 4866017627808;
          fn.__workletHash = 4866017627808;
          tmp5 = closure_11;
          fn.__initData = closure_11;
          str = "respect-motion-settings";
          num2 = 0;
          tmp6 = obj3;
          tmp7 = fn;
          obj1.opacity = obj3.withTiming(0, { duration: 300 }, "respect-motion-settings", fn);
          obj = obj1;
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
  const tmpResult2 = require("ReanimatedRexport");
  H.__closure = { isAnimationComplete, isFadeOut: first1, withTiming: require("timing").withTiming, runOnJS: require("ReanimatedRexport").runOnJS, setIsFadeOut: tmp12[1] };
  H.__workletHash = 1522072883983;
  H.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(H);
  if (isAnimationComplete) {
    if (!first1) {
      return null;
    }
  }
  let num8 = 1;
  if (stateFromStores) {
    num8 = 0.5;
  }
  if (cResult[7] !== tmp4) {
    class M {
      constructor(arg0) {
        if (closure_0 != null) {
          tmp2 = onComplete;
          tmpResult = tmp(onComplete);
        }
        tmp4 = closure_2(true);
        return;
      }
    }
    cResult[7] = tmp4;
    cResult[8] = M;
  } else {
    class M {
      constructor(arg0) {
        if (closure_0 != null) {
          tmp2 = onComplete;
          tmpResult = tmp(onComplete);
        }
        tmp4 = closure_2(true);
        return;
      }
    }
  }
  if (cResult[9] === tmp5) {
    class M {
      constructor(arg0) {
        if (closure_0 != null) {
          tmp2 = onComplete;
          tmpResult = tmp(onComplete);
        }
        tmp4 = closure_2(true);
        return;
      }
    }
  }
  let obj3 = { isAnimationComplete, isFadeOut: first1, withTiming: require("timing").withTiming, runOnJS: require("ReanimatedRexport").runOnJS, setIsFadeOut: tmp12[1] };
  let obj4 = { style: tmp9.content, speed: num8, onAnimationFinish: M };
  const merged = Object.assign(tmp5);
  const tmp25 = isAnimationComplete(6110);
  cResult[9] = tmp5;
  cResult[10] = tmp9.content;
  cResult[11] = num8;
  cResult[12] = M;
  cResult[13] = jsx(isAnimationComplete(6110), { style: tmp9.content, speed: num8, onAnimationFinish: M });
  const tmp27 = jsx(isAnimationComplete(6110), { style: tmp9.content, speed: num8, onAnimationFinish: M });
}) : (function FadeOutLottieAnimation(onComplete) {
  onComplete = onComplete.onComplete;
  const merged = Object.assign(onComplete, Object.assign({ onComplete: 0 }));
  setIsFadeOut = undefined;
  const tmp3 = setIsFadeOut(noop.useState(false), 2);
  const isAnimationComplete = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = setIsFadeOut(noop.useState(true), 2);
  const first1 = tmp5[0];
  setIsFadeOut = tmp7;
  const tmp2 = closure_9();
  const items = [AccessibilityStore];
  const stateFromStores = onComplete(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = noop.useEffect(() => {
    closure_2(false);
  }, []);
  onComplete(4810);
  let fn = function v() {
    if (first) {
      if (first1) {
        const obj2 = { opacity: null };
        const obj3 = timing;
        const fn = function t(arg0) {
          if (arg0) {
            onComplete(dependencyMap[9]).runOnJS(setIsFadeOut)(false);
            const obj = onComplete(dependencyMap[9]);
          }
        };
        const obj4 = { runOnJS: ReanimatedRexport.runOnJS, setIsFadeOut };
        fn.__closure = obj4;
        fn.__workletHash = 10887846742592;
        fn.__initData = __initData;
        obj2.opacity = obj3.withTiming(0, { duration: 300 }, "respect-motion-settings", fn);
      } else {
        let obj = { opacity: 0 };
      }
    } else {
      return { opacity: 1 };
    }
  };
  let obj = onComplete(504);
  fn.__closure = { isAnimationComplete, isFadeOut: first1, withTiming: onComplete(5091).withTiming, runOnJS: onComplete(4810).runOnJS, setIsFadeOut: tmp5[1] };
  fn.__workletHash = 7916715451819;
  fn.__initData = __initData3;
  if (!isAnimationComplete) {
    let obj3 = { style: tmp12, children: null };
    let obj4 = { style: tmp2.content, speed: null, onAnimationFinish: null };
    let num = 1;
    if (stateFromStores) {
      num = 0.5;
    }
    obj4.speed = num;
    obj4.onAnimationFinish = function onAnimationFinish(isCancelled) {
      if (onComplete != null) {
        tmp(isCancelled);
      }
      closure_2(true);
    };
    const merged1 = Object.assign(merged);
    obj3.children = jsx(isAnimationComplete(6110), { style: tmp2.content, speed: null, onAnimationFinish: null });
    let tmp14Result = jsx(isAnimationComplete(4810).View, { style: tmp12, children: null });
    const tmp16 = isAnimationComplete(6110);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
});