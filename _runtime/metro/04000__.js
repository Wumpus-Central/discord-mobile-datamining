// _runtime/metro/04000__.js
import translateSeconds from "../04001_translateSeconds.js";
import 04002__ from "04002__.js";
import 04003__ from "04003__.js";
import date_mod from "04004__.js";
import date_mod from "04005__.js";

if (!translateSeconds) {
  const obj = { default: translateSeconds };
  let tmp3 = obj;
} else {
  tmp3 = translateSeconds;
}
if (!module_4002) {
  const obj2 = { default: module_4002 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4002;
}
if (!module_4003) {
  const obj3 = { default: module_4003 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4003;
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

export default { code: "lt", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;