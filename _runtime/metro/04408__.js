// _runtime/metro/04408__.js
import module_4404_mod from "04404__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4404 = module_4404_mod;
if (!module_4404) {
  const obj = { default: module_4404 };
  let tmp3 = obj;
} else {
  tmp3 = module_4404;
}
module_4404 = tmp3;
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
  return module_4404.default(arg0, Date.now(), arg1);
};
export default exports.default;