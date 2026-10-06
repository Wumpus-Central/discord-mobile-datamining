// === Module 4071: formatDistance ===

// Module 4071 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "menos de um segundo", other: "menos de {{count}} segundos" }, xSeconds: { one: "1 segundo", other: "{{count}} segundos" }, halfAMinute: "meio minuto", lessThanXMinutes: { one: "menos de um minuto", other: "menos de {{count}} minutos" }, xMinutes: { one: "1 minuto", other: "{{count}} minutos" }, aboutXHours: { one: "cerca de 1 hora", other: "cerca de {{count}} horas" }, xHours: { one: "1 hora", other: "{{count}} horas" }, xDays: { one: "1 dia", other: "{{count}} dias" }, aboutXWeeks: { one: "cerca de 1 semana", other: "cerca de {{count}} semanas" }, xWeeks: { one: "1 semana", other: "{{count}} semanas" }, aboutXMonths: { one: "cerca de 1 m\u00EAs", other: "cerca de {{count}} meses" }, xMonths: { one: "1 m\u00EAs", other: "{{count}} meses" }, aboutXYears: { one: "cerca de 1 ano", other: "cerca de {{count}} anos" }, xYears: { one: "1 ano", other: "{{count}} anos" }, overXYears: { one: "mais de 1 ano", other: "mais de {{count}} anos" }, almostXYears: { one: "quase 1 ano", other: "quase {{count}} anos" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  let tmp2 = tmp;
  if (typeof closure_0[arg0] !== "string") {
    let one;
    if (1 === arg1) {
      one = tmp.one;
    } else {
      const _String = String;
      const str = closure_0[arg0].other;
      one = str.replace("{{count}}", String(arg1));
    }
    tmp2 = one;
  }
  let tmp4 = tmp2;
  if (null != addSuffix) {
    tmp4 = tmp2;
    if (addSuffix.addSuffix) {
      if (addSuffix.comparison) {
        let text;
        if (addSuffix.comparison > 0) {
          text = `em ${tmp2}`;
        }
        tmp4 = text;
      }
      text = `há ${tmp2}`;
    }
  }
  return tmp4;
};