// _runtime/metro/01903__.js
const obj = {
  locale: "da",
  pluralRuleFunction(arg0, arg1) {
    let str3;
    const str = String(arg0);
    const parts = str.split(".");
    const first = parts[0];
    const tmp4 = arg1;
    if (tmp4) {
      str3 = "other";
    } else {
      str3 = "one";
      if (1 != arg0) {
        if (!tmp3) {
          str3 = "one";
          if (0 != first) {
            str3 = "one";
          }
        }
      }
    }
    return str3;
  },
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "da-GL", parentLocale: "da" });
