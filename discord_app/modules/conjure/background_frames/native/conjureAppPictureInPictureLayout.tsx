// discord_app/modules/conjure/background_frames/native/conjureAppPictureInPictureLayout.tsx
import EmbeddedActivityOrientationLockState from "../../../../../discord_common/js/shared/shared-constants/EmbeddedActivityOrientationLockState.tsx";
import MorphablePanelConstants from "../../../panels/morphable/native/MorphablePanelConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__closure = {};
clamp.__workletHash = 12368692033913;
clamp.__initData = {
  code: "function clamp_conjureAppPictureInPictureLayoutTsx1(value,min,max){return Math.min(Math.max(value,min),max);}",
};
function getPictureInPictureSize(windowWidth, stateFromStores) {
  const rounded = Math.round(0.3 * windowWidth);
  const size = { width: rounded, height: null };
  if (stateFromStores === EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE) {
    let result = (9 * rounded) / 16;
  } else {
    result = (16 * rounded) / 9;
  }
  size.height = Math.round(result);
  return size;
}
getPictureInPictureSize.__closure = {
  PICTURE_IN_PICTURE_WIDTH_RATIO: 0.3,
  EmbeddedActivityOrientationLockState: EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState,
};
getPictureInPictureSize.__workletHash = 3721909897491;
getPictureInPictureSize.__initData = {
  code: "function getPictureInPictureSize_conjureAppPictureInPictureLayoutTsx2(windowWidth,orientationLock){const{PICTURE_IN_PICTURE_WIDTH_RATIO,EmbeddedActivityOrientationLockState}=this.__closure;const width=Math.round(windowWidth*PICTURE_IN_PICTURE_WIDTH_RATIO);const height=Math.round(orientationLock===EmbeddedActivityOrientationLockState.LANDSCAPE?width*9/16:width*16/9);return{width:width,height:height};}",
};
function getPictureInPictureBounds(arg0) {
  ({ safeArea, size } = arg0);
  ({ windowWidth, windowHeight, topAvoidance, bottomAvoidance } = arg0);
  const bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
  const bound1 = Math.max(bound, windowWidth - Math.max(safeArea.right, PIP_WINDOW_OFFSET) - size.width);
  const sum = Math.max(safeArea.top, PIP_WINDOW_OFFSET) + topAvoidance;
  return {
    minX: bound,
    maxX: bound1,
    minY: sum,
    maxY: Math.max(sum, windowHeight - Math.max(safeArea.bottom, PIP_WINDOW_OFFSET) - bottomAvoidance - size.height),
  };
}
getPictureInPictureBounds.__closure = { PIP_WINDOW_OFFSET };
getPictureInPictureBounds.__workletHash = 14107107321006;
getPictureInPictureBounds.__initData = {
  code: "function getPictureInPictureBounds_conjureAppPictureInPictureLayoutTsx3({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:size,topAvoidance:topAvoidance,bottomAvoidance:bottomAvoidance}){const{PIP_WINDOW_OFFSET}=this.__closure;const minX=Math.max(safeArea.left,PIP_WINDOW_OFFSET);const maxX=Math.max(minX,windowWidth-Math.max(safeArea.right,PIP_WINDOW_OFFSET)-size.width);const minY=Math.max(safeArea.top,PIP_WINDOW_OFFSET)+topAvoidance;const maxY=Math.max(minY,windowHeight-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)-bottomAvoidance-size.height);return{minX:minX,maxX:maxX,minY:minY,maxY:maxY};}",
};
function clampToBounds(value, arg1) {
  if (typeof clamp === "function") {
    const point = { x: null, y: null };
    const _Math = Math;
    const _Math2 = Math;
    point.x = Math.min(Math.max(tmp2, tmp3), tmp4);
    if (typeof tmp === "function") {
      const _Math3 = Math;
      const _Math4 = Math;
      point.y = Math.min(Math.max(tmp6, tmp7), tmp8);
      return point;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
clampToBounds.__closure = { clamp };
clampToBounds.__workletHash = 9618981100092;
clampToBounds.__initData = {
  code: "function clampToBounds_conjureAppPictureInPictureLayoutTsx4(point,bounds){const{clamp}=this.__closure;return{x:clamp(point.x,bounds.minX,bounds.maxX),y:clamp(point.y,bounds.minY,bounds.maxY)};}",
};
function getPictureInPictureWindowSize(pictureInPictureSize, c13) {
  let tmp = pictureInPictureSize;
  if (c13) {
    const size = { width: pictureInPictureSize.width, height: pictureInPictureSize.height + 30 };
    tmp = size;
  }
  return tmp;
}
getPictureInPictureWindowSize.__closure = { INTERACTIVE_HANDLE_HEIGHT: 30 };
getPictureInPictureWindowSize.__workletHash = 9729773004860;
getPictureInPictureWindowSize.__initData = {
  code: "function getPictureInPictureWindowSize_conjureAppPictureInPictureLayoutTsx5(size,interactive){const{INTERACTIVE_HANDLE_HEIGHT}=this.__closure;return interactive?{width:size.width,height:size.height+INTERACTIVE_HANDLE_HEIGHT}:size;}",
};
function getStackedPosition(stackOffset, arg1) {
  if (typeof clampToBounds === "function") {
    if (typeof clamp === "function") {
      const point = { x: null, y: null };
      const _Math = Math;
      const _Math2 = Math;
      point.x = Math.min(Math.max(tmp, tmp4), tmp5);
      if (typeof tmp3 === "function") {
        const _Math3 = Math;
        const _Math4 = Math;
        point.y = Math.min(Math.max(tmp2, tmp7), tmp8);
        return point;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
getStackedPosition.__closure = { clampToBounds };
getStackedPosition.__workletHash = 17153921566825;
getStackedPosition.__initData = {
  code: "function getStackedPosition_conjureAppPictureInPictureLayoutTsx6(stackOffset,bounds){const{clampToBounds}=this.__closure;return clampToBounds({x:bounds.maxX,y:bounds.maxY-stackOffset},bounds);}",
};
function getSnappedPosition(value, point, minX) {
  point = { x: value.x + 0.1 * point.x < (minX.minX + minX.maxX) / 2 ? minX.minX : minX.maxX, y: null };
  if (typeof clamp === "function") {
    const _Math = Math;
    const _Math2 = Math;
    point.y = Math.min(Math.max(tmp, tmp2), tmp3);
    return point;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
getSnappedPosition.__closure = { SNAP_PROJECTION_SECONDS: 0.1, clamp };
getSnappedPosition.__workletHash = 8844429787202;
getSnappedPosition.__initData = {
  code: "function getSnappedPosition_conjureAppPictureInPictureLayoutTsx7(point,velocity,bounds){const{SNAP_PROJECTION_SECONDS,clamp}=this.__closure;const projectedX=point.x+velocity.x*SNAP_PROJECTION_SECONDS;const projectedY=point.y+velocity.y*SNAP_PROJECTION_SECONDS;return{x:projectedX<(bounds.minX+bounds.maxX)/2?bounds.minX:bounds.maxX,y:clamp(projectedY,bounds.minY,bounds.maxY)};}",
};
function getCloseTargetCenter(width, height, bottom) {
  const point = { x: width / 2, y: height - Math.max(bottom.bottom, PIP_WINDOW_OFFSET) - 24 - 28 };
  return point;
}
getCloseTargetCenter.__closure = { PIP_WINDOW_OFFSET, CLOSE_TARGET_BOTTOM_INSET: 24, CLOSE_TARGET_SIZE: 56 };
getCloseTargetCenter.__workletHash = 15997313805499;
getCloseTargetCenter.__initData = {
  code: "function getCloseTargetCenter_conjureAppPictureInPictureLayoutTsx8(windowWidth,windowHeight,safeArea){const{PIP_WINDOW_OFFSET,CLOSE_TARGET_BOTTOM_INSET,CLOSE_TARGET_SIZE}=this.__closure;return{x:windowWidth/2,y:windowHeight-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)-CLOSE_TARGET_BOTTOM_INSET-CLOSE_TARGET_SIZE/2};}",
};
function isOverCloseTarget(point2, closeTargetCenter) {
  const diff = point2.x - closeTargetCenter.x;
  const diff1 = point2.y - closeTargetCenter.y;
  return diff * diff + diff1 * diff1 <= 4096;
}
isOverCloseTarget.__closure = { CLOSE_TARGET_HIT_RADIUS: 64 };
isOverCloseTarget.__workletHash = 13720272571030;
isOverCloseTarget.__initData = {
  code: "function isOverCloseTarget_conjureAppPictureInPictureLayoutTsx9(finger,closeTargetCenter){const{CLOSE_TARGET_HIT_RADIUS}=this.__closure;const dx=finger.x-closeTargetCenter.x;const dy=finger.y-closeTargetCenter.y;return dx*dx+dy*dy<=CLOSE_TARGET_HIT_RADIUS*CLOSE_TARGET_HIT_RADIUS;}",
};
let result = size.fileFinishedImporting(
  "modules/conjure/background_frames/native/conjureAppPictureInPictureLayout.tsx",
);

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
