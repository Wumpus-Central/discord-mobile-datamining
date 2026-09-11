// _runtime/metro/03956__.js
import _typeof from "03695__.js";
import 03699__ from "03699__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3699) {
  obj = { default: module_3699 };
  let tmp5 = obj;
} else {
  tmp5 = module_3699;
}
module_3699 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3699.default(arg0));
};
export default exports.default;