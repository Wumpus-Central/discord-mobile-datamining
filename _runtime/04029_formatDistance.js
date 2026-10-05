// _runtime/04029_formatDistance.js
let closure_0 = {
  lessThanXSeconds: {
    one: "1\u79D2\u672A\u6E80",
    other: "{{count}}\u79D2\u672A\u6E80",
    oneWithSuffix: "\u7D041\u79D2",
    otherWithSuffix: "\u7D04{{count}}\u79D2",
  },
  xSeconds: { one: "1\u79D2", other: "{{count}}\u79D2" },
  halfAMinute: "30\u79D2",
  lessThanXMinutes: {
    one: "1\u5206\u672A\u6E80",
    other: "{{count}}\u5206\u672A\u6E80",
    oneWithSuffix: "\u7D041\u5206",
    otherWithSuffix: "\u7D04{{count}}\u5206",
  },
  xMinutes: { one: "1\u5206", other: "{{count}}\u5206" },
  aboutXHours: { one: "\u7D041\u6642\u9593", other: "\u7D04{{count}}\u6642\u9593" },
  xHours: { one: "1\u6642\u9593", other: "{{count}}\u6642\u9593" },
  xDays: { one: "1\u65E5", other: "{{count}}\u65E5" },
  aboutXWeeks: { one: "\u7D041\u9031\u9593", other: "\u7D04{{count}}\u9031\u9593" },
  xWeeks: { one: "1\u9031\u9593", other: "{{count}}\u9031\u9593" },
  aboutXMonths: { one: "\u7D041\u304B\u6708", other: "\u7D04{{count}}\u304B\u6708" },
  xMonths: { one: "1\u304B\u6708", other: "{{count}}\u304B\u6708" },
  aboutXYears: { one: "\u7D041\u5E74", other: "\u7D04{{count}}\u5E74" },
  xYears: { one: "1\u5E74", other: "{{count}}\u5E74" },
  overXYears: { one: "1\u5E74\u4EE5\u4E0A", other: "{{count}}\u5E74\u4EE5\u4E0A" },
  almostXYears: { one: "1\u5E74\u8FD1\u304F", other: "{{count}}\u5E74\u8FD1\u304F" },
};

export default function formatDistance(arg0, arg1, arg2) {
  const tmp = arg2 || {};
  let tmp3 = tmp2;
  if (typeof closure_0[arg0] !== "string") {
    let replaced;
    if (1 === arg1) {
      if (tmp.addSuffix) {
        let one;
        if (closure_0[arg0].oneWithSuffix) {
          one = tmp2.oneWithSuffix;
        }
        replaced = one;
      }
      one = tmp2.one;
    } else {
      if (tmp.addSuffix) {
        if (closure_0[arg0].otherWithSuffix) {
          const _String2 = String;
          const str3 = closure_0[arg0].otherWithSuffix;
          replaced = str3.replace("{{count}}", String(arg1));
        }
      }
      const _String = String;
      const str = closure_0[arg0].other;
      replaced = str.replace("{{count}}", String(arg1));
    }
    tmp3 = replaced;
  }
  let tmp7 = tmp3;
  if (tmp.addSuffix) {
    if (tmp.comparison) {
      let text;
      if (tmp.comparison > 0) {
        text = `${tmp3}後`;
      }
      tmp7 = text;
    }
    text = `${tmp3}前`;
  }
  return tmp7;
}
