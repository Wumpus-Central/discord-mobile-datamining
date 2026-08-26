// === Module 3622: code ===

// Module 3622 (code)
import translateSeconds from "translateSeconds" /* 3623 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3624 */;
import formatRelative from "formatRelative" /* 3625 */;
import buildLocalizeFn from "buildLocalizeFn" /* 3626 */;
import module_3627 from "module_3627" /* 3627 */;

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
if (!module_3627) {
  const obj2 = { default: null };
  obj2[0] = module_3627;
  let tmp11 = obj2;
} else {
  tmp11 = module_3627;
}

export default { code: "lt", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;