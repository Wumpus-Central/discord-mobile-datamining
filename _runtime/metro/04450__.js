// === Module 4450: ? ===

// Module 4450
import module_2191 from "module_2191" /* 2191 */;

if (!module_2191) {
  const obj2 = { default: module_2191 };
  let obj = obj2;
} else {
  obj = module_2191;
}

export default { date: obj.default({ formats: { full: "EEEE, d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "d/M/yy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} - {{time}}", long: "{{date}} - {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;