// === Module 7466: FadeOutLottieAnimation ===

// Module 7466 (FadeOutLottieAnimation)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, num2, obj1, obj5, obj6, onComplete, str, tmp4, tmp6, tmp7;

let closure_3 = ["onComplete"];
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ content: { width: "100%" } });
const __initData = { code: "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},\"respect-motion-settings\",function(finished){if(finished){runOnJS(setIsFadeOut)(false);}})};}return{opacity:0};}" };
const __initData2 = { code: "function FadeOutLottieAnimationTsx2(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished){runOnJS(setIsFadeOut)(false);}}" };
const __initData3 = { code: "function FadeOutLottieAnimationTsx3(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}" };
let closure_13 = { code: "function FadeOutLottieAnimationTsx4(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished)runOnJS(setIsFadeOut)(false);}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onComplete) => {
  let closure_0;
  let closure_2;
  let first1;
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp5;
  let useReducedMotion;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] !== onComplete) {
    onComplete = onComplete.onComplete;
    _require = onComplete;
    const tmp8 = _objectWithoutProperties(onComplete, first1);
    cResult[0] = onComplete;
    cResult[1] = onComplete;
    cResult[2] = tmp8;
    tmp5 = tmp8;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_9();
  const tmp10 = setIsFadeOut(react.useState(false), 2);
  const isAnimationComplete = tmp10[0];
  dependencyMap = tmp10[1];
  first1 = setIsFadeOut(react.useState(true), 2)[0];
  const tmp12 = setIsFadeOut(react.useState(true), 2);
  setIsFadeOut = tmp14;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    let fn = function y() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[3] = items;
    cResult[4] = fn;
    tmp16 = fn;
    tmp15 = items;
  } else {
    tmp15 = cResult[3];
    tmp16 = cResult[4];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp15, tmp16);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        closure_2(false);
      }
    }
    const items1 = [];
    cResult[5] = L;
    cResult[6] = items1;
    tmp20 = items1;
  } else {
    class L {
      constructor() {
        closure_2(false);
      }
    }
    tmp20 = cResult[6];
  }
  const effect = react.useEffect(L, tmp20);
  const tmpResult2 = tmp(4618);
  class H {
    constructor() {
      tmp = closure_1;
      if (tmp) {
        tmp2 = closure_3;
        if (tmp2) {
          obj1 = { opacity: null };
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp5 = closure_0(closure_2[10]);
          fn = function t(arg0) {
            const tmp = arg0;
            if (tmp) {
              const obj = closure_0(closure_2[9]);
              obj.runOnJS(setIsFadeOut)(false);
            }
          };
          obj5 = { runOnJS: null, setIsFadeOut: null };
          withTiming = tmp5.withTiming;
          obj5.runOnJS = closure_0(closure_2[9]).runOnJS;
          tmp6 = closure_4;
          obj5.setIsFadeOut = closure_4;
          fn.__closure = obj5;
          num = 4866017627808;
          fn.__workletHash = 4866017627808;
          tmp7 = closure_11;
          fn.__initData = closure_11;
          str = "respect-motion-settings";
          num2 = 0;
          tmp8 = tmp5;
          tmp9 = fn;
          obj1.opacity = withTiming(0, { duration: 300 }, "respect-motion-settings", fn);
          obj6 = obj1;
        } else {
          obj6 = { opacity: 0 };
        }
        obj = obj6;
      } else {
        obj = { opacity: 1 };
      }
      return obj;
    }
  }
  let obj3 = { isAnimationComplete, isFadeOut: first1, withTiming: tmp(4897).withTiming, runOnJS: tmp(4618).runOnJS, setIsFadeOut: tmp14 };
  H.__closure = obj3;
  H.__workletHash = 1522072883983;
  H.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(H);
  if (isAnimationComplete) {
    class L {
      constructor() {
        closure_2(false);
      }
    }
  }
  if (stateFromStores) {
    class L {
      constructor() {
        closure_2(false);
      }
    }
  }
  if (cResult[7] !== tmp4) {
    class M {
      constructor(arg0) {
        if (closure_0 != null) {
          tmp(arg0);
        }
        closure_2(true);
      }
    }
    cResult[7] = tmp4;
    cResult[8] = M;
  } else {
    class M {
      constructor(arg0) {
        if (closure_0 != null) {
          tmp(arg0);
        }
        closure_2(true);
      }
    }
  }
  if (cResult[9] === tmp5) {
    class M {
      constructor(arg0) {
        if (closure_0 != null) {
          tmp(arg0);
        }
        closure_2(true);
      }
    }
  }
  let obj4 = { style: tmp9.content, speed: num8, onAnimationFinish: M };
  isAnimationComplete(5927);
  const merged = Object.assign(tmp5);
  cResult[9] = tmp5;
  cResult[10] = tmp9.content;
  cResult[11] = 1;
  cResult[12] = M;
  cResult[13] = <tmp24 style={tmp9.content} speed={num8} onAnimationFinish={M} />;
}) : ((onComplete) => {
  let closure_2;
  let num;
  let tmp14Result;
  let useReducedMotion;
  onComplete = onComplete.onComplete;
  const merged = Object.assign(onComplete, Object.assign({ onComplete: 0 }));
  setIsFadeOut = undefined;
  const tmp2 = closure_9();
  const tmp3 = setIsFadeOut(react.useState(false), 2);
  const isAnimationComplete = tmp3[0];
  dependencyMap = tmp3[1];
  let tmp5 = setIsFadeOut(react.useState(true), 2);
  const first1 = tmp5[0];
  setIsFadeOut = tmp7;
  let obj = onComplete(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = react.useEffect(() => {
    closure_2(false);
  }, []);
  onComplete(4618);
  let fn = function v() {
    let fn;
    let obj;
    let withTiming;
    if (first) {
      let obj4;
      if (first1) {
        const obj2 = { opacity: withTiming(0, { duration: 300 }, "respect-motion-settings", fn) };
        fn = function t(arg0) {
          const tmp = arg0;
          if (tmp) {
            const obj = onComplete(closure_2[9]);
            obj.runOnJS(setIsFadeOut)(false);
          }
        };
        const tmp5 = timing;
        withTiming = tmp5.withTiming;
        fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsFadeOut };
        fn.__workletHash = 10887846742592;
        fn.__initData = __initData;
        obj4 = obj2;
        const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setIsFadeOut };
      } else {
        obj4 = { opacity: 0 };
      }
      obj = obj4;
    } else {
      obj = { opacity: 1 };
    }
    return obj;
  };
  let obj2 = { isAnimationComplete, isFadeOut: first1, withTiming: onComplete(4897).withTiming, runOnJS: onComplete(4618).runOnJS, setIsFadeOut: tmp7 };
  fn.__closure = obj2;
  fn.__workletHash = 7916715451819;
  fn.__initData = __initData3;
  if (!isAnimationComplete) {
    const View = isAnimationComplete(4618).View;
    let obj4 = {
      style: tmp2.content,
      speed: num,
      onAnimationFinish(isCancelled) {
          if (onComplete != null) {
            tmp(isCancelled);
          }
          closure_2(true);
        }
    };
    num = 1;
    isAnimationComplete(5927);
    if (stateFromStores) {
      num = 0.5;
    }
    const merged1 = Object.assign(merged);
    tmp14Result = <View style={tmp12}>{null}</View>;
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
});
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default tmp2;