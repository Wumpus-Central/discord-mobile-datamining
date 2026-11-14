// === Module 1691: shadows ===

// Module 1691 (shadows)
import "_objectWithoutProperties";

let c0 = ["color", "offsetX", "offsetY", "spreadDistance", "blurRadius"];
const items = [{ code: "(function notArrayObject_Pnpm_shadowsTs1(value){return\"Box shadow value must be a string or an array of shadow objects (e.g. [{ offsetX, offsetY, color }]). Received: \"+JSON.stringify(value)+\".\";})" }];
[tmp2] = items;
let obj = { notArrayObject: null };
function notArrayObject(arr) {
  return "Box shadow value must be a string or an array of shadow objects (e.g. [{ offsetX, offsetY, color }]). Received: " + JSON.stringify(arr) + ".";
}
notArrayObject.__workletHash = 4255840267491;
notArrayObject.__initData = tmp2;
obj.notArrayObject = notArrayObject;
const items1 = [{ code: "(function pnpm_shadowsTs2(value,context){let[parseBoxShadowString,ERROR_MESSAGES,processColor]=this.__closure;if(value==='none'){return[];}const parsedShadow=typeof value==='string'?parseBoxShadowString(value):value;if(!Array.isArray(parsedShadow)){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.notArrayObject(parsedShadow));}return parsedShadow.map(function(shadow){const{color='#000',offsetX=0,offsetY=0,spreadDistance=0,blurRadius=0,...rest}=shadow;return{...rest,blurRadius:parseFloat(blurRadius),color:processColor(color,context),offsetX:parseFloat(offsetX),offsetY:parseFloat(offsetY),spreadDistance:parseFloat(spreadDistance)};});})" }, fn(1677).parseBoxShadowString, obj, fn(1682).processColor];
c0 = undefined;
let _objectWithoutProperties;
let c2;
[tmp3, tmp4, tmp5, tmp6] = items1;
function pnpm_shadowsTs2(arr, arg1) {
  _undefined = arg1;
  if ("none" === arr) {
    return [];
  } else {
    if (typeof arr === "string") {
      arr = _undefined(arr);
    }
    const _Array = Array;
    if (Array.isArray(arr)) {
      return arr.map((color) => {
        color = color.color;
        let str = "#000";
        if (undefined !== color) {
          str = color;
        }
        const offsetX = color.offsetX;
        let num = 0;
        if (undefined !== offsetX) {
          num = offsetX;
        }
        const offsetY = color.offsetY;
        let num2 = 0;
        if (undefined !== offsetY) {
          num2 = offsetY;
        }
        const spreadDistance = color.spreadDistance;
        let num3 = 0;
        if (undefined !== spreadDistance) {
          num3 = spreadDistance;
        }
        const blurRadius = color.blurRadius;
        let num4 = 0;
        if (undefined !== blurRadius) {
          num4 = blurRadius;
        }
        const obj = {};
        const merged = Object.assign(closure_1(color, closure_0));
        obj.blurRadius = parseFloat(num4);
        obj.color = c2(str, closure_0);
        obj.offsetX = parseFloat(num);
        obj.offsetY = parseFloat(num2);
        obj.spreadDistance = parseFloat(num3);
        return obj;
      });
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("[Reanimated] " + _objectWithoutProperties.notArrayObject(arr));
      throw error;
    }
  }
}
const items2 = [tmp4, tmp5, tmp6];
pnpm_shadowsTs2.__closure = items2;
pnpm_shadowsTs2.__workletHash = 14199958443518;
pnpm_shadowsTs2.__initData = tmp3;

export const processBoxShadow = pnpm_shadowsTs2;