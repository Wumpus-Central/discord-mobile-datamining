// _runtime/metro/04702__.js
import module_4698_mod from "04698__.js";
import requiredArgs_mod from "../04451_requiredArgs.js";

let module_4698 = module_4698_mod;
if (!module_4698) {
  const obj = { default: module_4698 };
  let tmp3 = obj;
} else {
  tmp3 = module_4698;
}
module_4698 = tmp3;
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
  return module_4698.default(arg0, Date.now(), arg1);
};
export default exports.default;