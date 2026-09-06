// _runtime/metro/03794__.js
import 02030__ from "02030__.js";

if (!module_2030) {
  let obj = { default: module_2030 };
} else {
  obj = module_2030;
}
obj = { date: obj.default({ formats: { full: "EEEE, do MMMM y '\u0440.'", long: "do MMMM y '\u0440.'", medium: "d MMM y '\u0440.'", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u043E' {{time}}", long: "{{date}} '\u043E' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;