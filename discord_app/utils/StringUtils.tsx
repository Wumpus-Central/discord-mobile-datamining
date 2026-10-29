// === Module 2031: StringUtils ===

// Module 2031 (StringUtils)
import utils_StringUtils from "utils/StringUtils" /* 2032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StringUtils.tsx");

export function isNullOrEmpty(trimmed) {
  let tmp = null == trimmed;
  if (!tmp) {
    tmp = 0 === trimmed.length;
  }
  return tmp;
}
export const upperCaseFirstChar = utils_StringUtils.upperCaseFirstChar;
export const getAcronym = utils_StringUtils.getAcronym;
export const cssValueToNumber = utils_StringUtils.cssValueToNumber;
export const stripDiacritics = utils_StringUtils.stripDiacritics;
export const truncateText = utils_StringUtils.truncateText;
export const normalize = utils_StringUtils.normalize;