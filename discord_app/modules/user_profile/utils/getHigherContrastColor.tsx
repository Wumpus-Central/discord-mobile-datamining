// === Module 6710: getHigherContrastColor ===

// Module 6710 (getHigherContrastColor)
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/getHigherContrastColor.tsx");

export const getHigherContrastColor = function getHigherContrastColor(backgroundColor) {
  let tmp2;
  let tmp3;
  backgroundColor = backgroundColor.backgroundColor;
  [tmp2, tmp3] = backgroundColor.colors;
  let hex2intResult = backgroundColor;
  _slicedToArray(backgroundColor.colors, 2);
  if (typeof backgroundColor === "string") {
    const obj3 = utils_ColorUtils;
    hex2intResult = obj3.hex2int(backgroundColor);
  }
  let hex2intResult1 = tmp2;
  if (typeof tmp2 === "string") {
    const obj4 = utils_ColorUtils;
    hex2intResult1 = obj4.hex2int(tmp2);
  }
  if (typeof tmp2 === "string") {
    const obj5 = utils_ColorUtils;
    obj5.hex2int(tmp2);
  }
  const obj = utils_ColorUtils;
  const contrast = obj.getContrast(hex2intResult, hex2intResult1);
  utils_ColorUtils;
  return tmp2;
};