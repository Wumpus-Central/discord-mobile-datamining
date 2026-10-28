// _runtime/metro/04652__.js
import module_4468_mod from "04468__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

let module_4468 = module_4468_mod;
if (!module_4468) {
  const obj = { default: module_4468 };
  let tmp3 = obj;
} else {
  tmp3 = module_4468;
}
module_4468 = tmp3;
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
  return module_4468.default(arg0, Date.now());
};
export default exports.default;