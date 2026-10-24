// _runtime/metro/04282__.js
import 02073__ from "02073__.js";

if (!module_2073) {
  const obj2 = { default: module_2073 };
  let obj = obj2;
} else {
  obj = module_2073;
}

export default { date: obj.default({ formats: { full: "EEEE, d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "d/M/yy" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} - {{time}}", long: "{{date}} - {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) };
export default exports.default;