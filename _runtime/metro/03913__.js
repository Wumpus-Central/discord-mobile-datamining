// === Module 3913: ? ===

// Module 3913
import module_2114 from "module_2114" /* 2114 */;

if (!module_2114) {
  const obj2 = { default: module_2114 };
  let obj = obj2;
} else {
  obj = module_2114;
}

export default { date: obj.default({ formats: { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;