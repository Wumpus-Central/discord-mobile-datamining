// _runtime/metro/04540__.js
import module_4536_mod from "04536__.js";
import requiredArgs_mod from "../04289_requiredArgs.js";

let module_4536 = module_4536_mod;
if (!module_4536) {
  const obj = { default: module_4536 };
  let tmp3 = obj;
} else {
  tmp3 = module_4536;
}
module_4536 = tmp3;
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
  return module_4536.default(arg0, Date.now(), arg1);
};
export default exports.default;