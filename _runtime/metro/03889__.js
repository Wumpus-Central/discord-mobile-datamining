// _runtime/metro/03889__.js
import 02114__ from "02114__.js";

if (!module_2114) {
  const obj2 = { default: module_2114 };
  let obj = obj2;
} else {
  obj = module_2114;
}

export default { date: obj.default({ formats: { full: "y\uB144 M\uC6D4 d\uC77C EEEE", long: "y\uB144 M\uC6D4 d\uC77C", medium: "y.MM.dd", short: "y.MM.dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "a H\uC2DC mm\uBD84 ss\uCD08 zzzz", long: "a H:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;