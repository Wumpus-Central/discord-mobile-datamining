// === Module 17001: conjureSettingValues ===

// Module 17001 (conjureSettingValues)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingValues.tsx");

export const conjureSettingSubmitValue = function conjureSettingSubmitValue(found, num) {
  if ("number" === found.type) {
    if (typeof num === "number") {
      return num;
    } else {
      const _String2 = String;
      const str6 = String(num).trim();
      if ("" === str6) {
        return null;
      } else {
        const _Number = Number;
        const NumberResult = Number(str6.replace(",", "."));
        const _Number2 = Number;
        let tmp5;
        if (Number.isFinite(NumberResult)) {
          tmp5 = NumberResult;
        }
        return tmp5;
      }
      const str5 = String(num);
    }
  } else if (true === found.multiple) {
    const _Array = Array;
    found = num;
    if (!Array.isArray(num)) {
      const _String = String;
      const parts = String(num).split(/[\s,]+/);
      found = parts.filter((item) => "" !== item);
      const str = String(num);
    }
    let tmp3 = null;
    if (0 !== found.length) {
      tmp3 = found;
    }
    return tmp3;
  } else {
    if (typeof num !== "string") {
      let tmp = num;
    } else {
      tmp = null;
    }
    return tmp;
  }
};
export const conjureSettingValuesEqual = function conjureSettingValuesEqual(result, tmp2Result2) {
  const json = JSON.stringify(result);
  return json === JSON.stringify(tmp2Result2);
};
export const conjureSettingBaseline = function conjureSettingBaseline(found, memo1) {
  let tmp = memo1;
  if (memo1 == null) {
    tmp = "checkbox" !== found.type && null;
    const tmp3 = "checkbox" !== found.type && null;
  }
  return tmp;
};