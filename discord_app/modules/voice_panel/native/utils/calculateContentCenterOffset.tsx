// === Module 19514: calculateContentCenterOffset ===

// Module 19514 (calculateContentCenterOffset)
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11413 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12628 */;
import size from "module_2" /* 2 */;

const items = [{ code: "(function calculateContentCenterOffset_calculateContentCenterOffsetTsx1({contentHeight:contentHeight,windowHeight:windowHeight,safeArea:safeArea}){let[EDGE_GUTTER,roundToNearestPixel]=this.__closure;const safeAreaTop=Math.max(safeArea.top,EDGE_GUTTER);const safeAreaBottom=Math.max(safeArea.bottom,EDGE_GUTTER);if(windowHeight<=contentHeight){return safeAreaTop;}return Math.max(safeAreaTop,safeAreaTop+roundToNearestPixel((windowHeight-safeAreaTop-safeAreaBottom-contentHeight)/2));})" }, VoicePanelCardConstants.EDGE_GUTTER, roundToNearestPixelDefault];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
function calculateContentCenterOffset(arg0) {
  ({ contentHeight, windowHeight, safeArea } = arg0);
  const bound = Math.max(safeArea.top, c0);
  let bound1 = bound;
  if (windowHeight > contentHeight) {
    const _Math = Math;
    bound1 = Math.max(bound, bound + _undefined((windowHeight - bound - tmp2 - contentHeight) / 2));
  }
  return bound1;
}
const items1 = [tmp3, tmp4];
calculateContentCenterOffset.__closure = items1;
calculateContentCenterOffset.__workletHash = 11716994088515;
calculateContentCenterOffset.__initData = tmp2;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/calculateContentCenterOffset.tsx");

export default calculateContentCenterOffset;