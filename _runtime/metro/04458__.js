// _runtime/metro/04458__.js
import module_4293_mod from "04293__.js";
import module_4438_mod from "04438__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let module_4438 = module_4438_mod;
if (!module_4438) {
  const obj2 = { default: module_4438 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4438;
}
module_4438 = tmp5;
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
  return module_4438.default(interval, 12 * module_4293.default(arg1));
};
export default exports.default;