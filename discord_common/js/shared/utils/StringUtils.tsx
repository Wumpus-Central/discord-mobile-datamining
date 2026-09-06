// discord_common/js/shared/utils/StringUtils.tsx
import _mod1927 from "../../../../_runtime/metro/01927__.js";
import DOMUtils from "DOMUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const re2 = /[\u0300-\u036f]/g;
const re3 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
if (null == String.prototype.normalize) {
  let fn = (arg0) => arg0;
} else {
  fn = (str) => {
    str = str.normalize("NFD");
    const normalizer = str.replace(re2, "");
    return normalizer.normalize("NFC");
  };
}
if (null == String.prototype.normalize) {
  let fullNormalize = (arg0) => arg0;
} else {
  fullNormalize = function fullNormalize(str) {
    closure_0 = _mod1927;
    dependencyMap = "";
    const items = [...str.normalize("NFD")];
    const item = items.forEach((item) => {
      let tmp2 = closure_0[item];
      if (tmp2 == null) {
        tmp2 = item;
      }
      closure_1 = closure_1 + tmp2;
    });
    return dependencyMap.normalize("NFD").toLocaleLowerCase();
  };
}
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/StringUtils.tsx");

export const cssValueToNumber = DOMUtils.cssValueToNumber;
export const upperCaseFirstChar = function upperCaseFirstChar(item) {
  let str = "";
  if (null != item) {
    const formatted = item.charAt(0).toUpperCase();
    const _HermesInternal = HermesInternal;
    str = "" + formatted + item.slice(1);
    const str2 = item.charAt(0);
  }
  return str;
};
export const truncateText = (name, React6) => {
  let str = arg2;
  if (arg2 === undefined) {
    str = "\u2026";
  }
  let concat = name;
  let str2 = "";
  if (null != name) {
    str2 = "";
    if (null != React6) {
      if (concat.length <= React6) {
        str2 = concat;
      } else {
        if (re3.test(concat)) {
          const items = [];
          HermesBuiltin.arraySpread(concat, 0);
          const substr = items.slice(0, React6 - str.length);
          let str3 = substr.join("");
        } else {
          str3 = concat.substring(0, React6 - str.length);
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
    str = name
      .replace(/'s /g, " ")
      .replace(/\w+/g, (arg0) => arg0[0])
      .replace(/\s/g, "");
    const str4 = name.replace(/'s /g, " ").replace(/\w+/g, (arg0) => arg0[0]);
  }
  return str;
};
export const stripDiacritics = fn;
export const normalize = fullNormalize;
