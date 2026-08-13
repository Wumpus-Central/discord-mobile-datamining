// _runtime/metro/16397__.js
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "it",
  pluralRuleFunction(arg0, arg1) {
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str4 = "other";
          }
          let str3 = str4;
        }
      }
      str4 = "many";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!str.split(".")[1]) {
          str3 = "one";
        }
      }
    }
    return str3;
  }
});
globalThis.IntlMessageFormat.__addLocaleData({ locale: "it-CH", parentLocale: "it" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "it-SM", parentLocale: "it" });