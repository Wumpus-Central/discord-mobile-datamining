// === Module 11445: t ===

// Module 11445 (t)
import obj132 from "obj132" /* 2 */;

const fn = function t(top) {
  const bound = Math.max(arg1, top.top);
  return { height: 44 + bound, paddingTop: bound, paddingLeft: Math.max(arg1, top.left), paddingRight: Math.max(arg1, top.right) };
};
fn.__closure = { BASE_VOICE_PANEL_HEADER_HEIGHT: 44 };
fn.__workletHash = 6201232972174;
fn.__initData = { code: "function calculateVoicePanelHeaderSpecs_calculateVoicePanelHeaderSpecsTsx1(safeArea,edgeGutter){const{BASE_VOICE_PANEL_HEADER_HEIGHT}=this.__closure;const paddingTop=Math.max(edgeGutter,safeArea.top);const paddingLeft=Math.max(edgeGutter,safeArea.left);const paddingRight=Math.max(edgeGutter,safeArea.right);const height=BASE_VOICE_PANEL_HEADER_HEIGHT+paddingTop;return{height:height,paddingTop:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingRight};}" };
const result = obj132.fileFinishedImporting("modules/voice_panel/native/header/calculateVoicePanelHeaderSpecs.tsx");

export default fn;
export const BASE_VOICE_PANEL_HEADER_HEIGHT = 44;