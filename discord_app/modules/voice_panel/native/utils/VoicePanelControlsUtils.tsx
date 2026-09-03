// === Module 12075: VOICE_PANEL_DRAWER_MAX_WIDTH ===

// Module 12075 (VOICE_PANEL_DRAWER_MAX_WIDTH)
import set from "set" /* 2 */;
import VoicePanelControlsModes from "VoicePanelControlsModes" /* 12067 */;
import VoicePanelModes from "VoicePanelModes" /* 12069 */;
import CARD_SIZE from "CARD_SIZE" /* 12072 */;

const VOICE_PANEL_DRAWER_MAX_WIDTH = VoicePanelModes.VOICE_PANEL_DRAWER_MAX_WIDTH;
const EDGE_GUTTER = CARD_SIZE.EDGE_GUTTER;
const CONTROLS_MAX_WIDTH = VoicePanelControlsModes.CONTROLS_MAX_WIDTH;
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
const result = set.fileFinishedImporting("modules/voice_panel/native/utils/VoicePanelControlsUtils.tsx");

export { getControlsDefaultWidth };
export { getControlsDrawerOpenWidth };