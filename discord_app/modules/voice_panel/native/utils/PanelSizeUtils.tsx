// === Module 19490: PanelSizeUtils ===

// Module 19490 (PanelSizeUtils)
import VoicePanelConstants from "VoicePanelConstants" /* 11381 */;
import size from "module_2" /* 2 */;

const items = [{ code: "(function getMaxPanelWidth_PanelSizeUtilsTsx1({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeAreaLeft,safeAreaRight:safeAreaRight}){let[VOICE_PANEL_DRAWER_MAX_WIDTH]=this.__closure;return Math.min(windowWidth,connected?windowWidth:Math.min(VOICE_PANEL_DRAWER_MAX_WIDTH,windowWidth-safeAreaLeft-safeAreaRight));})" }, VoicePanelConstants.VOICE_PANEL_DRAWER_MAX_WIDTH];
let c0;
[tmp2, tmp3] = items;
function getMaxPanelWidth(windowWidth) {
  windowWidth = windowWidth.windowWidth;
  let bound = windowWidth;
  if (!windowWidth.connected) {
    const _Math = Math;
    bound = Math.min(c0, windowWidth - tmp - tmp2);
  }
  return Math.min(windowWidth, bound);
}
const items1 = [tmp3];
getMaxPanelWidth.__closure = items1;
getMaxPanelWidth.__workletHash = 12752720022640;
getMaxPanelWidth.__initData = tmp2;
const items2 = [{ code: "(function getPanelX_PanelSizeUtilsTsx2(windowWidth,width){return(windowWidth-width)/2;})" }];
[tmp4] = items2;
function getPanelX(width, maxPanelWidth) {
  return (width - maxPanelWidth) / 2;
}
getPanelX.__workletHash = 8538723481729;
getPanelX.__initData = tmp4;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/PanelSizeUtils.tsx");

export { getMaxPanelWidth };
export { getPanelX };