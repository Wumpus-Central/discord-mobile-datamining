// _runtime/04020_buildFormatLongFn.js
import buildFormatLongFn from "02001_buildFormatLongFn.js";

if (!buildFormatLongFn) {
  let obj = { default: null };
  obj[0] = buildFormatLongFn;
} else {
  obj = buildFormatLongFn;
}
obj = { date: obj.default({ formats: { full: "EEEE, 'ng\u00E0y' d MMMM 'n\u0103m' y", long: "'ng\u00E0y' d MMMM 'n\u0103m' y", medium: "d MMM 'n\u0103m' y", short: "dd/MM/y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;