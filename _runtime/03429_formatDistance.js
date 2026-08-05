// _runtime/03429_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: "mindre enn ett sekund", other: "mindre enn {{count}} sekunder" }, xSeconds: { one: "ett sekund", other: "{{count}} sekunder" }, halfAMinute: "et halvt minutt", lessThanXMinutes: { one: "mindre enn ett minutt", other: "mindre enn {{count}} minutter" }, xMinutes: { one: "ett minutt", other: "{{count}} minutter" }, aboutXHours: { one: "omtrent en time", other: "omtrent {{count}} timer" }, xHours: { one: "en time", other: "{{count}} timer" }, xDays: { one: "en dag", other: "{{count}} dager" }, aboutXWeeks: { one: "omtrent en uke", other: "omtrent {{count}} uker" }, xWeeks: { one: "en uke", other: "{{count}} uker" }, aboutXMonths: { one: "omtrent en m\u00E5ned", other: "omtrent {{count}} m\u00E5neder" }, xMonths: { one: "en m\u00E5ned", other: "{{count}} m\u00E5neder" }, aboutXYears: { one: "omtrent ett \u00E5r", other: "omtrent {{count}} \u00E5r" }, xYears: { one: "ett \u00E5r", other: "{{count}} \u00E5r" }, overXYears: { one: "over ett \u00E5r", other: "over {{count}} \u00E5r" }, almostXYears: { one: "nesten ett \u00E5r", other: "nesten {{count}} \u00E5r" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} siden`;
        }
        text = `om ${tmp}`;
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