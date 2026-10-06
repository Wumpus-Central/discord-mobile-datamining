// === Module 4011: formatDistance ===

// Module 4011 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "moins d\u2019une seconde", other: "moins de {{count}} secondes" }, xSeconds: { one: "1 seconde", other: "{{count}} secondes" }, halfAMinute: "30 secondes", lessThanXMinutes: { one: "moins d\u2019une minute", other: "moins de {{count}} minutes" }, xMinutes: { one: "1 minute", other: "{{count}} minutes" }, aboutXHours: { one: "environ 1 heure", other: "environ {{count}} heures" }, xHours: { one: "1 heure", other: "{{count}} heures" }, xDays: { one: "1 jour", other: "{{count}} jours" }, aboutXWeeks: { one: "environ 1 semaine", other: "environ {{count}} semaines" }, xWeeks: { one: "1 semaine", other: "{{count}} semaines" }, aboutXMonths: { one: "environ 1 mois", other: "environ {{count}} mois" }, xMonths: { one: "1 mois", other: "{{count}} mois" }, aboutXYears: { one: "environ 1 an", other: "environ {{count}} ans" }, xYears: { one: "1 an", other: "{{count}} ans" }, overXYears: { one: "plus d\u2019un an", other: "plus de {{count}} ans" }, almostXYears: { one: "presqu\u2019un an", other: "presque {{count}} ans" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  let tmp2 = tmp;
  if (typeof closure_0[arg0] !== "string") {
    let one;
    if (1 === arg1) {
      one = tmp.one;
    } else {
      const _String = String;
      const str = closure_0[arg0].other;
      one = str.replace("{{count}}", String(arg1));
    }
    tmp2 = one;
  }
  let tmp4 = tmp2;
  if (null != addSuffix) {
    tmp4 = tmp2;
    if (addSuffix.addSuffix) {
      if (addSuffix.comparison) {
        let text;
        if (addSuffix.comparison > 0) {
          text = `dans ${tmp2}`;
        }
        tmp4 = text;
      }
      text = `il y a ${tmp2}`;
    }
  }
  return tmp4;
};