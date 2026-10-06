// _runtime/03999_formatDistance.js
let closure_0 = {
  lessThanXSeconds: { one: "menos de un segundo", other: "menos de {{count}} segundos" },
  xSeconds: { one: "1 segundo", other: "{{count}} segundos" },
  halfAMinute: "medio minuto",
  lessThanXMinutes: { one: "menos de un minuto", other: "menos de {{count}} minutos" },
  xMinutes: { one: "1 minuto", other: "{{count}} minutos" },
  aboutXHours: { one: "alrededor de 1 hora", other: "alrededor de {{count}} horas" },
  xHours: { one: "1 hora", other: "{{count}} horas" },
  xDays: { one: "1 d\u00EDa", other: "{{count}} d\u00EDas" },
  aboutXWeeks: { one: "alrededor de 1 semana", other: "alrededor de {{count}} semanas" },
  xWeeks: { one: "1 semana", other: "{{count}} semanas" },
  aboutXMonths: { one: "alrededor de 1 mes", other: "alrededor de {{count}} meses" },
  xMonths: { one: "1 mes", other: "{{count}} meses" },
  aboutXYears: { one: "alrededor de 1 a\u00F1o", other: "alrededor de {{count}} a\u00F1os" },
  xYears: { one: "1 a\u00F1o", other: "{{count}} a\u00F1os" },
  overXYears: { one: "m\u00E1s de 1 a\u00F1o", other: "m\u00E1s de {{count}} a\u00F1os" },
  almostXYears: { one: "casi 1 a\u00F1o", other: "casi {{count}} a\u00F1os" },
};

export default function formatDistance(arg0, arg1, addSuffix) {
  let tmp2 = tmp;
  if (typeof closure_0[arg0] !== "string") {
    let one;
    if (1 === arg1) {
      one = tmp.one;
    } else {
      const str = closure_0[arg0].other;
      one = str.replace("{{count}}", arg1.toString());
    }
    tmp2 = one;
  }
  let tmp3 = tmp2;
  if (null != addSuffix) {
    tmp3 = tmp2;
    if (addSuffix.addSuffix) {
      if (addSuffix.comparison) {
        let text;
        if (addSuffix.comparison > 0) {
          text = `en ${tmp2}`;
        }
        tmp3 = text;
      }
      text = `hace ${tmp2}`;
    }
  }
  return tmp3;
}
