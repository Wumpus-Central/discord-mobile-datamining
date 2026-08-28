// _runtime/metro/16751__.js
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "cs",
  pluralRuleFunction(arg0, arg1) {
    const parts = String(arg0).split(".");
    [tmp2, tmp3] = parts;
    let str2 = "other";
    if (!arg1) {
      if (1 != arg0) {
        if (tmp2 >= 2) {
          if (tmp2 <= 4) {
            let str4 = "few";
          }
          let str3 = str4;
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
  }
});