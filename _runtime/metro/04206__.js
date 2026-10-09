// _runtime/metro/04206__.js
import 02133__ from "02133__.js";

if (!module_2133) {
  const obj2 = { default: module_2133 };
  let obj = obj2;
} else {
  obj = module_2133;
}

export default { date: obj.default({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u00E0' {{time}}", long: "{{date}} '\u00E0' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;