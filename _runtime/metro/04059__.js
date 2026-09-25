// === Module 4059: ? ===

// Module 4059
import module_2116 from "module_2116" /* 2116 */;

if (!module_2116) {
  const obj2 = { default: module_2116 };
  let obj = obj2;
} else {
  obj = module_2116;
}

export default { date: obj.default({ formats: { full: "EEEE, do MMMM y '\u0440.'", long: "do MMMM y '\u0440.'", medium: "d MMM y '\u0440.'", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u043E' {{time}}", long: "{{date}} '\u043E' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;