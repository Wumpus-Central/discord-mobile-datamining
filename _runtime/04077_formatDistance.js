// === Module 4077: formatDistance ===

// Module 4077 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "mai pu\u021Bin de o secund\u0103", other: "mai pu\u021Bin de {{count}} secunde" }, xSeconds: { one: "1 secund\u0103", other: "{{count}} secunde" }, halfAMinute: "jum\u0103tate de minut", lessThanXMinutes: { one: "mai pu\u021Bin de un minut", other: "mai pu\u021Bin de {{count}} minute" }, xMinutes: { one: "1 minut", other: "{{count}} minute" }, aboutXHours: { one: "circa 1 or\u0103", other: "circa {{count}} ore" }, xHours: { one: "1 or\u0103", other: "{{count}} ore" }, xDays: { one: "1 zi", other: "{{count}} zile" }, aboutXWeeks: { one: "circa o s\u0103pt\u0103m\u00E2n\u0103", other: "circa {{count}} s\u0103pt\u0103m\u00E2ni" }, xWeeks: { one: "1 s\u0103pt\u0103m\u00E2n\u0103", other: "{{count}} s\u0103pt\u0103m\u00E2ni" }, aboutXMonths: { one: "circa 1 lun\u0103", other: "circa {{count}} luni" }, xMonths: { one: "1 lun\u0103", other: "{{count}} luni" }, aboutXYears: { one: "circa 1 an", other: "circa {{count}} ani" }, xYears: { one: "1 an", other: "{{count}} ani" }, overXYears: { one: "peste 1 an", other: "peste {{count}} ani" }, almostXYears: { one: "aproape 1 an", other: "aproape {{count}} ani" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  let tmp2 = tmp;
  if (typeof closure_0[arg0] !== "string") {
    let one;
    if (1 === arg1) {
      one = tmp.one;
    } else {
      const _String = String;
      const str = closure_0[arg0].other;
      one = str.replace("{{count}}", String(arg1));
    }
    tmp2 = one;
  }
  let tmp4 = tmp2;
  if (null != addSuffix) {
    tmp4 = tmp2;
    if (addSuffix.addSuffix) {
      if (addSuffix.comparison) {
        let text;
        if (addSuffix.comparison > 0) {
          text = `în ${tmp2}`;
        }
        tmp4 = text;
      }
      text = `${tmp2} în urmă`;
    }
  }
  return tmp4;
};