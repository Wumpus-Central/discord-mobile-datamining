// _runtime/metro/04673__.js
import module_4671_mod from "04671__.js";
import requiredArgs_mod from "../04421_requiredArgs.js";

let module_4671 = module_4671_mod;
if (!module_4671) {
  const obj = { default: module_4671 };
  let tmp3 = obj;
} else {
  tmp3 = module_4671;
}
module_4671 = tmp3;
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
  return module_4671.default(arg0, Date.now(), arg1);
};
export default exports.default;