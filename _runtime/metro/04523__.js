// _runtime/metro/04523__.js
import module_4339_mod from "04339__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4339 = module_4339_mod;
if (!module_4339) {
  const obj = { default: module_4339 };
  let tmp3 = obj;
} else {
  tmp3 = module_4339;
}
module_4339 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4339.default(arg0, Date.now());
};
export default exports.default;