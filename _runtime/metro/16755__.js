// _runtime/metro/16755__.js
let obj = {
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
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-001", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-150", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-AG", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-AI", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-AS", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-AT", parentLocale: "en-150" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-AU", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-BB", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-BE", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-BI", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-BM", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-BS", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-BW", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-BZ", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-CA", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-CC", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-CH", parentLocale: "en-150" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-CK", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-CM", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-CX", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-CY", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-DE", parentLocale: "en-150" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-DG", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-DK", parentLocale: "en-150" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-DM", parentLocale: "en-001" });
obj = {
  locale: "en-Dsrt",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-ER", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-FI", parentLocale: "en-150" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-FJ", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-FK", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-FM", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-GB", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-GD", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-GG", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-GH", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-GI", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-GM", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-GU", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-GY", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-HK", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-IE", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-IL", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-IM", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-IN", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-IO", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-JE", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-JM", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-KE", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-KI", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-KN", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-KY", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-LC", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-LR", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-LS", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-MG", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-MH", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-MO", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-MP", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-MS", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-MT", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-MU", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-MW", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-MY", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-NA", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-NF", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-NG", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-NL", parentLocale: "en-150" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-NR", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-NU", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-NZ", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-PG", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-PH", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-PK", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-PN", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-PR", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-PW", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-RW", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SB", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SC", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SD", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SE", parentLocale: "en-150" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SG", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SH", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SI", parentLocale: "en-150" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SL", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SS", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SX", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-SZ", parentLocale: "en-001" });
obj = {
  locale: "en-Shaw",
  pluralRuleFunction(arg0, arg1) {
    return "other";
  }
};
globalThis.IntlMessageFormat.__addLocaleData(obj);
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-TC", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-TK", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-TO", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-TT", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-TV", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-TZ", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-UG", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-UM", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-US", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-VC", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-VG", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-VI", parentLocale: "en" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-VU", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-WS", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-ZA", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-ZM", parentLocale: "en-001" });
globalThis.IntlMessageFormat.__addLocaleData({ locale: "en-ZW", parentLocale: "en-001" });