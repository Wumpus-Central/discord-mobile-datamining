// === Module 12279: VoicePanelControlsUtils ===

// Module 12279 (VoicePanelControlsUtils)
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 12271 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12273 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 12276 */;
import size from "module_2" /* 2 */;

const VOICE_PANEL_DRAWER_MAX_WIDTH = VoicePanelConstants.VOICE_PANEL_DRAWER_MAX_WIDTH;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const CONTROLS_MAX_WIDTH = VoicePanelControlsConstants.CONTROLS_MAX_WIDTH;
function getControlsDefaultWidth(width, left, right) {
  const bound = Math.max(left, EDGE_GUTTER);
  return Math.min(width - bound - Math.max(right, EDGE_GUTTER), CONTROLS_MAX_WIDTH);
}
getControlsDefaultWidth.__closure = { EDGE_GUTTER, CONTROLS_MAX_WIDTH };
getControlsDefaultWidth.__workletHash = 5986385407902;
getControlsDefaultWidth.__initData = { code: "function getControlsDefaultWidth_VoicePanelControlsUtilsTsx1(windowWidth,safeAreaLeft,safeAreaRight){const{EDGE_GUTTER,CONTROLS_MAX_WIDTH}=this.__closure;safeAreaLeft=Math.max(safeAreaLeft,EDGE_GUTTER);safeAreaRight=Math.max(safeAreaRight,EDGE_GUTTER);return Math.min(windowWidth-safeAreaLeft-safeAreaRight,CONTROLS_MAX_WIDTH);}" };
function getControlsDrawerOpenWidth(width, left, right) {
  return Math.min(width - left - right, VOICE_PANEL_DRAWER_MAX_WIDTH);
}
getControlsDrawerOpenWidth.__closure = { VOICE_PANEL_DRAWER_MAX_WIDTH };
getControlsDrawerOpenWidth.__workletHash = 10795739180192;
getControlsDrawerOpenWidth.__initData = { code: "function getControlsDrawerOpenWidth_VoicePanelControlsUtilsTsx2(windowWidth,safeAreaLeft,safeAreaRight){const{VOICE_PANEL_DRAWER_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,VOICE_PANEL_DRAWER_MAX_WIDTH);}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/VoicePanelControlsUtils.tsx");

export { getControlsDefaultWidth };
export { getControlsDrawerOpenWidth };