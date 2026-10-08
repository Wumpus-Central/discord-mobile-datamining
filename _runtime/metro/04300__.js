// === Module 4300: ? ===

// Module 4300
import module_2133 from "module_2133" /* 2133 */;

if (!module_2133) {
  const obj2 = { default: module_2133 };
  let obj = obj2;
} else {
  obj = module_2133;
}

export default { date: obj.default({ formats: { full: "EEEE, do MMMM y '\u0440.'", long: "do MMMM y '\u0440.'", medium: "d MMM y '\u0440.'", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u043E' {{time}}", long: "{{date}} '\u043E' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;