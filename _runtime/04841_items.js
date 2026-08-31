// _runtime/04841_items.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const Platform = get_ActivityIndicator.Platform;
const items = [-1];
const items1 = [1];
const items2 = [0.5];
const items3 = [0.5, 1];

export const SHEET_FIT_TO_CONTENTS = items;
export const SHEET_COMPAT_LARGE = items1;
export const SHEET_COMPAT_MEDIUM = items2;
export const SHEET_COMPAT_ALL = items3;
export const SHEET_DIMMED_ALWAYS = -1;
export const assertDetentsArrayIsSorted = function assertDetentsArrayIsSorted(arg0) {
  let num = 1;
  if (1 < arg0.length) {
    while (arg0[num - 1] <= arg0[num]) {
      num = num + 1;
    }
    const _Error = Error;
    error = new Error("[RNScreens] The detent array is not sorted in ascending order!");
    throw error;
  }
};
export const resolveSheetAllowedDetents = function resolveSheetAllowedDetents(sheetAllowedDetents) {
  if (Array.isArray(sheetAllowedDetents)) {
    let substr = sheetAllowedDetents;
    if (sheetAllowedDetents.length > 3) {
      substr = sheetAllowedDetents.slice(0, 3);
    }
    let tmp = substr;
  } else if ("fitToContents" === sheetAllowedDetents) {
    tmp = items;
  } else if ("large" === sheetAllowedDetents) {
    tmp = items1;
  } else if ("medium" === sheetAllowedDetents) {
    tmp = items2;
  } else {
    tmp = "all" === sheetAllowedDetents ? items3 : items1;
  }
  return tmp;
};
export const resolveSheetLargestUndimmedDetent = function resolveSheetLargestUndimmedDetent(SHEET_DIMMED_ALWAYS, arg1) {
  if (typeof SHEET_DIMMED_ALWAYS === "number") {
    const _Number = Number;
    let isIntegerResult = Number.isInteger(SHEET_DIMMED_ALWAYS);
    if (isIntegerResult) {
      isIntegerResult = SHEET_DIMMED_ALWAYS >= -1;
    }
    if (isIntegerResult) {
      isIntegerResult = SHEET_DIMMED_ALWAYS <= arg1;
    }
    let num5 = -1;
    if (isIntegerResult) {
      num5 = SHEET_DIMMED_ALWAYS;
    }
    let tmp = num5;
  } else {
    tmp = arg1;
    if ("last" !== SHEET_DIMMED_ALWAYS) {
      let num = -1;
      let num2 = -1;
      if ("none" !== SHEET_DIMMED_ALWAYS) {
        num2 = num;
        if ("all" !== SHEET_DIMMED_ALWAYS) {
          let num3 = 1;
          if ("large" !== SHEET_DIMMED_ALWAYS) {
            if ("medium" === SHEET_DIMMED_ALWAYS) {
              num = 0;
            }
            num3 = num;
          }
          num2 = num3;
        }
      }
      tmp = num2;
    }
  }
  return tmp;
};
export const resolveSheetInitialDetentIndex = function resolveSheetInitialDetentIndex(arg0, arg1) {
  let num = arg1;
  if ("last" !== arg0) {
    num = arg0;
    if (null == arg0) {
      num = 0;
    }
  }
  let isIntegerResult = Number.isInteger(num);
  if (isIntegerResult) {
    isIntegerResult = num >= 0;
  }
  if (isIntegerResult) {
    isIntegerResult = num <= arg1;
  }
  let num3 = 0;
  if (isIntegerResult) {
    num3 = num;
  }
  return num3;
};