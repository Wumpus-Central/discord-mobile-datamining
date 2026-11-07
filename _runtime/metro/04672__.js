// _runtime/metro/04672__.js
import module_4668_mod from "04668__.js";
import requiredArgs_mod from "../04421_requiredArgs.js";

let module_4668 = module_4668_mod;
if (!module_4668) {
  const obj = { default: module_4668 };
  let tmp3 = obj;
} else {
  tmp3 = module_4668;
}
module_4668 = tmp3;
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
  return module_4668.default(arg0, Date.now(), arg1);
};
export default exports.default;