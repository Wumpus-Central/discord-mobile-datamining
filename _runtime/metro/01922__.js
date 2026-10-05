// _runtime/metro/01922__.js
const obj = {
  locale: "sv",
  pluralRuleFunction(arg0, arg1) {
    let str3;
    const str = String(arg0);
    const parts = str.split(".");
    const tmp2 = parts[1];
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      if (1 == substr) {
        let str4;
        if (11 != substr1) {
          str4 = "one";
        }
        str3 = str4;
      }
      str4 = "other";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!tmp2) {
          str3 = "one";
        }
      }
    }
    return str3;
  },
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "sv-AX", parentLocale: "sv" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "sv-FI", parentLocale: "sv" });
