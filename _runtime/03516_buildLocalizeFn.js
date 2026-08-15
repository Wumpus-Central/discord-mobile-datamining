// _runtime/03516_buildLocalizeFn.js
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = { narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"], abbreviated: ["tammi", "helmi", "maalis", "huhti", "touko", "kes\u00E4", "hein\u00E4", "elo", "syys", "loka", "marras", "joulu"], wide: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes\u00E4kuu", "hein\u00E4kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"] };
const obj2 = { narrow: ["S", "M", "T", "K", "T", "P", "L"], short: ["su", "ma", "ti", "ke", "to", "pe", "la"], abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"], wide: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"] };

export default {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  },
  era: obj.default({ values: { narrow: ["eaa.", "jaa."], abbreviated: ["eaa.", "jaa."], wide: ["ennen ajanlaskun alkua", "j\u00E4lkeen ajanlaskun alun"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj5),
  month: obj.default({ values: obj, defaultWidth: "wide", formattingValues: { narrow: obj.narrow, abbreviated: obj.abbreviated, wide: ["tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta", "kes\u00E4kuuta", "hein\u00E4kuuta", "elokuuta", "syyskuuta", "lokakuuta", "marraskuuta", "joulukuuta"] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: obj2, defaultWidth: "wide", formattingValues: { narrow: obj2.narrow, short: obj2.short, abbreviated: obj2.abbreviated, wide: ["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"] }, defaultFormattingWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "ap", pm: "ip", midnight: "keskiy\u00F6", noon: "keskip\u00E4iv\u00E4", morning: "ap", afternoon: "ip", evening: "illalla", night: "y\u00F6ll\u00E4" }, abbreviated: { am: "ap", pm: "ip", midnight: "keskiy\u00F6", noon: "keskip\u00E4iv\u00E4", morning: "ap", afternoon: "ip", evening: "illalla", night: "y\u00F6ll\u00E4" }, wide: { am: "ap", pm: "ip", midnight: "keskiy\u00F6ll\u00E4", noon: "keskip\u00E4iv\u00E4ll\u00E4", morning: "aamup\u00E4iv\u00E4ll\u00E4", afternoon: "iltap\u00E4iv\u00E4ll\u00E4", evening: "illalla", night: "y\u00F6ll\u00E4" } }, defaultWidth: "wide" })
};
export default exports.default;