// === Module 3384: buildLocalizeFn ===

// Module 3384 (buildLocalizeFn)
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if (0 === NumberResult) {
      return "0";
    } else {
      let str = "\u00E8me";
      if (1 === NumberResult) {
        let str3 = "er";
        if (unit) {
          const items = ["year", "week", "hour", "minute", "second"];
          str3 = "er";
          if (items.includes(unit)) {
            str3 = "\u00E8re";
          }
        }
        str = str3;
      }
      return NumberResult + str;
    }
  },
  era: obj.default({ values: { narrow: ["av. J.-C", "ap. J.-C"], abbreviated: ["av. J.-C", "ap. J.-C"], wide: ["avant J\u00E9sus-Christ", "apr\u00E8s J\u00E9sus-Christ"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["janv.", "f\u00E9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\u00FBt", "sept.", "oct.", "nov.", "d\u00E9c."], wide: ["janvier", "f\u00E9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\u00FBt", "septembre", "octobre", "novembre", "d\u00E9cembre"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["D", "L", "M", "M", "J", "V", "S"], short: ["di", "lu", "ma", "me", "je", "ve", "sa"], abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "mat.", afternoon: "ap.m.", evening: "soir", night: "mat." }, abbreviated: { am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "matin", afternoon: "apr\u00E8s-midi", evening: "soir", night: "matin" }, wide: { am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "du matin", afternoon: "de l\u2019apr\u00E8s-midi", evening: "du soir", night: "du matin" } }, defaultWidth: "wide" })
};

export default obj;
export default exports.default;