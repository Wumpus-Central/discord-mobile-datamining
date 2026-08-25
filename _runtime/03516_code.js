// === Module 3516: code ===

// Module 3516 (code)
import futureSeconds from "futureSeconds" /* 3517 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3518 */;
import formatRelative from "formatRelative" /* 3519 */;
import buildLocalizeFn from "buildLocalizeFn" /* 3520 */;
import module_3521 from "module_3521" /* 3521 */;

if (!futureSeconds) {
  let obj = { default: null };
  obj[0] = futureSeconds;
  let tmp3 = obj;
} else {
  tmp3 = futureSeconds;
}
if (!buildFormatLongFn) {
  obj = { default: null };
  obj[0] = buildFormatLongFn;
  let tmp5 = obj;
} else {
  tmp5 = buildFormatLongFn;
}
if (!formatRelative) {
  obj = { default: null };
  obj[0] = formatRelative;
  let tmp7 = obj;
} else {
  tmp7 = formatRelative;
}
if (!buildLocalizeFn) {
  const obj1 = { default: null };
  obj1[0] = buildLocalizeFn;
  let tmp9 = obj1;
} else {
  tmp9 = buildLocalizeFn;
}
if (!module_3521) {
  const obj2 = { default: null };
  obj2[0] = module_3521;
  let tmp11 = obj2;
} else {
  tmp11 = module_3521;
}

export default { code: "fi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;