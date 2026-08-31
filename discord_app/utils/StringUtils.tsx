// === Module 1902: isNullOrEmpty ===

// Module 1902 (isNullOrEmpty)
import set from "set" /* 2 */;
import cssValueToNumber from "cssValueToNumber" /* 1903 */;

const result = set.fileFinishedImporting("utils/StringUtils.tsx");

export const isNullOrEmpty = function isNullOrEmpty(application_id) {
  let tmp = null == application_id;
  if (!tmp) {
    tmp = 0 === application_id.length;
  }
  return tmp;
};
export const upperCaseFirstChar = cssValueToNumber.upperCaseFirstChar;
export const getAcronym = cssValueToNumber.getAcronym;
export const cssValueToNumber = cssValueToNumber.cssValueToNumber;
export const stripDiacritics = cssValueToNumber.stripDiacritics;
export const truncateText = cssValueToNumber.truncateText;
export const normalize = cssValueToNumber.normalize;