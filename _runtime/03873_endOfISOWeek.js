// _runtime/03873_endOfISOWeek.js
import endOfWeek from "03874_endOfWeek.js";
import requiredArgs from "03651_requiredArgs.js";

if (!endOfWeek) {
  let obj = { default: null };
  obj[0] = endOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = endOfWeek;
}
endOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function endOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return endOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;