// _runtime/metro/04642__.js
import 02191__ from "02191__.js";

if (!module_2191) {
  const obj2 = { default: module_2191 };
  let obj = obj2;
} else {
  obj = module_2191;
}

export default { date: obj.default({ formats: { full: "EEEE, d MMMM y '\u0433.'", long: "d MMMM y '\u0433.'", medium: "d MMM y '\u0433.'", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" }) };
export default exports.default;