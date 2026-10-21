// _runtime/metro/04712__.js
import 02073__ from "02073__.js";

if (!module_2073) {
  const obj2 = { default: module_2073 };
  let obj = obj2;
} else {
  obj = module_2073;
}

export default { date: obj.default({ formats: { full: "y'\u5E74'M'\u6708'd'\u65E5' EEEE", long: "y'\u5E74'M'\u6708'd'\u65E5'", medium: "yyyy-MM-dd", short: "yy-MM-dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;