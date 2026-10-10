// === Module 4197: ? ===

// Module 4197
import module_2134 from "module_2134" /* 2134 */;

if (!module_2134) {
  const obj2 = { default: module_2134 };
  let obj = obj2;
} else {
  obj = module_2134;
}

export default { date: obj.default({ formats: { full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { any: "{{date}} {{time}}" }, defaultWidth: "any" }) };
export default exports.default;