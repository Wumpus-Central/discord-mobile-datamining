// === Module 3767: ? ===

// Module 3767
import module_2030 from "module_2030" /* 2030 */;

if (!module_2030) {
  const obj2 = { default: module_2030 };
  let obj = obj2;
} else {
  obj = module_2030;
}

export default { date: obj.default({ formats: { full: "eeee d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "d.M.y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH.mm.ss zzzz", long: "HH.mm.ss z", medium: "HH.mm.ss", short: "HH.mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'klo' {{time}}", long: "{{date}} 'klo' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;