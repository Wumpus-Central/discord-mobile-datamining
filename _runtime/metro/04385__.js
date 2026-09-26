// === Module 4385: ? ===

// Module 4385
import module_2117 from "module_2117" /* 2117 */;

if (!module_2117) {
  const obj2 = { default: module_2117 };
  let obj = obj2;
} else {
  obj = module_2117;
}

export default { date: obj.default({ formats: { full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} '\u0915\u094B' {{time}}", long: "{{date}} '\u0915\u094B' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;