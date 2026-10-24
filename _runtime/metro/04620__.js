// _runtime/metro/04620__.js
import module_4402_mod from "04402__.js";
import module_4435_mod from "04435__.js";
import requiredArgs_mod from "../04255_requiredArgs.js";

let module_4402 = module_4402_mod;
if (!module_4402) {
  const obj = { default: module_4402 };
  let tmp3 = obj;
} else {
  tmp3 = module_4402;
}
module_4402 = tmp3;
let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj2 = { default: module_4435 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4435;
}
module_4435 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4435.default(arg0, module_4402.default(Date.now(), 1));
};
export default exports.default;