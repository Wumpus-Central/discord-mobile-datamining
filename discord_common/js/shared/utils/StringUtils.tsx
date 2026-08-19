// === Module 1904: cssValueToNumber ===

// Module 1904 (cssValueToNumber)
import obj132 from "obj132" /* 2 */;
import set from "set" /* 1906 */;

const re2 = /[\u0300-\u036f]/g;
const re3 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
if (null == String.prototype.normalize) {
  let fn = (arg0) => arg0;
} else {
  fn = (str) => {
    str = str.normalize("NFD");
    const normalizer = str.replace(closure_2, "");
    return normalizer.normalize("NFC");
  };
}
if (null == String.prototype.normalize) {
  let fullNormalize = (arg0) => arg0;
} else {
  fullNormalize = function fullNormalize(str) {
    _require = _require(1905);
    dependencyMap = "";
    const items = [...str.normalize("NFD")];
    const item = items.forEach((item, index) => {
      let tmp2 = table[item];
      if (tmp2 == null) {
        tmp2 = item;
      }
      closure_1 = closure_1 + tmp2;
    });
    return dependencyMap.normalize("NFD").toLocaleLowerCase();
  };
}
const result = obj132.fileFinishedImporting("../discord_common/js/shared/utils/StringUtils.tsx");

export const cssValueToNumber = set.cssValueToNumber;
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
export const truncateText = (name, closure_8) => {
  let str = arg2;
  if (arg2 === undefined) {
    str = "\u2026";
  }
  let concat = name;
  let str2 = "";
  if (null != name) {
    str2 = "";
    if (null != closure_8) {
      if (concat.length <= closure_8) {
        str2 = concat;
      } else {
        if (regex.test(concat)) {
          const items = [];
          HermesBuiltin.arraySpread(concat, 0);
          const substr = items.slice(0, closure_8 - str.length);
          let str3 = substr.join("");
        } else {
          str3 = concat.substring(0, closure_8 - str.length);
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