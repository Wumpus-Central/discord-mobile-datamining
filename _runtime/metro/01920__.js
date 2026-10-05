// _runtime/metro/01920__.js
const obj = {
  locale: "ro",
  pluralRuleFunction(arg0, arg1) {
    let str2;
    const str = String(arg0);
    const parts = str.split(".");
    let substr = Number(parts[0]) == arg0;
    if (substr) {
      const first = parts[0];
      substr = first.slice(-2);
    }
    if (arg1) {
      let str5 = "other";
      if (1 == arg0) {
        str5 = "one";
      }
      str2 = str5;
    } else if (1 != arg0) {
      if (!parts[1]) {
        let str4;
        if (0 != arg0) {
          str4 = "other";
          if (1 != arg0) {
            str4 = "other";
            if (substr >= 1) {
              str4 = "other";
            }
          }
        }
        str2 = str4;
      }
      str4 = "few";
    } else {
      str2 = "one";
    }
    return str2;
  },
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "ro-MD", parentLocale: "ro" });
