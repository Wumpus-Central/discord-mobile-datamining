// _runtime/metro/04454__.js
import module_4452_mod from "04452__.js";
import requiredArgs_mod from "../04202_requiredArgs.js";

let module_4452 = module_4452_mod;
if (!module_4452) {
  const obj = { default: module_4452 };
  let tmp3 = obj;
} else {
  tmp3 = module_4452;
}
module_4452 = tmp3;
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
  return module_4452.default(arg0, Date.now(), arg1);
};
export default exports.default;