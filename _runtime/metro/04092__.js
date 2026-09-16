// _runtime/metro/04092__.js
import module_3874_mod from "03874__.js";
import module_3907_mod from "03907__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
let module_3907 = module_3907_mod;
if (!module_3907) {
  const obj2 = { default: module_3907 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3907;
}
module_3907 = tmp5;
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
  return module_3907.default(arg0, module_3874.default(Date.now(), 1));
};
export default exports.default;