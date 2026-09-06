// === Module 3704: ? ===

// Module 3704
import module_2030 from "module_2030" /* 2030 */;

if (!module_2030) {
  let obj = { default: module_2030 };
} else {
  obj = module_2030;
}
obj = { date: obj.default({ formats: { full: "EEEE, d. MMMM y.", long: "d. MMMM y.", medium: "d. MMM y.", short: "dd. MM. y." }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'u' {{time}}", long: "{{date}} 'u' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;