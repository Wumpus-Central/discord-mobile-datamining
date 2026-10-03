// _runtime/metro/04210__.js
import module_4206_mod from "04206__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_4206 = module_4206_mod;
if (!module_4206) {
  const obj = { default: module_4206 };
  let tmp3 = obj;
} else {
  tmp3 = module_4206;
}
module_4206 = tmp3;
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
  return module_4206.default(arg0, Date.now(), arg1);
};
export default exports.default;