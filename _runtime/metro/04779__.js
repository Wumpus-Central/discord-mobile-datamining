// _runtime/metro/04779__.js
import module_4768_mod from "04768__.js";
import requiredArgs_mod from "../04424_requiredArgs.js";

let module_4768 = module_4768_mod;
if (!module_4768) {
  const obj = { default: module_4768 };
  let tmp3 = obj;
} else {
  tmp3 = module_4768;
}
module_4768 = tmp3;
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
  return module_4768.default(Date.now(), arg0);
};
export default exports.default;