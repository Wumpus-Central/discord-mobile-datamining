// === Module 12116: ListUtils ===

// Module 12116 (ListUtils)
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/ListUtils.tsx");

export const getListSummaryLabel = function getListSummaryLabel(names, length) {
  let first = names;
  if (length == null) {
    length = first.length;
  }
  if (0 === length) {
    return "";
  } else if (1 === length) {
    const intl4 = util.intl;
    const obj4 = { first: null };
    first = first[0];
    obj4.first = first;
    let formatToPlainStringResult = intl4.formatToPlainString(util.t["8s9z8P"], obj4);
  } else if (2 === length) {
    const intl3 = util.intl;
    [obj3.first, obj3.second] = first;
    formatToPlainStringResult = intl3.formatToPlainString(util.t["i0K/dw"], { first: null, second: null });
    const obj7 = { first: null, second: null };
  } else if (3 === length) {
    const intl2 = util.intl;
    [obj2.first, obj2.second, obj2.third] = first;
    formatToPlainStringResult = intl2.formatToPlainString(util.t["/KSOKY"], { first: null, second: null, third: null });
    const obj8 = { first: null, second: null, third: null };
  } else {
    const intl = util.intl;
    const obj = { first: null, second: null, third: null, count: null };
    [obj.first, obj.second, obj.third] = first;
    obj.count = length - 3;
    formatToPlainStringResult = intl.formatToPlainString(util.t.xpU76u, obj);
  }
};