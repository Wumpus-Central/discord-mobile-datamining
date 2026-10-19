// === Module 4363: ? ===

// Module 4363
import module_2074 from "module_2074" /* 2074 */;

if (!module_2074) {
  const obj2 = { default: module_2074 };
  let obj = obj2;
} else {
  obj = module_2074;
}

export default { date: obj.default({ formats: { full: "\u0E27\u0E31\u0E19EEEE\u0E17\u0E35\u0E48 do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss \u0E19. zzzz", long: "H:mm:ss \u0E19. z", medium: "H:mm:ss \u0E19.", short: "H:mm \u0E19." }, defaultWidth: "medium" }), dateTime: obj.default({ formats: { full: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}", long: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;