// _runtime/metro/04653__.js
import module_4435_mod from "04435__.js";
import module_4468_mod from "04468__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj = { default: module_4435 };
  let tmp3 = obj;
} else {
  tmp3 = module_4435;
}
module_4435 = tmp3;
let module_4468 = module_4468_mod;
if (!module_4468) {
  const obj2 = { default: module_4468 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4468;
}
module_4468 = tmp5;
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
  return module_4468.default(arg0, module_4435.default(Date.now(), 1));
};
export default exports.default;