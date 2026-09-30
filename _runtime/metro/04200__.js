// _runtime/metro/04200__.js
import module_4196_mod from "04196__.js";
import requiredArgs_mod from "../03949_requiredArgs.js";

let module_4196 = module_4196_mod;
if (!module_4196) {
  const obj = { default: module_4196 };
  let tmp3 = obj;
} else {
  tmp3 = module_4196;
}
module_4196 = tmp3;
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
  return module_4196.default(arg0, Date.now(), arg1);
};
export default exports.default;