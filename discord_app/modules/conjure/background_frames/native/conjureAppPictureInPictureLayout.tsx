// === Module 19278: conjureAppPictureInPictureLayout ===

// Module 19278 (conjureAppPictureInPictureLayout)
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2148 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11361 */;
import size from "module_2" /* 2 */;

const PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
const items = [{ code: "(function clamp_conjureAppPictureInPictureLayoutTsx1(value,min,max){return Math.min(Math.max(value,min),max);})" }];
[tmp2] = items;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__workletHash = 7077800748984;
clamp.__initData = tmp2;
const items1 = [{ code: "(function getPictureInPictureSize_conjureAppPictureInPictureLayoutTsx2(windowWidth,orientationLock){let[PICTURE_IN_PICTURE_WIDTH_RATIO,EmbeddedActivityOrientationLockState]=this.__closure;const width=Math.round(windowWidth*PICTURE_IN_PICTURE_WIDTH_RATIO);const height=Math.round(orientationLock===EmbeddedActivityOrientationLockState.LANDSCAPE?width*9/16:width*16/9);return{width:width,height:height};})" }, 0.3, EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState];
let c0;
let c1;
[tmp3, tmp4, tmp5] = items1;
function getPictureInPictureSize(windowWidth, stateFromStores) {
  const rounded = Math.round(windowWidth * c0);
  const size = { width: rounded, height: null };
  if (stateFromStores === _undefined2.LANDSCAPE) {
    let result = 9 * rounded / 16;
  } else {
    result = 16 * rounded / 9;
  }
  size.height = Math.round(result);
  return size;
}
const items2 = [tmp4, tmp5];
getPictureInPictureSize.__closure = items2;
getPictureInPictureSize.__workletHash = 6308540886186;
getPictureInPictureSize.__initData = tmp3;
const items3 = [{ code: "(function getPictureInPictureBounds_conjureAppPictureInPictureLayoutTsx3({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:size,topAvoidance:topAvoidance,bottomAvoidance:bottomAvoidance}){let[PIP_WINDOW_OFFSET]=this.__closure;const minX=Math.max(safeArea.left,PIP_WINDOW_OFFSET);const maxX=Math.max(minX,windowWidth-Math.max(safeArea.right,PIP_WINDOW_OFFSET)-size.width);const minY=Math.max(safeArea.top,PIP_WINDOW_OFFSET)+topAvoidance;const maxY=Math.max(minY,windowHeight-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)-bottomAvoidance-size.height);return{minX:minX,maxX:maxX,minY:minY,maxY:maxY};})" }, PIP_WINDOW_OFFSET];
let closure_129_0;
[tmp6, tmp7] = items3;
function getPictureInPictureBounds(arg0) {
  ({ safeArea, size } = arg0);
  ({ windowWidth, windowHeight, topAvoidance, bottomAvoidance } = arg0);
  const bound = Math.max(safeArea.left, c0);
  const bound1 = Math.max(bound, windowWidth - Math.max(safeArea.right, c0) - size.width);
  const sum = Math.max(safeArea.top, c0) + topAvoidance;
  return { minX: bound, maxX: bound1, minY: sum, maxY: Math.max(sum, windowHeight - Math.max(safeArea.bottom, c0) - bottomAvoidance - size.height) };
}
const items4 = [tmp7];
getPictureInPictureBounds.__closure = items4;
getPictureInPictureBounds.__workletHash = 11032575723639;
getPictureInPictureBounds.__initData = tmp6;
const items5 = [{ code: "(function clampToBounds_conjureAppPictureInPictureLayoutTsx4(point,bounds){let[clamp]=this.__closure;return{x:clamp(point.x,bounds.minX,bounds.maxX),y:clamp(point.y,bounds.minY,bounds.maxY)};})" }, clamp];
let closure_130_0;
[tmp8, tmp9] = items5;
function clampToBounds(arg0, minX) {
  const point = { x: _undefined(arg0.x, minX.minX, minX.maxX), y: _undefined(arg0.y, minX.minY, minX.maxY) };
  return point;
}
const items6 = [tmp9];
clampToBounds.__closure = items6;
clampToBounds.__workletHash = 17164120477093;
clampToBounds.__initData = tmp8;
const items7 = [{ code: "(function getPictureInPictureWindowSize_conjureAppPictureInPictureLayoutTsx5(size,interactive){let[INTERACTIVE_HANDLE_HEIGHT]=this.__closure;return interactive?{width:size.width,height:size.height+INTERACTIVE_HANDLE_HEIGHT}:size;})" }, 30];
let closure_131_0;
[tmp10, tmp11] = items7;
function getPictureInPictureWindowSize(c2, c10) {
  let tmp = styles;
  if (c10) {
    const size = { width: styles.width, height: styles.height + c0 };
    tmp = size;
  }
  return tmp;
}
const items8 = [tmp11];
getPictureInPictureWindowSize.__closure = items8;
getPictureInPictureWindowSize.__workletHash = 11497198591141;
getPictureInPictureWindowSize.__initData = tmp10;
const items9 = [{ code: "(function getStackedPosition_conjureAppPictureInPictureLayoutTsx6(stackOffset,bounds){let[clampToBounds]=this.__closure;return clampToBounds({x:bounds.maxX,y:bounds.maxY-stackOffset},bounds);})" }, clampToBounds];
let closure_132_0;
[tmp12, tmp13] = items9;
function getStackedPosition(c1, maxX) {
  const point = { x: maxX.maxX, y: maxX.maxY - c1 };
  return _undefined(point, maxX);
}
const items10 = [tmp13];
getStackedPosition.__closure = items10;
getStackedPosition.__workletHash = 9416356719888;
getStackedPosition.__initData = tmp12;
const items11 = [{ code: "(function getSnappedPosition_conjureAppPictureInPictureLayoutTsx7(point,velocity,bounds){let[SNAP_PROJECTION_SECONDS,clamp]=this.__closure;const projectedX=point.x+velocity.x*SNAP_PROJECTION_SECONDS;const projectedY=point.y+velocity.y*SNAP_PROJECTION_SECONDS;return{x:projectedX<(bounds.minX+bounds.maxX)/2?bounds.minX:bounds.maxX,y:clamp(projectedY,bounds.minY,bounds.maxY)};})" }, 0.1, clamp];
let closure_133_0;
let closure_133_1;
[tmp14, tmp15, tmp16] = items11;
function getSnappedPosition(arg0, arg1, minX) {
  const point = { x: arg0.x + arg1.x * c0 < (minX.minX + minX.maxX) / 2 ? minX.minX : minX.maxX, y: _undefined2(arg0.y + arg1.y * c0, minX.minY, minX.maxY) };
  return point;
}
const items12 = [tmp15, tmp16];
getSnappedPosition.__closure = items12;
getSnappedPosition.__workletHash = 17556106306299;
getSnappedPosition.__initData = tmp14;
const items13 = [{ code: "(function getCloseTargetCenter_conjureAppPictureInPictureLayoutTsx8(windowWidth,windowHeight,safeArea){let[PIP_WINDOW_OFFSET,CLOSE_TARGET_BOTTOM_INSET,CLOSE_TARGET_SIZE]=this.__closure;return{x:windowWidth/2,y:windowHeight-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)-CLOSE_TARGET_BOTTOM_INSET-CLOSE_TARGET_SIZE/2};})" }, PIP_WINDOW_OFFSET, 24, 56];
let closure_134_0;
let closure_134_1;
let closure_134_2;
[tmp17, tmp18, tmp19, tmp20] = items13;
function getCloseTargetCenter(width, height, bottom) {
  const point = { x: width / 2, y: height - Math.max(bottom.bottom, c0) - c1 - React2 / 2 };
  return point;
}
const items14 = [tmp18, tmp19, tmp20];
getCloseTargetCenter.__closure = items14;
getCloseTargetCenter.__workletHash = 1188213190434;
getCloseTargetCenter.__initData = tmp17;
const items15 = [{ code: "(function isOverCloseTarget_conjureAppPictureInPictureLayoutTsx9(finger,closeTargetCenter){let[CLOSE_TARGET_HIT_RADIUS]=this.__closure;const dx=finger.x-closeTargetCenter.x;const dy=finger.y-closeTargetCenter.y;return dx*dx+dy*dy<=CLOSE_TARGET_HIT_RADIUS*CLOSE_TARGET_HIT_RADIUS;})" }, 64];
let closure_135_0;
[tmp21, tmp22] = items15;
function isOverCloseTarget(arg0, arg1) {
  const diff = arg0.x - arg1.x;
  const diff1 = arg0.y - arg1.y;
  return diff * diff + diff1 * diff1 <= c0 * c0;
}
const items16 = [tmp22];
isOverCloseTarget.__closure = items16;
isOverCloseTarget.__workletHash = 909493288975;
isOverCloseTarget.__initData = tmp21;
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/conjureAppPictureInPictureLayout.tsx");

export const PICTURE_IN_PICTURE_WIDTH_RATIO = 0.3;
export const PICTURE_IN_PICTURE_STACK_GAP = 8;
export const CLOSE_TARGET_SIZE = 56;
export const CLOSE_TARGET_BOTTOM_INSET = 24;
export const INTERACTIVE_HANDLE_HEIGHT = 30;
export const CLOSE_TARGET_HIT_RADIUS = 64;
export { getPictureInPictureSize };
export { getPictureInPictureBounds };
export { clampToBounds };
export { getPictureInPictureWindowSize };
export function getStackOffsets(stateFromStoresArray) {
  closure_0 = 0;
  return stateFromStoresArray.map((item) => {
    closure_0 = closure_0 + (item + 8);
    return closure_0;
  });
}
export { getStackedPosition };
export { getSnappedPosition };
export { getCloseTargetCenter };
export { isOverCloseTarget };