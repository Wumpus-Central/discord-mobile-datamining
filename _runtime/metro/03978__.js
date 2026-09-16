// _runtime/metro/03978__.js
import module_3974_mod from "03974__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let module_3974 = module_3974_mod;
if (!module_3974) {
  const obj = { default: module_3974 };
  let tmp3 = obj;
} else {
  tmp3 = module_3974;
}
module_3974 = tmp3;
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
  return module_3974.default(arg0, Date.now(), arg1);
};
export default exports.default;