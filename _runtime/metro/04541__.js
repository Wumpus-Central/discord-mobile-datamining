// _runtime/metro/04541__.js
import module_4537_mod from "04537__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4537 = module_4537_mod;
if (!module_4537) {
  const obj = { default: module_4537 };
  let tmp3 = obj;
} else {
  tmp3 = module_4537;
}
module_4537 = tmp3;
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
  return module_4537.default(arg0, Date.now(), arg1);
};
export default exports.default;