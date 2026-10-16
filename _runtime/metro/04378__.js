// === Module 4378: ? ===

// Module 4378
import module_2137 from "module_2137" /* 2137 */;

if (!module_2137) {
  const obj2 = { default: module_2137 };
  let obj = obj2;
} else {
  obj = module_2137;
}

export default { date: obj.default({ formats: { full: "EEEE, d MMMM y '\u0433.'", long: "d MMMM y '\u0433.'", medium: "d MMM y '\u0433.'", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" }) };
export default exports.default;