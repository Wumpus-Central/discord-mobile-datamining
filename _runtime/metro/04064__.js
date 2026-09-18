// _runtime/metro/04064__.js
import module_4062_mod from "04062__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let module_4062 = module_4062_mod;
if (!module_4062) {
  const obj = { default: module_4062 };
  let tmp3 = obj;
} else {
  tmp3 = module_4062;
}
module_4062 = tmp3;
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
  return module_4062.default(arg0, Date.now(), arg1);
};
export default exports.default;