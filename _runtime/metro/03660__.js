// === Module 3660: ? ===

// Module 3660
import module_2030 from "module_2030" /* 2030 */;

if (!module_2030) {
  let obj = { default: module_2030 };
} else {
  obj = module_2030;
}
obj = { date: obj.default({ formats: { full: "EEEE, d. MMMM yyyy", long: "d. MMMM yyyy", medium: "d. M. yyyy", short: "dd.MM.yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'v' {{time}}", long: "{{date}} 'v' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;