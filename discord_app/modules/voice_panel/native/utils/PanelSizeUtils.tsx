// discord_app/modules/voice_panel/native/utils/PanelSizeUtils.tsx
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const VOICE_PANEL_DRAWER_MAX_WIDTH = VoicePanelConstants.VOICE_PANEL_DRAWER_MAX_WIDTH;
function getMaxPanelWidth(windowWidth) {
  windowWidth = windowWidth.windowWidth;
  let bound = windowWidth;
  if (!windowWidth.connected) {
    const _Math = Math;
    bound = Math.min(VOICE_PANEL_DRAWER_MAX_WIDTH, windowWidth - tmp - tmp2);
  }
  return Math.min(windowWidth, bound);
}
getMaxPanelWidth.__closure = { VOICE_PANEL_DRAWER_MAX_WIDTH };
getMaxPanelWidth.__workletHash = 6813992446153;
getMaxPanelWidth.__initData = {
  code: "function getMaxPanelWidth_PanelSizeUtilsTsx1({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeAreaLeft,safeAreaRight:safeAreaRight}){const{VOICE_PANEL_DRAWER_MAX_WIDTH}=this.__closure;return Math.min(windowWidth,connected?windowWidth:Math.min(VOICE_PANEL_DRAWER_MAX_WIDTH,windowWidth-safeAreaLeft-safeAreaRight));}",
};
function getPanelX(width, maxPanelWidth) {
  return (width - maxPanelWidth) / 2;
}
getPanelX.__closure = {};
getPanelX.__workletHash = 6050807520832;
getPanelX.__initData = {
  code: "function getPanelX_PanelSizeUtilsTsx2(windowWidth,width){return(windowWidth-width)/2;}",
};
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/PanelSizeUtils.tsx");

export { getMaxPanelWidth };
export { getPanelX };
