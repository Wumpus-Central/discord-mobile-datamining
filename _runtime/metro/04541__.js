// _runtime/metro/04541__.js
import module_4539_mod from "04539__.js";
import requiredArgs_mod from "../04289_requiredArgs.js";

let module_4539 = module_4539_mod;
if (!module_4539) {
  const obj = { default: module_4539 };
  let tmp3 = obj;
} else {
  tmp3 = module_4539;
}
module_4539 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4539.default(arg0, Date.now(), arg1);
};
export default exports.default;