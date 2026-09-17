// === Module 3806: ? ===

// Module 3806
import module_2031 from "module_2031" /* 2031 */;

if (!module_2031) {
  const obj2 = { default: module_2031 };
  let obj = obj2;
} else {
  obj = module_2031;
}

export default { date: obj.default({ formats: { full: "y\uB144 M\uC6D4 d\uC77C EEEE", long: "y\uB144 M\uC6D4 d\uC77C", medium: "y.MM.dd", short: "y.MM.dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "a H\uC2DC mm\uBD84 ss\uCD08 zzzz", long: "a H:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;