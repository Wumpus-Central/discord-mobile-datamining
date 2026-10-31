// _runtime/metro/04546__.js
import module_4542_mod from "04542__.js";
import requiredArgs_mod from "../04295_requiredArgs.js";

let module_4542 = module_4542_mod;
if (!module_4542) {
  const obj = { default: module_4542 };
  let tmp3 = obj;
} else {
  tmp3 = module_4542;
}
module_4542 = tmp3;
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
  return module_4542.default(arg0, Date.now(), arg1);
};
export default exports.default;