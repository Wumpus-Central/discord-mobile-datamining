// === Module 4242: ? ===

// Module 4242
import module_2133 from "module_2133" /* 2133 */;

if (!module_2133) {
  const obj2 = { default: module_2133 };
  let obj = obj2;
} else {
  obj = module_2133;
}

export default { date: obj.default({ formats: { full: "y 'm'. MMMM d 'd'., EEEE", long: "y 'm'. MMMM d 'd'.", medium: "y-MM-dd", short: "y-MM-dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;