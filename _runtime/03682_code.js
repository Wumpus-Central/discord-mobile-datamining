// === Module 3682: code ===

// Module 3682 (code)
import formatDistance from "formatDistance" /* 2028 */;
import formatRelative from "formatRelative" /* 2031 */;
import buildLocalizeFn from "buildLocalizeFn" /* 2032 */;
import module_2034 from "module_2034" /* 2034 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3683 */;

if (!formatDistance) {
  let obj = { default: null };
  obj[0] = formatDistance;
  let tmp3 = obj;
} else {
  tmp3 = formatDistance;
}
if (!formatRelative) {
  obj = { default: null };
  obj[0] = formatRelative;
  let tmp5 = obj;
} else {
  tmp5 = formatRelative;
}
if (!buildLocalizeFn) {
  obj = { default: null };
  obj[0] = buildLocalizeFn;
  let tmp7 = obj;
} else {
  tmp7 = buildLocalizeFn;
}
if (!module_2034) {
  const obj1 = { default: null };
  obj1[0] = module_2034;
  let tmp9 = obj1;
} else {
  tmp9 = module_2034;
}
if (!buildFormatLongFn) {
  const obj2 = { default: null };
  obj2[0] = buildFormatLongFn;
  let tmp11 = obj2;
} else {
  tmp11 = buildFormatLongFn;
}

export default { code: "en-GB", formatDistance: tmp3.default, formatLong: tmp11.default, formatRelative: tmp5.default, localize: tmp7.default, match: tmp9.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;