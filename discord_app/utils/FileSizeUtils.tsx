// === Module 4457: FileSizeUtils ===

// Module 4457 (FileSizeUtils)
import util from "util" /* 1114 */;
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
    const intl2 = util.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = util.t;
    if (tmp.useSpace) {
      let obj = { size: rounded };
      let formatToPlainString2Result = formatToPlainString2(t2.cS889N, obj);
    } else {
      obj = { size: rounded };
      formatToPlainString2Result = formatToPlainString2(t2.pIn7Af, obj);
    }
    return formatToPlainString2Result;
  } else {
    const result = rounded / num;
    const _Math = Math;
    if (tmp.showDecimalForGB) {
      let result1 = round(10 * result) / 10;
    } else {
      result1 = round(result);
    }
    const intl = util.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = util.t;
    if (tmp.useSpace) {
      const obj1 = { size: result1 };
      let formatToPlainStringResult = formatToPlainString(t.yhEXX7, obj1);
    } else {
      obj = { size: result1 };
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
export const formatKbSize = function formatKbSize(MAX_STICKER_FILE_SIZE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
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
    const intl = util.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = util.t;
    if (tmp.useSpace) {
      let obj = { size: null };
      const _Math2 = Math;
      obj.size = Math.ceil(result);
      formatToPlainStringResult = formatToPlainString(t.bTzRR6, obj);
    } else {
      obj = { size: null };
      const _Math = Math;
      obj.size = Math.ceil(result);
      formatToPlainStringResult = formatToPlainString(t.kEk9pr, obj);
    }
  }
  return formatToPlainStringResult;
};