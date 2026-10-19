// === Module 4333: ? ===

// Module 4333
import module_2074 from "module_2074" /* 2074 */;

if (!module_2074) {
  const obj2 = { default: module_2074 };
  let obj = obj2;
} else {
  obj = module_2074;
}

export default { date: obj.default({ formats: { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;