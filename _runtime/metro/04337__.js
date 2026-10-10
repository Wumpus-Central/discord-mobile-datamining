// _runtime/metro/04337__.js
import 02134__ from "02134__.js";

if (!module_2134) {
  const obj2 = { default: module_2134 };
  let obj = obj2;
} else {
  obj = module_2134;
}

export default { date: obj.default({ formats: { full: "d MMMM y EEEE", long: "d MMMM y", medium: "d MMM y", short: "dd.MM.yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'saat' {{time}}", long: "{{date}} 'saat' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;