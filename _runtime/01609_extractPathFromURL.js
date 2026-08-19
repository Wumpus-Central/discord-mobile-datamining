// === Module 1609: extractPathFromURL ===

// Module 1609 (extractPathFromURL)
import _modDef1563 from "module_1563" /* 1563 */;
import _toArray from "_toArray" /* 853 */;


export const extractPathFromURL = function extractPathFromURL(current, closure_1_1) {
  const iter = current[Symbol.iterator]();
  let str = iter.next();
  while (iter !== undefined) {
    let str2 = str;
    let match = str.match(/^[^:]+:/);
    let str3;
    if (match != null) {
      str3 = match[0];
    }
    if (str3 == null) {
      str3 = "";
    }
    let _RegExp = RegExp;
    let _HermesInternal = HermesInternal;
    let regExp = new RegExp("^" + _modDef1563(str3));
    let str4 = str2.replace(regExp, "");
    let str5 = str4.replace(/\/+/g, "/");
    let str6 = str5.replace(/^\//, "");
    let tmp9 = _modDef1563(str3);
    let parts = str6.split(".");
    let mapped = parts.map((item, index) => {
      let str = "[^/?#]+";
      if ("*" !== item) {
        str = callback(table[1])(item);
      }
      return str;
    });
    let joined = mapped.join("\\.");
    if ("" === str6) {
      let str7 = "";
    } else {
      str7 = "(?=$|[/?#])";
    }
    let _HermesInternal2 = HermesInternal;
    let regExp1 = new RegExp("^" + tmp9 + "(/)*" + joined + str7);
    let obj3 = regExp1;
    let arr2 = callback(dependencyMap.split("?"));
    let str10 = arr2[0];
    let substr = arr2.slice(1);
    let obj4 = substr;
    let replaced = str10.replace(/\/+/g, "/");
    let str11 = "";
    if (substr.length) {
      let _HermesInternal3 = HermesInternal;
      str11 = "?" + obj4.join("?");
    }
    let combined = replaced.concat(str11);
    let str12 = combined;
    if (obj3.test(combined)) {
      let replaced1 = str12.replace(regExp1, "");
      let obj7 = replaced1;
      if (!replaced1.startsWith("?")) {
        if (!obj7.startsWith("#")) {
          let combined1 = replaced1;
        }
        iter.return();
        return combined1;
      }
      let _HermesInternal4 = HermesInternal;
      combined1 = "/" + replaced1;
    }
  }
};