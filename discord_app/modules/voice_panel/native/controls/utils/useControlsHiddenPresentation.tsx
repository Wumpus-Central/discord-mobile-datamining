// === Module 20077: useControlsHiddenPresentation ===

// Module 20077 (useControlsHiddenPresentation)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import native from "native" /* 5377 */;
import spring_spring from "spring/spring" /* 5939 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let obj = {};
const merged = Object.assign(VoicePanelConstants.MODE_CHANGE_PHYSICS);
obj.overshootClamping = true;
let closure_4 = { code: "(function useControlsHiddenPresentationTsx1(){let[yeeted,mode,VoicePanelModes,wrapperSpecs]=this.__closure;return{pointerEvents:yeeted||mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};})" };
let closure_5 = { code: "(function useControlsHiddenPresentationTsx2(){let[withSpring,yeeted,wrapperSpecs,HIDDEN_OPACITY_PHYSICS,cleanUp,scheduleOnRN]=this.__closure;return{opacity:withSpring(yeeted||wrapperSpecs.get().hidden?0:1,HIDDEN_OPACITY_PHYSICS,'respect-motion-settings',cleanUp!=null?function(finished){if(finished&&yeeted){scheduleOnRN(cleanUp);}}:undefined)};})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useControlsHiddenPresentation.tsx");

export default function useControlsHiddenPresentation(arg0, arg1) {
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ state, cleanUp } = obj);
  const tmp3 = state === native.TransitionStates.YEETED;
  items = [closure_4, tmp3, arg0, VoicePanelModes, arg1];
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  function useControlsHiddenPresentationTsx1() {
    if (!c0) {
      if (_undefined.get() === _undefined2.PANEL) {
        let str = "auto";
      }
      obj = { pointerEvents: str };
      return obj;
    }
    str = "none";
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  useControlsHiddenPresentationTsx1.__closure = items1;
  useControlsHiddenPresentationTsx1.__workletHash = 10191676178362;
  useControlsHiddenPresentationTsx1.__initData = tmp4;
  const animatedProps = _mod1655.useAnimatedProps(useControlsHiddenPresentationTsx1);
  const items2 = [closure_5, spring_spring.withSpring, tmp3, arg1, obj, cleanUp, _mod1708.scheduleOnRN];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  function useControlsHiddenPresentationTsx2() {
    if (c1) {
      let num = 0;
    } else {
      num = 1;
    }
    let fn;
    if (null != c4) {
      fn = (arg0) => {
        let tmp = arg0;
        if (arg0) {
          tmp = _undefined;
        }
        if (tmp) {
          closure_1_5(closure_1_4);
        }
      };
    }
    return { opacity: _undefined(num, c3, "respect-motion-settings", fn) };
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  useControlsHiddenPresentationTsx2.__closure = items3;
  useControlsHiddenPresentationTsx2.__workletHash = 14159877281811;
  useControlsHiddenPresentationTsx2.__initData = tmp10;
  const tmpResult = _mod1655;
  return { hiddenProps: animatedProps, hiddenStyles: _mod1655.useAnimatedStyle(useControlsHiddenPresentationTsx2) };
};