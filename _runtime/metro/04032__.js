// === Module 4032: ? ===

// Module 4032
import module_2117 from "module_2117" /* 2117 */;

if (!module_2117) {
  const obj2 = { default: module_2117 };
  let obj = obj2;
} else {
  obj = module_2117;
}

export default { date: obj.default({ formats: { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd.MM.yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'la' {{time}}", long: "{{date}} 'la' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;