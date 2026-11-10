// _runtime/metro/04778__.js
import module_4767_mod from "04767__.js";
import requiredArgs_mod from "../04423_requiredArgs.js";

let module_4767 = module_4767_mod;
if (!module_4767) {
  const obj = { default: module_4767 };
  let tmp3 = obj;
} else {
  tmp3 = module_4767;
}
module_4767 = tmp3;
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
  return module_4767.default(Date.now(), arg0);
};
export default exports.default;