// === Module 5317: FileSizeUtils ===

// Module 5317 (FileSizeUtils)
import intl3 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

function formatSize(available, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let num = 1000;
  let num2 = 1000;
  if (tmp.useKibibytes) {
    num2 = c2;
  }
  if (tmp.useKibibytes) {
    num = 1024;
  }
  const rounded = Math.ceil(available / num2);
  if (rounded < num) {
    let formatToPlainString2Result;
    const useSpace2 = tmp.useSpace;
    const intl2 = intl3.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = intl3.t;
    if (useSpace2) {
      const obj2 = { size: rounded };
      formatToPlainString2Result = formatToPlainString2(t2.cS889N, obj2);
    } else {
      const obj3 = { size: rounded };
      formatToPlainString2Result = formatToPlainString2(t2.pIn7Af, obj3);
    }
    return formatToPlainString2Result;
  } else {
    let result1;
    let formatToPlainStringResult;
    const result = rounded / num;
    const _Math = Math;
    if (tmp.showDecimalForGB) {
      result1 = round(10 * result) / 10;
    } else {
      result1 = round(result);
    }
    const useSpace = tmp.useSpace;
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl3.t;
    if (useSpace) {
      const obj4 = { size: result1 };
      formatToPlainStringResult = formatToPlainString(t.yhEXX7, obj4);
    } else {
      const obj = { size: result1 };
      formatToPlainStringResult = formatToPlainString(t.TbMX9D, obj);
    }
    return formatToPlainStringResult;
  }
}
let c2 = 1024;
let closure_3 = { useKibibytes: false, showDecimalForGB: true, useSpace: true };
let result = size.fileFinishedImporting("utils/FileSizeUtils.tsx");

export const BYTE_IN_KB = 1024;
export const KB_IN_MB = 1024;
export { formatSize };
export const formatKbSize = function formatKbSize(bytes, arg1) {
  let formatToPlainStringResult;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let num = 1000;
  let num2 = 1000;
  if (tmp.useKibibytes) {
    num2 = 1024;
  }
  const result = bytes / num2;
  if (tmp.useKibibytes) {
    num = c2;
  }
  if (1 <= result / num) {
    formatToPlainStringResult = formatSize(result, tmp);
  } else {
    const useSpace = tmp.useSpace;
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl3.t;
    if (useSpace) {
      const _Math2 = Math;
      const bTzRR6 = t.bTzRR6;
      const obj2 = { size: Math.ceil(result) };
      formatToPlainStringResult = formatToPlainString(bTzRR6, obj2);
    } else {
      const _Math = Math;
      const kEk9pr = t.kEk9pr;
      const obj = { size: Math.ceil(result) };
      formatToPlainStringResult = formatToPlainString(kEk9pr, obj);
    }
  }
  return formatToPlainStringResult;
};