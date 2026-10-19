// _runtime/metro/04483__.js
import module_4479_mod from "04479__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4479 = module_4479_mod;
if (!module_4479) {
  const obj = { default: module_4479 };
  let tmp3 = obj;
} else {
  tmp3 = module_4479;
}
module_4479 = tmp3;
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
  return module_4479.default(arg0, Date.now(), arg1);
};
export default exports.default;