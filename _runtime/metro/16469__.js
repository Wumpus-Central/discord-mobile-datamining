// === Module 16469: ? ===

// Module 16469
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "nl",
  pluralRuleFunction(arg0, arg1) {
    let str2 = "other";
    if (!arg1) {
      let str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!str.split(".")[1]) {
          str3 = "one";
        }
      }
      str2 = str3;
    }
    return str2;
  }
});
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-AW", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-BE", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-BQ", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-CW", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-SR", parentLocale: "nl" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "nl-SX", parentLocale: "nl" });