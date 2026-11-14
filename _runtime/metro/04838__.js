// _runtime/metro/04838__.js
import module_4836_mod from "04836__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4836 = module_4836_mod;
if (!module_4836) {
  const obj = { default: module_4836 };
  let tmp3 = obj;
} else {
  tmp3 = module_4836;
}
module_4836 = tmp3;
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
  return module_4836.default(arg0, Date.now(), arg1);
};
export default exports.default;