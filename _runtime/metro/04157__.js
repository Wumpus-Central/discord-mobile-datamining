// === Module 4157: ? ===

// Module 4157
import localeToNumber from "localeToNumber" /* 4158 */;
import module_4160 from "module_4160" /* 4160 */;
import module_4161 from "module_4161" /* 4161 */;
import localeToNumber from "module_4159" /* 4159 */;
import date from "module_4162" /* 4162 */;

if (!localeToNumber) {
  let obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4160) {
  obj = { default: module_4160 };
  let tmp5 = obj;
} else {
  tmp5 = module_4160;
}
if (!module_4161) {
  obj = { default: module_4161 };
  let tmp7 = obj;
} else {
  tmp7 = module_4161;
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