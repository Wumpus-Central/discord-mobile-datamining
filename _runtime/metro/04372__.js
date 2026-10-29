// === Module 4372: ? ===

// Module 4372
import module_2071 from "module_2071" /* 2071 */;

if (!module_2071) {
  const obj2 = { default: module_2071 };
  let obj = obj2;
} else {
  obj = module_2071;
}

export default { date: obj.default({ formats: { full: "y 'm'. MMMM d 'd'., EEEE", long: "y 'm'. MMMM d 'd'.", medium: "y-MM-dd", short: "y-MM-dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;