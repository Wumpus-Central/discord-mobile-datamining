// _runtime/metro/03924__.js
import _typeof from "03663__.js";
import 03667__ from "03667__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3667) {
  obj = { default: module_3667 };
  let tmp5 = obj;
} else {
  tmp5 = module_3667;
}
module_3667 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3667.default(arg0));
};
export default exports.default;