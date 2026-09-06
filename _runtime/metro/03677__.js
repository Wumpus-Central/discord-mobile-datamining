// === Module 3677: ? ===

// Module 3677
let closure_0 = { lessThanXSeconds: { one: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03AD\u03BD\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF", other: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {{count}} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1" }, xSeconds: { one: "1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF", other: "{{count}} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1" }, halfAMinute: "\u03BC\u03B9\u03C3\u03CC \u03BB\u03B5\u03C0\u03C4\u03CC", lessThanXMinutes: { one: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03AD\u03BD\u03B1 \u03BB\u03B5\u03C0\u03C4\u03CC", other: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {{count}} \u03BB\u03B5\u03C0\u03C4\u03AC" }, xMinutes: { one: "1 \u03BB\u03B5\u03C0\u03C4\u03CC", other: "{{count}} \u03BB\u03B5\u03C0\u03C4\u03AC" }, aboutXHours: { one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03CE\u03C1\u03B1", other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03CE\u03C1\u03B5\u03C2" }, xHours: { one: "1 \u03CE\u03C1\u03B1", other: "{{count}} \u03CE\u03C1\u03B5\u03C2" }, xDays: { one: "1 \u03B7\u03BC\u03AD\u03C1\u03B1", other: "{{count}} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2" }, aboutXWeeks: { one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1", other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2" }, xWeeks: { one: "1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1", other: "{{count}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2" }, aboutXMonths: { one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03BC\u03AE\u03BD\u03B1\u03C2", other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03BC\u03AE\u03BD\u03B5\u03C2" }, xMonths: { one: "1 \u03BC\u03AE\u03BD\u03B1\u03C2", other: "{{count}} \u03BC\u03AE\u03BD\u03B5\u03C2" }, aboutXYears: { one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03C7\u03C1\u03CC\u03BD\u03BF", other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1" }, xYears: { one: "1 \u03C7\u03C1\u03CC\u03BD\u03BF", other: "{{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1" }, overXYears: { one: "\u03C0\u03AC\u03BD\u03C9 \u03B1\u03C0\u03CC 1 \u03C7\u03C1\u03CC\u03BD\u03BF", other: "\u03C0\u03AC\u03BD\u03C9 \u03B1\u03C0\u03CC {{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1" }, almostXYears: { one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03C7\u03C1\u03CC\u03BD\u03BF", other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof closure_0[arg0] === "string") {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} πριν`;
        }
        text = `σε ${tmp}`;
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