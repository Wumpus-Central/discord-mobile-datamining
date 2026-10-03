// _runtime/metro/04323__.js
import module_4139_mod from "04139__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_4139 = module_4139_mod;
if (!module_4139) {
  const obj = { default: module_4139 };
  let tmp3 = obj;
} else {
  tmp3 = module_4139;
}
module_4139 = tmp3;
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
  return module_4139.default(arg0, Date.now());
};
export default exports.default;