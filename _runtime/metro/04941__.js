// _runtime/metro/04941__.js
import module_4930_mod from "04930__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4930 = module_4930_mod;
if (!module_4930) {
  const obj = { default: module_4930 };
  let tmp3 = obj;
} else {
  tmp3 = module_4930;
}
module_4930 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4930.default(Date.now(), arg0);
};
export default exports.default;