// _runtime/metro/04171__.js
import module_4169_mod from "04169__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_4169 = module_4169_mod;
if (!module_4169) {
  const obj = { default: module_4169 };
  let tmp3 = obj;
} else {
  tmp3 = module_4169;
}
module_4169 = tmp3;
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
  return module_4169.default(arg0, Date.now(), arg1);
};
export default exports.default;