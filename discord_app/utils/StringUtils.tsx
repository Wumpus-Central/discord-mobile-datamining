// discord_app/utils/StringUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import cssValueToNumber from "../../discord_common/js/shared/utils/StringUtils.tsx";

const result = obj132.fileFinishedImporting("utils/StringUtils.tsx");

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