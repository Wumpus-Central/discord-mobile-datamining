// === Module 3666: formatDistance ===

// Module 3666 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "mindre \u00E4n en sekund", other: "mindre \u00E4n {{count}} sekunder" }, xSeconds: { one: "en sekund", other: "{{count}} sekunder" }, halfAMinute: "en halv minut", lessThanXMinutes: { one: "mindre \u00E4n en minut", other: "mindre \u00E4n {{count}} minuter" }, xMinutes: { one: "en minut", other: "{{count}} minuter" }, aboutXHours: { one: "ungef\u00E4r en timme", other: "ungef\u00E4r {{count}} timmar" }, xHours: { one: "en timme", other: "{{count}} timmar" }, xDays: { one: "en dag", other: "{{count}} dagar" }, aboutXWeeks: { one: "ungef\u00E4r en vecka", other: "ungef\u00E4r {{count}} vecka" }, xWeeks: { one: "en vecka", other: "{{count}} vecka" }, aboutXMonths: { one: "ungef\u00E4r en m\u00E5nad", other: "ungef\u00E4r {{count}} m\u00E5nader" }, xMonths: { one: "en m\u00E5nad", other: "{{count}} m\u00E5nader" }, aboutXYears: { one: "ungef\u00E4r ett \u00E5r", other: "ungef\u00E4r {{count}} \u00E5r" }, xYears: { one: "ett \u00E5r", other: "{{count}} \u00E5r" }, overXYears: { one: "\u00F6ver ett \u00E5r", other: "\u00F6ver {{count}} \u00E5r" }, almostXYears: { one: "n\u00E4stan ett \u00E5r", other: "n\u00E4stan {{count}} \u00E5r" } };
let closure_1 = ["noll", "en", "tv\u00E5", "tre", "fyra", "fem", "sex", "sju", "\u00E5tta", "nio", "tio", "elva", "tolv"];

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp8 = tmp;
    if (null != addSuffix) {
      tmp8 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} sedan`;
        }
        text = `om ${tmp}`;
      }
    }
    return tmp8;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    if (addSuffix) {
      if (addSuffix.onlyNumeric) {
        const _String2 = String;
        one = tmp.other.replace("{{count}}", String(arg1));
        const str3 = tmp.other;
      }
    }
    if (arg1 < 13) {
      let StringResult = table2[arg1];
    } else {
      const _String = String;
      StringResult = String(arg1);
    }
    one = tmp.other.replace("{{count}}", StringResult);
    const str = tmp.other;
  }
};
export default exports.default;