// _runtime/03926_buildFormatLongFn.js
import buildFormatLongFn from "buildFormatLongFn";

if (!buildFormatLongFn) {
  let obj = { default: null };
  obj[0] = buildFormatLongFn;
} else {
  obj = buildFormatLongFn;
}
obj = { date: obj.default({ formats: { full: "y'\u5E74'M'\u6708'd'\u65E5' EEEE", long: "y'\u5E74'M'\u6708'd'\u65E5'", medium: "yyyy-MM-dd", short: "yy-MM-dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;