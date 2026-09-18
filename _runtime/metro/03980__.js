// _runtime/metro/03980__.js
import module_3815_mod from "03815__.js";
import module_3960_mod from "03960__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj = { default: module_3815 };
  let tmp3 = obj;
} else {
  tmp3 = module_3815;
}
module_3815 = tmp3;
let module_3960 = module_3960_mod;
if (!module_3960) {
  const obj2 = { default: module_3960 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3960;
}
module_3960 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3960.default(interval, 12 * module_3815.default(arg1));
};
export default exports.default;