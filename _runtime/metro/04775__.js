// _runtime/metro/04775__.js
import module_4773_mod from "04773__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4773 = module_4773_mod;
if (!module_4773) {
  const obj = { default: module_4773 };
  let tmp3 = obj;
} else {
  tmp3 = module_4773;
}
module_4773 = tmp3;
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
  return module_4773.default(arg0, Date.now(), arg1);
};
export default exports.default;