// === Module 4095: formatDistance ===

// Module 4095 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "bir saniyeden az", other: "{{count}} saniyeden az" }, xSeconds: { one: "1 saniye", other: "{{count}} saniye" }, halfAMinute: "yar\u0131m dakika", lessThanXMinutes: { one: "bir dakikadan az", other: "{{count}} dakikadan az" }, xMinutes: { one: "1 dakika", other: "{{count}} dakika" }, aboutXHours: { one: "yakla\u015F\u0131k 1 saat", other: "yakla\u015F\u0131k {{count}} saat" }, xHours: { one: "1 saat", other: "{{count}} saat" }, xDays: { one: "1 g\u00FCn", other: "{{count}} g\u00FCn" }, aboutXWeeks: { one: "yakla\u015F\u0131k 1 hafta", other: "yakla\u015F\u0131k {{count}} hafta" }, xWeeks: { one: "1 hafta", other: "{{count}} hafta" }, aboutXMonths: { one: "yakla\u015F\u0131k 1 ay", other: "yakla\u015F\u0131k {{count}} ay" }, xMonths: { one: "1 ay", other: "{{count}} ay" }, aboutXYears: { one: "yakla\u015F\u0131k 1 y\u0131l", other: "yakla\u015F\u0131k {{count}} y\u0131l" }, xYears: { one: "1 y\u0131l", other: "{{count}} y\u0131l" }, overXYears: { one: "1 y\u0131ldan fazla", other: "{{count}} y\u0131ldan fazla" }, almostXYears: { one: "neredeyse 1 y\u0131l", other: "neredeyse {{count}} y\u0131l" } };

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
          text = `${tmp2} sonra`;
        }
        tmp3 = text;
      }
      text = `${tmp2} önce`;
    }
  }
  return tmp3;
};