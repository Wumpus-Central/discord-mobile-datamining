// === Module 7183: getHigherContrastColor ===

// Module 7183 (getHigherContrastColor)
import int2hslRaw from "int2hslRaw" /* 688 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/utils/getHigherContrastColor.tsx");

export const getHigherContrastColor = function getHigherContrastColor(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  [tmp2, tmp3] = callback(backgroundColor.colors, 2);
  let hex2intResult = backgroundColor;
  if (typeof backgroundColor === "string") {
    hex2intResult = int2hslRaw.hex2int(backgroundColor);
  }
  let hex2intResult1 = tmp2;
  if (typeof tmp2 === "string") {
    hex2intResult1 = int2hslRaw.hex2int(tmp2);
  }
  if (typeof tmp2 === "string") {
    int2hslRaw.hex2int(tmp2);
  }
  const tmp = callback(backgroundColor.colors, 2);
  const contrast = int2hslRaw.getContrast(hex2intResult, hex2intResult1);
  int2hslRaw;
  return tmp2;
};