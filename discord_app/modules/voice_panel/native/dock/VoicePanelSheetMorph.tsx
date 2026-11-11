// === Module 11956: VoicePanelSheetMorph ===

// Module 11956 (VoicePanelSheetMorph)
import size from "module_2" /* 2 */;

const items = [{ code: "(function getSheetMorphFadeProgress_VoicePanelSheetMorphTsx1(progress,start,end){const t=Math.min(Math.max((progress-start)/(end-start),0),1);return t*t*(3-2*t);})" }];
[tmp2] = items;
function getSheetMorphFadeProgress(arg0, arg1, arg2) {
  const bound = Math.min(Math.max((arg0 - arg1) / (arg2 - arg1), 0), 1);
  return bound * bound * (3 - 2 * bound);
}
getSheetMorphFadeProgress.__workletHash = 14929975590298;
getSheetMorphFadeProgress.__initData = tmp2;
const items1 = [{ code: "(function isDockRowTouchable_VoicePanelSheetMorphTsx2(progress){return progress<0.5;})" }];
[tmp3] = items1;
const obj = { start: 0.08, end: 0.4 };
const obj2 = { start: 0.03, end: 0.25 };
function isDockRowTouchable(arg0) {
  return arg0 < 0.5;
}
isDockRowTouchable.__workletHash = 2160951466316;
isDockRowTouchable.__initData = tmp3;
const items2 = [{ code: "(function getDockRowOpacity_VoicePanelSheetMorphTsx3(progress,expanding,swapProgress){let[SHEET_MORPH_EXPANDING_DOCK_FADE,SHEET_MORPH_DOCKING_DOCK_FADE,getSheetMorphFadeProgress]=this.__closure;const fade=expanding?SHEET_MORPH_EXPANDING_DOCK_FADE:SHEET_MORPH_DOCKING_DOCK_FADE;return 1-Math.max(swapProgress,getSheetMorphFadeProgress(progress,fade.start,fade.end));})" }, obj2, obj, getSheetMorphFadeProgress];
let c0;
let c1;
let c2;
[tmp4, tmp5, tmp6, tmp7] = items2;
function getDockRowOpacity(arg0, arg1, arg2) {
  const tmp = arg1 ? c0 : c1;
  return 1 - Math.max(arg2, _undefined(arg0, tmp.start, tmp.end));
}
const items3 = [tmp5, tmp6, tmp7];
getDockRowOpacity.__closure = items3;
getDockRowOpacity.__workletHash = 12689454059185;
getDockRowOpacity.__initData = tmp4;
const items4 = [{ code: "(function getDockRect_VoicePanelSheetMorphTsx4(origin,dockHeight){return{x:origin.x,y:origin.y+Math.max(origin.height-dockHeight,0),width:origin.width,height:origin.height};})" }];
[tmp8] = items4;
function getDockRect(arg0, arg1) {
  const size = { x: arg0.x, y: arg0.y + Math.max(arg0.height - arg1, 0), width: arg0.width, height: arg0.height };
  return size;
}
getDockRect.__workletHash = 9201551040210;
getDockRect.__initData = tmp8;
const items5 = [{ code: "(function shrinkDockAroundCenter_VoicePanelSheetMorphTsx5(progress,from,to){const fromCenterX=from.x+from.width/2;const fromCenterY=from.y+from.height/2;const toCenterX=to.x+to.width/2;const toCenterY=to.y+to.height/2;return{centerX:fromCenterX+(toCenterX-fromCenterX)*progress,centerY:fromCenterY+(toCenterY-fromCenterY)*progress,width:from.width+(to.width-from.width)*progress};})" }];
[tmp9] = items5;
function shrinkDockAroundCenter(arg0, arg1, arg2) {
  const sum = arg1.x + arg1.width / 2;
  const sum1 = arg1.y + arg1.height / 2;
  return { centerX: sum + (arg2.x + arg2.width / 2 - sum) * arg0, centerY: sum1 + (arg2.y + arg2.height / 2 - sum1) * arg0, width: arg1.width + (arg2.width - arg1.width) * arg0 };
}
shrinkDockAroundCenter.__workletHash = 13740556991207;
shrinkDockAroundCenter.__initData = tmp9;
const items6 = [{ code: "(function scaleDockAroundCenter_VoicePanelSheetMorphTsx6(geometry,naturalWidth,naturalHeight){const scale=naturalWidth>0?geometry.width/naturalWidth:1;return{translateX:geometry.centerX-naturalWidth/2,translateY:geometry.centerY-naturalHeight/2,scale:scale};})" }];
[tmp10] = items6;
function scaleDockAroundCenter(width, arg1, arg2) {
  let num = 1;
  if (arg1 > 0) {
    num = width.width / arg1;
  }
  return { translateX: width.centerX - arg1 / 2, translateY: width.centerY - arg2 / 2, scale: num };
}
scaleDockAroundCenter.__workletHash = 336939310314;
scaleDockAroundCenter.__initData = tmp10;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelSheetMorph.tsx");

export const DOCK_SPACE_SPRING_CONFIG = { damping: 54, stiffness: 800, mass: 1.5, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
export const SHEET_MORPH_PHYSICS = { mass: 0.5, damping: 24, stiffness: 220, overshootClamping: true, restDisplacementThreshold: 0.001, restSpeedThreshold: 0.01 };
export const SHEET_MORPH_DOCKING_PANEL_FADE = { start: 0.3, end: 0.85 };
export const SHEET_MORPH_DOCKING_DOCK_FADE = obj;
export const SHEET_MORPH_EXPANDING_PANEL_FADE = { start: 0.1, end: 0.45 };
export const SHEET_MORPH_EXPANDING_DOCK_FADE = obj2;
export const SHEET_MORPH_JOINING_PANEL_FADE = { start: 0.75, end: 1 };
export const DOCK_CONTENT_SWAP_TIMING = { duration: 80 };
export const SHEET_COMMIT_FLING_VELOCITY = 800;
export { getSheetMorphFadeProgress };
export { isDockRowTouchable };
export { getDockRowOpacity };
export { getDockRect };
export { shrinkDockAroundCenter };
export { scaleDockAroundCenter };