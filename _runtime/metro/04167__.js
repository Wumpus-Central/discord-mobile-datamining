// _runtime/metro/04167__.js
import module_4163_mod from "04163__.js";
import requiredArgs_mod from "../03916_requiredArgs.js";

let module_4163 = module_4163_mod;
if (!module_4163) {
  const obj = { default: module_4163 };
  let tmp3 = obj;
} else {
  tmp3 = module_4163;
}
module_4163 = tmp3;
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
  return module_4163.default(arg0, Date.now(), arg1);
};
export default exports.default;