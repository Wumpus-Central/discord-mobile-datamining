// _runtime/metro/04410__.js
import module_4406_mod from "04406__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4406 = module_4406_mod;
if (!module_4406) {
  const obj = { default: module_4406 };
  let tmp3 = obj;
} else {
  tmp3 = module_4406;
}
module_4406 = tmp3;
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
  return module_4406.default(arg0, Date.now(), arg1);
};
export default exports.default;