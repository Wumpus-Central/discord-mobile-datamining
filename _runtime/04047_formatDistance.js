// === Module 4047: formatDistance ===

// Module 4047 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "minder dan een seconde", other: "minder dan {{count}} seconden" }, xSeconds: { one: "1 seconde", other: "{{count}} seconden" }, halfAMinute: "een halve minuut", lessThanXMinutes: { one: "minder dan een minuut", other: "minder dan {{count}} minuten" }, xMinutes: { one: "een minuut", other: "{{count}} minuten" }, aboutXHours: { one: "ongeveer 1 uur", other: "ongeveer {{count}} uur" }, xHours: { one: "1 uur", other: "{{count}} uur" }, xDays: { one: "1 dag", other: "{{count}} dagen" }, aboutXWeeks: { one: "ongeveer 1 week", other: "ongeveer {{count}} weken" }, xWeeks: { one: "1 week", other: "{{count}} weken" }, aboutXMonths: { one: "ongeveer 1 maand", other: "ongeveer {{count}} maanden" }, xMonths: { one: "1 maand", other: "{{count}} maanden" }, aboutXYears: { one: "ongeveer 1 jaar", other: "ongeveer {{count}} jaar" }, xYears: { one: "1 jaar", other: "{{count}} jaar" }, overXYears: { one: "meer dan 1 jaar", other: "meer dan {{count}} jaar" }, almostXYears: { one: "bijna 1 jaar", other: "bijna {{count}} jaar" } };

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
          text = `over ${tmp2}`;
        }
        tmp4 = text;
      }
      text = `${tmp2} geleden`;
    }
  }
  return tmp4;
};