// === Module 1904: ? ===

// Module 1904
const obj = {
  locale: "de",
  pluralRuleFunction(arg0, arg1) {
    let str2 = "other";
    const str = String(arg0);
    const tmp = str.split(".")[1];
    if (!arg1) {
      let str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!tmp) {
          str3 = "one";
        }
      }
      str2 = str3;
    }
    return str2;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-AT", parentLocale: "de" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-BE", parentLocale: "de" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-CH", parentLocale: "de" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-LI", parentLocale: "de" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "de-LU", parentLocale: "de" });