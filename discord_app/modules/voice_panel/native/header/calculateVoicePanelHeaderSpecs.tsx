// === Module 11378: calculateVoicePanelHeaderSpecs ===

// Module 11378 (calculateVoicePanelHeaderSpecs)
import size from "module_2" /* 2 */;

const items = [{ code: "(function calculateVoicePanelHeaderSpecs_calculateVoicePanelHeaderSpecsTsx1(safeArea,edgeGutter){let[BASE_VOICE_PANEL_HEADER_HEIGHT]=this.__closure;const paddingTop=Math.max(edgeGutter,safeArea.top);const paddingLeft=Math.max(edgeGutter,safeArea.left);const paddingRight=Math.max(edgeGutter,safeArea.right);const height=BASE_VOICE_PANEL_HEADER_HEIGHT+paddingTop;return{height:height,paddingTop:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingRight};})" }, 44];
let c0;
[tmp2, tmp3] = items;
function calculateVoicePanelHeaderSpecs(top, arg1) {
  const bound = Math.max(arg1, top.top);
  const bound1 = Math.max(arg1, top.left);
  return { height: c0 + bound, paddingTop: bound, paddingLeft: bound1, paddingRight: Math.max(arg1, top.right) };
}
const items1 = [tmp3];
calculateVoicePanelHeaderSpecs.__closure = items1;
calculateVoicePanelHeaderSpecs.__workletHash = 618697222263;
calculateVoicePanelHeaderSpecs.__initData = tmp2;
const result = size.fileFinishedImporting("modules/voice_panel/native/header/calculateVoicePanelHeaderSpecs.tsx");

export default calculateVoicePanelHeaderSpecs;
export const BASE_VOICE_PANEL_HEADER_HEIGHT = 44;