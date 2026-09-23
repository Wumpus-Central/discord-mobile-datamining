// _runtime/metro/04163__.js
import module_4159_mod from "04159__.js";
import requiredArgs_mod from "../03912_requiredArgs.js";

let module_4159 = module_4159_mod;
if (!module_4159) {
  const obj = { default: module_4159 };
  let tmp3 = obj;
} else {
  tmp3 = module_4159;
}
module_4159 = tmp3;
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
  return module_4159.default(arg0, Date.now(), arg1);
};
export default exports.default;