// _runtime/03444_buildLocalizeFn.js
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
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
  era: obj.default({ values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "depois de cristo"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], wide: ["janeiro", "fevereiro", "mar\u00E7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["D", "S", "T", "Q", "Q", "S", "S"], short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"], abbreviated: ["domingo", "segunda", "ter\u00E7a", "quarta", "quinta", "sexta", "s\u00E1bado"], wide: ["domingo", "segunda-feira", "ter\u00E7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\u00E1bado"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "manh\u00E3", afternoon: "tarde", evening: "tarde", night: "noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manh\u00E3", afternoon: "tarde", evening: "tarde", night: "noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "manh\u00E3", afternoon: "tarde", evening: "tarde", night: "noite" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "da manh\u00E3", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\u00E3", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\u00E3", afternoon: "da tarde", evening: "da tarde", night: "da noite" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;