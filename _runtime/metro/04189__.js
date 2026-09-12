// === Module 4189: ? ===

// Module 4189
import localeToNumber from "localeToNumber" /* 4190 */;
import module_4192 from "module_4192" /* 4192 */;
import module_4193 from "module_4193" /* 4193 */;
import localeToNumber from "module_4191" /* 4191 */;
import date from "module_4194" /* 4194 */;

if (!localeToNumber) {
  let obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4192) {
  obj = { default: module_4192 };
  let tmp5 = obj;
} else {
  tmp5 = module_4192;
}
if (!module_4193) {
  obj = { default: module_4193 };
  let tmp7 = obj;
} else {
  tmp7 = module_4193;
}
if (!localeToNumber) {
  const obj1 = { default: localeToNumber };
  let tmp9 = obj1;
} else {
  tmp9 = localeToNumber;
}
if (!date) {
  const obj2 = { default: date };
  let tmp11 = obj2;
} else {
  tmp11 = date;
}

export default { code: "hi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 4 } };
export default exports.default;