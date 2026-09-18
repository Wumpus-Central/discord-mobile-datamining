// _runtime/metro/03883__.js
import 02114__ from "02114__.js";

if (!module_2114) {
  const obj2 = { default: module_2114 };
  let obj = obj2;
} else {
  obj = module_2114;
}

export default { date: obj.default({ formats: { full: "y\u5E74M\u6708d\u65E5EEEE", long: "y\u5E74M\u6708d\u65E5", medium: "y/MM/dd", short: "y/MM/dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "H\u6642mm\u5206ss\u79D2 zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;