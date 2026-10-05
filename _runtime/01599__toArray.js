// _runtime/01599__toArray.js
import _modDef1553 from "metro/01553__.js";
import _toArray from "00729__toArray.js";

export const extractPathFromURL = function extractPathFromURL(current, AUTO_DISMISS) {
  const iter = current[Symbol.iterator]();
  let str = iter.next();
  while (iter !== undefined) {
    let str7;
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
    let replace = str2.replace;
    let _HermesInternal = HermesInternal;
    let self = this;
    let self2 = this;
    let regExp = new RegExp("^" + _modDef1553(str3));
    let str4 = replace(regExp, "");
    let str5 = str4.replace(/\/+/g, "/");
    let str6 = str5.replace(/^\//, "");
    let _RegExp2 = RegExp;
    let tmp7 = _modDef1553(str3);
    let parts = str6.split(".");
    let mapped = parts.map((item) => {
      let str = "[^/?#]+";
      if ("*" !== item) {
        str = _modDef1553(item);
      }
      return str;
    });
    let joined = mapped.join("\\.");
    if ("" === str6) {
      str7 = "";
    } else {
      str7 = "(?=$|[/?#])";
    }
    let _HermesInternal2 = HermesInternal;
    let str8 = "^";
    let str9 = "(/)*";
    let self3 = this;
    let self4 = this;
    let _RegExp21 = new _RegExp2("^" + tmp7 + "(/)*" + joined + str7);
    let obj3 = _RegExp21;
    let arr2 = _toArray(AUTO_DISMISS.split("?"));
    let str10 = arr2[0];
    let substr = arr2.slice(1);
    let obj4 = substr;
    let replaced = str10.replace(/\/+/g, "/");
    let str11 = "";
    let concat = replaced.concat;
    if (substr.length) {
      let _HermesInternal3 = HermesInternal;
      str11 = "?" + obj4.join("?");
    }
    let combined = concat(str11);
    let str12 = combined;
    if (obj3.test(combined)) {
      let replaced1 = str12.replace(_RegExp21, "");
      let obj6 = replaced1;
      if (!replaced1.startsWith("?")) {
        let combined1;
        let str13 = "#";
        if (!obj6.startsWith("#")) {
          combined1 = replaced1;
        }
        iter.return();
        return combined1;
      }
      let _HermesInternal4 = HermesInternal;
      combined1 = "/" + replaced1;
    }
  }
};
