// === Module 3466: buildFormatLongFn ===

// Module 3466 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: null };
  obj[0] = buildFormatLongFn;
} else {
  obj = buildFormatLongFn;
}
obj = { date: obj.default({ formats: { full: "\u0E27\u0E31\u0E19EEEE\u0E17\u0E35\u0E48 do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "dd/MM/yyyy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H:mm:ss \u0E19. zzzz", long: "H:mm:ss \u0E19. z", medium: "H:mm:ss \u0E19.", short: "H:mm \u0E19." }, defaultWidth: "medium" }), dateTime: obj.default({ formats: { full: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}", long: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;