// _runtime/metro/04841__.js
import module_4837_mod from "04837__.js";
import requiredArgs_mod from "../04590_requiredArgs.js";

let module_4837 = module_4837_mod;
if (!module_4837) {
  const obj = { default: module_4837 };
  let tmp3 = obj;
} else {
  tmp3 = module_4837;
}
module_4837 = tmp3;
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
  return module_4837.default(arg0, Date.now(), arg1);
};
export default exports.default;