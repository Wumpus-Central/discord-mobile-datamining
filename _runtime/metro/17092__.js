// === Module 17092: ? ===

// Module 17092
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "pl",
  pluralRuleFunction(arg0, arg1) {
    const parts = String(arg0).split(".");
    [arr, tmp2] = parts;
    const substr = arr.slice(-1);
    const substr1 = arr.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (1 != arg0) {
        if (!tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              let str5 = "few";
              if (substr1 >= 12) {
                str5 = "few";
              }
            }
            let str3 = str5;
          }
        }
        if (!tmp2) {
          if (1 != arr) {
            if (0 != substr) {
              str5 = str6;
            }
          }
          str6 = "many";
        }
        str6 = "other";
        if (!tmp2) {
          str6 = "other";
          if (substr1 >= 12) {
            str6 = "other";
          }
        }
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  }
});