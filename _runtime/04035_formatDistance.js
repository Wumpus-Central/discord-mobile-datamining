// _runtime/04035_formatDistance.js
let closure_0 = {
  lessThanXSeconds: { one: "1\uCD08 \uBBF8\uB9CC", other: "{{count}}\uCD08 \uBBF8\uB9CC" },
  xSeconds: { one: "1\uCD08", other: "{{count}}\uCD08" },
  halfAMinute: "30\uCD08",
  lessThanXMinutes: { one: "1\uBD84 \uBBF8\uB9CC", other: "{{count}}\uBD84 \uBBF8\uB9CC" },
  xMinutes: { one: "1\uBD84", other: "{{count}}\uBD84" },
  aboutXHours: { one: "\uC57D 1\uC2DC\uAC04", other: "\uC57D {{count}}\uC2DC\uAC04" },
  xHours: { one: "1\uC2DC\uAC04", other: "{{count}}\uC2DC\uAC04" },
  xDays: { one: "1\uC77C", other: "{{count}}\uC77C" },
  aboutXWeeks: { one: "\uC57D 1\uC8FC", other: "\uC57D {{count}}\uC8FC" },
  xWeeks: { one: "1\uC8FC", other: "{{count}}\uC8FC" },
  aboutXMonths: { one: "\uC57D 1\uAC1C\uC6D4", other: "\uC57D {{count}}\uAC1C\uC6D4" },
  xMonths: { one: "1\uAC1C\uC6D4", other: "{{count}}\uAC1C\uC6D4" },
  aboutXYears: { one: "\uC57D 1\uB144", other: "\uC57D {{count}}\uB144" },
  xYears: { one: "1\uB144", other: "{{count}}\uB144" },
  overXYears: { one: "1\uB144 \uC774\uC0C1", other: "{{count}}\uB144 \uC774\uC0C1" },
  almostXYears: { one: "\uAC70\uC758 1\uB144", other: "\uAC70\uC758 {{count}}\uB144" },
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
          text = `${tmp2} 후`;
        }
        tmp3 = text;
      }
      text = `${tmp2} 전`;
    }
  }
  return tmp3;
}
