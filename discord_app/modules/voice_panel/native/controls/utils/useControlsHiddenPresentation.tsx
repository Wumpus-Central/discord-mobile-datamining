// discord_app/modules/voice_panel/native/controls/utils/useControlsHiddenPresentation.tsx
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import VoicePanelConstants from "../../../VoicePanelConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let obj = {};
const merged = Object.assign(VoicePanelConstants.MODE_CHANGE_PHYSICS);
obj.overshootClamping = true;
const __initData = {
  code: "function useControlsHiddenPresentationTsx1(){const{yeeted,mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:yeeted||mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};}",
};
const __initData2 = {
  code: "function useControlsHiddenPresentationTsx2(){const{withSpring,yeeted,wrapperSpecs,HIDDEN_OPACITY_PHYSICS,cleanUp,runOnJS}=this.__closure;return{opacity:withSpring(yeeted||wrapperSpecs.get().hidden?0:1,HIDDEN_OPACITY_PHYSICS,'respect-motion-settings',cleanUp!=null?function(finished){if(finished&&yeeted){runOnJS(cleanUp)();}}:undefined)};}",
};
const result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/utils/useControlsHiddenPresentation.tsx",
);

export default function useControlsHiddenPresentation(mode, wrapperSpecs) {
  _require = mode;
  dependencyMap = wrapperSpecs;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const cleanUp = obj.cleanUp;
  let tmp = obj.state === require("native").TransitionStates.YEETED;
  HIDDEN_OPACITY_PHYSICS = tmp;
  obj = { hiddenProps: null, hiddenStyles: null };
  let fn = function _() {
    if (!closure_3) {
      if (mode.get() === VoicePanelModes.PANEL) {
        let str = "auto";
      }
      const obj = { pointerEvents: str };
      return obj;
    }
    str = "none";
  };
  obj = { yeeted: tmp, mode, VoicePanelModes: cleanUp, wrapperSpecs };
  fn.__closure = obj;
  fn.__workletHash = 2182108251011;
  fn.__initData = __initData;
  obj.hiddenProps = require("ReanimatedRexport").useAnimatedProps(fn);
  const obj3 = require("ReanimatedRexport");
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
            tmp = closure_1_3;
          }
          if (tmp) {
            closure_0(dependencyMap[2]).runOnJS(cleanUp)();
            const obj = closure_0(dependencyMap[2]);
          }
        };
      }
      obj = { opacity: obj.withSpring(num, tmp2, "respect-motion-settings", fn) };
      return obj;
    }
  }
  const obj5 = require("ReanimatedRexport");
  S.__closure = {
    withSpring: require("spring").withSpring,
    yeeted: tmp,
    wrapperSpecs,
    HIDDEN_OPACITY_PHYSICS,
    cleanUp,
    runOnJS: require("ReanimatedRexport").runOnJS,
  };
  S.__workletHash = 13662769817707;
  S.__initData = __initData2;
  obj.hiddenStyles = obj5.useAnimatedStyle(S);
  return obj;
}
