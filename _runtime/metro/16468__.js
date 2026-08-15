// _runtime/metro/16468__.js
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "lt",
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
    let str2 = "other";
    let str3 = "other";
    if (!arg1) {
      if (1 != substr) {
        if (substr >= 2) {
          if (substr <= 9) {
            let str7 = "few";
            if (substr1 >= 11) {
              str7 = "few";
            }
          }
          let str5 = str7;
        }
        if (0 != tmp2) {
          str2 = "many";
        }
        str7 = str2;
      } else {
        str5 = "one";
        if (substr1 >= 11) {
          str5 = "one";
        }
      }
      str3 = str5;
    }
    return str3;
  }
});