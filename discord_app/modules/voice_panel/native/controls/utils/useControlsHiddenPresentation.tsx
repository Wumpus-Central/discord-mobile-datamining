// === Module 17297: useControlsHiddenPresentation ===

// Module 17297 (useControlsHiddenPresentation)
import spring from "spring" /* 5597 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let obj = {};
const merged = Object.assign(VoicePanelConstants.MODE_CHANGE_PHYSICS);
obj.overshootClamping = true;
const __initData = { code: "function useControlsHiddenPresentationTsx1(){const{yeeted,mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:yeeted||mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?\"none\":\"auto\"};}" };
const __initData2 = { code: "function useControlsHiddenPresentationTsx2(){const{withSpring,yeeted,wrapperSpecs,HIDDEN_OPACITY_PHYSICS,cleanUp,runOnJS}=this.__closure;return{opacity:withSpring(yeeted||wrapperSpecs.get().hidden?0:1,HIDDEN_OPACITY_PHYSICS,\"respect-motion-settings\",cleanUp!=null?function(finished){if(finished&&yeeted){runOnJS(cleanUp)();}}:undefined)};}" };
const __initData3 = { code: "function useControlsHiddenPresentationTsx3(){const{yeeted,mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:yeeted||mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};}" };
const __initData4 = { code: "function useControlsHiddenPresentationTsx4(){const{withSpring,yeeted,wrapperSpecs,HIDDEN_OPACITY_PHYSICS,cleanUp,runOnJS}=this.__closure;return{opacity:withSpring(yeeted||wrapperSpecs.get().hidden?0:1,HIDDEN_OPACITY_PHYSICS,'respect-motion-settings',cleanUp!=null?function(finished){if(finished&&yeeted){runOnJS(cleanUp)();}}:undefined)};}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useControlsHiddenPresentation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((mode, wrapperSpecs, arg2) => {
  _require = mode;
  dependencyMap = wrapperSpecs;
  let obj = arg2;
  const cResult = require("c").c(3);
  if (undefined === arg2) {
    obj = {};
  }
  const cleanUp = obj.cleanUp;
  const tmp4 = obj.state === require("native").TransitionStates.YEETED;
  HIDDEN_OPACITY_PHYSICS = tmp4;
  const obj2 = require("c");
  let fn = function l() {
    if (!closure_3) {
      if (mode.get() === VoicePanelModes.PANEL) {
        let str = "auto";
      }
      const obj = { pointerEvents: str };
      return obj;
    }
    str = "none";
  };
  fn.__closure = { yeeted: tmp4, mode, VoicePanelModes: cleanUp, wrapperSpecs };
  fn.__workletHash = 9921694756227;
  fn.__initData = __initData;
  const animatedProps = require("ReanimatedRexport").useAnimatedProps(fn);
  const obj3 = { yeeted: tmp4, mode, VoicePanelModes: cleanUp, wrapperSpecs };
  const tmpResult = require("ReanimatedRexport");
  class S {
    constructor() {
      obj = closure_0(closure_1[5]);
      if (closure_3) {
        num = 0;
      } else {
        tmp = closure_1;
        num = 1;
      }
      tmp2 = closure_3;
      fn = undefined;
      if (null != cleanUp) {
        fn = (arg0) => {
          let tmp = arg0;
          if (arg0) {
            tmp = closure_1_3;
          }
          if (tmp) {
            closure_0(dependencyMap[4]).runOnJS(cleanUp)();
            const obj = closure_0(dependencyMap[4]);
          }
        };
      }
      obj1 = { opacity: obj.withSpring(num, tmp2, "respect-motion-settings", fn) };
      return obj1;
    }
  }
  const tmpResult2 = require("ReanimatedRexport");
  S.__closure = { withSpring: require("spring").withSpring, yeeted: tmp4, wrapperSpecs, HIDDEN_OPACITY_PHYSICS, cleanUp, runOnJS: require("ReanimatedRexport").runOnJS };
  S.__workletHash = 6139998685483;
  S.__initData = __initData2;
  const animatedStyle = tmpResult2.useAnimatedStyle(S);
  if (cResult[0] === animatedProps) {
    if (cResult[1] === animatedStyle) {
      let tmp7 = cResult[2];
    }
    return tmp7;
  }
  const obj5 = { hiddenProps: animatedProps, hiddenStyles: animatedStyle };
  cResult[0] = animatedProps;
  cResult[1] = animatedStyle;
  cResult[2] = obj5;
  tmp7 = obj5;
}) : ((mode, wrapperSpecs) => {
  _require = mode;
  dependencyMap = wrapperSpecs;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const cleanUp = obj.cleanUp;
  let tmp = obj.state === require("native").TransitionStates.YEETED;
  HIDDEN_OPACITY_PHYSICS = tmp;
  const obj2 = { hiddenProps: null, hiddenStyles: null };
  class S {
    constructor() {
      if (!closure_3) {
        tmp = closure_0;
        tmp2 = VoicePanelModes;
        if (closure_0.get() === VoicePanelModes.PANEL) {
          tmp3 = closure_1;
          str = "auto";
        }
        obj = { pointerEvents: null };
        obj.pointerEvents = str;
        return obj;
      }
      str = "none";
      return;
    }
  }
  S.__closure = { yeeted: tmp, mode, VoicePanelModes: cleanUp, wrapperSpecs };
  S.__workletHash = 2189656744769;
  S.__initData = __initData3;
  obj2.hiddenProps = require("ReanimatedRexport").useAnimatedProps(S);
  const obj3 = require("ReanimatedRexport");
  const obj4 = { yeeted: tmp, mode, VoicePanelModes: cleanUp, wrapperSpecs };
  let fn = function _() {
    let obj = spring;
    if (closure_3) {
      let num = 0;
    } else {
      num = 1;
    }
    let fn;
    if (null != cleanUp) {
      fn = (arg0) => {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_1_3;
        }
        if (tmp) {
          closure_0(dependencyMap[4]).runOnJS(cleanUp)();
          const obj = closure_0(dependencyMap[4]);
        }
      };
    }
    return { opacity: obj.withSpring(num, obj, "respect-motion-settings", fn) };
  };
  const obj5 = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, yeeted: tmp, wrapperSpecs, HIDDEN_OPACITY_PHYSICS, cleanUp, runOnJS: require("ReanimatedRexport").runOnJS };
  fn.__workletHash = 8886199641773;
  fn.__initData = __initData4;
  obj2.hiddenStyles = obj5.useAnimatedStyle(fn);
  return obj2;
});