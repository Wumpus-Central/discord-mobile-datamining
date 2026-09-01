// _runtime/04009_subQuarters.js
import toInteger from "03576_toInteger.js";
import addQuarters from "03738_addQuarters.js";
import requiredArgs from "03573_requiredArgs.js";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addQuarters) {
  obj = { default: null };
  obj[0] = addQuarters;
  let tmp5 = obj;
} else {
  tmp5 = addQuarters;
}
addQuarters = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addQuarters.default(arg0, -toInteger.default(arg1));
};
export default exports.default;