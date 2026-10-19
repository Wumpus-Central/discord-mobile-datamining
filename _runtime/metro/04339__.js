// === Module 4339: ? ===

// Module 4339
import module_2074 from "module_2074" /* 2074 */;

if (!module_2074) {
  const obj2 = { default: module_2074 };
  let obj = obj2;
} else {
  obj = module_2074;
}

export default { date: obj.default({ formats: { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u00E0s' {{time}}", long: "{{date}} '\u00E0s' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;