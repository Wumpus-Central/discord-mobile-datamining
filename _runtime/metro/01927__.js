// _runtime/metro/01927__.js
const obj = {
  locale: "zh",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  },
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hans", parentLocale: "zh" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hans-HK", parentLocale: "zh-Hans" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hans-MO", parentLocale: "zh-Hans" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hans-SG", parentLocale: "zh-Hans" });
const obj2 = {
  locale: "zh-Hant",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  },
};
globalThis.IntlMessageFormat.__addLocaleData(obj2);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hant-HK", parentLocale: "zh-Hant" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "zh-Hant-MO", parentLocale: "zh-Hant-HK" });
