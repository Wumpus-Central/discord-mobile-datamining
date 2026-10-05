// _runtime/02119_formatDistance.js
let closure_0 = {
  lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" },
  xSeconds: { one: "1 second", other: "{{count}} seconds" },
  halfAMinute: "half a minute",
  lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" },
  xMinutes: { one: "1 minute", other: "{{count}} minutes" },
  aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
  xHours: { one: "1 hour", other: "{{count}} hours" },
  xDays: { one: "1 day", other: "{{count}} days" },
  aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
  xWeeks: { one: "1 week", other: "{{count}} weeks" },
  aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
  xMonths: { one: "1 month", other: "{{count}} months" },
  aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
  xYears: { one: "1 year", other: "{{count}} years" },
  overXYears: { one: "over 1 year", other: "over {{count}} years" },
  almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
};

export default function formatDistance(arg0, arg1, addSuffix) {
  let tmp2 = tmp;
  if (typeof closure_0[arg0] !== "string") {
    let one;
    if (1 === arg1) {
      one = tmp.one;
    } else {
      const str = closure_0[arg0].other;
      one = str.replace("{{count}}", arg1.toString());
    }
    tmp2 = one;
  }
  let tmp3 = tmp2;
  if (null != addSuffix) {
    tmp3 = tmp2;
    if (addSuffix.addSuffix) {
      if (addSuffix.comparison) {
        let text;
        if (addSuffix.comparison > 0) {
          text = `in ${tmp2}`;
        }
        tmp3 = text;
      }
      text = `${tmp2} ago`;
    }
  }
  return tmp3;
}
