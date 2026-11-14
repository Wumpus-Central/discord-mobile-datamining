// _runtime/metro/04837__.js
import module_4833_mod from "04833__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4833 = module_4833_mod;
if (!module_4833) {
  const obj = { default: module_4833 };
  let tmp3 = obj;
} else {
  tmp3 = module_4833;
}
module_4833 = tmp3;
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
  return module_4833.default(arg0, Date.now(), arg1);
};
export default exports.default;