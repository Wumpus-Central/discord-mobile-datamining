// === Module 18555: voiceChannelAppLayerLayout ===

// Module 18555 (voiceChannelAppLayerLayout)
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 10894 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 10899 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 10902 */;
import size from "module_2" /* 2 */;

const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
function getVoiceChannelAppLayerInsets(safeArea) {
  safeArea = safeArea.safeArea;
  ({ edgeGutter, controlsHeight, keyboardHeight } = safeArea);
  const rect = { top: calculateVoicePanelHeaderSpecsDefault(safeArea, edgeGutter).height, bottom: Math.max(controlsHeight + Math.max(safeArea.bottom, EDGE_GUTTER), keyboardHeight) };
  return rect;
}
getVoiceChannelAppLayerInsets.__closure = { calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, EDGE_GUTTER };
getVoiceChannelAppLayerInsets.__workletHash = 8817328386743;
getVoiceChannelAppLayerInsets.__initData = { code: "function getVoiceChannelAppLayerInsets_voiceChannelAppLayerLayoutTsx1({safeArea:safeArea,edgeGutter:edgeGutter,controlsHeight:controlsHeight,keyboardHeight:keyboardHeight}){const{calculateVoicePanelHeaderSpecs,EDGE_GUTTER}=this.__closure;const{height:top}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);const aboveControls=controlsHeight+Math.max(safeArea.bottom,EDGE_GUTTER);return{top:top,bottom:Math.max(aboveControls,keyboardHeight)};}" };
function shouldRestoreVoiceChannelAppControls(arg0, arg1) {
  let tmp2 = arg0 === VoicePanelControlsModes.HIDDEN;
  if (tmp2) {
    tmp2 = arg1 !== tmp.HIDDEN;
  }
  return tmp2;
}
shouldRestoreVoiceChannelAppControls.__closure = { VoicePanelControlsModes };
shouldRestoreVoiceChannelAppControls.__workletHash = 13196735107781;
shouldRestoreVoiceChannelAppControls.__initData = { code: "function shouldRestoreVoiceChannelAppControls_voiceChannelAppLayerLayoutTsx2(mode,previousMode){const{VoicePanelControlsModes}=this.__closure;return mode===VoicePanelControlsModes.HIDDEN&&previousMode!==VoicePanelControlsModes.HIDDEN;}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/voiceChannelAppLayerLayout.tsx");

export { getVoiceChannelAppLayerInsets };
export { shouldRestoreVoiceChannelAppControls };