// _runtime/metro/03805__.js
import 03654__ from "03654__.js";
import _typeof from "03650__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const time = _typeof.default(arg0).getTime();
  const defaultResult1 = _typeof.default(arg0);
  return new Date(time + module_3654.default(arg1));
};
export default exports.default;