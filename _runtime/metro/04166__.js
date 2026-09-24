// _runtime/metro/04166__.js
import module_4164_mod from "04164__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_4164 = module_4164_mod;
if (!module_4164) {
  const obj = { default: module_4164 };
  let tmp3 = obj;
} else {
  tmp3 = module_4164;
}
module_4164 = tmp3;
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
  return module_4164.default(arg0, Date.now(), arg1);
};
export default exports.default;