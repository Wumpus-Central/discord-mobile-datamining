// === Module 4433: ? ===

// Module 4433
import module_2196 from "module_2196" /* 2196 */;

if (!module_2196) {
  const obj2 = { default: module_2196 };
  let obj = obj2;
} else {
  obj = module_2196;
}

export default { date: obj.default({ formats: { full: "EEEE, d. MMMM yyyy", long: "d. MMMM yyyy", medium: "d. M. yyyy", short: "dd.MM.yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'v' {{time}}", long: "{{date}} 'v' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;