// _runtime/metro/04786__.js
import module_4568_mod from "04568__.js";
import module_4601_mod from "04601__.js";
import requiredArgs_mod from "../04421_requiredArgs.js";

let module_4568 = module_4568_mod;
if (!module_4568) {
  const obj = { default: module_4568 };
  let tmp3 = obj;
} else {
  tmp3 = module_4568;
}
module_4568 = tmp3;
let module_4601 = module_4601_mod;
if (!module_4601) {
  const obj2 = { default: module_4601 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4601;
}
module_4601 = tmp5;
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
  return module_4601.default(arg0, module_4568.default(Date.now(), 1));
};
export default exports.default;