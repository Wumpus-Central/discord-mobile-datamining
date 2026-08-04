import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return String(arg0);
  },
  era: obj.default({ values: { narrow: ["p.n.e.", "n.e."], abbreviated: ["p.n.e.", "n.e."], wide: ["przed nasz\u0105 er\u0105", "naszej ery"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"], abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa\u017A", "lis", "gru"], wide: ["stycze\u0144", "luty", "marzec", "kwiecie\u0144", "maj", "czerwiec", "lipiec", "sierpie\u0144", "wrzesie\u0144", "pa\u017Adziernik", "listopad", "grudzie\u0144"] }, defaultWidth: "wide", formattingValues: { narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"], abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa\u017A", "lis", "gru"], wide: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "wrze\u015Bnia", "pa\u017Adziernika", "listopada", "grudnia"] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: { narrow: ["N", "P", "W", "\u015A", "C", "P", "S"], short: ["nie", "pon", "wto", "\u015Bro", "czw", "pi\u0105", "sob"], abbreviated: ["niedz.", "pon.", "wt.", "\u015Br.", "czw.", "pt.", "sob."], wide: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015Broda", "czwartek", "pi\u0105tek", "sobota"] }, defaultWidth: "wide", formattingValues: { narrow: ["n", "p", "w", "\u015B", "c", "p", "s"], short: ["nie", "pon", "wto", "\u015Bro", "czw", "pi\u0105", "sob"], abbreviated: ["niedz.", "pon.", "wt.", "\u015Br.", "czw.", "pt.", "sob."], wide: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015Broda", "czwartek", "pi\u0105tek", "sobota"] }, defaultFormattingWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "p\u00F3\u0142n.", noon: "po\u0142", morning: "rano", afternoon: "popo\u0142.", evening: "wiecz.", night: "noc" }, abbreviated: { am: "AM", pm: "PM", midnight: "p\u00F3\u0142noc", noon: "po\u0142udnie", morning: "rano", afternoon: "popo\u0142udnie", evening: "wiecz\u00F3r", night: "noc" }, wide: { am: "AM", pm: "PM", midnight: "p\u00F3\u0142noc", noon: "po\u0142udnie", morning: "rano", afternoon: "popo\u0142udnie", evening: "wiecz\u00F3r", night: "noc" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "o p\u00F3\u0142n.", noon: "w po\u0142.", morning: "rano", afternoon: "po po\u0142.", evening: "wiecz.", night: "w nocy" }, abbreviated: { am: "AM", pm: "PM", midnight: "o p\u00F3\u0142nocy", noon: "w po\u0142udnie", morning: "rano", afternoon: "po po\u0142udniu", evening: "wieczorem", night: "w nocy" }, wide: { am: "AM", pm: "PM", midnight: "o p\u00F3\u0142nocy", noon: "w po\u0142udnie", morning: "rano", afternoon: "po po\u0142udniu", evening: "wieczorem", night: "w nocy" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;