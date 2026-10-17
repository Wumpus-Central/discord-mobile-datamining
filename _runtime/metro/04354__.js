// === Module 4354: ? ===

// Module 4354
import module_2137 from "module_2137" /* 2137 */;

if (!module_2137) {
  const obj2 = { default: module_2137 };
  let obj = obj2;
} else {
  obj = module_2137;
}

export default { date: obj.default({ formats: { full: "y. MMMM d., EEEE", long: "y. MMMM d.", medium: "y. MMM d.", short: "y. MM. dd." }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;