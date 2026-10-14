// _runtime/metro/04564__.js
import module_4556_mod from "04556__.js";
import requiredArgs_mod from "../04202_requiredArgs.js";

let module_4556 = module_4556_mod;
if (!module_4556) {
  const obj = { default: module_4556 };
  let tmp3 = obj;
} else {
  tmp3 = module_4556;
}
module_4556 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4556.default(arg0, Date.now());
};
export default exports.default;