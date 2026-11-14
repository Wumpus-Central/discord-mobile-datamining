// === Module 17921: getGradientStartPont ===

// Module 17921 (getGradientStartPont)
import size from "module_2" /* 2 */;

let items = [{ code: "(function getHorizontalOrVerticalStartPoint_getGradientStartPontTsx1(angle,width,height){switch(angle){case 0:return[-width/2,0];case 90:return[0,-height/2];case 180:return[width/2,0];default:return[0,height/2];}})" }];
[tmp2] = items;
function getHorizontalOrVerticalStartPoint(arg0, arg1, arg2) {
  if (0 === arg0) {
    items = [-arg1 / 2, 0];
    return items;
  } else if (90 === arg0) {
    const items1 = [0, -arg2 / 2];
    return items1;
  } else if (180 === arg0) {
    const items2 = [arg1 / 2, 0];
    return items2;
  } else {
    const items3 = [0, arg2 / 2];
    return items3;
  }
}
getHorizontalOrVerticalStartPoint.__workletHash = 6607039317439;
getHorizontalOrVerticalStartPoint.__initData = tmp2;
let items1 = [{ code: "(function getStartCornerToIntersect_getGradientStartPontTsx2(angle,width,height){const w=width/2;const h=height/2;if(angle<90){return[-w,-h];}else if(angle<180){return[w,-h];}else if(angle<270){return[w,h];}else{return[-w,h];}})" }];
[tmp3] = items1;
function getStartCornerToIntersect(arg0, arg1, arg2) {
  const result = arg1 / 2;
  const result1 = arg2 / 2;
  if (arg0 < 90) {
    items = [-result, -result1];
    let items3 = items;
  } else if (arg0 < 180) {
    const items1 = [result, -result1];
    items3 = items1;
  } else if (arg0 < 270) {
    const items2 = [result, result1];
    items3 = items2;
  } else {
    items3 = [-result, result1];
  }
  return items3;
}
getStartCornerToIntersect.__workletHash = 4254546362684;
getStartCornerToIntersect.__initData = tmp3;
let items2 = [{ code: "(function getGradientStartPoint_getGradientStartPontTsx3(angle,width,height){let[getHorizontalOrVerticalStartPoint,getStartCornerToIntersect]=this.__closure;angle=angle%360;if(angle<0){angle+=360;}if(angle%90===0){return getHorizontalOrVerticalStartPoint(angle,width,height);}const slope=Math.tan(angle*Math.PI/180);const perpendicularSlope=-1/slope;const startCorner=getStartCornerToIntersect(angle,width,height);const b=startCorner[1]-perpendicularSlope*startCorner[0];const startX=b/(slope-perpendicularSlope);const startY=slope*startX;return[startX,startY];})" }, getHorizontalOrVerticalStartPoint, getStartCornerToIntersect];
let c0;
let c1;
[tmp4, tmp5, tmp6] = items2;
function getGradientStartPoint(arg0, arg1, arg2) {
  const result = arg0 % 360;
  let sum = result;
  if (result < 0) {
    sum = result + 360;
  }
  if (sum % 90 === 0) {
    return _undefined(sum, arg1, arg2);
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const tanResult = Math.tan(sum * Math.PI / 180);
    const result1 = -1 / tanResult;
    const tmp7 = _undefined2(sum, arg1, arg2);
    const result2 = (tmp7[1] - result1 * tmp7[0]) / (tanResult - result1);
    items = [result2, tanResult * result2];
    return items;
  }
}
let items3 = [tmp5, tmp6];
getGradientStartPoint.__closure = items3;
getGradientStartPoint.__workletHash = 13155822506945;
getGradientStartPoint.__initData = tmp4;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/hooks/getGradientStartPont.tsx");

export default getGradientStartPoint;