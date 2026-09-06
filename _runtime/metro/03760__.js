// === Module 3760: ? ===

// Module 3760
import module_2033 from "module_2033" /* 2033 */;

if (!module_2033) {
  let obj = { default: module_2033 };
} else {
  obj = module_2033;
}
const date = {
  ordinalNumber(arg0, unit) {
    Number(arg0);
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    if ("week" === unit) {
      let text = `${tmp}ª`;
    } else {
      text = `${tmp}º`;
    }
    return text;
  },
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
obj = { values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "depois de cristo"] }, defaultWidth: "wide" };
date.era = obj.default(obj);
date.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1\u00BA trimestre", "2\u00BA trimestre", "3\u00BA trimestre", "4\u00BA trimestre"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
date.month = obj.default({ values: { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], wide: ["janeiro", "fevereiro", "mar\u00E7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"] }, defaultWidth: "wide" });
date.day = obj.default({ values: { narrow: ["D", "S", "T", "Q", "Q", "S", "S"], short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"], abbreviated: ["domingo", "segunda", "ter\u00E7a", "quarta", "quinta", "sexta", "s\u00E1bado"], wide: ["domingo", "segunda-feira", "ter\u00E7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\u00E1bado"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "manh\u00E3", afternoon: "tarde", evening: "tarde", night: "noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manh\u00E3", afternoon: "tarde", evening: "tarde", night: "noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "manh\u00E3", afternoon: "tarde", evening: "tarde", night: "noite" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "da manh\u00E3", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\u00E3", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\u00E3", afternoon: "da tarde", evening: "da tarde", night: "da noite" } }, defaultFormattingWidth: "wide" });

export default date;
export default exports.default;