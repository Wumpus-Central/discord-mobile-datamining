// _runtime/03404_futureSeconds.js
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
let obj = {
  one: "puoli minuuttia",
  other: "puoli minuuttia",
  futureTense(one) {
    return "puolen minuutin";
  }
};
obj = {
  one: "p\u00E4iv\u00E4",
  other: "{{count}} p\u00E4iv\u00E4\u00E4",
  futureTense: function futureDays(str) {
    return str.replace(/päivää?/, "p\u00E4iv\u00E4n");
  }
};
let closure_0 = { lessThanXSeconds: { one: "alle sekunti", other: "alle {{count}} sekuntia", futureTense: futureSeconds }, xSeconds: { one: "sekunti", other: "{{count}} sekuntia", futureTense: futureSeconds }, halfAMinute: obj, lessThanXMinutes: { one: "alle minuutti", other: "alle {{count}} minuuttia", futureTense: futureMinutes }, xMinutes: { one: "minuutti", other: "{{count}} minuuttia", futureTense: futureMinutes }, aboutXHours: { one: "noin tunti", other: "noin {{count}} tuntia", futureTense: futureHours }, xHours: { one: "tunti", other: "{{count}} tuntia", futureTense: futureHours }, xDays: obj, aboutXWeeks: { one: "noin viikko", other: "noin {{count}} viikkoa", futureTense: futureWeeks }, xWeeks: { one: "viikko", other: "{{count}} viikkoa", futureTense: futureWeeks }, aboutXMonths: { one: "noin kuukausi", other: "noin {{count}} kuukautta", futureTense: futureMonths }, xMonths: { one: "kuukausi", other: "{{count}} kuukautta", futureTense: futureMonths }, aboutXYears: { one: "noin vuosi", other: "noin {{count}} vuotta", futureTense: futureYears }, xYears: { one: "vuosi", other: "{{count}} vuotta", futureTense: futureYears }, overXYears: { one: "yli vuosi", other: "yli {{count}} vuotta", futureTense: futureYears }, almostXYears: { one: "l\u00E4hes vuosi", other: "l\u00E4hes {{count}} vuotta", futureTense: futureYears } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (1 === arg1) {
    let one = obj.one;
  } else {
    const _String = String;
    one = obj.other.replace("{{count}}", String(arg1));
    const str = obj.other;
  }
  let tmp2 = one;
  if (null != addSuffix) {
    tmp2 = one;
    if (addSuffix.addSuffix) {
      if (!addSuffix.comparison) {
        let text = `${one} sitten`;
      }
      one = obj.futureTense(one);
      text = `${one} kuluttua`;
    }
  }
  return tmp2;
};
export default exports.default;