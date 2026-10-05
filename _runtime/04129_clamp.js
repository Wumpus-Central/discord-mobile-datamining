// === Module 4129: clamp ===

// Module 4129 (clamp)
import max_mod from "max" /* 4130 */;
import min_mod from "min" /* 4131 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let tmp5;
let tmp7;
let max = max_mod;
if (!max) {
  tmp3 = { default: max };
  const obj = { default: max };
} else {
  tmp3 = max;
}
max = tmp3;
let min = min_mod;
if (!min) {
  tmp5 = { default: min };
  const obj2 = { default: min };
} else {
  tmp5 = min;
}
min = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function clamp(arg0, arg1) {
  let end;
  let start;
  ({ start, end } = arg1);
  requiredArgs.default(2, arguments);
  const items = [arg0, start];
  const items1 = [, ];
  const _default = min.default;
  items1[0] = max.default(items);
  items1[1] = end;
  return _default(items1);
};