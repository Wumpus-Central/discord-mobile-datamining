// _runtime/metro/01914__.js
const obj = {
  locale: "ko",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  },
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "ko-KP", parentLocale: "ko" });
