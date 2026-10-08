// _runtime/metro/04514__.js
import module_4506_mod from "04506__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4506 = module_4506_mod;
if (!module_4506) {
  const obj = { default: module_4506 };
  let tmp3 = obj;
} else {
  tmp3 = module_4506;
}
module_4506 = tmp3;
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
  return module_4506.default(Date.now(), arg0);
};
export default exports.default;