const result = require("set").fileFinishedImporting("utils/StringUtils.tsx");

export const isNullOrEmpty = function isNullOrEmpty(application_id) {
  let tmp = null == application_id;
  if (!tmp) {
    tmp = 0 === application_id.length;
  }
  return tmp;
};
export const upperCaseFirstChar = require("cssValueToNumber").upperCaseFirstChar;
export const getAcronym = require("cssValueToNumber").getAcronym;
export const cssValueToNumber = require("cssValueToNumber").cssValueToNumber;
export const stripDiacritics = require("cssValueToNumber").stripDiacritics;
export const truncateText = require("cssValueToNumber").truncateText;
export const normalize = require("cssValueToNumber").normalize;