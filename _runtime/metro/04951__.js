// _runtime/metro/04951__.js
import module_4733_mod from "04733__.js";
import module_4766_mod from "04766__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4733 = module_4733_mod;
if (!module_4733) {
  const obj = { default: module_4733 };
  let tmp3 = obj;
} else {
  tmp3 = module_4733;
}
module_4733 = tmp3;
let module_4766 = module_4766_mod;
if (!module_4766) {
  const obj2 = { default: module_4766 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4766;
}
module_4766 = tmp5;
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
  return module_4766.default(arg0, module_4733.default(Date.now(), 1));
};
export default exports.default;