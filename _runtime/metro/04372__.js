// === Module 4372: ? ===

// Module 4372
import module_2073 from "module_2073" /* 2073 */;

if (!module_2073) {
  const obj2 = { default: module_2073 };
  let obj = obj2;
} else {
  obj = module_2073;
}

export default { date: obj.default({ formats: { full: "EEEE, d MMMM y '\u0433.'", long: "d MMMM y '\u0433.'", medium: "d MMM y '\u0433.'", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" }) };
export default exports.default;