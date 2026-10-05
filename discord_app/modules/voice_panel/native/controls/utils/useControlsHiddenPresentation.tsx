// === Module 17321: useControlsHiddenPresentation ===

// Module 17321 (useControlsHiddenPresentation)
import spring from "spring" /* 5597 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, tmp2;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let obj = { overshootClamping: true };
const merged = Object.assign(VoicePanelConstants.MODE_CHANGE_PHYSICS);
const __initData = { code: "function useControlsHiddenPresentationTsx1(){const{yeeted,mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:yeeted||mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?\"none\":\"auto\"};}" };
const __initData2 = { code: "function useControlsHiddenPresentationTsx2(){const{withSpring,yeeted,wrapperSpecs,HIDDEN_OPACITY_PHYSICS,cleanUp,runOnJS}=this.__closure;return{opacity:withSpring(yeeted||wrapperSpecs.get().hidden?0:1,HIDDEN_OPACITY_PHYSICS,\"respect-motion-settings\",cleanUp!=null?function(finished){if(finished&&yeeted){runOnJS(cleanUp)();}}:undefined)};}" };
const __initData3 = { code: "function useControlsHiddenPresentationTsx3(){const{yeeted,mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:yeeted||mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};}" };
const __initData4 = { code: "function useControlsHiddenPresentationTsx4(){const{withSpring,yeeted,wrapperSpecs,HIDDEN_OPACITY_PHYSICS,cleanUp,runOnJS}=this.__closure;return{opacity:withSpring(yeeted||wrapperSpecs.get().hidden?0:1,HIDDEN_OPACITY_PHYSICS,'respect-motion-settings',cleanUp!=null?function(finished){if(finished&&yeeted){runOnJS(cleanUp)();}}:undefined)};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode, wrapperSpecs, arg2) => {
  let closure_3;
  _require = mode;
  dependencyMap = wrapperSpecs;
  let obj = arg2;
  let tmp = _require;
  const obj2 = require("react");
  const cResult = obj2.c(3);
  if (undefined === arg2) {
    obj = {};
  }
  const cleanUp = obj.cleanUp;
  const tmp4 = obj.state === tmp(4589).TransitionStates.YEETED;
  HIDDEN_OPACITY_PHYSICS = tmp4;
  let fn = function l() {
    if (!closure_3) {
      let str;
      if (mode.get() === VoicePanelModes.PANEL) {
        str = "auto";
      }
      return { pointerEvents: str };
    }
    str = "none";
  };
  const obj3 = { yeeted: tmp4, mode, VoicePanelModes: cleanUp, wrapperSpecs };
  fn.__closure = obj3;
  fn.__workletHash = 9921694756227;
  fn.__initData = __initData;
  const tmpResult = tmp(4612);
  const animatedProps = tmpResult.useAnimatedProps(fn);
  const tmpResult2 = tmp(4612);
  class S {
    constructor() {
      tmp = closure_0(closure_1[5]);
      withSpring = tmp.withSpring;
      if (closure_3) {
        num = 0;
      } else {
        tmp2 = closure_1;
        num = 1;
      }
      tmp3 = closure_3;
      fn = undefined;
      if (null != cleanUp) {
        fn = (arg0) => {
          const tmp = arg0 && closure_1_3;
          if (tmp) {
            const obj = mode(wrapperSpecs[4]);
            obj.runOnJS(cleanUp)();
          }
        };
      }
      obj = { opacity: withSpring(num, tmp3, "respect-motion-settings", fn) };
      return obj;
    }
  }
  S.__closure = { withSpring: tmp(5597).withSpring, yeeted: tmp4, wrapperSpecs, HIDDEN_OPACITY_PHYSICS, cleanUp, runOnJS: tmp(4612).runOnJS };
  S.__workletHash = 6139998685483;
  S.__initData = __initData2;
  ({ withSpring: tmp(5597).withSpring, yeeted: tmp4, wrapperSpecs, HIDDEN_OPACITY_PHYSICS, cleanUp, runOnJS: tmp(4612).runOnJS });
  const animatedStyle = tmpResult2.useAnimatedStyle(S);
  if (cResult[0] === animatedProps) {
    let tmp7;
    if (cResult[1] === animatedStyle) {
      tmp7 = cResult[2];
    }
    return tmp7;
  }
  const obj5 = { hiddenProps: animatedProps, hiddenStyles: animatedStyle };
  cResult[0] = animatedProps;
  cResult[1] = animatedStyle;
  cResult[2] = obj5;
  tmp7 = obj5;
}) : ((mode, wrapperSpecs) => {
  let closure_3;
  let fn;
  let obj3;
  let obj5;
  _require = mode;
  dependencyMap = wrapperSpecs;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const cleanUp = obj.cleanUp;
  let tmp = obj.state === require("native").TransitionStates.YEETED;
  HIDDEN_OPACITY_PHYSICS = tmp;
  const obj2 = { hiddenProps: obj3.useAnimatedProps(S), hiddenStyles: obj5.useAnimatedStyle(fn) };
  obj3 = require("ReanimatedRexport");
  class S {
    constructor() {
      if (!closure_3) {
        let str;
        if (mode.get() === VoicePanelModes.PANEL) {
          str = "auto";
        }
        return { pointerEvents: str };
      }
      str = "none";
    }
  }
  const obj4 = { yeeted: tmp, mode, VoicePanelModes: cleanUp, wrapperSpecs };
  S.__closure = obj4;
  S.__workletHash = 2189656744769;
  S.__initData = __initData3;
  fn = function _() {
    let num;
    let obj;
    let tmp = spring;
    const withSpring = tmp.withSpring;
    if (closure_3) {
      num = 0;
    } else {
      num = 1;
    }
    let fn;
    const tmp3 = obj;
    if (null != cleanUp) {
      fn = (arg0) => {
        const tmp = arg0 && closure_1_3;
        if (tmp) {
          const obj = mode(wrapperSpecs[4]);
          obj.runOnJS(cleanUp)();
        }
      };
    }
    obj = { opacity: withSpring(num, tmp3, "respect-motion-settings", fn) };
    return obj;
  };
  obj5 = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, yeeted: tmp, wrapperSpecs, HIDDEN_OPACITY_PHYSICS, cleanUp, runOnJS: require("ReanimatedRexport").runOnJS };
  fn.__workletHash = 8886199641773;
  fn.__initData = __initData4;
  ({ withSpring: require("spring").withSpring, yeeted: tmp, wrapperSpecs, HIDDEN_OPACITY_PHYSICS, cleanUp, runOnJS: require("ReanimatedRexport").runOnJS });
  return obj2;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useControlsHiddenPresentation.tsx");

export default tmp4;