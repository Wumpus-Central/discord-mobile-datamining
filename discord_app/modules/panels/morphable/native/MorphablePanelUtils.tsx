// === Module 17019: MIN_PIP_TOSS_VELOCITY ===

// Module 17019 (MIN_PIP_TOSS_VELOCITY)
import set from "set" /* 2 */;
import MIN_PAN_GESTURE_MOVE from "MIN_PAN_GESTURE_MOVE" /* 12274 */;

const MIN_PIP_TOSS_VELOCITY = MIN_PAN_GESTURE_MOVE.MIN_PIP_TOSS_VELOCITY;
const PIP_WINDOW_OFFSET = MIN_PAN_GESTURE_MOVE.PIP_WINDOW_OFFSET;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__closure = {};
clamp.__workletHash = 1391695493868;
clamp.__initData = { code: "function clamp_MorphablePanelUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}" };
function calculateXYDiff(state, get) {
  ({ absoluteY, absoluteX } = state.changedTouches[0]);
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
  obj[4] = tmp6;
  obj[5] = bound;
  return obj;
}
calculateXYDiff.__closure = {};
calculateXYDiff.__workletHash = 9827767064556;
calculateXYDiff.__initData = { code: "function calculateXYDiff_MorphablePanelUtilsTsx2(event,initialGestureOffset){const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=initialGestureOffset.get().absoluteYStart-absoluteY;const xDiff=initialGestureOffset.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;return{absoluteX:absoluteX,absoluteY:absoluteY,xDiff:xDiff,yDiff:yDiff,isNotPullDownGesture:isNotPullDownGesture,absoluteMovement:absoluteMovement};}" };
function getPIPWindowDimensions(width, left) {
  if (arg2) {
    const _Math = Math;
    let bound = Math.max(left.left, PIP_WINDOW_OFFSET);
    let tmp = PIP_WINDOW_OFFSET;
  } else {
    tmp = PIP_WINDOW_OFFSET;
    bound = PIP_WINDOW_OFFSET;
  }
  const diff = width.width - bound;
  let diff1 = width.width - left.left - left.right - 2 * tmp;
  if (arg2) {
    diff1 = diff - Math.max(left.right, tmp);
  }
  const bound1 = Math.max(left.top, tmp);
  const diff2 = width.height - bound1;
  return { xOffset: bound, yOffset: bound1, xRange: diff1, yRange: diff2 - Math.max(left.bottom, tmp) };
}
getPIPWindowDimensions.__closure = { PIP_WINDOW_OFFSET };
getPIPWindowDimensions.__workletHash = 4008246762710;
getPIPWindowDimensions.__initData = { code: "function getPIPWindowDimensions_MorphablePanelUtilsTsx3(windowDimensions,safeArea,disableHorizontalSafeAreas){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=disableHorizontalSafeAreas?Math.max(safeArea.left,PIP_WINDOW_OFFSET):PIP_WINDOW_OFFSET;const disabledHorizontalSafeAreasRange=windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET);const enabledHorizontalSafeAreasRange=windowDimensions.width-safeArea.left-safeArea.right-PIP_WINDOW_OFFSET*2;const xRange=disableHorizontalSafeAreas?disabledHorizontalSafeAreasRange:enabledHorizontalSafeAreasRange;const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}" };
function calculatePIPPositionFromVelocity(arg0) {
  ({ velocityX, velocityY, windowDimensions, safeArea, disableHorizontalSafeAreas } = arg0);
  ({ absoluteX, absoluteY } = arg0);
  if (typeof getPIPWindowDimensions !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (disableHorizontalSafeAreas) {
    const _Math = Math;
    let bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
    let tmp = PIP_WINDOW_OFFSET;
  } else {
    tmp = PIP_WINDOW_OFFSET;
    bound = PIP_WINDOW_OFFSET;
  }
  const diff = windowDimensions.width - bound;
  let diff1 = windowDimensions.width - safeArea.left - safeArea.right - 2 * tmp;
  if (disableHorizontalSafeAreas) {
    diff1 = diff - Math.max(safeArea.right, tmp);
  }
  const bound1 = Math.max(safeArea.top, tmp);
  const diff2 = windowDimensions.height - bound1;
  const diff3 = diff2 - Math.max(safeArea.bottom, tmp);
  const diff4 = absoluteX - bound;
  const diff5 = absoluteY - bound1;
  const absolute = Math.abs(velocityY);
  if (Math.max(absolute, Math.abs(velocityX)) < MIN_PIP_TOSS_VELOCITY) {
    if (typeof clamp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const rect = { left: null, right: null, top: null, bottom: null };
    const _Math2 = Math;
    const _Math3 = Math;
    rect[0] = Math.min(Math.max(diff4, 0), diff1);
    const diff6 = diff1 - diff4;
    if (typeof clamp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math4 = Math;
    const _Math5 = Math;
    rect[1] = Math.min(Math.max(diff6, 0), diff1);
    if (typeof clamp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math6 = Math;
    const _Math7 = Math;
    rect[2] = Math.min(Math.max(diff5, 0), diff3);
    const diff7 = diff3 - diff5;
    if (typeof clamp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math8 = Math;
    const _Math9 = Math;
    rect[3] = Math.min(Math.max(diff7, 0), diff3);
    const _Math10 = Math;
    const _Object = Object;
    const items = [];
    HermesBuiltin.arraySpread(Object.values(rect), 0);
    const _Math11 = Math;
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
      let num6 = diff5 / diff3;
      let num5 = 0;
    } else if ("right" === str2) {
      num6 = diff5 / diff3;
      num5 = 1;
    } else if ("top" === str2) {
      num5 = diff4 / diff1;
      num6 = 0;
    } else {
      num6 = 0;
      num5 = 0;
      if ("bottom" === str2) {
        num5 = diff4 / diff1;
        num6 = 1;
      }
    }
  } else {
    const result = velocityY / velocityX;
    let num2 = 0;
    if (velocityX > 0) {
      num2 = diff1;
    }
    const sum = diff5 + result * (num2 - diff4);
    if (sum >= 0) {
      if (sum <= diff3) {
        num5 = num2 / diff1;
        num6 = sum / diff3;
      }
    }
    let num4 = 0;
    const result1 = 1 / result;
    if (velocityY > 0) {
      num4 = diff3;
    }
    num5 = (diff4 + result1 * (num4 - diff5)) / diff1;
    num6 = num4 / diff3;
  }
  if (typeof clamp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = { pipX: Math.min(Math.max(num5, 0), 1), pipY: null };
  if (typeof clamp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj[1] = Math.min(Math.max(num6, 0), 1);
  return obj;
}
calculatePIPPositionFromVelocity.__closure = { getPIPWindowDimensions, MIN_PIP_TOSS_VELOCITY, clamp };
calculatePIPPositionFromVelocity.__workletHash = 3215524498124;
calculatePIPPositionFromVelocity.__initData = { code: "function calculatePIPPositionFromVelocity_MorphablePanelUtilsTsx4({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}" };
function pipXYtoAbsoluteXY(arg0) {
  ({ windowDimensions, safeArea, disableHorizontalSafeAreas } = arg0);
  ({ pipX, pipY } = arg0);
  if (typeof getPIPWindowDimensions !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (disableHorizontalSafeAreas) {
    const _Math = Math;
    let bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
    let tmp = PIP_WINDOW_OFFSET;
  } else {
    tmp = PIP_WINDOW_OFFSET;
    bound = PIP_WINDOW_OFFSET;
  }
  const diff = windowDimensions.width - bound;
  let diff1 = windowDimensions.width - safeArea.left - safeArea.right - 2 * tmp;
  if (disableHorizontalSafeAreas) {
    diff1 = diff - Math.max(safeArea.right, tmp);
  }
  const bound1 = Math.max(safeArea.top, tmp);
  const diff2 = windowDimensions.height - bound1;
  return { x: bound + pipX * diff1, y: bound1 + pipY * (diff2 - Math.max(safeArea.bottom, tmp)) };
}
pipXYtoAbsoluteXY.__closure = { getPIPWindowDimensions };
pipXYtoAbsoluteXY.__workletHash = 1981621867924;
pipXYtoAbsoluteXY.__initData = { code: "function pipXYtoAbsoluteXY_MorphablePanelUtilsTsx5({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}" };
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
  let obj = { pipX: num2, pipY: null, windowDimensions: null, safeArea: null, disableHorizontalSafeAreas: null };
  let num3 = 0;
  if (-1 !== pipY) {
    num3 = pipY;
  }
  obj[1] = num3;
  obj[2] = windowDimensions;
  obj[3] = safeArea;
  obj[4] = disableHorizontalSafeAreas;
  const point2 = pipXYtoAbsoluteXY(obj);
  const y = point2.y;
  const diff = point2.x - width / 2;
  if (-1 === pipY) {
    let sum = y + 72;
  } else {
    sum = y - height / 2;
  }
  if (typeof getPIPWindowDimensions !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (disableHorizontalSafeAreas) {
    const _Math = Math;
    let bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
    let tmp5 = PIP_WINDOW_OFFSET;
  } else {
    tmp5 = PIP_WINDOW_OFFSET;
    bound = PIP_WINDOW_OFFSET;
  }
  const diff1 = windowDimensions.width - bound;
  let diff2 = windowDimensions.width - safeArea.left - safeArea.right - 2 * tmp5;
  if (disableHorizontalSafeAreas) {
    diff2 = diff1 - Math.max(safeArea.right, tmp5);
  }
  const bound1 = Math.max(safeArea.top, tmp5);
  const diff3 = windowDimensions.height - bound1;
  const diff4 = diff3 - Math.max(safeArea.bottom, tmp5);
  const diff5 = bound + diff2 - width;
  if (typeof clamp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const bound2 = Math.min(Math.max(diff, bound), diff5);
  const sum1 = bound1 + num;
  const diff6 = bound1 + diff4 - bottomAvoidanceRegion - height;
  if (typeof clamp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = { x: bound2 + point.x, y: Math.min(Math.max(sum, sum1), diff6) + point.y };
  return obj;
}
getClampedPIPPosition.__closure = { pipXYtoAbsoluteXY, getPIPWindowDimensions, clamp };
getClampedPIPPosition.__workletHash = 7754262947803;
getClampedPIPPosition.__initData = { code: "function getClampedPIPPosition_MorphablePanelUtilsTsx6({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0},disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}" };
let result = set.fileFinishedImporting("modules/panels/morphable/native/MorphablePanelUtils.tsx");

export { calculateXYDiff };
export { getPIPWindowDimensions };
export { calculatePIPPositionFromVelocity };
export { pipXYtoAbsoluteXY };
export { getClampedPIPPosition };