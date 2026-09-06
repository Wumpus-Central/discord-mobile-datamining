// === Module 1592: extractPathFromURL ===

// Module 1592 (extractPathFromURL)
import _modDef1546 from "module_1546" /* 1546 */;
import _toArray from "_toArray" /* 718 */;


export const extractPathFromURL = function extractPathFromURL(current, AUTO_DISMISS) {
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
    let tmp5 = new.target;
    let tmp6 = new.target;
    let regExp = new RegExp("^" + _modDef1546(str3));
    let str4 = str2.replace(regExp, "");
    let str5 = str4.replace(/\/+/g, "/");
    let str6 = str5.replace(/^\//, "");
    let tmp9 = _modDef1546(str3);
    let parts = str6.split(".");
    let mapped = parts.map((item) => {
      let str = "[^/?#]+";
      if ("*" !== item) {
        str = _modDef1546(item);
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
    let str8 = "^";
    let str9 = "(/)*";
    let tmp15 = new.target;
    let tmp16 = new.target;
    let regExp1 = new RegExp("^" + tmp9 + "(/)*" + joined + str7);
    let obj3 = regExp1;
    let arr2 = _toArray(AUTO_DISMISS.split("?"));
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
        let str13 = "#";
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