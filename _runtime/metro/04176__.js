// _runtime/metro/04176__.js
import module_3992_mod from "03992__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let module_3992 = module_3992_mod;
if (!module_3992) {
  const obj = { default: module_3992 };
  let tmp3 = obj;
} else {
  tmp3 = module_3992;
}
module_3992 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3992.default(arg0, Date.now());
};
export default exports.default;