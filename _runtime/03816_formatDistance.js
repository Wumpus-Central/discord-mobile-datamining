// _runtime/03816_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: "\u4E0D\u5230 1 \u79D2", other: "\u4E0D\u5230 {{count}} \u79D2" }, xSeconds: { one: "1 \u79D2", other: "{{count}} \u79D2" }, halfAMinute: "\u534A\u5206\u949F", lessThanXMinutes: { one: "\u4E0D\u5230 1 \u5206\u949F", other: "\u4E0D\u5230 {{count}} \u5206\u949F" }, xMinutes: { one: "1 \u5206\u949F", other: "{{count}} \u5206\u949F" }, xHours: { one: "1 \u5C0F\u65F6", other: "{{count}} \u5C0F\u65F6" }, aboutXHours: { one: "\u5927\u7EA6 1 \u5C0F\u65F6", other: "\u5927\u7EA6 {{count}} \u5C0F\u65F6" }, xDays: { one: "1 \u5929", other: "{{count}} \u5929" }, aboutXWeeks: { one: "\u5927\u7EA6 1 \u4E2A\u661F\u671F", other: "\u5927\u7EA6 {{count}} \u4E2A\u661F\u671F" }, xWeeks: { one: "1 \u4E2A\u661F\u671F", other: "{{count}} \u4E2A\u661F\u671F" }, aboutXMonths: { one: "\u5927\u7EA6 1 \u4E2A\u6708", other: "\u5927\u7EA6 {{count}} \u4E2A\u6708" }, xMonths: { one: "1 \u4E2A\u6708", other: "{{count}} \u4E2A\u6708" }, aboutXYears: { one: "\u5927\u7EA6 1 \u5E74", other: "\u5927\u7EA6 {{count}} \u5E74" }, xYears: { one: "1 \u5E74", other: "{{count}} \u5E74" }, overXYears: { one: "\u8D85\u8FC7 1 \u5E74", other: "\u8D85\u8FC7 {{count}} \u5E74" }, almostXYears: { one: "\u5C06\u8FD1 1 \u5E74", other: "\u5C06\u8FD1 {{count}} \u5E74" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp}前`;
        }
        text = `${tmp}内`;
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