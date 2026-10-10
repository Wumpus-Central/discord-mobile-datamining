// _runtime/metro/04452__.js
import module_4450_mod from "04450__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4450 = module_4450_mod;
if (!module_4450) {
  const obj = { default: module_4450 };
  let tmp3 = obj;
} else {
  tmp3 = module_4450;
}
module_4450 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4450.default(arg0, Date.now(), arg1);
};
export default exports.default;