// _runtime/metro/04274__.js
import module_4266_mod from "04266__.js";
import requiredArgs_mod from "../03912_requiredArgs.js";

let module_4266 = module_4266_mod;
if (!module_4266) {
  const obj = { default: module_4266 };
  let tmp3 = obj;
} else {
  tmp3 = module_4266;
}
module_4266 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4266.default(arg0, Date.now());
};
export default exports.default;