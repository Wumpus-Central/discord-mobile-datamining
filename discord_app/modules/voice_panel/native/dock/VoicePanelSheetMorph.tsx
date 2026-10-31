// discord_app/modules/voice_panel/native/dock/VoicePanelSheetMorph.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const SHEET_MORPH_DOCKING_DOCK_FADE = { start: 0.08, end: 0.4 };
const obj2 = { start: 0.03, end: 0.25 };
function getSheetMorphFadeProgress(diff, start, end) {
  const bound = Math.min(Math.max((diff - start) / (end - start), 0), 1);
  return bound * bound * (3 - 2 * bound);
}
getSheetMorphFadeProgress.__closure = {};
getSheetMorphFadeProgress.__workletHash = 15062908432091;
getSheetMorphFadeProgress.__initData = {
  code: "function getSheetMorphFadeProgress_VoicePanelSheetMorphTsx1(progress,start,end){const t=Math.min(Math.max((progress-start)/(end-start),0),1);return t*t*(3-2*t);}",
};
function isDockRowTouchable(diff) {
  return diff < 0.5;
}
isDockRowTouchable.__closure = {};
isDockRowTouchable.__workletHash = 12531841394797;
isDockRowTouchable.__initData = {
  code: "function isDockRowTouchable_VoicePanelSheetMorphTsx2(progress){return progress<0.5;}",
};
function getDockRowOpacity(diff, value, dockContentSwap) {
  const start = value ? obj2 : obj.start;
  if (typeof getSheetMorphFadeProgress === "function") {
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(Math.max((diff - start) / (tmp4 - start), 0), 1);
    return 1 - tmp3(dockContentSwap, bound * bound * (3 - 2 * bound));
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmp = value ? obj2 : obj;
}
getDockRowOpacity.__closure = {
  SHEET_MORPH_EXPANDING_DOCK_FADE: obj2,
  SHEET_MORPH_DOCKING_DOCK_FADE,
  getSheetMorphFadeProgress,
};
getDockRowOpacity.__workletHash = 819159737000;
getDockRowOpacity.__initData = {
  code: "function getDockRowOpacity_VoicePanelSheetMorphTsx3(progress,expanding,swapProgress){const{SHEET_MORPH_EXPANDING_DOCK_FADE,SHEET_MORPH_DOCKING_DOCK_FADE,getSheetMorphFadeProgress}=this.__closure;const fade=expanding?SHEET_MORPH_EXPANDING_DOCK_FADE:SHEET_MORPH_DOCKING_DOCK_FADE;return 1-Math.max(swapProgress,getSheetMorphFadeProgress(progress,fade.start,fade.end));}",
};
function getDockRect(size, dockHeight) {
  size = { x: size.x, y: size.y + Math.max(size.height - dockHeight, 0), width: size.width, height: size.height };
  return size;
}
getDockRect.__closure = {};
getDockRect.__workletHash = 5322812792851;
getDockRect.__initData = {
  code: "function getDockRect_VoicePanelSheetMorphTsx4(origin,dockHeight){return{x:origin.x,y:origin.y+Math.max(origin.height-dockHeight,0),width:origin.width,height:origin.height};}",
};
function shrinkDockAroundCenter(progress, arg1, dockRect) {
  const sum = arg1.x + arg1.width / 2;
  const sum1 = arg1.y + arg1.height / 2;
  return {
    centerX: sum + (dockRect.x + dockRect.width / 2 - sum) * progress,
    centerY: sum1 + (dockRect.y + dockRect.height / 2 - sum1) * progress,
    width: arg1.width + (dockRect.width - arg1.width) * progress,
  };
}
shrinkDockAroundCenter.__closure = {};
shrinkDockAroundCenter.__workletHash = 6992938032358;
shrinkDockAroundCenter.__initData = {
  code: "function shrinkDockAroundCenter_VoicePanelSheetMorphTsx5(progress,from,to){const fromCenterX=from.x+from.width/2;const fromCenterY=from.y+from.height/2;const toCenterX=to.x+to.width/2;const toCenterY=to.y+to.height/2;return{centerX:fromCenterX+(toCenterX-fromCenterX)*progress,centerY:fromCenterY+(toCenterY-fromCenterY)*progress,width:from.width+(to.width-from.width)*progress};}",
};
function scaleDockAroundCenter(width, drawerWidth, drawerHeight) {
  let num = 1;
  if (drawerWidth > 0) {
    num = width.width / drawerWidth;
  }
  return { translateX: width.centerX - drawerWidth / 2, translateY: width.centerY - drawerHeight / 2, scale: num };
}
scaleDockAroundCenter.__closure = {};
scaleDockAroundCenter.__workletHash = 4551889713867;
scaleDockAroundCenter.__initData = {
  code: "function scaleDockAroundCenter_VoicePanelSheetMorphTsx6(geometry,naturalWidth,naturalHeight){const scale=naturalWidth>0?geometry.width/naturalWidth:1;return{translateX:geometry.centerX-naturalWidth/2,translateY:geometry.centerY-naturalHeight/2,scale:scale};}",
};
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelSheetMorph.tsx");

export const DOCK_SPACE_SPRING_CONFIG = {
  damping: 54,
  stiffness: 800,
  mass: 1.5,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};
export const SHEET_MORPH_PHYSICS = {
  mass: 0.5,
  damping: 24,
  stiffness: 220,
  overshootClamping: true,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.01,
};
export const SHEET_MORPH_DOCKING_PANEL_FADE = { start: 0.3, end: 0.85 };
export { SHEET_MORPH_DOCKING_DOCK_FADE };
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
