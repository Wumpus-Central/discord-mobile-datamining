// === Module 16167: ? ===

// Module 16167
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "sv",
  pluralRuleFunction(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      if (1 == substr) {
        if (11 != substr1) {
          let str4 = "one";
        }
        let str3 = str4;
      }
      str4 = "other";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!parts[1]) {
          str3 = "one";
        }
      }
    }
    return str3;
  }
});
globalThis.IntlMessageFormat.__addLocaleData({ locale: "sv-AX", parentLocale: "sv" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "sv-FI", parentLocale: "sv" });