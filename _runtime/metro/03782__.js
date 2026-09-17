// === Module 3782: ? ===

// Module 3782
import module_2031 from "module_2031" /* 2031 */;

if (!module_2031) {
  const obj2 = { default: module_2031 };
  let obj = obj2;
} else {
  obj = module_2031;
}

export default { date: obj.default({ formats: { full: "EEEE, d. MMMM y.", long: "d. MMMM y.", medium: "d. MMM y.", short: "dd. MM. y." }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'u' {{time}}", long: "{{date}} 'u' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;