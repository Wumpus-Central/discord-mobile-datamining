// _runtime/metro/16183__.js
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "uk",
  pluralRuleFunction(arg0, arg1) {
    let arr;
    let tmp2;
    const parts = String(arg0).split(".");
    [arr, tmp2] = parts;
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
    const substr2 = arr.slice(-1);
    const substr3 = arr.slice(-2);
    if (arg1) {
      let str8 = "other";
      if (3 == substr) {
        str8 = "other";
        if (13 != substr1) {
          str8 = "few";
        }
      }
      let str2 = str8;
    } else {
      if (!tmp2) {
        if (1 == substr2) {
          str2 = "one";
        }
      }
      if (!tmp2) {
        if (substr2 >= 2) {
          if (substr2 <= 4) {
            let str4 = "few";
            if (substr3 >= 12) {
              str4 = "few";
            }
          }
          str2 = str4;
        }
      }
      if (tmp2) {
        if (!tmp2) {
          if (substr2 >= 5) {
            str4 = str6;
          }
        }
        str6 = "other";
        if (!tmp2) {
          str6 = "other";
          if (substr3 >= 11) {
            str6 = "other";
          }
        }
      }
      str6 = "many";
    }
    return str2;
  }
});