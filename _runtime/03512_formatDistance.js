// _runtime/03512_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: "mai pu\u021Bin de o secund\u0103", other: "mai pu\u021Bin de {{count}} secunde" }, xSeconds: { one: "1 secund\u0103", other: "{{count}} secunde" }, halfAMinute: "jum\u0103tate de minut", lessThanXMinutes: { one: "mai pu\u021Bin de un minut", other: "mai pu\u021Bin de {{count}} minute" }, xMinutes: { one: "1 minut", other: "{{count}} minute" }, aboutXHours: { one: "circa 1 or\u0103", other: "circa {{count}} ore" }, xHours: { one: "1 or\u0103", other: "{{count}} ore" }, xDays: { one: "1 zi", other: "{{count}} zile" }, aboutXWeeks: { one: "circa o s\u0103pt\u0103m\u00E2n\u0103", other: "circa {{count}} s\u0103pt\u0103m\u00E2ni" }, xWeeks: { one: "1 s\u0103pt\u0103m\u00E2n\u0103", other: "{{count}} s\u0103pt\u0103m\u00E2ni" }, aboutXMonths: { one: "circa 1 lun\u0103", other: "circa {{count}} luni" }, xMonths: { one: "1 lun\u0103", other: "{{count}} luni" }, aboutXYears: { one: "circa 1 an", other: "circa {{count}} ani" }, xYears: { one: "1 an", other: "{{count}} ani" }, overXYears: { one: "peste 1 an", other: "peste {{count}} ani" }, almostXYears: { one: "aproape 1 an", other: "aproape {{count}} ani" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp6 = tmp;
    if (null != addSuffix) {
      tmp6 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} în urmă`;
        }
        text = `în ${tmp}`;
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