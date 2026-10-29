// === Module 4286: ? ===

// Module 4286
import module_2071 from "module_2071" /* 2071 */;

if (!module_2071) {
  const obj2 = { default: module_2071 };
  let obj = obj2;
} else {
  obj = module_2071;
}

export default { date: obj.default({ formats: { full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { any: "{{date}} {{time}}" }, defaultWidth: "any" }) };
export default exports.default;