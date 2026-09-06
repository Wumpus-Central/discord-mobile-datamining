// _runtime/metro/03781__.js
let closure_0 = { lessThanXSeconds: { one: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 1 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35", other: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35" }, xSeconds: { one: "1 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35", other: "{{count}} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35" }, halfAMinute: "\u0E04\u0E23\u0E36\u0E48\u0E07\u0E19\u0E32\u0E17\u0E35", lessThanXMinutes: { one: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 1 \u0E19\u0E32\u0E17\u0E35", other: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E19\u0E32\u0E17\u0E35" }, xMinutes: { one: "1 \u0E19\u0E32\u0E17\u0E35", other: "{{count}} \u0E19\u0E32\u0E17\u0E35" }, aboutXHours: { one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07", other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07" }, xHours: { one: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07", other: "{{count}} \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07" }, xDays: { one: "1 \u0E27\u0E31\u0E19", other: "{{count}} \u0E27\u0E31\u0E19" }, aboutXWeeks: { one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C", other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C" }, xWeeks: { one: "1 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C", other: "{{count}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C" }, aboutXMonths: { one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E40\u0E14\u0E37\u0E2D\u0E19", other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E40\u0E14\u0E37\u0E2D\u0E19" }, xMonths: { one: "1 \u0E40\u0E14\u0E37\u0E2D\u0E19", other: "{{count}} \u0E40\u0E14\u0E37\u0E2D\u0E19" }, aboutXYears: { one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E1B\u0E35", other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E1B\u0E35" }, xYears: { one: "1 \u0E1B\u0E35", other: "{{count}} \u0E1B\u0E35" }, overXYears: { one: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E1B\u0E35", other: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E1B\u0E35" }, almostXYears: { one: "\u0E40\u0E01\u0E37\u0E2D\u0E1A 1 \u0E1B\u0E35", other: "\u0E40\u0E01\u0E37\u0E2D\u0E1A {{count}} \u0E1B\u0E35" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof closure_0[arg0] === "string") {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          const text = `${tmp}ที่ผ่านมา`;
        }
        if ("halfAMinute" === arg0) {
          let text1 = `ใน${tmp}`;
        } else {
          text1 = `ใน ${tmp}`;
        }
      }
    }
    return tmp6;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    const _String = String;
    one = tmp.other.replace("{{count}}", String(arg1));
  }
};
export default exports.default;