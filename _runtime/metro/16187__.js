// _runtime/metro/16187__.js
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "hr",
  pluralRuleFunction(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = arr2.slice(-1);
    const substr3 = arr2.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (1 != substr2) {
        if (!tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              if (substr1 >= 12) {
                str3 = str4;
              }
            }
            str4 = "few";
          }
        }
        str4 = "other";
        if (substr2 >= 2) {
          str4 = "other";
          if (substr2 <= 4) {
            if (substr3 >= 12) {
              str4 = "other";
            }
          }
        }
      } else {
        str3 = "one";
      }
    }
    return str2;
  }
});
globalThis.IntlMessageFormat.__addLocaleData({ locale: "hr-BA", parentLocale: "hr" });