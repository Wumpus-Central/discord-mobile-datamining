// _runtime/metro/04382__.js
import 02116__ from "02116__.js";

if (!module_2116) {
  const obj2 = { default: module_2116 };
  let obj = obj2;
} else {
  obj = module_2116;
}

export default { date: obj.default({ formats: { full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u0915\u094B' {{time}}", long: "{{date}} '\u0915\u094B' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;