// _runtime/metro/04271__.js
import 02070__ from "02070__.js";

if (!module_2070) {
  const obj2 = { default: module_2070 };
  let obj = obj2;
} else {
  obj = module_2070;
}

export default { date: obj.default({ formats: { full: "EEEE 'den' d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd/MM/y" }, defaultWidth: "full" }), time: obj.default({ formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" }, defaultWidth: "full" }), dateTime: obj.default({ formats: { full: "{{date}} 'kl'. {{time}}", long: "{{date}} 'kl'. {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" }, defaultWidth: "full" }) };
export default exports.default;