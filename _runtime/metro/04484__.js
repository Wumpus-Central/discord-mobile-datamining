// _runtime/metro/04484__.js
import module_4482_mod from "04482__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4482 = module_4482_mod;
if (!module_4482) {
  const obj = { default: module_4482 };
  let tmp3 = obj;
} else {
  tmp3 = module_4482;
}
module_4482 = tmp3;
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
  return module_4482.default(arg0, Date.now(), arg1);
};
export default exports.default;