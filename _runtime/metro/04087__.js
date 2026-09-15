// _runtime/metro/04087__.js
import module_4079_mod from "04079__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let module_4079 = module_4079_mod;
if (!module_4079) {
  const obj = { default: module_4079 };
  let tmp3 = obj;
} else {
  tmp3 = module_4079;
}
module_4079 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4079.default(Date.now(), arg0);
};
export default exports.default;