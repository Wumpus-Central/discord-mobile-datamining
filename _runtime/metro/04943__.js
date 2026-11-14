// _runtime/metro/04943__.js
import module_4935_mod from "04935__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4935 = module_4935_mod;
if (!module_4935) {
  const obj = { default: module_4935 };
  let tmp3 = obj;
} else {
  tmp3 = module_4935;
}
module_4935 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4935.default(Date.now(), arg0);
};
export default exports.default;