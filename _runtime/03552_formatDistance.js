// _runtime/03552_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: "1\uCD08 \uBBF8\uB9CC", other: "{{count}}\uCD08 \uBBF8\uB9CC" }, xSeconds: { one: "1\uCD08", other: "{{count}}\uCD08" }, halfAMinute: "30\uCD08", lessThanXMinutes: { one: "1\uBD84 \uBBF8\uB9CC", other: "{{count}}\uBD84 \uBBF8\uB9CC" }, xMinutes: { one: "1\uBD84", other: "{{count}}\uBD84" }, aboutXHours: { one: "\uC57D 1\uC2DC\uAC04", other: "\uC57D {{count}}\uC2DC\uAC04" }, xHours: { one: "1\uC2DC\uAC04", other: "{{count}}\uC2DC\uAC04" }, xDays: { one: "1\uC77C", other: "{{count}}\uC77C" }, aboutXWeeks: { one: "\uC57D 1\uC8FC", other: "\uC57D {{count}}\uC8FC" }, xWeeks: { one: "1\uC8FC", other: "{{count}}\uC8FC" }, aboutXMonths: { one: "\uC57D 1\uAC1C\uC6D4", other: "\uC57D {{count}}\uAC1C\uC6D4" }, xMonths: { one: "1\uAC1C\uC6D4", other: "{{count}}\uAC1C\uC6D4" }, aboutXYears: { one: "\uC57D 1\uB144", other: "\uC57D {{count}}\uB144" }, xYears: { one: "1\uB144", other: "{{count}}\uB144" }, overXYears: { one: "1\uB144 \uC774\uC0C1", other: "{{count}}\uB144 \uC774\uC0C1" }, almostXYears: { one: "\uAC70\uC758 1\uB144", other: "\uAC70\uC758 {{count}}\uB144" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} 전`;
        }
        text = `${tmp} 후`;
      }
    }
    return tmp5;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    one = tmp.other.replace("{{count}}", arg1.toString());
    const str = tmp.other;
  }
};
export default exports.default;