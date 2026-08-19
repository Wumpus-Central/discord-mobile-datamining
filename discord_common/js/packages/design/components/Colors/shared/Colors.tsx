// discord_common/js/packages/design/components/Colors/shared/Colors.tsx
import nDefault from "../../../../../../../_runtime/00689_n.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";

let obj = { NonText: 3, Text: 4.5, HighContrastText: 7 };
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/Colors/shared/Colors.tsx");

export const WCAGContrastRatios = obj;
export const getContrastingColor = function getContrastingColor(memo, arg1) {
  obj = arg1;
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
    base = memo;
  }
  const tmp4Result = nDefault(base);
  let obj3 = nDefault(memo);
  const luminanceResult = tmp4Result.luminance();
  let contrastResult = nDefault.contrast(tmp4Result, obj3);
  let num2 = 99;
  while (true) {
    let tmp7 = contrastResult < NonText;
    let tmp8 = contrastResult > NonText + num;
    if (tmp7) {
      let tmp11 = obj3.luminance() > luminanceResult;
      if (!tmp8) {
        if (!tmp7) {
          let brightenResult = obj3.brighten();
          let obj6 = nDefault;
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
    let tmp16 = callback(obj5.rgba(), 4);
    let _HermesInternal = HermesInternal;
    return "rgba(" + tmp16[0] + ", " + tmp16[1] + ", " + tmp16[2] + ", " + tmp16[3] + ")";
  }
  const tmp2Result = nDefault;
};
export const darkenColor = function darkenColor(contrastingColor, arg1) {
  obj = nDefault(contrastingColor);
  const tmp = callback(nDefault(contrastingColor).darken(arg1).rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
};
export const brightenColor = function brightenColor(profilePrimaryColor, arg1) {
  obj = nDefault(profilePrimaryColor);
  const tmp = callback(nDefault(profilePrimaryColor).brighten(arg1).rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
};
export const setColorOpacity = function setColorOpacity(white, alphaResult) {
  alphaResult = nDefault(white).alpha(alphaResult);
  const tmp = callback(alphaResult.rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
};