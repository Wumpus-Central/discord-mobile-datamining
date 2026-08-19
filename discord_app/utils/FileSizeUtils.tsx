// === Module 4269: formatSize ===

// Module 4269 (formatSize)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

function formatSize(result, closure_3) {
  let tmp = closure_3;
  if (closure_3 === undefined) {
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
  const rounded = Math.ceil(result / num2);
  if (rounded < num) {
    const intl2 = getSystemLocale.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = getSystemLocale.t;
    if (tmp.useSpace) {
      let obj = { size: null };
      obj[0] = rounded;
      let formatToPlainString2Result = formatToPlainString2(t2.cS889N, obj);
    } else {
      obj = { size: null };
      obj[0] = rounded;
      formatToPlainString2Result = formatToPlainString2(t2.pIn7Af, obj);
    }
    return formatToPlainString2Result;
  } else {
    result = rounded / num;
    const _Math = Math;
    if (tmp.showDecimalForGB) {
      let result1 = round(10 * result) / 10;
    } else {
      result1 = round(result);
    }
    const intl = getSystemLocale.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = getSystemLocale.t;
    if (tmp.useSpace) {
      obj1 = { size: null };
      obj1[0] = result1;
      let formatToPlainStringResult = formatToPlainString(t.yhEXX7, obj1);
    } else {
      obj = { size: null };
      obj[0] = result1;
      formatToPlainStringResult = formatToPlainString(t.TbMX9D, obj);
    }
    return formatToPlainStringResult;
  }
}
let c2 = 1024;
let closure_3 = { useKibibytes: false, showDecimalForGB: true, useSpace: true };
let result = obj132.fileFinishedImporting("utils/FileSizeUtils.tsx");

export const BYTE_IN_KB = 1024;
export const KB_IN_MB = 1024;
export { formatSize };
export const formatKbSize = function formatKbSize(MAX_STICKER_FILE_SIZE, closure_3) {
  let tmp = closure_3;
  if (closure_3 === undefined) {
    tmp = closure_3;
  }
  let num = 1000;
  let num2 = 1000;
  if (tmp.useKibibytes) {
    num2 = 1024;
  }
  const result = MAX_STICKER_FILE_SIZE / num2;
  if (tmp.useKibibytes) {
    num = c2;
  }
  if (1 <= result / num) {
    let formatToPlainStringResult = formatSize(result, tmp);
  } else {
    const intl = getSystemLocale.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = getSystemLocale.t;
    if (tmp.useSpace) {
      let obj = { size: null };
      const _Math2 = Math;
      obj[0] = Math.ceil(result);
      formatToPlainStringResult = formatToPlainString(t.bTzRR6, obj);
    } else {
      obj = { size: null };
      const _Math = Math;
      obj[0] = Math.ceil(result);
      formatToPlainStringResult = formatToPlainString(t.kEk9pr, obj);
    }
  }
  return formatToPlainStringResult;
};