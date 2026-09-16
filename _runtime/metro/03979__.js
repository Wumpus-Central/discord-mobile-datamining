// _runtime/metro/03979__.js
import module_3977_mod from "03977__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let module_3977 = module_3977_mod;
if (!module_3977) {
  const obj = { default: module_3977 };
  let tmp3 = obj;
} else {
  tmp3 = module_3977;
}
module_3977 = tmp3;
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
  return module_3977.default(arg0, Date.now(), arg1);
};
export default exports.default;