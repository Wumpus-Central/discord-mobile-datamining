// _runtime/03630_startOfISOWeek.js
import startOfWeek from "startOfWeek";
import requiredArgs from "requiredArgs";

if (!startOfWeek) {
  let obj = { default: null };
  obj[0] = startOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;

export default function startOfISOWeek(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;