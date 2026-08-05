import { 01858__ } from "../../../../_runtime/metro/01858__.js";
// discord_common/js/shared/utils/StringUtils.tsx
const re2 = /[\u0300-\u036f]/g;
const re3 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
if (null == String.prototype.normalize) {
  let fn = (arg0) => arg0;
} else {
  fn = (str) => {
    const replaced = str.normalize("NFD").replace(closure_2, "");
    return replaced.normalize("NFC");
  };
}
if (null == String.prototype.normalize) {
  let fullNormalize = (arg0) => arg0;
} else {
  fullNormalize = function fullNormalize(str) {
    _require = _01858__;
    const dependencyMap = "";
    const items = [...str.normalize("NFD")];
    const item = items.forEach((arg0) => {
      let tmp2 = table[arg0];
      if (tmp2 == null) {
        tmp2 = arg0;
      }
      closure_1 = closure_1 + tmp2;
    });
    return dependencyMap.normalize("NFD").toLocaleLowerCase();
  };
}
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/StringUtils.tsx");

export const cssValueToNumber = require("set").cssValueToNumber;
export const upperCaseFirstChar = function upperCaseFirstChar(str) {
  str = "";
  if (null != str) {
    const formatted = str.charAt(0).toUpperCase();
    const _HermesInternal = HermesInternal;
    str = "" + formatted + str.slice(1);
    const str2 = str.charAt(0);
  }
  return str;
};
export const truncateText = (arg0, arg1) => {
  let str = arg2;
  if (arg2 === undefined) {
    str = "\u2026";
  }
  let concat = arg0;
  let str2 = "";
  if (null != arg0) {
    str2 = "";
    if (null != arg1) {
      if (concat.length <= arg1) {
        str2 = concat;
      } else {
        if (regex.test(concat)) {
          const items = [];
          HermesBuiltin.arraySpread(concat, 0);
          const substr = items.slice(0, arg1 - str.length);
          let str3 = substr.join("");
        } else {
          str3 = concat.substring(0, arg1 - str.length);
        }
        const _HermesInternal = HermesInternal;
        concat = HermesInternal.concat;
        const combined = concat(str3.replace(/[\s.]+$/, ""), str);
      }
    }
  }
  return str2;
};
export const getAcronym = function getAcronym(name) {
  let str = "";
  if (null != name) {
    const str3 = name.replace(/'s /g, " ");
    str = name.replace(/'s /g, " ").replace(/\w+/g, (arg0) => arg0[0]).replace(/\s/g, "");
    const str4 = name.replace(/'s /g, " ").replace(/\w+/g, (arg0) => arg0[0]);
  }
  return str;
};
export const stripDiacritics = fn;
export const normalize = fullNormalize;