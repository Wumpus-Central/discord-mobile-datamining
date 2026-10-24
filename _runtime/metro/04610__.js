// _runtime/metro/04610__.js
import module_4599_mod from "04599__.js";
import requiredArgs_mod from "../04255_requiredArgs.js";

let module_4599 = module_4599_mod;
if (!module_4599) {
  const obj = { default: module_4599 };
  let tmp3 = obj;
} else {
  tmp3 = module_4599;
}
module_4599 = tmp3;
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
  return module_4599.default(Date.now(), arg0);
};
export default exports.default;