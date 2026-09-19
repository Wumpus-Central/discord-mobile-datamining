// _runtime/metro/04208__.js
import module_4200_mod from "04200__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

let module_4200 = module_4200_mod;
if (!module_4200) {
  const obj = { default: module_4200 };
  let tmp3 = obj;
} else {
  tmp3 = module_4200;
}
module_4200 = tmp3;
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
  return module_4200.default(arg0, Date.now());
};
export default exports.default;