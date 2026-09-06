// discord_common/js/packages/design/components/Colors/shared/Colors.tsx
import _modDef672 from "../../../../../../../_runtime/metro/00672__.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

const WCAGContrastRatios = { NonText: 3, Text: 4.5, HighContrastText: 7 };
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Colors/shared/Colors.tsx");

export { WCAGContrastRatios };
export const getContrastingColor = function getContrastingColor(memo, arg1) {
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
    base = memo;
  }
  const tmp4Result = _modDef672(base);
  let obj3 = _modDef672(memo);
  const luminanceResult = tmp4Result.luminance();
  let contrastResult = _modDef672.contrast(tmp4Result, obj3);
  let num2 = 99;
  while (true) {
    let tmp7 = contrastResult < NonText;
    let tmp8 = contrastResult > NonText + num;
    if (tmp7) {
      let tmp11 = obj3.luminance() > luminanceResult;
      if (!tmp8) {
        if (!tmp7) {
          let brightenResult = obj3.brighten();
          let obj6 = _modDef672;
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
    let tmp16 = _slicedToArray(obj5.rgba(), 4);
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
  const tmp2Result = _modDef672;
};
export const darkenColor = function darkenColor(contrastingColor, arg1) {
  const obj = _modDef672(contrastingColor);
  const tmp = _slicedToArray(_modDef672(contrastingColor).darken(arg1).rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
};
export const brightenColor = function brightenColor(profilePrimaryColor, arg1) {
  const obj = _modDef672(profilePrimaryColor);
  const tmp = _slicedToArray(_modDef672(profilePrimaryColor).brighten(arg1).rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
};
export const setColorOpacity = function setColorOpacity(white, alphaResult) {
  alphaResult = _modDef672(white).alpha(alphaResult);
  const tmp = _slicedToArray(alphaResult.rgba(), 4);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + tmp[3] + ")";
};
