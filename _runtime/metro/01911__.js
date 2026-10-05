// === Module 1911: ? ===

// Module 1911
const obj = {
  locale: "hu",
  pluralRuleFunction(arg0, arg1) {
    let str;
    const tmp = arg1;
    if (tmp) {
      let str2;
      if (1 == arg0) {
        str2 = "one";
      } else {
        str2 = "other";
      }
      str = str2;
    } else {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);