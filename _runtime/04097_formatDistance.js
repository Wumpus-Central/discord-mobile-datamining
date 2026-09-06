// === Module 4097: formatDistance ===

// Module 4097 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "d\u01B0\u1EDBi 1 gi\u00E2y", other: "d\u01B0\u1EDBi {{count}} gi\u00E2y" }, xSeconds: { one: "1 gi\u00E2y", other: "{{count}} gi\u00E2y" }, halfAMinute: "n\u1EEDa ph\u00FAt", lessThanXMinutes: { one: "d\u01B0\u1EDBi 1 ph\u00FAt", other: "d\u01B0\u1EDBi {{count}} ph\u00FAt" }, xMinutes: { one: "1 ph\u00FAt", other: "{{count}} ph\u00FAt" }, aboutXHours: { one: "kho\u1EA3ng 1 gi\u1EDD", other: "kho\u1EA3ng {{count}} gi\u1EDD" }, xHours: { one: "1 gi\u1EDD", other: "{{count}} gi\u1EDD" }, xDays: { one: "1 ng\u00E0y", other: "{{count}} ng\u00E0y" }, aboutXWeeks: { one: "kho\u1EA3ng 1 tu\u1EA7n", other: "kho\u1EA3ng {{count}} tu\u1EA7n" }, xWeeks: { one: "1 tu\u1EA7n", other: "{{count}} tu\u1EA7n" }, aboutXMonths: { one: "kho\u1EA3ng 1 th\u00E1ng", other: "kho\u1EA3ng {{count}} th\u00E1ng" }, xMonths: { one: "1 th\u00E1ng", other: "{{count}} th\u00E1ng" }, aboutXYears: { one: "kho\u1EA3ng 1 n\u0103m", other: "kho\u1EA3ng {{count}} n\u0103m" }, xYears: { one: "1 n\u0103m", other: "{{count}} n\u0103m" }, overXYears: { one: "h\u01A1n 1 n\u0103m", other: "h\u01A1n {{count}} n\u0103m" }, almostXYears: { one: "g\u1EA7n 1 n\u0103m", other: "g\u1EA7n {{count}} n\u0103m" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} trước`;
        }
        text = `${tmp} nữa`;
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