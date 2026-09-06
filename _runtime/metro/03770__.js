// _runtime/metro/03770__.js
import 02030__ from "02030__.js";

if (!module_2030) {
  let obj = { default: module_2030 };
} else {
  obj = module_2030;
}
obj = { date: obj.default({ formats: { full: "EEEE, d MMMM y '\u0433.'", long: "d MMMM y '\u0433.'", medium: "d MMM y '\u0433.'", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" }) };

export default obj;
export default exports.default;