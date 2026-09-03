// === Module 12140: ANSWER_IN_REGEX ===

// Module 12140 (ANSWER_IN_REGEX)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/search/tokens/SearchTokensUtils.tsx");

export const ANSWER_IN_REGEX = /(?:\s*#?((?:"(\\\\|\\"|[^\\"])*")|(?:[^\s]+)))/i;
export const GENERIC_REGEX = /(?:\s*([^\s]+))/;
export const makeRegexForOptionsWithNegation = function makeRegexForOptionsWithNegation(items) {
  items = [...items];
  const sorted = items.sort((arg0, arg1) => arg1.length - arg0.length);
  const mapped = sorted.map((arg0) => callback(table[0]).escape(arg0));
  const regExp = new RegExp("(?:\\s*(-?(?:" + mapped.join("|") + ")))", "i");
  return regExp;
};
export const validateForMapWithNegation = function validateForMapWithNegation(author_type, hasMap, token) {
  const match = token.getMatch(1);
  const startsWithResult = match.startsWith("-");
  let substr = match;
  if (startsWithResult) {
    substr = match.slice(1);
  }
  let flag = null != tmp3;
  if (flag) {
    flag = "" !== tmp3;
  }
  if (flag) {
    let combined = tmp3;
    if (startsWithResult) {
      const _HermesInternal = HermesInternal;
      combined = "-" + tmp3;
    }
    token.setData(author_type, combined);
    flag = true;
  }
  return flag;
};