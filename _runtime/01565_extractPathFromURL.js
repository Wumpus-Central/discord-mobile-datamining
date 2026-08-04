// _runtime/01565_extractPathFromURL.js
const module = arg2;
const dependencyMap = arg6;
arg5.default = function extractPathFromURL(arg0, str) {
  const iter = arg0[Symbol.iterator]();
  str = iter.next();
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
    let tmp3 = module;
    let tmp4 = dependencyMap;
    let _HermesInternal = HermesInternal;
    let tmp5 = new.target;
    let tmp6 = new.target;
    let regExp = new RegExp("^" + module(1525)(str3));
    let tmp8 = regExp;
    let str4 = str2.replace(regExp, "");
    let str5 = str4.replace(/\/+/g, "/");
    let str6 = str5.replace(/^\//, "");
    let _RegExp2 = RegExp;
    let tmp9 = module(1525)(str3);
    let parts = str6.split(".");
    let mapped = parts.map((arg0) => {
      let str = "[^/]+";
      if ("*" !== arg0) {
        str = callback(table[0])(arg0);
      }
      return str;
    });
    let _HermesInternal2 = HermesInternal;
    let tmp10 = new.target;
    let tmp11 = new.target;
    let regExp1 = new RegExp("^" + tmp9 + "(/)*" + mapped.join("\\."));
    let tmp13 = regExp1;
    let tmp12 = regExp1;
    let replaced = str.replace(/\/+/g, "/");
    let str7 = replaced;
    if (regExp1.test(replaced)) {
      let tmp15 = replaced;
      let tmp17 = iter;
      let replaced1 = str7.replace(tmp12, "");
      iter.return();
      return replaced1;
    }
  }
};