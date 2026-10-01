// _runtime/metro/04200__.js
import module_4198_mod from "04198__.js";
import requiredArgs_mod from "../03948_requiredArgs.js";

let module_4198 = module_4198_mod;
if (!module_4198) {
  const obj = { default: module_4198 };
  let tmp3 = obj;
} else {
  tmp3 = module_4198;
}
module_4198 = tmp3;
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
  return module_4198.default(arg0, Date.now(), arg1);
};
export default exports.default;