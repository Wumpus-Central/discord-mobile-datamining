// _runtime/03658_buildLocalizeFn.js
import buildLocalizeFn from "02004_buildLocalizeFn.js";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "-oji";
  },
  era: obj.default({ values: { narrow: ["pr. Kr.", "po Kr."], abbreviated: ["pr. Kr.", "po Kr."], wide: ["prie\u0161 Krist\u0173", "po Kristaus"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "bir\u017E.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], wide: ["sausis", "vasaris", "kovas", "balandis", "gegu\u017E\u0117", "bir\u017Eelis", "liepa", "rugpj\u016Btis", "rugs\u0117jis", "spalis", "lapkritis", "gruodis"] }, defaultWidth: "wide", formattingValues: { narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "bir\u017E.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], wide: ["sausio", "vasario", "kovo", "baland\u017Eio", "gegu\u017E\u0117s", "bir\u017Eelio", "liepos", "rugpj\u016B\u010Dio", "rugs\u0117jo", "spalio", "lapkri\u010Dio", "gruod\u017Eio"] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: { narrow: ["S", "P", "A", "T", "K", "P", "\u0160"], short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"], abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"], wide: ["sekmadienis", "pirmadienis", "antradienis", "tre\u010Diadienis", "ketvirtadienis", "penktadienis", "\u0161e\u0161tadienis"] }, defaultWidth: "wide", formattingValues: { narrow: ["S", "P", "A", "T", "K", "P", "\u0160"], short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"], abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"], wide: ["sekmadien\u012F", "pirmadien\u012F", "antradien\u012F", "tre\u010Diadien\u012F", "ketvirtadien\u012F", "penktadien\u012F", "\u0161e\u0161tadien\u012F"] }, defaultFormattingWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "pr. p.", pm: "pop.", midnight: "vidurnaktis", noon: "vidurdienis", morning: "rytas", afternoon: "diena", evening: "vakaras", night: "naktis" }, abbreviated: { am: "prie\u0161piet", pm: "popiet", midnight: "vidurnaktis", noon: "vidurdienis", morning: "rytas", afternoon: "diena", evening: "vakaras", night: "naktis" }, wide: { am: "prie\u0161piet", pm: "popiet", midnight: "vidurnaktis", noon: "vidurdienis", morning: "rytas", afternoon: "diena", evening: "vakaras", night: "naktis" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "pr. p.", pm: "pop.", midnight: "vidurnaktis", noon: "perpiet", morning: "rytas", afternoon: "popiet\u0117", evening: "vakaras", night: "naktis" }, abbreviated: { am: "prie\u0161piet", pm: "popiet", midnight: "vidurnaktis", noon: "perpiet", morning: "rytas", afternoon: "popiet\u0117", evening: "vakaras", night: "naktis" }, wide: { am: "prie\u0161piet", pm: "popiet", midnight: "vidurnaktis", noon: "perpiet", morning: "rytas", afternoon: "popiet\u0117", evening: "vakaras", night: "naktis" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;