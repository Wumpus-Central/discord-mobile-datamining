// _runtime/metro/04451__.js
import module_4447_mod from "04447__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4447 = module_4447_mod;
if (!module_4447) {
  const obj = { default: module_4447 };
  let tmp3 = obj;
} else {
  tmp3 = module_4447;
}
module_4447 = tmp3;
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
  return module_4447.default(arg0, Date.now(), arg1);
};
export default exports.default;