// _runtime/metro/03751__.js
const obj = { lessThanXSeconds: { one: { regular: "mniej ni\u017C sekunda", past: "mniej ni\u017C sekund\u0119", future: "mniej ni\u017C sekund\u0119" }, twoFour: "mniej ni\u017C {{count}} sekundy", other: "mniej ni\u017C {{count}} sekund" }, xSeconds: { one: { regular: "sekunda", past: "sekund\u0119", future: "sekund\u0119" }, twoFour: "{{count}} sekundy", other: "{{count}} sekund" }, halfAMinute: { one: "p\u00F3\u0142 minuty", twoFour: "p\u00F3\u0142 minuty", other: "p\u00F3\u0142 minuty" }, lessThanXMinutes: { one: { regular: "mniej ni\u017C minuta", past: "mniej ni\u017C minut\u0119", future: "mniej ni\u017C minut\u0119" }, twoFour: "mniej ni\u017C {{count}} minuty", other: "mniej ni\u017C {{count}} minut" }, xMinutes: { one: { regular: "minuta", past: "minut\u0119", future: "minut\u0119" }, twoFour: "{{count}} minuty", other: "{{count}} minut" }, aboutXHours: { one: { regular: "oko\u0142o godziny", past: "oko\u0142o godziny", future: "oko\u0142o godzin\u0119" }, twoFour: "oko\u0142o {{count}} godziny", other: "oko\u0142o {{count}} godzin" }, xHours: { one: { regular: "godzina", past: "godzin\u0119", future: "godzin\u0119" }, twoFour: "{{count}} godziny", other: "{{count}} godzin" }, xDays: { one: { regular: "dzie\u0144", past: "dzie\u0144", future: "1 dzie\u0144" }, twoFour: "{{count}} dni", other: "{{count}} dni" }, aboutXWeeks: { one: "oko\u0142o tygodnia", twoFour: "oko\u0142o {{count}} tygodni", other: "oko\u0142o {{count}} tygodni" }, xWeeks: { one: "tydzie\u0144", twoFour: "{{count}} tygodnie", other: "{{count}} tygodni" }, aboutXMonths: { one: "oko\u0142o miesi\u0105c", twoFour: "oko\u0142o {{count}} miesi\u0105ce", other: "oko\u0142o {{count}} miesi\u0119cy" }, xMonths: { one: "miesi\u0105c", twoFour: "{{count}} miesi\u0105ce", other: "{{count}} miesi\u0119cy" }, aboutXYears: { one: "oko\u0142o rok", twoFour: "oko\u0142o {{count}} lata", other: "oko\u0142o {{count}} lat" }, xYears: { one: "rok", twoFour: "{{count}} lata", other: "{{count}} lat" }, overXYears: { one: "ponad rok", twoFour: "ponad {{count}} lata", other: "ponad {{count}} lat" }, almostXYears: { one: "prawie rok", twoFour: "prawie {{count}} lata", other: "prawie {{count}} lat" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  let replaced = arg1;
  let replace = obj[arg0];
  if (null != addSuffix) {
    if (addSuffix.addSuffix) {
      if (!addSuffix.comparison) {
        if (1 === replaced) {
          let other2 = replace.one;
        } else {
          const result = replaced % 100;
          if (result <= 20) {
            if (10 < result) {
              other2 = replace.other;
            }
          }
          const result1 = result % 10;
          if (2 <= result1) {
            if (result1 <= 4) {
              other2 = replace.twoFour;
            }
          }
          other2 = replace.other;
        }
        let past = other2;
        if (typeof other2 !== "string") {
          past = other2.past;
        }
        const _String = String;
        let text = `${tmp6("{{count}}", String(tmp))} temu`;
      }
      if (1 === replaced) {
        let other3 = replace.one;
      } else {
        const result2 = replaced % 100;
        if (result2 <= 20) {
          if (10 < result2) {
            other3 = replace.other;
          }
        }
        const result3 = result2 % 10;
        if (2 <= result3) {
          if (result3 <= 4) {
            other3 = replace.twoFour;
          }
        }
        other3 = replace.other;
      }
      let str4 = other3;
      if (typeof other3 !== "string") {
        str4 = other3.future;
      }
      replace = str4.replace;
      const _String2 = String;
      replaced = replace("{{count}}", String(replaced));
      text = `za ${tmp}`;
    }
  }
  if (1 === replaced) {
    let other = replace.one;
  } else {
    const result4 = replaced % 100;
    if (result4 <= 20) {
      if (10 < result4) {
        other = replace.other;
      }
    }
    const result5 = result4 % 10;
    if (2 <= result5) {
      if (result5 <= 4) {
        other = replace.twoFour;
      }
    }
    other = replace.other;
  }
  let str = other;
  if (typeof other !== "string") {
    str = other.regular;
  }
  return str.replace("{{count}}", String(replaced));
};
export default exports.default;