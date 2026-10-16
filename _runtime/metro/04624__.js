// _runtime/metro/04624__.js
import module_4406_mod from "04406__.js";
import module_4439_mod from "04439__.js";
import requiredArgs_mod from "../04259_requiredArgs.js";

let module_4406 = module_4406_mod;
if (!module_4406) {
  const obj = { default: module_4406 };
  let tmp3 = obj;
} else {
  tmp3 = module_4406;
}
module_4406 = tmp3;
let module_4439 = module_4439_mod;
if (!module_4439) {
  const obj2 = { default: module_4439 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4439;
}
module_4439 = tmp5;
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
  return module_4439.default(arg0, module_4406.default(Date.now(), 1));
};
export default exports.default;