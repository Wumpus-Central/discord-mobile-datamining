// discord_app/utils/ListUtils.tsx
import intl5 from "../intl/index.native.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/ListUtils.tsx");

export const getListSummaryLabel = function getListSummaryLabel(names, length) {
  let str = "";
  if (0 !== length) {
    let formatToPlainStringResult;
    if (1 === length) {
      const intl4 = intl5.intl;
      const obj4 = { first: names[0] };
      formatToPlainStringResult = intl4.formatToPlainString(intl5.t["8s9z8P"], obj4);
    } else if (2 === length) {
      const intl3 = intl5.intl;
      const obj7 = { first: null, second: null };
      [obj3.first, obj3.second] = names;
      formatToPlainStringResult = intl3.formatToPlainString(intl5.t["i0K/dw"], obj7);
    } else if (3 === length) {
      const intl2 = intl5.intl;
      const obj8 = { first: null, second: null, third: null };
      [obj2.first, obj2.second, obj2.third] = names;
      formatToPlainStringResult = intl2.formatToPlainString(intl5.t["/KSOKY"], obj8);
    } else {
      const intl = intl5.intl;
      const obj = { first: null, second: null, third: null, count: length - 3 };
      [obj.first, obj.second, obj.third] = names;
      formatToPlainStringResult = intl.formatToPlainString(intl5.t.xpU76u, obj);
    }
    str = formatToPlainStringResult;
  }
  return str;
};
