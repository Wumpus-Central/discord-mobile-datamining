// === Module 1997: code ===

// Module 1997 (code)
import formatDistance from "formatDistance" /* 1998 */;
import buildFormatLongFn from "buildFormatLongFn" /* 1999 */;
import formatRelative from "formatRelative" /* 2001 */;
import buildLocalizeFn from "buildLocalizeFn" /* 2002 */;
import module_2004 from "module_2004" /* 2004 */;

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
if (!module_2004) {
  const obj2 = { default: null };
  obj2[0] = module_2004;
  let tmp11 = obj2;
} else {
  tmp11 = module_2004;
}

export default { code: "en-US", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };
export default exports.default;