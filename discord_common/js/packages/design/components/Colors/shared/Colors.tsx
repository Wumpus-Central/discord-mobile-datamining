import { n } from "../../../../../../../_runtime/00689_n.js";
// discord_common/js/packages/design/components/Colors/shared/Colors.tsx
import _slicedToArray from "_slicedToArray";

let obj = { NonText: 3, Text: 4.5, HighContrastText: 7 };
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Colors/shared/Colors.tsx");

export const WCAGContrastRatios = obj;
export const getContrastingColor = function getContrastingColor(arg0, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let NonText = obj.contrastRatio;
  if (NonText == null) {
    NonText = obj.NonText;
  }
  let num = obj.tolerance;
  if (num == null) {
    num = 3;
  }
  let base = obj.base;
  if (base == null) {
    base = arg0;
  }
  const tmp4Result = n(base);
  let obj3 = tmp2(689)(arg0);
  const tmp4 = n;
  const luminanceResult = tmp4Result.luminance();
  let contrastResult = n.contrast(tmp4Result, obj3);
  let num2 = 99;
  while (true) {
    let tmp7 = contrastResult < NonText;
    let tmp8 = contrastResult > NonText + num;
    let tmp10 = obj3;
    if (tmp7) {
      let tmp11 = obj3.luminance() > luminanceResult;
      if (!tmp8) {
        if (!tmp7) {
          let brightenResult = obj3.brighten();
          let tmp13 = importDefault;
          let tmp14 = dependencyMap;
          let obj6 = n;
          contrastResult = obj6.contrast(tmp4Result, brightenResult);
          num2 = num2 - 1;
          obj3 = brightenResult;
          let obj5 = brightenResult;
          if (0 >= tmp9) {
            break;
          }
        }
      }
      brightenResult = obj3.darken();
    } else {
      obj5 = obj3;
      if (!tmp8) {
        break;
      }
    }
    let tmp15 = callback;
    let num3 = 4;
    let tmp16 = callback(obj5.rgba(), 4);
    let tmp17 = globalThis;
    let _HermesInternal = HermesInternal;
    let str = ")";
    let str2 = ", ";
    let str3 = "rgba(";
    let str4 = ", ";
    let str5 = ", ";
    let str6 = ", ";
    return "rgba(" + tmp16[0] + ", " + tmp16[1] + ", " + tmp16[2] + ", " + tmp16[3] + ")";
  }
};
export const darkenColor = function darkenColor(contrastingColor, arg1) {
  const obj = n(contrastingColor);
  const tmp = callback(n(contrastingColor).darken(arg1).rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
};
export const brightenColor = function brightenColor(profilePrimaryColor, arg1) {
  const obj = n(profilePrimaryColor);
  const tmp = callback(n(profilePrimaryColor).brighten(arg1).rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
};
export const setColorOpacity = function setColorOpacity(white, alphaResult) {
  const obj = n(white);
  const tmp = callback(n(white).alpha(alphaResult).rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
};