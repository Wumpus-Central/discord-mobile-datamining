// === Module 17395: usePIPAvoidanceSpecs ===

// Module 17395 (usePIPAvoidanceSpecs)
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9110 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9787 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11914 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11917 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11920 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 17117 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 17194 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
let closure_6 = { code: "function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}" };
const __initData = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{mode:mode_0,controlsSpecs:controlsSpecs_0,keyboardHeight:keyboardHeight_0,safeArea:safeArea_0,screenName:screenName_0}=props;const screenBottomOffset=function(){if(mode_0!==VoicePanelModes.PIP){if(mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName_0);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea_0.bottom,keyboardHeight:keyboardHeight_0});if(keyboardHeight_0<=0&&mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset=bottomOffset+(controlsSpecs_0.height+PIP_WINDOW_OFFSET);}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea_0,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}" };
const __initData2 = { code: "function usePIPAvoidanceSpecsTsx3(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}" };
const __initData3 = { code: "function usePIPAvoidanceSpecsTsx4(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode_0,controlsSpecs:controlsSpecs_0,keyboardHeight:keyboardHeight_0,safeArea:safeArea_0,screenName:screenName_0}=props;const screenBottomOffset=function(){if(mode_0!==VoicePanelModes.PIP){if(mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName_0);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea_0.bottom,keyboardHeight:keyboardHeight_0});if(keyboardHeight_0<=0&&mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs_0.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea_0,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  let closure_4;
  let closure_5;
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  let obj = mode(safeArea[4]);
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[5])();
  VoicePanelControlsModes = tmp2;
  const tmp3 = controlsSpecs(safeArea[6])();
  PIP_WINDOW_OFFSET = tmp3;
  const obj2 = mode(safeArea[7]);
  const token = obj2.useToken(controlsSpecs(safeArea[8]).modules.mobile.VOICE_PANEL_GUTTER);
  const fn = function _() {
    const obj = { mode: mode.get(), controlsSpecs: controlsSpecs.get(), keyboardHeight: closure_4.get(), safeArea: safeArea.get(), screenName: closure_5.get() };
    return obj;
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 17017598468922;
  fn.__initData = token;
  const fn2 = function f(safeAreaState, safeAreaState2) {
    let keyboardHeight;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp = safeAreaState2;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
      let tmp7;
      ({ mode, controlsSpecs, keyboardHeight, safeArea } = safeAreaState);
      if (mode !== VoicePanelModes.PIP) {
        let num = 0;
        if (mode === VoicePanelModes.PANEL) {
          num = 0;
          if (controlsSpecs.mode === VoicePanelControlsModes.DRAWER) {
            num = 60 + PIP_WINDOW_OFFSET;
          }
        }
        tmp7 = num;
      } else {
        tmp7 = getPIPBottomOffsetForPIPModeDefault(tmp4);
      }
      const obj = { screenBottomOffset: tmp7, safeAreaBottom: safeArea.bottom, keyboardHeight };
      const bottomOffset = getAdjustedBottomOffsetsDefault(obj).bottomOffset;
      let sum = bottomOffset;
      const tmp11 = keyboardHeight <= 0 && mode === VoicePanelModes.PANEL && controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT;
      if (tmp11) {
        sum = bottomOffset + (controlsSpecs.height + PIP_WINDOW_OFFSET);
      }
      const height = calculateVoicePanelHeaderSpecsDefault(safeArea, token).height;
      let num4 = 0;
      const tmp10Result = updateSharedValueIfChangedDefault;
      if (mode === VoicePanelModes.PANEL) {
        num4 = 0;
        if (controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT) {
          num4 = height;
        }
      }
      const rect = { top: num4, bottom: sum };
      tmp10Result(sharedValue, rect);
    }
  };
  const obj3 = mode(safeArea[4]);
  fn2.__closure = { cheapWorkletShallowEqual: mode(safeArea[9]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[10]), getAdjustedBottomOffsets: controlsSpecs(safeArea[11]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[12]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[13]), pipAvoidanceSpecs: sharedValue };
  fn2.__workletHash = 634974639916;
  fn2.__initData = __initData;
  ({ cheapWorkletShallowEqual: mode(safeArea[9]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[10]), getAdjustedBottomOffsets: controlsSpecs(safeArea[11]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[12]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[13]), pipAvoidanceSpecs: sharedValue });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  return sharedValue;
}) : ((mode) => {
  let closure_4;
  let closure_5;
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  let obj = mode(safeArea[4]);
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[5])();
  VoicePanelControlsModes = tmp2;
  const tmp3 = controlsSpecs(safeArea[6])();
  PIP_WINDOW_OFFSET = tmp3;
  const obj2 = mode(safeArea[7]);
  const token = obj2.useToken(controlsSpecs(safeArea[8]).modules.mobile.VOICE_PANEL_GUTTER);
  const fn = function p() {
    const obj = { mode: mode.get(), controlsSpecs: controlsSpecs.get(), keyboardHeight: closure_4.get(), safeArea: safeArea.get(), screenName: closure_5.get() };
    return obj;
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 9634815059128;
  fn.__initData = __initData2;
  const obj3 = mode(safeArea[4]);
  class P {
    constructor(safeAreaState, safeAreaState2) {
      let keyboardHeight;
      const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
      cheapWorkletShallowEqual2;
      const tmp = safeAreaState2;
      if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
        let tmp7;
        ({ mode, controlsSpecs, keyboardHeight, safeArea } = safeAreaState);
        if (mode !== VoicePanelModes.PIP) {
          let num = 0;
          if (mode === VoicePanelModes.PANEL) {
            num = 0;
            if (controlsSpecs.mode === VoicePanelControlsModes.DRAWER) {
              num = 60 + PIP_WINDOW_OFFSET;
            }
          }
          tmp7 = num;
        } else {
          tmp7 = getPIPBottomOffsetForPIPModeDefault(tmp4);
        }
        const obj = { screenBottomOffset: tmp7, safeAreaBottom: safeArea.bottom, keyboardHeight };
        const bottomOffset = getAdjustedBottomOffsetsDefault(obj).bottomOffset;
        let sum = bottomOffset;
        const tmp11 = keyboardHeight <= 0 && mode === VoicePanelModes.PANEL && controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT;
        if (tmp11) {
          sum = bottomOffset + (controlsSpecs.height + PIP_WINDOW_OFFSET);
        }
        const height = calculateVoicePanelHeaderSpecsDefault(safeArea, token).height;
        let num4 = 0;
        const tmp10Result = updateSharedValueIfChangedDefault;
        if (mode === VoicePanelModes.PANEL) {
          num4 = 0;
          if (controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT) {
            num4 = height;
          }
        }
        const rect = { top: num4, bottom: sum };
        tmp10Result(sharedValue, rect);
      }
    }
  }
  P.__closure = { cheapWorkletShallowEqual: mode(safeArea[9]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[10]), getAdjustedBottomOffsets: controlsSpecs(safeArea[11]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[12]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[13]), pipAvoidanceSpecs: sharedValue };
  P.__workletHash = 10972342033263;
  P.__initData = __initData3;
  ({ cheapWorkletShallowEqual: mode(safeArea[9]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[10]), getAdjustedBottomOffsets: controlsSpecs(safeArea[11]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[12]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[13]), pipAvoidanceSpecs: sharedValue });
  const animatedReaction = obj3.useAnimatedReaction(fn, P);
  return sharedValue;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default tmp2;