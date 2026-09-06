// === Module 17135: calculateContentCenterOffset ===

// Module 17135 (calculateContentCenterOffset)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10993 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 12276 */;
import size from "module_2" /* 2 */;

const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const fn = function t(arg0) {
  ({ contentHeight, windowHeight, safeArea } = arg0);
  const bound = Math.max(safeArea.top, EDGE_GUTTER);
  let bound1 = bound;
  if (windowHeight > contentHeight) {
    const _Math = Math;
    bound1 = Math.max(bound, bound + roundToNearestPixelDefault((windowHeight - bound - tmp2 - contentHeight) / 2));
  }
  return bound1;
};
fn.__closure = { EDGE_GUTTER, roundToNearestPixel: roundToNearestPixelDefault };
fn.__workletHash = 9988657249690;
fn.__initData = { code: "function calculateContentCenterOffset_calculateContentCenterOffsetTsx1({contentHeight:contentHeight,windowHeight:windowHeight,safeArea:safeArea}){const{EDGE_GUTTER,roundToNearestPixel}=this.__closure;const safeAreaTop=Math.max(safeArea.top,EDGE_GUTTER);const safeAreaBottom=Math.max(safeArea.bottom,EDGE_GUTTER);if(windowHeight<=contentHeight){return safeAreaTop;}return Math.max(safeAreaTop,safeAreaTop+roundToNearestPixel((windowHeight-safeAreaTop-safeAreaBottom-contentHeight)/2));}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/calculateContentCenterOffset.tsx");

export default fn;