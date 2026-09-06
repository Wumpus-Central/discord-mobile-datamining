// === Module 7205: getHigherContrastColor ===

// Module 7205 (getHigherContrastColor)
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/utils/getHigherContrastColor.tsx");

export const getHigherContrastColor = function getHigherContrastColor(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  [tmp2, tmp3] = _slicedToArray(backgroundColor.colors, 2);
  let hex2intResult = backgroundColor;
  if (typeof backgroundColor === "string") {
    hex2intResult = utils_ColorUtils.hex2int(backgroundColor);
  }
  let hex2intResult1 = tmp2;
  if (typeof tmp2 === "string") {
    hex2intResult1 = utils_ColorUtils.hex2int(tmp2);
  }
  let hex2intResult2 = tmp3;
  if (typeof tmp3 === "string") {
    hex2intResult2 = utils_ColorUtils.hex2int(tmp3);
  }
  const tmp = _slicedToArray(backgroundColor.colors, 2);
  const contrast = utils_ColorUtils.getContrast(hex2intResult, hex2intResult1);
  return tmp3;
};