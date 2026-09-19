// _runtime/metro/04201__.js
import module_4190_mod from "04190__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

let module_4190 = module_4190_mod;
if (!module_4190) {
  const obj = { default: module_4190 };
  let tmp3 = obj;
} else {
  tmp3 = module_4190;
}
module_4190 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4190.default(Date.now(), arg0);
};
export default exports.default;