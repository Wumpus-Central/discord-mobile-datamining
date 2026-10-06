// === Module 4029: formatDistance ===

// Module 4029 (formatDistance)
let closure_0 = { lessThanXSeconds: { one: "meno di un secondo", other: "meno di {{count}} secondi" }, xSeconds: { one: "un secondo", other: "{{count}} secondi" }, halfAMinute: "alcuni secondi", lessThanXMinutes: { one: "meno di un minuto", other: "meno di {{count}} minuti" }, xMinutes: { one: "un minuto", other: "{{count}} minuti" }, aboutXHours: { one: "circa un'ora", other: "circa {{count}} ore" }, xHours: { one: "un'ora", other: "{{count}} ore" }, xDays: { one: "un giorno", other: "{{count}} giorni" }, aboutXWeeks: { one: "circa una settimana", other: "circa {{count}} settimane" }, xWeeks: { one: "una settimana", other: "{{count}} settimane" }, aboutXMonths: { one: "circa un mese", other: "circa {{count}} mesi" }, xMonths: { one: "un mese", other: "{{count}} mesi" }, aboutXYears: { one: "circa un anno", other: "circa {{count}} anni" }, xYears: { one: "un anno", other: "{{count}} anni" }, overXYears: { one: "pi\u00F9 di un anno", other: "pi\u00F9 di {{count}} anni" }, almostXYears: { one: "quasi un anno", other: "quasi {{count}} anni" } };

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
          text = `tra ${tmp2}`;
        }
        tmp3 = text;
      }
      text = `${tmp2} fa`;
    }
  }
  return tmp3;
};