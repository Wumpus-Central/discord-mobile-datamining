// _runtime/metro/03758__.js
import 02030__ from "02030__.js";

if (!module_2030) {
  let obj = { default: module_2030 };
} else {
  obj = module_2030;
}
obj = { date: obj.default({ formats: { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u00E0s' {{time}}", long: "{{date}} '\u00E0s' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;