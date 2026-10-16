// _runtime/metro/04623__.js
import module_4439_mod from "04439__.js";
import requiredArgs_mod from "../04259_requiredArgs.js";

let module_4439 = module_4439_mod;
if (!module_4439) {
  const obj = { default: module_4439 };
  let tmp3 = obj;
} else {
  tmp3 = module_4439;
}
module_4439 = tmp3;
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
  return module_4439.default(arg0, Date.now());
};
export default exports.default;