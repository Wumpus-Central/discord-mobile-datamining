// === Module 1607: extractPathFromURL ===

// Module 1607 (extractPathFromURL)
import _modDef1561 from "module_1561" /* 1561 */;
import closure_2 from "_toArray" /* 850 */;


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
    let tmp2 = str;
    let _RegExp = RegExp;
    let tmp3 = importDefault;
    let tmp4 = dependencyMap;
    let _HermesInternal = HermesInternal;
    let tmp5 = new.target;
    let tmp6 = new.target;
    let regExp = new RegExp("^" + _modDef1561(str3));
    let tmp8 = regExp;
    let str4 = str2.replace(regExp, "");
    let str5 = str4.replace(/\/+/g, "/");
    let str6 = str5.replace(/^\//, "");
    let obj = str6;
    let tmp9 = _modDef1561(str3);
    let parts = str6.split(".");
    let mapped = parts.map((arg0) => {
      let str = "[^/?#]+";
      if ("*" !== arg0) {
        str = callback(table[1])(arg0);
      }
      return str;
    });
    let joined = mapped.join("\\.");
    if ("" === str6) {
      let str7 = "";
    } else {
      let tmp11 = str6;
      str7 = "(?=$|[/?#])";
    }
    let _HermesInternal2 = HermesInternal;
    let str8 = "^";
    let tmp12 = tmp9;
    let str9 = "(/)*";
    let tmp13 = joined;
    let tmp14 = str7;
    let tmp15 = new.target;
    let tmp16 = new.target;
    let regExp1 = new RegExp("^" + tmp9 + "(/)*" + joined + str7);
    let obj3 = regExp1;
    let tmp18 = callback;
    let arr2 = callback(AUTO_DISMISS.split("?"));
    let str10 = arr2[0];
    let substr = arr2.slice(1);
    let obj4 = substr;
    let replaced = str10.replace(/\/+/g, "/");
    let str11 = "";
    if (substr.length) {
      let tmp19 = substr;
      let _HermesInternal3 = HermesInternal;
      str11 = "?" + obj4.join("?");
    }
    let combined = replaced.concat(str11);
    let str12 = combined;
    let tmp21 = regExp1;
    if (obj3.test(combined)) {
      let tmp22 = combined;
      let replaced1 = str12.replace(regExp1, "");
      let obj7 = replaced1;
      if (!replaced1.startsWith("?")) {
        let tmp23 = replaced1;
        let str13 = "#";
        if (!obj7.startsWith("#")) {
          let combined1 = replaced1;
        }
        let tmp25 = iter;
        iter.return();
        return combined1;
      }
      let _HermesInternal4 = HermesInternal;
      combined1 = "/" + replaced1;
    }
  }
};