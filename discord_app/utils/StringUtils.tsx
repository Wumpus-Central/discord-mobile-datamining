// discord_app/utils/StringUtils.tsx
import utils_StringUtils from "../../discord_common/js/shared/utils/StringUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/StringUtils.tsx");

export const isNullOrEmpty = function isNullOrEmpty(id) {
  let tmp = null == id;
  if (!tmp) {
    tmp = 0 === id.length;
  }
  return tmp;
};
export const upperCaseFirstChar = utils_StringUtils.upperCaseFirstChar;
export const getAcronym = utils_StringUtils.getAcronym;
export const cssValueToNumber = utils_StringUtils.cssValueToNumber;
export const stripDiacritics = utils_StringUtils.stripDiacritics;
export const truncateText = utils_StringUtils.truncateText;
export const normalize = utils_StringUtils.normalize;
