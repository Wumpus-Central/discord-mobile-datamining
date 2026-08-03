import { DEFAULT_ROLE_COLOR_HEX } from "ME";

const result = require("set").fileFinishedImporting("modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx");

export const extractColorStringsFromServerColors = function extractColorStringsFromServerColors(colors) {
  if (0 === colors.primary_color) {
    let int2hexResult = DEFAULT_ROLE_COLOR_HEX;
  } else {
    let obj = require(688) /* int2hslRaw */;
    int2hexResult = obj.int2hex(colors.primary_color);
  }
  obj = { primaryColor: int2hexResult, secondaryColor: null, tertiaryColor: null };
  let int2hexResult1 = null;
  if (null != colors.secondary_color) {
    int2hexResult1 = require(688) /* int2hslRaw */.int2hex(colors.secondary_color);
    const obj3 = require(688) /* int2hslRaw */;
  }
  obj[1] = int2hexResult1;
  let int2hexResult2 = null;
  if (null != colors.tertiary_color) {
    int2hexResult2 = require(688) /* int2hslRaw */.int2hex(colors.tertiary_color);
    const obj4 = require(688) /* int2hslRaw */;
  }
  obj[2] = int2hexResult2;
  return obj;
};
export const getAuthorHasGradientRole = function getAuthorHasGradientRole(colorStrings) {
  let tmp = null != colorStrings;
  if (tmp) {
    tmp = null != colorStrings.colorStrings && null != colorStrings.colorStrings.primaryColor && null != colorStrings.colorStrings.secondaryColor;
    const tmp2 = null != colorStrings.colorStrings && null != colorStrings.colorStrings.primaryColor && null != colorStrings.colorStrings.secondaryColor;
  }
  return tmp;
};
export const getIsDefaultErc = function getIsDefaultErc(role) {
  let tmp = null != role.colors;
  if (tmp) {
    tmp = 0 === role.colors.primary_color;
  }
  if (tmp) {
    tmp = null == role.colors.secondary_color;
  }
  if (tmp) {
    tmp = null == role.colors.tertiary_color;
  }
  return 0 === role.color || tmp;
};