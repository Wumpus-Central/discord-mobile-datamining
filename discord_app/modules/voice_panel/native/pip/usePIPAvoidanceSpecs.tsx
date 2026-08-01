// === Module 15938: usePIPAvoidanceSpecs ===

// Module 15938 (usePIPAvoidanceSpecs)
import { VoicePanelModes } from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { PIP_WINDOW_OFFSET } from "MIN_PAN_GESTURE_MOVE";

let closure_6 = { code: "function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}" };
let closure_7 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}" };
const result = require("MIN_PAN_GESTURE_MOVE").fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(mode) {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  let sharedValue;
  let c4;
  let c5;
  let token;
  let obj = mode(safeArea[3]);
  sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[4])();
  c4 = tmp2;
  const tmp3 = controlsSpecs(safeArea[5])();
  c5 = tmp3;
  token = mode(safeArea[6]).useToken(controlsSpecs(safeArea[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj2 = mode(safeArea[6]);
  const fn = function p() {
    return { mode: mode.get(), controlsSpecs: controlsSpecs.get(), keyboardHeight: _undefined.get(), safeArea: safeArea.get(), screenName: _undefined2.get() };
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 17017598468922;
  fn.__initData = token;
  const fn2 = function u(safeAreaState, current) {
    let controlsSpecs;
    let keyboardHeight;
    let mode;
    let safeArea;
    let obj = mode(safeArea[8]);
    if (!obj.cheapWorkletShallowEqual(safeAreaState, current)) {
      ({ mode, controlsSpecs, keyboardHeight, safeArea } = safeAreaState);
      if (mode !== sharedValue.PIP) {
        let num = 0;
        if (mode === tmp4.PANEL) {
          num = 0;
          if (controlsSpecs.mode === _undefined.DRAWER) {
            num = 60 + c5;
          }
        }
        let tmp6 = num;
      } else {
        tmp6 = controlsSpecs(tmp2[9])(tmp3);
      }
      obj = { screenBottomOffset: null, safeAreaBottom: null, keyboardHeight: null };
      obj[0] = tmp6;
      obj[1] = safeArea.bottom;
      obj[2] = keyboardHeight;
      const bottomOffset = controlsSpecs(tmp2[10])(obj).bottomOffset;
      let tmp10 = keyboardHeight <= 0 && mode === tmp4.PANEL;
      if (tmp10) {
        tmp10 = controlsSpecs.mode === _undefined.FLOATING_DEFAULT;
      }
      let sum = bottomOffset;
      if (tmp10) {
        sum = bottomOffset + (controlsSpecs.height + c5);
      }
      let num4 = 0;
      if (mode === sharedValue.PANEL) {
        num4 = 0;
        if (controlsSpecs.mode === _undefined.FLOATING_DEFAULT) {
          num4 = tmp9(tmp2[11])(safeArea, token).height;
        }
      }
      obj = { top: null, bottom: null };
      obj[0] = num4;
      obj[1] = sum;
      controlsSpecs(tmp2[12])(sharedValue, obj);
      const tmp16 = sharedValue;
      const tmp9Result = controlsSpecs(tmp2[12]);
    }
  };
  obj = { cheapWorkletShallowEqual: mode(safeArea[8]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes: c4, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET: c5, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[9]), getAdjustedBottomOffsets: controlsSpecs(safeArea[10]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[11]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[12]), pipAvoidanceSpecs: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 13029906729161;
  fn2.__initData = closure_7;
  const animatedReaction = mode(safeArea[3]).useAnimatedReaction(fn, fn2);
  return sharedValue;
};