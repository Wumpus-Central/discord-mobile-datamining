// _runtime/metro/03734__.js
import 02030__ from "02030__.js";

if (!module_2030) {
  let obj = { default: module_2030 };
} else {
  obj = module_2030;
}
obj = { date: obj.default({ formats: { full: "y 'm'. MMMM d 'd'., EEEE", long: "y 'm'. MMMM d 'd'.", medium: "y-MM-dd", short: "y-MM-dd" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };

export default obj;
export default exports.default;