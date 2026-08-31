// === Module 3632: buildFormatLongFn ===

// Module 3632 (buildFormatLongFn)
import buildFormatLongFn from "buildFormatLongFn" /* 2001 */;

if (!buildFormatLongFn) {
  let obj = { default: null };
  obj[0] = buildFormatLongFn;
} else {
  obj = buildFormatLongFn;
}
obj = { date: obj.default({ formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd-MM-y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;