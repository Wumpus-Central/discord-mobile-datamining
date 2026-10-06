// _runtime/03979_formatDistance.js
let closure_0 = {
  lessThanXSeconds: { one: "mindre end \u00E9t sekund", other: "mindre end {{count}} sekunder" },
  xSeconds: { one: "1 sekund", other: "{{count}} sekunder" },
  halfAMinute: "\u00E9t halvt minut",
  lessThanXMinutes: { one: "mindre end \u00E9t minut", other: "mindre end {{count}} minutter" },
  xMinutes: { one: "1 minut", other: "{{count}} minutter" },
  aboutXHours: { one: "cirka 1 time", other: "cirka {{count}} timer" },
  xHours: { one: "1 time", other: "{{count}} timer" },
  xDays: { one: "1 dag", other: "{{count}} dage" },
  aboutXWeeks: { one: "cirka 1 uge", other: "cirka {{count}} uger" },
  xWeeks: { one: "1 uge", other: "{{count}} uger" },
  aboutXMonths: { one: "cirka 1 m\u00E5ned", other: "cirka {{count}} m\u00E5neder" },
  xMonths: { one: "1 m\u00E5ned", other: "{{count}} m\u00E5neder" },
  aboutXYears: { one: "cirka 1 \u00E5r", other: "cirka {{count}} \u00E5r" },
  xYears: { one: "1 \u00E5r", other: "{{count}} \u00E5r" },
  overXYears: { one: "over 1 \u00E5r", other: "over {{count}} \u00E5r" },
  almostXYears: { one: "n\u00E6sten 1 \u00E5r", other: "n\u00E6sten {{count}} \u00E5r" },
};

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
}
