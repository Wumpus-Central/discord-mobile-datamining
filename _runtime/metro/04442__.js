// _runtime/metro/04442__.js
import 02191__ from "02191__.js";

if (!module_2191) {
  const obj2 = { default: module_2191 };
  let obj = obj2;
} else {
  obj = module_2191;
}

export default { date: obj.default({ formats: { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'um' {{time}}", long: "{{date}} 'um' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;