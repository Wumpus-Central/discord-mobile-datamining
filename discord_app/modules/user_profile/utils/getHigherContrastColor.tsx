// === Module 5564: getHigherContrastColor ===

// Module 5564 (getHigherContrastColor)
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/utils/getHigherContrastColor.tsx");

export const getHigherContrastColor = function getHigherContrastColor(backgroundColor) {
  let tmp2;
  let tmp3;
  backgroundColor = backgroundColor.backgroundColor;
  [tmp2, tmp3] = callback(backgroundColor.colors, 2);
  let hex2intResult = backgroundColor;
  if (typeof backgroundColor !== "__FORMATJS_LISTFORMAT_DATA__") {
    hex2intResult = require(688) /* int2hslRaw */.hex2int(backgroundColor);
    const obj3 = require(688) /* int2hslRaw */;
  }
  let hex2intResult1 = tmp2;
  if (typeof tmp2 !== "__FORMATJS_LISTFORMAT_DATA__") {
    hex2intResult1 = require(688) /* int2hslRaw */.hex2int(tmp2);
    const obj4 = require(688) /* int2hslRaw */;
  }
  let hex2intResult2 = tmp3;
  if (typeof tmp3 !== "__FORMATJS_LISTFORMAT_DATA__") {
    hex2intResult2 = require(688) /* int2hslRaw */.hex2int(tmp3);
    const obj5 = require(688) /* int2hslRaw */;
  }
  const tmp = callback(backgroundColor.colors, 2);
  const contrast = require(688) /* int2hslRaw */.getContrast(hex2intResult, hex2intResult1);
  const obj = require(688) /* int2hslRaw */;
  return tmp3;
};