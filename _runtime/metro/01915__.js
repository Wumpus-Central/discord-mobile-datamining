// _runtime/metro/01915__.js
const obj = {
  locale: "lt",
  pluralRuleFunction(arg0, arg1) {
    const str = String(arg0);
    const parts = str.split(".");
    const tmp2 = parts[1] || "";
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
    let str2 = "other";
    let str3 = "other";
    if (!arg1) {
      let str5;
      if (1 != substr) {
        if (substr >= 2) {
          let str7;
          if (substr <= 9) {
            str7 = "few";
            if (substr1 >= 11) {
              str7 = "few";
            }
          }
          str5 = str7;
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
  },
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
