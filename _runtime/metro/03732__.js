// === Module 3732: ? ===

// Module 3732
import translateSeconds from "translateSeconds" /* 3733 */;
import module_3734 from "module_3734" /* 3734 */;
import module_3735 from "module_3735" /* 3735 */;
import date from "module_3736" /* 3736 */;
import date from "module_3737" /* 3737 */;

if (!translateSeconds) {
  let obj = { default: translateSeconds };
  let tmp3 = obj;
} else {
  tmp3 = translateSeconds;
}
if (!module_3734) {
  obj = { default: module_3734 };
  let tmp5 = obj;
} else {
  tmp5 = module_3734;
}
if (!module_3735) {
  obj = { default: module_3735 };
  let tmp7 = obj;
} else {
  tmp7 = module_3735;
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