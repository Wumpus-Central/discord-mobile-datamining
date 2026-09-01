// === Module 9273: getListSummaryLabel ===

// Module 9273 (getListSummaryLabel)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("utils/ListUtils.tsx");

export const getListSummaryLabel = function getListSummaryLabel(names, length) {
  let first = names;
  if (length == null) {
    length = first.length;
  }
  if (0 === length) {
    return "";
  } else if (1 === length) {
    const intl4 = getSystemLocale.intl;
    let obj = { first: null };
    first = first[0];
    obj[0] = first;
    let formatToPlainStringResult = intl4.formatToPlainString(getSystemLocale.t["8s9z8P"], obj);
  } else if (2 === length) {
    const intl3 = getSystemLocale.intl;
    obj = { first: null, second: null };
    [obj3[0], obj3[1]] = first;
    formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t["i0K/dw"], obj);
  } else if (3 === length) {
    const intl2 = getSystemLocale.intl;
    [obj2[0], obj2[1], obj2[2]] = first;
    formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t["/KSOKY"], { first: null, second: null, third: null });
    obj1 = { first: null, second: null, third: null };
  } else {
    const intl = getSystemLocale.intl;
    obj = { first: null, second: null, third: null, count: null };
    [obj[0], obj[1], obj[2]] = first;
    obj[3] = length - 3;
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.xpU76u, obj);
  }
};