// _runtime/metro/04409__.js
import module_4407_mod from "04407__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4407 = module_4407_mod;
if (!module_4407) {
  const obj = { default: module_4407 };
  let tmp3 = obj;
} else {
  tmp3 = module_4407;
}
module_4407 = tmp3;
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
  return module_4407.default(arg0, Date.now(), arg1);
};
export default exports.default;