// === Module 17342: usePIPAvoidanceSpecs ===

// Module 17342 (usePIPAvoidanceSpecs)
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9074 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9774 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11900 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11903 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11906 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 17067 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 17141 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
let closure_6 = { code: "function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}" };
const __initData = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{mode:mode_0,controlsSpecs:controlsSpecs_0,keyboardHeight:keyboardHeight_0,safeArea:safeArea_0,screenName:screenName_0}=props;const screenBottomOffset=function(){if(mode_0!==VoicePanelModes.PIP){if(mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName_0);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea_0.bottom,keyboardHeight:keyboardHeight_0});if(keyboardHeight_0<=0&&mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset=bottomOffset+(controlsSpecs_0.height+PIP_WINDOW_OFFSET);}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea_0,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}" };
const __initData2 = { code: "function usePIPAvoidanceSpecsTsx3(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}" };
const __initData3 = { code: "function usePIPAvoidanceSpecsTsx4(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode_0,controlsSpecs:controlsSpecs_0,keyboardHeight:keyboardHeight_0,safeArea:safeArea_0,screenName:screenName_0}=props;const screenBottomOffset=function(){if(mode_0!==VoicePanelModes.PIP){if(mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName_0);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea_0.bottom,keyboardHeight:keyboardHeight_0});if(keyboardHeight_0<=0&&mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs_0.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea_0,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode_0===VoicePanelModes.PANEL&&controlsSpecs_0.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  const sharedValue = mode(safeArea[4]).useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[5])();
  VoicePanelControlsModes = tmp2;
  const tmp3 = controlsSpecs(safeArea[6])();
  PIP_WINDOW_OFFSET = tmp3;
  let obj = mode(safeArea[4]);
  const token = mode(safeArea[7]).useToken(controlsSpecs(safeArea[8]).modules.mobile.VOICE_PANEL_GUTTER);
  let obj2 = mode(safeArea[7]);
  const fn = function _() {
    return { mode: mode.get(), controlsSpecs: controlsSpecs.get(), keyboardHeight: closure_4.get(), safeArea: safeArea.get(), screenName: closure_5.get() };
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 17017598468922;
  fn.__initData = token;
  const fn2 = function f(safeAreaState, safeAreaState2) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
      ({ mode, controlsSpecs, keyboardHeight, safeArea } = safeAreaState);
      if (mode !== VoicePanelModes.PIP) {
        let num = 0;
        if (mode === VoicePanelModes.PANEL) {
          num = 0;
          if (controlsSpecs.mode === VoicePanelControlsModes.DRAWER) {
            num = 60 + PIP_WINDOW_OFFSET;
          }
        }
        let tmp6 = num;
      } else {
        tmp6 = getPIPBottomOffsetForPIPModeDefault(tmp3);
      }
      const obj2 = { screenBottomOffset: tmp6, safeAreaBottom: safeArea.bottom, keyboardHeight };
      const bottomOffset = getAdjustedBottomOffsetsDefault(obj2).bottomOffset;
      let tmp10 = keyboardHeight <= 0 && mode === VoicePanelModes.PANEL;
      if (tmp10) {
        tmp10 = controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT;
      }
      let sum = bottomOffset;
      if (tmp10) {
        sum = bottomOffset + (controlsSpecs.height + PIP_WINDOW_OFFSET);
      }
      let num4 = 0;
      if (mode === VoicePanelModes.PANEL) {
        num4 = 0;
        if (controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT) {
          num4 = calculateVoicePanelHeaderSpecsDefault(safeArea, token).height;
        }
      }
      const rect = { top: num4, bottom: sum };
      updateSharedValueIfChangedDefault(sharedValue, rect);
      const tmp9Result = updateSharedValueIfChangedDefault;
    }
    obj = cheapWorkletShallowEqual;
    tmp = safeAreaState2;
  };
  const obj3 = mode(safeArea[4]);
  fn2.__closure = { cheapWorkletShallowEqual: mode(safeArea[9]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[10]), getAdjustedBottomOffsets: controlsSpecs(safeArea[11]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[12]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[13]), pipAvoidanceSpecs: sharedValue };
  fn2.__workletHash = 634974639916;
  fn2.__initData = __initData;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  return sharedValue;
}) : ((mode) => {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  const sharedValue = mode(safeArea[4]).useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[5])();
  VoicePanelControlsModes = tmp2;
  const tmp3 = controlsSpecs(safeArea[6])();
  PIP_WINDOW_OFFSET = tmp3;
  let obj = mode(safeArea[4]);
  const token = mode(safeArea[7]).useToken(controlsSpecs(safeArea[8]).modules.mobile.VOICE_PANEL_GUTTER);
  let obj2 = mode(safeArea[7]);
  const fn = function p() {
    return { mode: mode.get(), controlsSpecs: controlsSpecs.get(), keyboardHeight: closure_4.get(), safeArea: safeArea.get(), screenName: closure_5.get() };
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 9634815059128;
  fn.__initData = __initData2;
  class P {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = closure_2;
      obj = closure_0(closure_2[9]);
      if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
        ({ mode, controlsSpecs, keyboardHeight, safeArea } = mode);
        tmp4 = VoicePanelModes;
        if (mode !== VoicePanelModes.PIP) {
          num = 0;
          if (mode === tmp4.PANEL) {
            tmp7 = VoicePanelControlsModes;
            num = 0;
            if (controlsSpecs.mode === VoicePanelControlsModes.DRAWER) {
              tmp8 = PIP_WINDOW_OFFSET;
              num2 = 60;
              num = 60 + PIP_WINDOW_OFFSET;
            }
          }
          tmp6 = num;
        } else {
          tmp5 = closure_1;
          tmp6 = closure_1(tmp2[10])(tmp3);
        }
        tmp9 = closure_1;
        obj1 = { screenBottomOffset: null, safeAreaBottom: null, keyboardHeight: null };
        obj1.screenBottomOffset = tmp6;
        obj1.safeAreaBottom = safeArea.bottom;
        obj1.keyboardHeight = keyboardHeight;
        bottomOffset = closure_1(tmp2[11])(obj1).bottomOffset;
        num3 = 0;
        tmp10 = keyboardHeight <= 0 && mode === tmp4.PANEL;
        if (tmp10) {
          tmp11 = VoicePanelControlsModes;
          tmp10 = controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT;
        }
        sum = bottomOffset;
        if (tmp10) {
          tmp13 = PIP_WINDOW_OFFSET;
          sum = bottomOffset + (controlsSpecs.height + PIP_WINDOW_OFFSET);
        }
        tmp14 = closure_6;
        num4 = 0;
        tmp9Result = tmp9(tmp2[13]);
        tmp16 = closure_3;
        if (mode === tmp4.PANEL) {
          tmp17 = VoicePanelControlsModes;
          num4 = 0;
          if (controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT) {
            num4 = tmp9(tmp2[12])(safeArea, closure_6).height;
          }
        }
        rect = { top: null, bottom: null };
        rect.top = num4;
        rect.bottom = sum;
        tmp15Result = tmp9Result(tmp16, rect);
      }
      return;
    }
  }
  const obj3 = mode(safeArea[4]);
  P.__closure = { cheapWorkletShallowEqual: mode(safeArea[9]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[10]), getAdjustedBottomOffsets: controlsSpecs(safeArea[11]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[12]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[13]), pipAvoidanceSpecs: sharedValue };
  P.__workletHash = 10972342033263;
  P.__initData = __initData3;
  const animatedReaction = obj3.useAnimatedReaction(fn, P);
  return sharedValue;
});