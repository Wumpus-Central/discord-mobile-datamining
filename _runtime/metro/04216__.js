// _runtime/metro/04216__.js
import module_4212_mod from "04212__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_4212 = module_4212_mod;
if (!module_4212) {
  const obj = { default: module_4212 };
  let tmp3 = obj;
} else {
  tmp3 = module_4212;
}
module_4212 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4212.default(arg0, Date.now(), arg1);
};
export default exports.default;