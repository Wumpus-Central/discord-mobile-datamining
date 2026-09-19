// === Module 3855: ? ===

// Module 3855
import module_2114 from "module_2114" /* 2114 */;

if (!module_2114) {
  const obj2 = { default: module_2114 };
  let obj = obj2;
} else {
  obj = module_2114;
}

export default { date: obj.default({ formats: { full: "EEEE, d. MMMM yyyy", long: "d. MMMM yyyy", medium: "d. M. yyyy", short: "dd.MM.yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'v' {{time}}", long: "{{date}} 'v' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;