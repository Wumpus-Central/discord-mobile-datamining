// _runtime/metro/04411__.js
import module_4409_mod from "04409__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4409 = module_4409_mod;
if (!module_4409) {
  const obj = { default: module_4409 };
  let tmp3 = obj;
} else {
  tmp3 = module_4409;
}
module_4409 = tmp3;
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
  return module_4409.default(arg0, Date.now(), arg1);
};
export default exports.default;