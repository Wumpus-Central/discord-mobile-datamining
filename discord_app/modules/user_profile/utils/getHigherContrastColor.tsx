// === Module 7221: getHigherContrastColor ===

// Module 7221 (getHigherContrastColor)
import int2hslRaw from "int2hslRaw" /* 688 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/utils/getHigherContrastColor.tsx");

export const getHigherContrastColor = function getHigherContrastColor(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  [tmp2, tmp3] = callback(backgroundColor.colors, 2);
  let hex2intResult = backgroundColor;
  if (typeof backgroundColor === "string") {
    hex2intResult = int2hslRaw.hex2int(backgroundColor);
    const obj3 = int2hslRaw;
  }
  let hex2intResult1 = tmp2;
  if (typeof tmp2 === "string") {
    hex2intResult1 = int2hslRaw.hex2int(tmp2);
    const obj4 = int2hslRaw;
  }
  let hex2intResult2 = tmp3;
  if (typeof tmp3 === "string") {
    hex2intResult2 = int2hslRaw.hex2int(tmp3);
    const obj5 = int2hslRaw;
  }
  const tmp = callback(backgroundColor.colors, 2);
  const contrast = int2hslRaw.getContrast(hex2intResult, hex2intResult1);
  const obj = int2hslRaw;
  return tmp3;
};