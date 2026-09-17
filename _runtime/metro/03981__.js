// _runtime/metro/03981__.js
import module_3979_mod from "03979__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let module_3979 = module_3979_mod;
if (!module_3979) {
  const obj = { default: module_3979 };
  let tmp3 = obj;
} else {
  tmp3 = module_3979;
}
module_3979 = tmp3;
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
  return module_3979.default(arg0, Date.now(), arg1);
};
export default exports.default;