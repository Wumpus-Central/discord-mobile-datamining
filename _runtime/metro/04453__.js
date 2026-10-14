// _runtime/metro/04453__.js
import module_4449_mod from "04449__.js";
import requiredArgs_mod from "../04202_requiredArgs.js";

let module_4449 = module_4449_mod;
if (!module_4449) {
  const obj = { default: module_4449 };
  let tmp3 = obj;
} else {
  tmp3 = module_4449;
}
module_4449 = tmp3;
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
  return module_4449.default(arg0, Date.now(), arg1);
};
export default exports.default;