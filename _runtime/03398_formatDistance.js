// _runtime/03398_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: "menos de un segundo", other: "menos de {{count}} segundos" }, xSeconds: { one: "1 segundo", other: "{{count}} segundos" }, halfAMinute: "medio minuto", lessThanXMinutes: { one: "menos de un minuto", other: "menos de {{count}} minutos" }, xMinutes: { one: "1 minuto", other: "{{count}} minutos" }, aboutXHours: { one: "alrededor de 1 hora", other: "alrededor de {{count}} horas" }, xHours: { one: "1 hora", other: "{{count}} horas" }, xDays: { one: "1 d\u00EDa", other: "{{count}} d\u00EDas" }, aboutXWeeks: { one: "alrededor de 1 semana", other: "alrededor de {{count}} semanas" }, xWeeks: { one: "1 semana", other: "{{count}} semanas" }, aboutXMonths: { one: "alrededor de 1 mes", other: "alrededor de {{count}} meses" }, xMonths: { one: "1 mes", other: "{{count}} meses" }, aboutXYears: { one: "alrededor de 1 a\u00F1o", other: "alrededor de {{count}} a\u00F1os" }, xYears: { one: "1 a\u00F1o", other: "{{count}} a\u00F1os" }, overXYears: { one: "m\u00E1s de 1 a\u00F1o", other: "m\u00E1s de {{count}} a\u00F1os" }, almostXYears: { one: "casi 1 a\u00F1o", other: "casi {{count}} a\u00F1os" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `hace ${tmp}`;
        }
        text = `en ${tmp}`;
      }
    }
    return tmp5;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    one = tmp.other.replace("{{count}}", arg1.toString());
    const str = tmp.other;
  }
};
export default exports.default;