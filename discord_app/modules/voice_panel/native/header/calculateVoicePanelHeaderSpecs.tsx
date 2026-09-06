// discord_app/modules/voice_panel/native/header/calculateVoicePanelHeaderSpecs.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const fn = function t(top, arg1) {
  const bound = Math.max(arg1, top.top);
  return {
    height: 44 + bound,
    paddingTop: bound,
    paddingLeft: Math.max(arg1, top.left),
    paddingRight: Math.max(arg1, top.right),
  };
};
fn.__closure = { BASE_VOICE_PANEL_HEADER_HEIGHT: 44 };
fn.__workletHash = 6201232972174;
fn.__initData = {
  code: "function calculateVoicePanelHeaderSpecs_calculateVoicePanelHeaderSpecsTsx1(safeArea,edgeGutter){const{BASE_VOICE_PANEL_HEADER_HEIGHT}=this.__closure;const paddingTop=Math.max(edgeGutter,safeArea.top);const paddingLeft=Math.max(edgeGutter,safeArea.left);const paddingRight=Math.max(edgeGutter,safeArea.right);const height=BASE_VOICE_PANEL_HEADER_HEIGHT+paddingTop;return{height:height,paddingTop:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingRight};}",
};
const result = size.fileFinishedImporting("modules/voice_panel/native/header/calculateVoicePanelHeaderSpecs.tsx");

export default fn;
export const BASE_VOICE_PANEL_HEADER_HEIGHT = 44;
