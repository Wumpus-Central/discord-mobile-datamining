// discord_app/modules/panels/morphable/native/MorphablePanelUtils.tsx
import MorphablePanelConstants from "MorphablePanelConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MIN_PIP_TOSS_VELOCITY = MorphablePanelConstants.MIN_PIP_TOSS_VELOCITY;
const PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__closure = {};
clamp.__workletHash = 1391695493868;
clamp.__initData = {
  code: "function clamp_MorphablePanelUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}",
};
function calculateXYDiff(state, sharedValue) {
  let absoluteX;
  let absoluteY;
  let maxResult;
  let tmp6;
  ({ absoluteY, absoluteX } = state.changedTouches[0]);
  const diff = sharedValue.get().absoluteYStart - absoluteY;
  const diff1 = sharedValue.get().absoluteXStart - absoluteX;
  const absolute = Math.abs(diff);
  const obj = {
    absoluteX,
    absoluteY,
    xDiff: diff1,
    yDiff: diff,
    isNotPullDownGesture: tmp6,
    absoluteMovement: maxResult,
  };
  maxResult = max(absolute, Math.abs(diff1));
  const absolute1 = Math.abs(diff1);
  tmp6 = absolute1 >= Math.abs(diff) || diff > 0;
  return obj;
}
calculateXYDiff.__closure = {};
calculateXYDiff.__workletHash = 9827767064556;
calculateXYDiff.__initData = {
  code: "function calculateXYDiff_MorphablePanelUtilsTsx2(event,initialGestureOffset){const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=initialGestureOffset.get().absoluteYStart-absoluteY;const xDiff=initialGestureOffset.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;return{absoluteX:absoluteX,absoluteY:absoluteY,xDiff:xDiff,yDiff:yDiff,isNotPullDownGesture:isNotPullDownGesture,absoluteMovement:absoluteMovement};}",
};
function getPIPWindowDimensions(width, left, arg2) {
  let bound;
  let diff2;
  let tmp2;
  const tmp = arg2;
  if (tmp) {
    const _Math = Math;
    bound = Math.max(left.left, PIP_WINDOW_OFFSET);
    tmp2 = PIP_WINDOW_OFFSET;
  } else {
    tmp2 = PIP_WINDOW_OFFSET;
    bound = PIP_WINDOW_OFFSET;
  }
  const diff = width.width - bound;
  let diff1 = width.width - left.left - left.right - 2 * tmp2;
  if (arg2) {
    diff1 = diff - Math.max(left.right, tmp2);
  }
  const bound1 = Math.max(left.top, tmp2);
  const obj = { xOffset: bound, yOffset: bound1, xRange: diff1, yRange: diff2 - Math.max(left.bottom, tmp2) };
  diff2 = width.height - bound1;
  return obj;
}
getPIPWindowDimensions.__closure = { PIP_WINDOW_OFFSET };
getPIPWindowDimensions.__workletHash = 4008246762710;
getPIPWindowDimensions.__initData = {
  code: "function getPIPWindowDimensions_MorphablePanelUtilsTsx3(windowDimensions,safeArea,disableHorizontalSafeAreas){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=disableHorizontalSafeAreas?Math.max(safeArea.left,PIP_WINDOW_OFFSET):PIP_WINDOW_OFFSET;const disabledHorizontalSafeAreasRange=windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET);const enabledHorizontalSafeAreasRange=windowDimensions.width-safeArea.left-safeArea.right-PIP_WINDOW_OFFSET*2;const xRange=disableHorizontalSafeAreas?disabledHorizontalSafeAreasRange:enabledHorizontalSafeAreasRange;const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}",
};
function calculatePIPPositionFromVelocity(arg0) {
  let disableHorizontalSafeAreas;
  let safeArea;
  let velocityX;
  let velocityY;
  let windowDimensions;
  ({ velocityX, velocityY, windowDimensions, safeArea, disableHorizontalSafeAreas } = arg0);
  if (typeof getPIPWindowDimensions === "function") {
    let bound;
    let tmp4;
    let num7;
    let num6;
    if (disableHorizontalSafeAreas) {
      const _Math = Math;
      bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
      tmp4 = PIP_WINDOW_OFFSET;
    } else {
      tmp4 = PIP_WINDOW_OFFSET;
      bound = PIP_WINDOW_OFFSET;
    }
    const _Math2 = Math;
    const diff = windowDimensions.width - bound;
    let diff1 = windowDimensions.width - safeArea.left - safeArea.right - 2 * tmp4;
    if (disableHorizontalSafeAreas) {
      diff1 = diff - Math.max(safeArea.right, tmp4);
    }
    const _Math3 = Math;
    const bound1 = Math.max(safeArea.top, tmp4);
    const _Math4 = Math;
    const diff2 = windowDimensions.height - bound1;
    const diff3 = diff2 - Math.max(safeArea.bottom, tmp4);
    const diff4 = tmp2 - bound;
    const diff5 = tmp3 - bound1;
    const _Math5 = Math;
    const _Math6 = Math;
    const _Math7 = Math;
    const absolute = Math.abs(velocityY);
    if (max(absolute, Math.abs(velocityX)) < MIN_PIP_TOSS_VELOCITY) {
      if (typeof clamp === "function") {
        const rect = { left: Math.min(Math.max(diff4, 0), diff1), right: null, top: null, bottom: null };
        const _Math8 = Math;
        const _Math9 = Math;
        if (typeof clamp === "function") {
          const _Math10 = Math;
          const _Math11 = Math;
          rect.right = Math.min(Math.max(tmp23, 0), diff1);
          if (typeof clamp === "function") {
            const _Math12 = Math;
            const _Math13 = Math;
            rect.top = Math.min(Math.max(diff5, 0), diff3);
            if (typeof clamp === "function") {
              const _Math14 = Math;
              const _Math15 = Math;
              rect.bottom = Math.min(Math.max(tmp24, 0), diff3);
              const _Math16 = Math;
              const _Object = Object;
              const items = [];
              HermesBuiltin.arraySpread(items, Object.values(rect), 0);
              const _Math17 = Math;
              const applyResult = HermesBuiltin.apply(min, items, Math);
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
                num7 = diff5 / diff3;
                num6 = 0;
              } else if ("right" === str2) {
                num7 = diff5 / diff3;
                num6 = 1;
              } else if ("top" === str2) {
                num6 = diff4 / diff1;
                num7 = 0;
              } else {
                num7 = 0;
                num6 = 0;
                if ("bottom" === str2) {
                  num6 = diff4 / diff1;
                  num7 = 1;
                }
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const result = velocityY / velocityX;
      let num3 = 0;
      if (velocityX > 0) {
        num3 = diff1;
      }
      const sum = diff5 + result * (num3 - diff4);
      if (sum >= 0) {
        if (sum <= diff3) {
          num6 = num3 / diff1;
          num7 = sum / diff3;
        }
      }
      let num5 = 0;
      const result1 = 1 / result;
      if (velocityY > 0) {
        num5 = diff3;
      }
      num6 = (diff4 + result1 * (num5 - diff5)) / diff1;
      num7 = num5 / diff3;
    }
    if (typeof clamp === "function") {
      const obj = { pipX: Math.min(Math.max(num6, 0), 1), pipY: null };
      const _Math18 = Math;
      const _Math19 = Math;
      if (typeof tmp30 === "function") {
        const _Math20 = Math;
        const _Math21 = Math;
        obj.pipY = Math.min(Math.max(num7, 0), 1);
        return obj;
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
calculatePIPPositionFromVelocity.__closure = { getPIPWindowDimensions, MIN_PIP_TOSS_VELOCITY, clamp };
calculatePIPPositionFromVelocity.__workletHash = 3215524498124;
calculatePIPPositionFromVelocity.__initData = {
  code: "function calculatePIPPositionFromVelocity_MorphablePanelUtilsTsx4({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}",
};
function pipXYtoAbsoluteXY(arg0) {
  let disableHorizontalSafeAreas;
  let safeArea;
  let windowDimensions;
  ({ windowDimensions, safeArea, disableHorizontalSafeAreas } = arg0);
  if (typeof getPIPWindowDimensions === "function") {
    let bound;
    let tmp3;
    if (disableHorizontalSafeAreas) {
      const _Math = Math;
      bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
      tmp3 = PIP_WINDOW_OFFSET;
    } else {
      tmp3 = PIP_WINDOW_OFFSET;
      bound = PIP_WINDOW_OFFSET;
    }
    const _Math2 = Math;
    const diff = windowDimensions.width - bound;
    let diff1 = windowDimensions.width - safeArea.left - safeArea.right - 2 * tmp3;
    if (disableHorizontalSafeAreas) {
      diff1 = diff - Math.max(safeArea.right, tmp3);
    }
    const _Math3 = Math;
    const bound1 = Math.max(safeArea.top, tmp3);
    const _Math4 = Math;
    const diff2 = windowDimensions.height - bound1;
    const point = { x: bound + tmp * diff1, y: bound1 + tmp2 * (diff2 - Math.max(safeArea.bottom, tmp3)) };
    return point;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
pipXYtoAbsoluteXY.__closure = { getPIPWindowDimensions };
pipXYtoAbsoluteXY.__workletHash = 1981621867924;
pipXYtoAbsoluteXY.__initData = {
  code: "function pipXYtoAbsoluteXY_MorphablePanelUtilsTsx5({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}",
};
function getClampedPIPPosition(topAvoidanceRegion) {
  let bottomAvoidanceRegion;
  let height;
  let num3;
  let pipX;
  let pipY;
  let safeArea;
  let sum;
  let width;
  let windowDimensions;
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
  const obj = { pipX: num2, pipY: num3, windowDimensions, safeArea, disableHorizontalSafeAreas };
  num3 = 0;
  if (-1 !== pipY) {
    num3 = pipY;
  }
  const y = pipXYtoAbsoluteXY(obj).y;
  pipXYtoAbsoluteXY(obj);
  if (-1 === pipY) {
    sum = y + 72;
  } else {
    sum = y - height / 2;
  }
  if (typeof getPIPWindowDimensions === "function") {
    let bound;
    let tmp5;
    if (disableHorizontalSafeAreas) {
      const _Math = Math;
      bound = Math.max(safeArea.left, PIP_WINDOW_OFFSET);
      tmp5 = PIP_WINDOW_OFFSET;
    } else {
      tmp5 = PIP_WINDOW_OFFSET;
      bound = PIP_WINDOW_OFFSET;
    }
    const _Math2 = Math;
    const diff = windowDimensions.width - bound;
    let diff1 = windowDimensions.width - safeArea.left - safeArea.right - 2 * tmp5;
    if (disableHorizontalSafeAreas) {
      diff1 = diff - Math.max(safeArea.right, tmp5);
    }
    const _Math3 = Math;
    const bound1 = Math.max(safeArea.top, tmp5);
    const _Math4 = Math;
    const diff2 = windowDimensions.height - bound1;
    if (typeof clamp === "function") {
      const _Math5 = Math;
      const _Math6 = Math;
      if (typeof tmp15 === "function") {
        const _Math7 = Math;
        const _Math8 = Math;
        const point1 = { x: tmp16 + point.x, y: Math.min(Math.max(sum, tmp17), tmp18) + point.y };
        return point1;
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
getClampedPIPPosition.__closure = { pipXYtoAbsoluteXY, getPIPWindowDimensions, clamp };
getClampedPIPPosition.__workletHash = 7754262947803;
getClampedPIPPosition.__initData = {
  code: "function getClampedPIPPosition_MorphablePanelUtilsTsx6({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0},disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}",
};
let result = size.fileFinishedImporting("modules/panels/morphable/native/MorphablePanelUtils.tsx");

export { calculateXYDiff };
export { getPIPWindowDimensions };
export { calculatePIPPositionFromVelocity };
export { pipXYtoAbsoluteXY };
export { getClampedPIPPosition };
