// === Module 19433: MorphablePanelUtils ===

// Module 19433 (MorphablePanelUtils)
import MorphablePanelConstants from "MorphablePanelConstants" /* 11382 */;
import size from "module_2" /* 2 */;

let items = [{ code: "(function clamp_MorphablePanelUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);})" }];
[tmp3] = items;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__workletHash = 14047277375149;
clamp.__initData = tmp3;
const items1 = [{ code: "(function calculateXYDiff_MorphablePanelUtilsTsx2(event,initialGestureOffset){const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=initialGestureOffset.get().absoluteYStart-absoluteY;const xDiff=initialGestureOffset.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;return{absoluteX:absoluteX,absoluteY:absoluteY,xDiff:xDiff,yDiff:yDiff,isNotPullDownGesture:isNotPullDownGesture,absoluteMovement:absoluteMovement};})" }];
[tmp4] = items1;
function calculateXYDiff(arg0, get) {
  ({ absoluteY, absoluteX } = arg0.changedTouches[0]);
  const diff = get.get().absoluteYStart - absoluteY;
  const diff1 = get.get().absoluteXStart - absoluteX;
  const absolute = Math.abs(diff);
  const obj = { absoluteX, absoluteY, xDiff: diff1, yDiff: diff, isNotPullDownGesture: null, absoluteMovement: null };
  const bound = Math.max(absolute, Math.abs(diff1));
  const absolute1 = Math.abs(diff1);
  let tmp6 = absolute1 >= Math.abs(diff);
  if (!tmp6) {
    tmp6 = diff > 0;
  }
  obj.isNotPullDownGesture = tmp6;
  obj.absoluteMovement = bound;
  return obj;
}
calculateXYDiff.__workletHash = 1702052802509;
calculateXYDiff.__initData = tmp4;
const items2 = [{ code: "(function getPIPWindowDimensions_MorphablePanelUtilsTsx3(windowDimensions,safeArea,disableHorizontalSafeAreas){let[PIP_WINDOW_OFFSET]=this.__closure;const xOffset=disableHorizontalSafeAreas?Math.max(safeArea.left,PIP_WINDOW_OFFSET):PIP_WINDOW_OFFSET;const disabledHorizontalSafeAreasRange=windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET);const enabledHorizontalSafeAreasRange=windowDimensions.width-safeArea.left-safeArea.right-PIP_WINDOW_OFFSET*2;const xRange=disableHorizontalSafeAreas?disabledHorizontalSafeAreasRange:enabledHorizontalSafeAreasRange;const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};})" }, MorphablePanelConstants.PIP_WINDOW_OFFSET];
let c0;
[tmp5, tmp6] = items2;
function getPIPWindowDimensions(width, left, arg2) {
  if (arg2) {
    const _Math = Math;
    let bound = Math.max(left.left, c0);
    let tmp = c0;
  } else {
    tmp = c0;
    bound = c0;
  }
  const diff = width.width - bound;
  let diff1 = width.width - left.left - left.right - 2 * tmp;
  if (arg2) {
    diff1 = diff - Math.max(left.right, tmp);
  }
  const bound1 = Math.max(left.top, tmp);
  const obj = { xOffset: bound, yOffset: bound1, xRange: diff1, yRange: null };
  const diff2 = width.height - bound1;
  obj.yRange = diff2 - Math.max(left.bottom, tmp);
  return obj;
}
const items3 = [tmp6];
getPIPWindowDimensions.__closure = items3;
getPIPWindowDimensions.__workletHash = 12518936979695;
getPIPWindowDimensions.__initData = tmp5;
const items4 = [{ code: "(function calculatePIPPositionFromVelocity_MorphablePanelUtilsTsx4({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){let[getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp]=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};})" }, getPIPWindowDimensions, MorphablePanelConstants.MIN_PIP_TOSS_VELOCITY, clamp];
let closure_129_0;
let closure_129_1;
let closure_129_2;
[tmp7, tmp8, tmp9, tmp10] = items4;
function calculatePIPPositionFromVelocity(windowDimensions) {
  ({ velocityX, velocityY } = windowDimensions);
  ({ absoluteX, absoluteY } = windowDimensions);
  const tmp = _undefined(windowDimensions.windowDimensions, windowDimensions.safeArea, windowDimensions.disableHorizontalSafeAreas);
  ({ xRange, yRange } = tmp);
  const diff = absoluteX - tmp.xOffset;
  const diff1 = absoluteY - tmp.yOffset;
  const absolute = Math.abs(velocityY);
  if (Math.max(absolute, Math.abs(velocityX)) < duration) {
    const rect = { left: React2(diff, 0, xRange), right: React2(xRange - diff, 0, xRange), top: React2(diff1, 0, yRange), bottom: React2(yRange - diff1, 0, yRange) };
    const _Math = Math;
    const _Object = Object;
    items = [];
    HermesBuiltin.arraySpread(Object.values(rect), 0);
    const _Math2 = Math;
    const applyResult = HermesBuiltin.apply(items, Math);
    let str2 = "left";
    if (rect.left !== applyResult) {
      let str3 = "top";
      if (rect.top !== applyResult) {
        let str4 = "bottom";
        if (rect.right === applyResult) {
          str4 = "right";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    if ("left" === str2) {
      let num6 = diff1 / yRange;
      let num5 = 0;
    } else if ("right" === str2) {
      num6 = diff1 / yRange;
      num5 = 1;
    } else if ("top" === str2) {
      num5 = diff / xRange;
      num6 = 0;
    } else {
      num6 = 0;
      num5 = 0;
      if ("bottom" === str2) {
        num5 = diff / xRange;
        num6 = 1;
      }
    }
  } else {
    const result = velocityY / velocityX;
    let num2 = 0;
    if (velocityX > 0) {
      num2 = xRange;
    }
    const sum = diff1 + result * (num2 - diff);
    if (sum >= 0) {
      if (sum <= yRange) {
        num5 = num2 / xRange;
        num6 = sum / yRange;
      }
    }
    let num4 = 0;
    const result1 = 1 / result;
    if (velocityY > 0) {
      num4 = yRange;
    }
    num5 = (diff + result1 * (num4 - diff1)) / xRange;
    num6 = num4 / yRange;
  }
  return { pipX: React2(num5, 0, 1), pipY: React2(num6, 0, 1) };
}
const items5 = [tmp8, tmp9, tmp10];
calculatePIPPositionFromVelocity.__closure = items5;
calculatePIPPositionFromVelocity.__workletHash = 3051798465173;
calculatePIPPositionFromVelocity.__initData = tmp7;
const items6 = [{ code: "(function pipXYtoAbsoluteXY_MorphablePanelUtilsTsx5({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){let[getPIPWindowDimensions]=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};})" }, getPIPWindowDimensions];
let closure_130_0;
[tmp11, tmp12] = items6;
function pipXYtoAbsoluteXY(windowDimensions) {
  ({ pipX, pipY } = windowDimensions);
  const tmp = _undefined(windowDimensions.windowDimensions, windowDimensions.safeArea, windowDimensions.disableHorizontalSafeAreas);
  const point = { x: tmp.xOffset + pipX * tmp.xRange, y: tmp.yOffset + pipY * tmp.yRange };
  return point;
}
const items7 = [tmp12];
pipXYtoAbsoluteXY.__closure = items7;
pipXYtoAbsoluteXY.__workletHash = 9258101612205;
pipXYtoAbsoluteXY.__initData = tmp11;
const items8 = [{ code: "(function getClampedPIPPosition_MorphablePanelUtilsTsx6({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0},disableHorizontalSafeAreas:disableHorizontalSafeAreas}){let[pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp]=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};})" }, pipXYtoAbsoluteXY, getPIPWindowDimensions, clamp];
let closure_131_0;
let closure_131_1;
let closure_131_2;
[tmp13, tmp14, tmp15, tmp16] = items8;
function getClampedPIPPosition(topAvoidanceRegion) {
  ({ pipX, pipY, width, height, windowDimensions, safeArea, bottomAvoidanceRegion } = topAvoidanceRegion);
  if (bottomAvoidanceRegion === undefined) {
    bottomAvoidanceRegion = 0;
  }
  let num = topAvoidanceRegion.topAvoidanceRegion;
  if (num === undefined) {
    num = 0;
  }
  let point = topAvoidanceRegion.positionOffset;
  if (point === undefined) {
    point = { x: 0, y: 0 };
  }
  const disableHorizontalSafeAreas = topAvoidanceRegion.disableHorizontalSafeAreas;
  let num2 = 1;
  if (-1 !== pipX) {
    num2 = pipX;
  }
  const obj = { pipX: num2, pipY: null, windowDimensions: null, safeArea: null, disableHorizontalSafeAreas: null };
  let num3 = 0;
  if (-1 !== pipY) {
    num3 = pipY;
  }
  obj.pipY = num3;
  obj.windowDimensions = windowDimensions;
  obj.safeArea = safeArea;
  obj.disableHorizontalSafeAreas = disableHorizontalSafeAreas;
  const point2 = _undefined(obj);
  const y = point2.y;
  const diff = point2.x - width / 2;
  if (-1 === pipY) {
    let sum = y + 72;
  } else {
    sum = y - height / 2;
  }
  const tmp5 = duration(windowDimensions, safeArea, disableHorizontalSafeAreas);
  const point1 = { x: React2(diff, tmp5.xOffset, tmp5.xOffset + tmp5.xRange - width) + point.x, y: React2(sum, tmp5.yOffset + num, tmp5.yOffset + tmp5.yRange - bottomAvoidanceRegion - height) + point.y };
  return point1;
}
const items9 = [tmp14, tmp15, tmp16];
getClampedPIPPosition.__closure = items9;
getClampedPIPPosition.__workletHash = 16212333679394;
getClampedPIPPosition.__initData = tmp13;
let result = size.fileFinishedImporting("modules/panels/morphable/native/MorphablePanelUtils.tsx");

export { calculateXYDiff };
export { getPIPWindowDimensions };
export { calculatePIPPositionFromVelocity };
export { pipXYtoAbsoluteXY };
export { getClampedPIPPosition };