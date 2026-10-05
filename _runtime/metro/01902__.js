// _runtime/metro/01902__.js
const obj = {
  locale: "cs",
  pluralRuleFunction(arg0, arg1) {
    let tmp2;
    let tmp3;
    const str = String(arg0);
    const parts = str.split(".");
    [tmp2, tmp3] = parts;
    let str2 = "other";
    if (!arg1) {
      let str3;
      if (1 != arg0) {
        if (tmp2 >= 2) {
          let str4;
          if (tmp2 <= 4) {
            str4 = "few";
          }
          str3 = str4;
        }
        let str5 = "many";
        if (!tmp3) {
          str5 = "other";
        }
        str4 = str5;
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  },
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
