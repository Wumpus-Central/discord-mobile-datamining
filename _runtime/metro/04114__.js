// === Module 4114: ? ===

// Module 4114
import localeToNumber from "localeToNumber" /* 4115 */;
import module_4117 from "module_4117" /* 4117 */;
import module_4118 from "module_4118" /* 4118 */;
import localeToNumber from "module_4116" /* 4116 */;
import date from "module_4119" /* 4119 */;

if (!localeToNumber) {
  let obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4117) {
  obj = { default: module_4117 };
  let tmp5 = obj;
} else {
  tmp5 = module_4117;
}
if (!module_4118) {
  obj = { default: module_4118 };
  let tmp7 = obj;
} else {
  tmp7 = module_4118;
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