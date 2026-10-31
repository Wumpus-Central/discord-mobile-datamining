// _runtime/metro/04547__.js
import module_4545_mod from "04545__.js";
import requiredArgs_mod from "../04295_requiredArgs.js";

let module_4545 = module_4545_mod;
if (!module_4545) {
  const obj = { default: module_4545 };
  let tmp3 = obj;
} else {
  tmp3 = module_4545;
}
module_4545 = tmp3;
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
  return module_4545.default(arg0, Date.now(), arg1);
};
export default exports.default;