// === Module 4083: formatDistance ===

// Module 4083 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "mindre \u00E4n en sekund", other: "mindre \u00E4n {{count}} sekunder" }, xSeconds: { one: "en sekund", other: "{{count}} sekunder" }, halfAMinute: "en halv minut", lessThanXMinutes: { one: "mindre \u00E4n en minut", other: "mindre \u00E4n {{count}} minuter" }, xMinutes: { one: "en minut", other: "{{count}} minuter" }, aboutXHours: { one: "ungef\u00E4r en timme", other: "ungef\u00E4r {{count}} timmar" }, xHours: { one: "en timme", other: "{{count}} timmar" }, xDays: { one: "en dag", other: "{{count}} dagar" }, aboutXWeeks: { one: "ungef\u00E4r en vecka", other: "ungef\u00E4r {{count}} vecka" }, xWeeks: { one: "en vecka", other: "{{count}} vecka" }, aboutXMonths: { one: "ungef\u00E4r en m\u00E5nad", other: "ungef\u00E4r {{count}} m\u00E5nader" }, xMonths: { one: "en m\u00E5nad", other: "{{count}} m\u00E5nader" }, aboutXYears: { one: "ungef\u00E4r ett \u00E5r", other: "ungef\u00E4r {{count}} \u00E5r" }, xYears: { one: "ett \u00E5r", other: "{{count}} \u00E5r" }, overXYears: { one: "\u00F6ver ett \u00E5r", other: "\u00F6ver {{count}} \u00E5r" }, almostXYears: { one: "n\u00E4stan ett \u00E5r", other: "n\u00E4stan {{count}} \u00E5r" } };
let closure_1 = ["noll", "en", "tv\u00E5", "tre", "fyra", "fem", "sex", "sju", "\u00E5tta", "nio", "tio", "elva", "tolv"];

export default function formatDistance(arg0, arg1, onlyNumeric) {
  let tmp2 = tmp;
  if (typeof closure_0[arg0] !== "string") {
    let one;
    if (1 === arg1) {
      one = tmp.one;
    } else {
      let StringResult;
      if (onlyNumeric) {
        if (onlyNumeric.onlyNumeric) {
          const _String2 = String;
          const str3 = closure_0[arg0].other;
          one = str3.replace("{{count}}", String(arg1));
        }
      }
      const replace = closure_0[arg0].other.replace;
      if (arg1 < 13) {
        StringResult = closure_1[arg1];
      } else {
        const _String = String;
        StringResult = String(arg1);
      }
      one = replace("{{count}}", StringResult);
    }
    tmp2 = one;
  }
  let tmp7 = tmp2;
  if (null != onlyNumeric) {
    tmp7 = tmp2;
    if (onlyNumeric.addSuffix) {
      if (onlyNumeric.comparison) {
        let text;
        if (onlyNumeric.comparison > 0) {
          text = `om ${tmp2}`;
        }
        tmp7 = text;
      }
      text = `${tmp2} sedan`;
    }
  }
  return tmp7;
};