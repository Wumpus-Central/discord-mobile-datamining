// _runtime/metro/04645__.js
import module_4634_mod from "04634__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4634 = module_4634_mod;
if (!module_4634) {
  const obj = { default: module_4634 };
  let tmp3 = obj;
} else {
  tmp3 = module_4634;
}
module_4634 = tmp3;
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
  return module_4634.default(Date.now(), arg0);
};
export default exports.default;