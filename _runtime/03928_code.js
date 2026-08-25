// === Module 3928: code ===

// Module 3928 (code)
import formatDistance from "formatDistance" /* 3929 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3930 */;
import checkWeek from "checkWeek" /* 3931 */;
import buildLocalizeFn from "buildLocalizeFn" /* 3932 */;
import module_3933 from "module_3933" /* 3933 */;

if (!formatDistance) {
  let obj = { default: null };
  obj[0] = formatDistance;
  let tmp3 = obj;
} else {
  tmp3 = formatDistance;
}
if (!buildFormatLongFn) {
  obj = { default: null };
  obj[0] = buildFormatLongFn;
  let tmp5 = obj;
} else {
  tmp5 = buildFormatLongFn;
}
if (!checkWeek) {
  obj = { default: null };
  obj[0] = checkWeek;
  let tmp7 = obj;
} else {
  tmp7 = checkWeek;
}
if (!buildLocalizeFn) {
  const obj1 = { default: null };
  obj1[0] = buildLocalizeFn;
  let tmp9 = obj1;
} else {
  tmp9 = buildLocalizeFn;
}
if (!module_3933) {
  const obj2 = { default: null };
  obj2[0] = module_3933;
  let tmp11 = obj2;
} else {
  tmp11 = module_3933;
}

export default { code: "zh-CN", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;