// _runtime/03537_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: "meno di un secondo", other: "meno di {{count}} secondi" }, xSeconds: { one: "un secondo", other: "{{count}} secondi" }, halfAMinute: "alcuni secondi", lessThanXMinutes: { one: "meno di un minuto", other: "meno di {{count}} minuti" }, xMinutes: { one: "un minuto", other: "{{count}} minuti" }, aboutXHours: { one: "circa un'ora", other: "circa {{count}} ore" }, xHours: { one: "un'ora", other: "{{count}} ore" }, xDays: { one: "un giorno", other: "{{count}} giorni" }, aboutXWeeks: { one: "circa una settimana", other: "circa {{count}} settimane" }, xWeeks: { one: "una settimana", other: "{{count}} settimane" }, aboutXMonths: { one: "circa un mese", other: "circa {{count}} mesi" }, xMonths: { one: "un mese", other: "{{count}} mesi" }, aboutXYears: { one: "circa un anno", other: "circa {{count}} anni" }, xYears: { one: "un anno", other: "{{count}} anni" }, overXYears: { one: "pi\u00F9 di un anno", other: "pi\u00F9 di {{count}} anni" }, almostXYears: { one: "quasi un anno", other: "quasi {{count}} anni" } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (typeof table[arg0] === "string") {
    let tmp5 = tmp;
    if (null != addSuffix) {
      tmp5 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} fa`;
        }
        text = `tra ${tmp}`;
      }
    }
    return tmp5;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    one = tmp.other.replace("{{count}}", arg1.toString());
  }
};
export default exports.default;