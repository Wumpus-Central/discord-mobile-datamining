// === Module 3557: code ===

// Module 3557 (code)
import translateSeconds from "translateSeconds" /* 3558 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3559 */;
import formatRelative from "formatRelative" /* 3560 */;
import buildLocalizeFn from "buildLocalizeFn" /* 3561 */;
import module_3562 from "module_3562" /* 3562 */;

if (!translateSeconds) {
  let obj = { default: null };
  obj[0] = translateSeconds;
  let tmp3 = obj;
} else {
  tmp3 = translateSeconds;
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
if (!module_3562) {
  const obj2 = { default: null };
  obj2[0] = module_3562;
  let tmp11 = obj2;
} else {
  tmp11 = module_3562;
}

export default { code: "lt", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;