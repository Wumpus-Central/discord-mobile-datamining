// _runtime/metro/04379__.js
import 02068__ from "02068__.js";

if (!module_2068) {
  const obj2 = { default: module_2068 };
  let obj = obj2;
} else {
  obj = module_2068;
}

export default { date: obj.default({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd-MM-y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;