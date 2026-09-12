// _runtime/metro/03978__.js
import 03976__ from "03976__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_3976) {
  let obj = { default: module_3976 };
  let tmp3 = obj;
} else {
  tmp3 = module_3976;
}
module_3976 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3976.default(arg0, Date.now(), arg1);
};
export default exports.default;