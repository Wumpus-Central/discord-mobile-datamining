// _runtime/metro/04504__.js
import module_4500_mod from "04500__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4500 = module_4500_mod;
if (!module_4500) {
  const obj = { default: module_4500 };
  let tmp3 = obj;
} else {
  tmp3 = module_4500;
}
module_4500 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4500.default(arg0, Date.now(), arg1);
};
export default exports.default;