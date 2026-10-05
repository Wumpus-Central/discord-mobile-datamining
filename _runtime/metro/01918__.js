// _runtime/metro/01918__.js
const obj = {
  locale: "pl",
  pluralRuleFunction(arg0, arg1) {
    let arr;
    let str6;
    let tmp2;
    const str = String(arg0);
    const parts = str.split(".");
    [arr, tmp2] = parts;
    const substr = arr.slice(-1);
    const substr1 = arr.slice(-2);
    let str2 = "other";
    if (!arg1) {
      let str3;
      if (1 != arg0) {
        let str5;
        if (!tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              str5 = "few";
              if (substr1 >= 12) {
                str5 = "few";
              }
            }
            str3 = str5;
          }
        }
        if (!tmp2) {
          if (1 != arr) {
            if (0 != substr) {
              str5 = str6;
            }
          }
          str6 = "many";
        }
        str6 = "other";
        if (!tmp2) {
          str6 = "other";
          if (substr1 >= 12) {
            str6 = "other";
          }
        }
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  },
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
