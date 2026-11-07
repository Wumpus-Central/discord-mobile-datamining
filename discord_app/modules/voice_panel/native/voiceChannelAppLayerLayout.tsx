// === Module 19660: voiceChannelAppLayerLayout ===

// Module 19660 (voiceChannelAppLayerLayout)
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11369 */;

const items = [{ code: "(function getVoiceChannelAppLayerInsets_voiceChannelAppLayerLayoutTsx1({safeArea:safeArea,edgeGutter:edgeGutter,controlsHeight:controlsHeight,keyboardHeight:keyboardHeight}){let[calculateVoicePanelHeaderSpecs,EDGE_GUTTER]=this.__closure;const{height:top}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);const aboveControls=controlsHeight+Math.max(safeArea.bottom,EDGE_GUTTER);return{top:top,bottom:Math.max(aboveControls,keyboardHeight)};})" }, calculateVoicePanelHeaderSpecsDefault, fn(11366).EDGE_GUTTER];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
function getVoiceChannelAppLayerInsets(safeArea) {
  safeArea = safeArea.safeArea;
  ({ controlsHeight, keyboardHeight } = safeArea);
  const rect = { top: _undefined(safeArea, safeArea.edgeGutter).height, bottom: Math.max(controlsHeight + Math.max(safeArea.bottom, c1), keyboardHeight) };
  return rect;
}
const items1 = [tmp3, tmp4];
getVoiceChannelAppLayerInsets.__closure = items1;
getVoiceChannelAppLayerInsets.__workletHash = 7735597438766;
getVoiceChannelAppLayerInsets.__initData = tmp2;
const items2 = [{ code: "(function shouldRestoreVoiceChannelAppControls_voiceChannelAppLayerLayoutTsx2(mode,previousMode){let[VoicePanelControlsModes]=this.__closure;return mode===VoicePanelControlsModes.HIDDEN&&previousMode!==VoicePanelControlsModes.HIDDEN;})" }, fn(11361).VoicePanelControlsModes];
let closure_129_0;
[tmp5, tmp6] = items2;
function shouldRestoreVoiceChannelAppControls(arg0, arg1) {
  let tmp2 = arg0 === _undefined.HIDDEN;
  if (tmp2) {
    tmp2 = arg1 !== tmp.HIDDEN;
  }
  return tmp2;
}
const items3 = [tmp6];
shouldRestoreVoiceChannelAppControls.__closure = items3;
shouldRestoreVoiceChannelAppControls.__workletHash = 4270968111996;
shouldRestoreVoiceChannelAppControls.__initData = tmp5;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/voiceChannelAppLayerLayout.tsx");

export { getVoiceChannelAppLayerInsets };
export { shouldRestoreVoiceChannelAppControls };