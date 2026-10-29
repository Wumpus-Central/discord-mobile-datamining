// _runtime/metro/04653__.js
import module_4469_mod from "04469__.js";
import requiredArgs_mod from "../04289_requiredArgs.js";

let module_4469 = module_4469_mod;
if (!module_4469) {
  const obj = { default: module_4469 };
  let tmp3 = obj;
} else {
  tmp3 = module_4469;
}
module_4469 = tmp3;
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
  return module_4469.default(arg0, Date.now());
};
export default exports.default;