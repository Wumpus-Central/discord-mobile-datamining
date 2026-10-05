// === Module 11973: SearchTokensUtils ===

// Module 11973 (SearchTokensUtils)
import RegexUtilsDefault from "RegexUtils" /* 4874 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/tokens/SearchTokensUtils.tsx");

export const ANSWER_IN_REGEX = /(?:\s*#?((?:"(\\\\|\\"|[^\\"])*")|(?:[^\s]+)))/i;
export const GENERIC_REGEX = /(?:\s*([^\s]+))/;
export const makeRegexForOptionsWithNegation = function makeRegexForOptionsWithNegation(items) {
  items = [...items];
  const sorted = items.sort((arg0, arg1) => arg1.length - arg0.length);
  const mapped = sorted.map((item) => {
    const obj = RegexUtilsDefault;
    return obj.escape(item);
  });
  const regExp = new RegExp("(?:\\s*(-?(?:" + mapped.join("|") + ")))", "i");
  return regExp;
};
export const validateForMapWithNegation = function validateForMapWithNegation(has, hasMap, token) {
  const match = token.getMatch(1);
  const startsWithResult = match.startsWith("-");
  let substr = match;
  if (startsWithResult) {
    substr = match.slice(1);
  }
  let flag = null != tmp3 && "" !== tmp3;
  if (flag) {
    let combined = tmp3;
    const setData = token.setData;
    if (startsWithResult) {
      const _HermesInternal = HermesInternal;
      combined = "-" + tmp3;
    }
    setData(has, combined);
    flag = true;
  }
  return flag;
};