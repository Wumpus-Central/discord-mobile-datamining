// _runtime/metro/01900__.js
const obj = {
  locale: "en",
  pluralRuleFunction(arg0, arg1) {
    let str3;
    const str = String(arg0);
    const parts = str.split(".");
    const tmp2 = parts[1];
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
    if (arg1) {
      let str4;
      if (1 != substr) {
        let str5;
        if (2 != substr) {
          let str7 = "other";
          if (3 == substr) {
            str7 = "other";
            if (13 != substr1) {
              str7 = "few";
            }
          }
          str5 = str7;
        } else {
          str5 = "two";
        }
        str4 = str5;
      } else {
        str4 = "one";
      }
      str3 = str4;
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (!tmp2) {
          str3 = "one";
        }
      }
    }
    return str3;
  },
};

export default obj;
