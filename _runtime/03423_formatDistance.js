// _runtime/03423_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: "minder dan een seconde", other: "minder dan {{count}} seconden" }, xSeconds: { one: "1 seconde", other: "{{count}} seconden" }, halfAMinute: "een halve minuut", lessThanXMinutes: { one: "minder dan een minuut", other: "minder dan {{count}} minuten" }, xMinutes: { one: "een minuut", other: "{{count}} minuten" }, aboutXHours: { one: "ongeveer 1 uur", other: "ongeveer {{count}} uur" }, xHours: { one: "1 uur", other: "{{count}} uur" }, xDays: { one: "1 dag", other: "{{count}} dagen" }, aboutXWeeks: { one: "ongeveer 1 week", other: "ongeveer {{count}} weken" }, xWeeks: { one: "1 week", other: "{{count}} weken" }, aboutXMonths: { one: "ongeveer 1 maand", other: "ongeveer {{count}} maanden" }, xMonths: { one: "1 maand", other: "{{count}} maanden" }, aboutXYears: { one: "ongeveer 1 jaar", other: "ongeveer {{count}} jaar" }, xYears: { one: "1 jaar", other: "{{count}} jaar" }, overXYears: { one: "meer dan 1 jaar", other: "meer dan {{count}} jaar" }, almostXYears: { one: "bijna 1 jaar", other: "bijna {{count}} jaar" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} geleden`;
        }
        text = `over ${tmp}`;
      }
    }
    return tmp6;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    const _String = String;
    one = tmp.other.replace("{{count}}", String(arg1));
    const str = tmp.other;
  }
};
export default exports.default;