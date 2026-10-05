// === Module 1912: ? ===

// Module 1912
const obj = {
  locale: "it",
  pluralRuleFunction(arg0, arg1) {
    let str3;
    const str = String(arg0);
    const tmp = str.split(".")[1];
    const tmp2 = arg1;
    if (tmp2) {
      if (11 != arg0) {
        if (8 != arg0) {
          let str4;
          if (80 != arg0) {
            str4 = "other";
          }
          str3 = str4;
        }
      }
      str4 = "many";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!tmp) {
          str3 = "one";
        }
      }
    }
    return str3;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "it-CH", parentLocale: "it" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "it-SM", parentLocale: "it" });