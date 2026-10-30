// _runtime/metro/04542__.js
import module_4540_mod from "04540__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4540 = module_4540_mod;
if (!module_4540) {
  const obj = { default: module_4540 };
  let tmp3 = obj;
} else {
  tmp3 = module_4540;
}
module_4540 = tmp3;
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
  return module_4540.default(arg0, Date.now(), arg1);
};
export default exports.default;