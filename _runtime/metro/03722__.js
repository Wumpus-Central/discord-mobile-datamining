// _runtime/metro/03722__.js
import 02030__ from "02030__.js";

if (!module_2030) {
  let obj = { default: module_2030 };
} else {
  obj = module_2030;
}
obj = { date: obj.default({ formats: { full: "y\u5E74M\u6708d\u65E5EEEE", long: "y\u5E74M\u6708d\u65E5", medium: "y/MM/dd", short: "y/MM/dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H\u6642mm\u5206ss\u79D2 zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;