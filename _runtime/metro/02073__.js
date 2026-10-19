// === Module 2073: ? ===

// Module 2073
import module_2074 from "module_2074" /* 2074 */;

if (!module_2074) {
  const obj2 = { default: module_2074 };
  let obj = obj2;
} else {
  obj = module_2074;
}

export default { date: obj.default({ formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;