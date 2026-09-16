// === Module 3949: endOfISOWeek ===

// Module 3949 (endOfISOWeek)
import endOfWeek_mod from "endOfWeek" /* 3950 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let endOfWeek = endOfWeek_mod;
if (!endOfWeek) {
  const obj = { default: endOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = endOfWeek;
}
endOfWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function endOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return endOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;