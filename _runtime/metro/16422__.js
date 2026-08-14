// _runtime/metro/16422__.js
let obj = {
  locale: "pt",
  pluralRuleFunction(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (tmp2) {
        str2 = "other";
        if (arg0 >= 0) {
          str2 = "other";
          if (arg0 <= 2) {
            str2 = "other";
            if (2 != arg0) {
              str2 = "one";
            }
          }
        }
      }
      str = str2;
    }
    return str;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "pt-AO", parentLocale: "pt-PT" });
obj = {
  locale: "pt-PT",
  parentLocale: "pt",
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
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "pt-CV", parentLocale: "pt-PT" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "pt-GW", parentLocale: "pt-PT" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "pt-MO", parentLocale: "pt-PT" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "pt-MZ", parentLocale: "pt-PT" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "pt-ST", parentLocale: "pt-PT" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "pt-TL", parentLocale: "pt-PT" });