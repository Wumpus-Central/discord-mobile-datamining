// discord_app/modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelControlsConstants from "../controls/VoicePanelControlsConstants.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import MorphablePanelConstants from "../../../panels/morphable/native/MorphablePanelConstants.tsx";
import calculateVoicePanelHeaderSpecsDefault from "../header/calculateVoicePanelHeaderSpecs.tsx";
import getPIPBottomOffsetForPIPModeDefault from "../../../panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx";
import getAdjustedBottomOffsetsDefault from "../../../panels/morphable/native/getAdjustedBottomOffsets.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
let closure_6 = {
  code: "function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}",
};
const __initData = {
  code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}",
};
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(mode) {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  let obj = mode(safeArea[3]);
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[4])();
  VoicePanelControlsModes = tmp2;
  const tmp3 = controlsSpecs(safeArea[5])();
  PIP_WINDOW_OFFSET = tmp3;
  const token = mode(safeArea[6]).useToken(controlsSpecs(safeArea[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj2 = mode(safeArea[6]);
  const fn = function p() {
    return {
      mode: mode.get(),
      controlsSpecs: controlsSpecs.get(),
      keyboardHeight: closure_4.get(),
      safeArea: safeArea.get(),
      screenName: closure_5.get(),
    };
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 17017598468922;
  fn.__initData = token;
  const fn2 = function u(safeAreaState, current) {
    let obj = cheapWorkletShallowEqual;
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
      obj = { screenBottomOffset: tmp6, safeAreaBottom: safeArea.bottom, keyboardHeight };
      const bottomOffset = getAdjustedBottomOffsetsDefault(obj).bottomOffset;
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
    tmp = current;
  };
  obj = {
    cheapWorkletShallowEqual: mode(safeArea[8]).cheapWorkletShallowEqual,
    VoicePanelModes: sharedValue,
    VoicePanelControlsModes,
    DEFAULT_CHANNEL_INPUT_HEIGHT: 60,
    PIP_WINDOW_OFFSET,
    getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[9]),
    getAdjustedBottomOffsets: controlsSpecs(safeArea[10]),
    calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[11]),
    edgeGutter: token,
    updateSharedValueIfChanged: controlsSpecs(safeArea[12]),
    pipAvoidanceSpecs: sharedValue,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 13029906729161;
  fn2.__initData = __initData;
  const animatedReaction = mode(safeArea[3]).useAnimatedReaction(fn, fn2);
  return sharedValue;
}
