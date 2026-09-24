// === Module 4001: ? ===

// Module 4001
import module_4002 from "module_4002" /* 4002 */;
import module_4003 from "module_4003" /* 4003 */;
import module_4004 from "module_4004" /* 4004 */;
import date_mod from "module_4005" /* 4005 */;
import date_mod from "module_4006" /* 4006 */;

if (!module_4002) {
  const obj = { default: module_4002 };
  let tmp3 = obj;
} else {
  tmp3 = module_4002;
}
if (!module_4003) {
  const obj2 = { default: module_4003 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4003;
}
if (!module_4004) {
  const obj3 = { default: module_4004 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4004;
}
let date = date_mod;
if (!date) {
  const obj4 = { default: date };
  let tmp9 = obj4;
} else {
  tmp9 = date;
}
let date = date_mod;
if (!date) {
  const obj5 = { default: date };
  let tmp11 = obj5;
} else {
  tmp11 = date;
}

export default { code: "nl", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;