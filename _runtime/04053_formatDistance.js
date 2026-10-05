// === Module 4053: formatDistance ===

// Module 4053 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "mindre enn ett sekund", other: "mindre enn {{count}} sekunder" }, xSeconds: { one: "ett sekund", other: "{{count}} sekunder" }, halfAMinute: "et halvt minutt", lessThanXMinutes: { one: "mindre enn ett minutt", other: "mindre enn {{count}} minutter" }, xMinutes: { one: "ett minutt", other: "{{count}} minutter" }, aboutXHours: { one: "omtrent en time", other: "omtrent {{count}} timer" }, xHours: { one: "en time", other: "{{count}} timer" }, xDays: { one: "en dag", other: "{{count}} dager" }, aboutXWeeks: { one: "omtrent en uke", other: "omtrent {{count}} uker" }, xWeeks: { one: "en uke", other: "{{count}} uker" }, aboutXMonths: { one: "omtrent en m\u00E5ned", other: "omtrent {{count}} m\u00E5neder" }, xMonths: { one: "en m\u00E5ned", other: "{{count}} m\u00E5neder" }, aboutXYears: { one: "omtrent ett \u00E5r", other: "omtrent {{count}} \u00E5r" }, xYears: { one: "ett \u00E5r", other: "{{count}} \u00E5r" }, overXYears: { one: "over ett \u00E5r", other: "over {{count}} \u00E5r" }, almostXYears: { one: "nesten ett \u00E5r", other: "nesten {{count}} \u00E5r" } };

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
          text = `om ${tmp2}`;
        }
        tmp4 = text;
      }
      text = `${tmp2} siden`;
    }
  }
  return tmp4;
};