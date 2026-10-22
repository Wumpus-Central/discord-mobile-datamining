// === Module 11761: conjureSettingValues ===

// Module 11761 (conjureSettingValues)
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
export const conjureSecretsSubmission = function conjureSecretsSubmission(memo, secrets) {
  if (0 === Object.keys(secrets).length) {
    return {};
  } else {
    const obj2 = {};
    const _Object2 = Object;
    function _loop(item10009) {
      memo = item10009;
      const found = memo.find((key) => key.key === closure_0);
      let hosts;
      if (found != null) {
        hosts = found.hosts;
      }
      let tmp3 = null != hosts;
      if (tmp3) {
        tmp3 = hosts.length > 0;
      }
      if (tmp3) {
        obj2[item10009] = hosts;
      }
    }
    const keys = Object.keys(secrets);
    for (const item10009 of keys) {
      let _loopResult = _loop(item10009);
      continue;
    }
    const obj = { secrets };
    const _Object = Object;
    if (Object.keys(obj2).length > 0) {
      const obj3 = { hosts: obj2 };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    return obj;
  }
};