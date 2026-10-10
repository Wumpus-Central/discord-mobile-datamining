// === Module 4232: ? ===

// Module 4232
import module_2134 from "module_2134" /* 2134 */;

if (!module_2134) {
  const obj2 = { default: module_2134 };
  let obj = obj2;
} else {
  obj = module_2134;
}

export default { date: obj.default({ formats: { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;