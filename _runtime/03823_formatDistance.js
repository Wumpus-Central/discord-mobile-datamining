// _runtime/03823_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: "\u5C11\u65BC 1 \u79D2", other: "\u5C11\u65BC {{count}} \u79D2" }, xSeconds: { one: "1 \u79D2", other: "{{count}} \u79D2" }, halfAMinute: "\u534A\u5206\u9418", lessThanXMinutes: { one: "\u5C11\u65BC 1 \u5206\u9418", other: "\u5C11\u65BC {{count}} \u5206\u9418" }, xMinutes: { one: "1 \u5206\u9418", other: "{{count}} \u5206\u9418" }, xHours: { one: "1 \u5C0F\u6642", other: "{{count}} \u5C0F\u6642" }, aboutXHours: { one: "\u5927\u7D04 1 \u5C0F\u6642", other: "\u5927\u7D04 {{count}} \u5C0F\u6642" }, xDays: { one: "1 \u5929", other: "{{count}} \u5929" }, aboutXWeeks: { one: "\u5927\u7D04 1 \u500B\u661F\u671F", other: "\u5927\u7D04 {{count}} \u500B\u661F\u671F" }, xWeeks: { one: "1 \u500B\u661F\u671F", other: "{{count}} \u500B\u661F\u671F" }, aboutXMonths: { one: "\u5927\u7D04 1 \u500B\u6708", other: "\u5927\u7D04 {{count}} \u500B\u6708" }, xMonths: { one: "1 \u500B\u6708", other: "{{count}} \u500B\u6708" }, aboutXYears: { one: "\u5927\u7D04 1 \u5E74", other: "\u5927\u7D04 {{count}} \u5E74" }, xYears: { one: "1 \u5E74", other: "{{count}} \u5E74" }, overXYears: { one: "\u8D85\u904E 1 \u5E74", other: "\u8D85\u904E {{count}} \u5E74" }, almostXYears: { one: "\u5C07\u8FD1 1 \u5E74", other: "\u5C07\u8FD1 {{count}} \u5E74" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp}前`;
        }
        text = `${tmp}內`;
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