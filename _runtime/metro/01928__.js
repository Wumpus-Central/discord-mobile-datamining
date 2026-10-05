// === Module 1928: ? ===

// Module 1928
const obj = {
  locale: "hi",
  pluralRuleFunction(arg0, arg1) {
    let str2;
    const tmp = arg1;
    if (tmp) {
      let str3 = "one";
      if (1 != arg0) {
        let str5 = "two";
        if (2 != arg0) {
          str5 = "two";
          if (3 != arg0) {
            let str6 = "few";
            if (4 != arg0) {
              let str7 = "other";
              if (6 == arg0) {
                str7 = "many";
              }
              str6 = str7;
            }
            str5 = str6;
          }
        }
        str3 = str5;
      }
      str2 = str3;
    } else {
      str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 <= 1) {
          str2 = "one";
        }
      }
    }
    return str2;
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);