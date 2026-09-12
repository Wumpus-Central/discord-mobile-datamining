// === Module 3807: ? ===

// Module 3807
import translateSeconds from "translateSeconds" /* 3808 */;
import module_3809 from "module_3809" /* 3809 */;
import module_3810 from "module_3810" /* 3810 */;
import date from "module_3811" /* 3811 */;
import date from "module_3812" /* 3812 */;

if (!translateSeconds) {
  let obj = { default: translateSeconds };
  let tmp3 = obj;
} else {
  tmp3 = translateSeconds;
}
if (!module_3809) {
  obj = { default: module_3809 };
  let tmp5 = obj;
} else {
  tmp5 = module_3809;
}
if (!module_3810) {
  obj = { default: module_3810 };
  let tmp7 = obj;
} else {
  tmp7 = module_3810;
}
if (!date) {
  const obj1 = { default: date };
  let tmp9 = obj1;
} else {
  tmp9 = date;
}
if (!date) {
  const obj2 = { default: date };
  let tmp11 = obj2;
} else {
  tmp11 = date;
}

export default { code: "lt", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;