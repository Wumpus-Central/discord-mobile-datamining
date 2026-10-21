// _runtime/metro/04396__.js
import 02073__ from "02073__.js";

if (!module_2073) {
  const obj2 = { default: module_2073 };
  let obj = obj2;
} else {
  obj = module_2073;
}

export default { date: obj.default({ formats: { full: "EEEE, do MMMM y '\u0440.'", long: "do MMMM y '\u0440.'", medium: "d MMM y '\u0440.'", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u043E' {{time}}", long: "{{date}} '\u043E' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;