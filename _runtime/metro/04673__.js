// _runtime/metro/04673__.js
import module_4669_mod from "04669__.js";
import requiredArgs_mod from "../04422_requiredArgs.js";

let module_4669 = module_4669_mod;
if (!module_4669) {
  const obj = { default: module_4669 };
  let tmp3 = obj;
} else {
  tmp3 = module_4669;
}
module_4669 = tmp3;
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
  return module_4669.default(arg0, Date.now(), arg1);
};
export default exports.default;