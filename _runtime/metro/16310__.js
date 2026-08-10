// _runtime/metro/16310__.js
arg5.default = {
  locale: "en",
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
      if (1 != substr) {
        if (2 != substr) {
          let str7 = "other";
          if (3 == substr) {
            str7 = "other";
            if (13 != substr1) {
              str7 = "few";
            }
          }
          let str5 = str7;
        } else {
          str5 = "two";
        }
        let str4 = str5;
      } else {
        str4 = "one";
      }
      let str3 = str4;
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
};