// _runtime/metro/04557__.js
import module_4549_mod from "04549__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4549 = module_4549_mod;
if (!module_4549) {
  const obj = { default: module_4549 };
  let tmp3 = obj;
} else {
  tmp3 = module_4549;
}
module_4549 = tmp3;
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
  return module_4549.default(Date.now(), arg0);
};
export default exports.default;