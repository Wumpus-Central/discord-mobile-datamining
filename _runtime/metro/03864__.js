// _runtime/metro/03864__.js
import 02031__ from "02031__.js";

if (!module_2031) {
  const obj2 = { default: module_2031 };
  let obj = obj2;
} else {
  obj = module_2031;
}

export default { date: obj.default({ formats: { full: "d MMMM y EEEE", long: "d MMMM y", medium: "d MMM y", short: "dd.MM.yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'saat' {{time}}", long: "{{date}} 'saat' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;