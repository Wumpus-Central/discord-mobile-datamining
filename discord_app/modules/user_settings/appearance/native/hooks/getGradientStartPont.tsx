// === Module 14844: getHorizontalOrVerticalStartPoint ===

// Module 14844 (getHorizontalOrVerticalStartPoint)
import set from "set" /* 2 */;

function getHorizontalOrVerticalStartPoint(arg0, arg1, arg2) {
  if (0 === arg0) {
    const items = [-arg1 / 2, 0];
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
getHorizontalOrVerticalStartPoint.__closure = {};
getHorizontalOrVerticalStartPoint.__workletHash = 16439230263550;
getHorizontalOrVerticalStartPoint.__initData = { code: "function getHorizontalOrVerticalStartPoint_getGradientStartPontTsx1(angle,width,height){switch(angle){case 0:return[-width/2,0];case 90:return[0,-height/2];case 180:return[width/2,0];default:return[0,height/2];}}" };
function getStartCornerToIntersect(arg0, arg1, arg2) {
  const result = arg1 / 2;
  const result1 = arg2 / 2;
  if (arg0 < 90) {
    const items = [-result, -result1];
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
getStartCornerToIntersect.__closure = {};
getStartCornerToIntersect.__workletHash = 2348332324573;
getStartCornerToIntersect.__initData = { code: "function getStartCornerToIntersect_getGradientStartPontTsx2(angle,width,height){const w=width/2;const h=height/2;if(angle<90){return[-w,-h];}else if(angle<180){return[w,-h];}else if(angle<270){return[w,h];}else{return[-w,h];}}" };
const fn = function t(arg0, arg1, arg2) {
  const result = arg0 % 360;
  let sum = result;
  if (result < 0) {
    sum = result + 360;
  }
  if (sum % 90 === 0) {
    if (typeof getHorizontalOrVerticalStartPoint !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (0 === sum) {
      const items = [-arg1 / 2, 0];
      let items3 = items;
    } else if (90 === sum) {
      const items1 = [0, -arg2 / 2];
      items3 = items1;
    } else if (180 === sum) {
      const items2 = [arg1 / 2, 0];
      items3 = items2;
    } else {
      items3 = [0, arg2 / 2];
    }
    return items3;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const tanResult = Math.tan(sum * Math.PI / 180);
    const result1 = -1 / tanResult;
    if (typeof getStartCornerToIntersect !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const result2 = arg1 / 2;
    const result3 = arg2 / 2;
    if (sum < 90) {
      const items4 = [-result2, -result3];
      let items7 = items4;
    } else if (sum < 180) {
      const items5 = [result2, -result3];
      items7 = items5;
    } else if (sum < 270) {
      const items6 = [result2, result3];
      items7 = items6;
    } else {
      items7 = [-result2, result3];
    }
    const result4 = (items7[1] - result1 * items7[0]) / (tanResult - result1);
    const items8 = [result4, tanResult * result4];
    return items8;
  }
};
fn.__closure = { getHorizontalOrVerticalStartPoint, getStartCornerToIntersect };
fn.__workletHash = 11244204401624;
fn.__initData = { code: "function getGradientStartPoint_getGradientStartPontTsx3(angle,width,height){const{getHorizontalOrVerticalStartPoint,getStartCornerToIntersect}=this.__closure;angle=angle%360;if(angle<0){angle+=360;}if(angle%90===0){return getHorizontalOrVerticalStartPoint(angle,width,height);}const slope=Math.tan(angle*Math.PI/180);const perpendicularSlope=-1/slope;const startCorner=getStartCornerToIntersect(angle,width,height);const b=startCorner[1]-perpendicularSlope*startCorner[0];const startX=b/(slope-perpendicularSlope);const startY=slope*startX;return[startX,startY];}" };
let result = set.fileFinishedImporting("modules/user_settings/appearance/native/hooks/getGradientStartPont.tsx");

export default fn;