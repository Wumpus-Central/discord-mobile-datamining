// === Module 3484: code ===

// Module 3484 (code)
import formatDistance from "formatDistance" /* 3485 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3486 */;
import formatRelative from "formatRelative" /* 3487 */;
import buildLocalizeFn from "buildLocalizeFn" /* 3488 */;
import module_3489 from "module_3489" /* 3489 */;

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
if (!module_3489) {
  const obj2 = { default: null };
  obj2[0] = module_3489;
  let tmp11 = obj2;
} else {
  tmp11 = module_3489;
}

export default { code: "cs", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;