// === Module 3966: ? ===

// Module 3966
import module_2117 from "module_2117" /* 2117 */;

if (!module_2117) {
  const obj2 = { default: module_2117 };
  let obj = obj2;
} else {
  obj = module_2117;
}

export default { date: obj.default({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u00E0' {{time}}", long: "{{date}} '\u00E0' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;