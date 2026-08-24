// === Module 2002: buildLocalizeFn ===

// Module 2002 (buildLocalizeFn)
import buildLocalizeFn from "buildLocalizeFn" /* 2003 */;

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, arg1) {
    const NumberResult = Number(arg0);
    const result = NumberResult % 100;
    if (20 < result) {
      const result1 = result % 10;
      if (1 === result1) {
        return NumberResult + "st";
      } else if (2 === result1) {
        return NumberResult + "nd";
      } else if (3 === result1) {
        return NumberResult + "rd";
      }
    }
    return NumberResult + "th";
  },
  era: obj.default({ values: { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["S", "M", "T", "W", "T", "F", "S"], short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;