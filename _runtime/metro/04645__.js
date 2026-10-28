// _runtime/metro/04645__.js
import module_4637_mod from "04637__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

let module_4637 = module_4637_mod;
if (!module_4637) {
  const obj = { default: module_4637 };
  let tmp3 = obj;
} else {
  tmp3 = module_4637;
}
module_4637 = tmp3;
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
  return module_4637.default(Date.now(), arg0);
};
export default exports.default;