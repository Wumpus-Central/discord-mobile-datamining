// === Module 17014: useControlsHiddenPresentation ===

// Module 17014 (useControlsHiddenPresentation)
import set from "set" /* 2 */;
import VoicePanelModes from "VoicePanelModes" /* 12069 */;

VoicePanelModes = VoicePanelModes.VoicePanelModes;
let obj = {};
const merged = Object.assign(VoicePanelModes.MODE_CHANGE_PHYSICS);
obj.overshootClamping = true;
let closure_4 = { code: "function useControlsHiddenPresentationTsx1(){const{yeeted,mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:yeeted||mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};}" };
let closure_5 = { code: "function useControlsHiddenPresentationTsx2(){const{withSpring,yeeted,wrapperSpecs,HIDDEN_OPACITY_PHYSICS,cleanUp,runOnJS}=this.__closure;return{opacity:withSpring(yeeted||wrapperSpecs.get().hidden?0:1,HIDDEN_OPACITY_PHYSICS,'respect-motion-settings',cleanUp!=null?function(finished){if(finished&&yeeted){runOnJS(cleanUp)();}}:undefined)};}" };
const result = set.fileFinishedImporting("modules/voice_panel/native/controls/utils/useControlsHiddenPresentation.tsx");

export default function useControlsHiddenPresentation(mode, wrapperSpecs) {
  const _require = mode;
  dependencyMap = wrapperSpecs;
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const cleanUp = obj.cleanUp;
  closure_3 = undefined;
  let tmp = obj.state === _require(4204).TransitionStates.YEETED;
  closure_3 = tmp;
  obj = { hiddenProps: null, hiddenStyles: null };
  let fn = function _() {
    if (!closure_3) {
      if (mode.get() === cleanUp.PANEL) {
        let str = "auto";
      }
      obj = { pointerEvents: null };
      obj[0] = str;
      return obj;
    }
    str = "none";
  };
  obj = { yeeted: tmp, mode, VoicePanelModes: cleanUp, wrapperSpecs };
  fn.__closure = obj;
  fn.__workletHash = 2182108251011;
  fn.__initData = closure_4;
  obj[0] = _require(4217).useAnimatedProps(fn);
  const obj3 = _require(4217);
  class S {
    constructor() {
      obj = closure_0(closure_1[3]);
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
            tmp = closure_3;
          }
          if (tmp) {
            closure_1_0(closure_1_1[2]).runOnJS(closure_2)();
            obj = closure_1_0(closure_1_1[2]);
          }
        };
      }
      obj = { opacity: obj.withSpring(num, tmp2, "respect-motion-settings", fn) };
      return obj;
    }
  }
  const obj5 = _require(4217);
  S.__closure = { withSpring: _require(4928).withSpring, yeeted: tmp, wrapperSpecs, HIDDEN_OPACITY_PHYSICS: closure_3, cleanUp, runOnJS: _require(4217).runOnJS };
  S.__workletHash = 13662769817707;
  S.__initData = closure_5;
  obj[1] = obj5.useAnimatedStyle(S);
  return obj;
};