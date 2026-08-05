// _runtime/03471_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: "bir saniyeden az", other: "{{count}} saniyeden az" }, xSeconds: { one: "1 saniye", other: "{{count}} saniye" }, halfAMinute: "yar\u0131m dakika", lessThanXMinutes: { one: "bir dakikadan az", other: "{{count}} dakikadan az" }, xMinutes: { one: "1 dakika", other: "{{count}} dakika" }, aboutXHours: { one: "yakla\u015F\u0131k 1 saat", other: "yakla\u015F\u0131k {{count}} saat" }, xHours: { one: "1 saat", other: "{{count}} saat" }, xDays: { one: "1 g\u00FCn", other: "{{count}} g\u00FCn" }, aboutXWeeks: { one: "yakla\u015F\u0131k 1 hafta", other: "yakla\u015F\u0131k {{count}} hafta" }, xWeeks: { one: "1 hafta", other: "{{count}} hafta" }, aboutXMonths: { one: "yakla\u015F\u0131k 1 ay", other: "yakla\u015F\u0131k {{count}} ay" }, xMonths: { one: "1 ay", other: "{{count}} ay" }, aboutXYears: { one: "yakla\u015F\u0131k 1 y\u0131l", other: "yakla\u015F\u0131k {{count}} y\u0131l" }, xYears: { one: "1 y\u0131l", other: "{{count}} y\u0131l" }, overXYears: { one: "1 y\u0131ldan fazla", other: "{{count}} y\u0131ldan fazla" }, almostXYears: { one: "neredeyse 1 y\u0131l", other: "neredeyse {{count}} y\u0131l" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} önce`;
        }
        text = `${tmp} sonra`;
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