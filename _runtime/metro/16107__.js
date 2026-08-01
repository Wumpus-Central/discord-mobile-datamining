// === Module 16107: ? ===

// Module 16107
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "vi",
  pluralRuleFunction(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  }
});