// === Module 19495: usePIPAvoidanceSpecs ===

// Module 19495 (usePIPAvoidanceSpecs)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5754 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 10227 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11379 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11381 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11382 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11385 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11387 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 12247 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 19303 */;
import useScreenNameSharedValueDefault from "useScreenNameSharedValue" /* 19417 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 19418 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
let closure_6 = { code: "(function usePIPAvoidanceSpecsTsx1(){let[mode,controlsSpecs,keyboardHeight,safeArea,screenName,dockHeight]=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get(),dockHeight:dockHeight.get()};})" };
let closure_7 = { code: "(function usePIPAvoidanceSpecsTsx2(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName,dockHeight:dockHeight}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}if(mode===VoicePanelModes.PIP){bottomOffset+=dockHeight;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(arg0) {
  ({ mode, controlsSpecs, safeArea, dockHeight } = arg0);
  const sharedValue = _mod1652.useSharedValue({ top: 0, bottom: 0 });
  const tmp5 = useAnimatedKeyboardHeightDefault();
  let tmp6 = useScreenNameSharedValueDefault();
  const token = useToken.useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  items = [_undefined7, mode, controlsSpecs, tmp5, safeArea, tmp6, dockHeight];
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  function usePIPAvoidanceSpecsTsx1() {
    return { mode: _undefined.get(), controlsSpecs: _undefined2.get(), keyboardHeight: _undefined3.get(), safeArea: _undefined4.get(), screenName: _undefined5.get(), dockHeight: _undefined6.get() };
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  usePIPAvoidanceSpecsTsx1.__closure = items1;
  usePIPAvoidanceSpecsTsx1.__workletHash = 12057246335004;
  usePIPAvoidanceSpecsTsx1.__initData = tmp8;
  const items2 = [closure_7, cheapWorkletShallowEqual.cheapWorkletShallowEqual, VoicePanelModes, VoicePanelControlsModes, 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPModeDefault, getAdjustedBottomOffsetsDefault, calculateVoicePanelHeaderSpecsDefault, token, updateSharedValueIfChangedDefault, sharedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items2;
  function usePIPAvoidanceSpecsTsx2(dockHeight, arg1) {
    if (!_undefined(dockHeight, tmp)) {
      ({ mode, controlsSpecs, keyboardHeight, safeArea } = dockHeight);
      if (mode !== _undefined2.PIP) {
        let num = 0;
        if (mode === _undefined2.PANEL) {
          num = 0;
          if (controlsSpecs.mode === _undefined3.DRAWER) {
            num = c3 + c4;
          }
        }
        let tmp6 = num;
      } else {
        tmp6 = _undefined6(tmp3);
      }
      const obj = { screenBottomOffset: tmp6, safeAreaBottom: safeArea.bottom, keyboardHeight };
      const bottomOffset = _undefined7(obj).bottomOffset;
      let tmp11 = keyboardHeight <= 0 && mode === _undefined2.PANEL;
      if (tmp11) {
        tmp11 = controlsSpecs.mode === _undefined3.FLOATING_DEFAULT;
      }
      let sum = bottomOffset;
      if (tmp11) {
        sum = bottomOffset + (controlsSpecs.height + c4);
      }
      let sum1 = sum;
      if (mode === _undefined2.PIP) {
        sum1 = sum + dockHeight.dockHeight;
      }
      let num3 = 0;
      if (mode === _undefined2.PANEL) {
        num3 = 0;
        if (controlsSpecs.mode === _undefined3.FLOATING_DEFAULT) {
          num3 = tmp18;
        }
      }
      const rect = { top: num3, bottom: sum1 };
      _undefined2(c10, rect);
    }
    tmp = arg1;
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  usePIPAvoidanceSpecsTsx2.__closure = items3;
  usePIPAvoidanceSpecsTsx2.__workletHash = 1918666425620;
  usePIPAvoidanceSpecsTsx2.__initData = tmp15;
  const animatedReaction = _mod1652.useAnimatedReaction(usePIPAvoidanceSpecsTsx1, usePIPAvoidanceSpecsTsx2);
  return sharedValue;
};