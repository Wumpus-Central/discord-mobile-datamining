// _runtime/04005_formatDistance.js
function futureSeconds(str) {
  return str.replace(/sekuntia?/, "sekunnin");
}
function futureMinutes(str) {
  return str.replace(/minuuttia?/, "minuutin");
}
function futureHours(str) {
  return str.replace(/tuntia?/, "tunnin");
}
function futureWeeks(str) {
  return str.replace(/(viikko|viikkoa)/, "viikon");
}
function futureMonths(str) {
  return str.replace(/(kuukausi|kuukautta)/, "kuukauden");
}
function futureYears(str) {
  return str.replace(/(vuosi|vuotta)/, "vuoden");
}
const obj = {
  lessThanXSeconds: { one: "alle sekunti", other: "alle {{count}} sekuntia", futureTense: futureSeconds },
  xSeconds: { one: "sekunti", other: "{{count}} sekuntia", futureTense: futureSeconds },
  halfAMinute: {
    one: "puoli minuuttia",
    other: "puoli minuuttia",
    futureTense(one) {
      return "puolen minuutin";
    },
  },
  lessThanXMinutes: { one: "alle minuutti", other: "alle {{count}} minuuttia", futureTense: futureMinutes },
  xMinutes: { one: "minuutti", other: "{{count}} minuuttia", futureTense: futureMinutes },
  aboutXHours: { one: "noin tunti", other: "noin {{count}} tuntia", futureTense: futureHours },
  xHours: { one: "tunti", other: "{{count}} tuntia", futureTense: futureHours },
  xDays: {
    one: "p\u00E4iv\u00E4",
    other: "{{count}} p\u00E4iv\u00E4\u00E4",
    futureTense: function futureDays(str) {
      return str.replace(/päivää?/, "p\u00E4iv\u00E4n");
    },
  },
  aboutXWeeks: { one: "noin viikko", other: "noin {{count}} viikkoa", futureTense: futureWeeks },
  xWeeks: { one: "viikko", other: "{{count}} viikkoa", futureTense: futureWeeks },
  aboutXMonths: { one: "noin kuukausi", other: "noin {{count}} kuukautta", futureTense: futureMonths },
  xMonths: { one: "kuukausi", other: "{{count}} kuukautta", futureTense: futureMonths },
  aboutXYears: { one: "noin vuosi", other: "noin {{count}} vuotta", futureTense: futureYears },
  xYears: { one: "vuosi", other: "{{count}} vuotta", futureTense: futureYears },
  overXYears: { one: "yli vuosi", other: "yli {{count}} vuotta", futureTense: futureYears },
  almostXYears: { one: "l\u00E4hes vuosi", other: "l\u00E4hes {{count}} vuotta", futureTense: futureYears },
};

export default function formatDistance(arg0, arg1, addSuffix) {
  let one;
  if (1 === arg1) {
    one = obj.one;
  } else {
    const _String = String;
    const str = obj[arg0].other;
    one = str.replace("{{count}}", String(arg1));
  }
  let tmp2 = one;
  if (null != addSuffix) {
    tmp2 = one;
    if (addSuffix.addSuffix) {
      if (addSuffix.comparison) {
        let text;
        if (addSuffix.comparison > 0) {
          text = `${obj.futureTense(one)} kuluttua`;
        }
        tmp2 = text;
      }
      text = `${one} sitten`;
    }
  }
  return tmp2;
}
