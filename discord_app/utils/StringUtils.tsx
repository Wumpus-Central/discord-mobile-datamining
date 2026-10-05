// === Module 2018: StringUtils ===

// Module 2018 (StringUtils)
import utils_StringUtils from "utils/StringUtils" /* 2019 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StringUtils.tsx");

export const isNullOrEmpty = function isNullOrEmpty(id) {
  return null == id || 0 === id.length;
};
export const upperCaseFirstChar = utils_StringUtils.upperCaseFirstChar;
export const getAcronym = utils_StringUtils.getAcronym;
export const cssValueToNumber = utils_StringUtils.cssValueToNumber;
export const stripDiacritics = utils_StringUtils.stripDiacritics;
export const truncateText = utils_StringUtils.truncateText;
export const normalize = utils_StringUtils.normalize;