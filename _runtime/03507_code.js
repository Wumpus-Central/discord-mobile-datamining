// _runtime/03507_code.js
import formatDistance from "01998_formatDistance.js";
import formatRelative from "02001_formatRelative.js";
import buildLocalizeFn from "02002_buildLocalizeFn.js";
import 02004__ from "metro/02004__.js";
import buildFormatLongFn from "03508_buildFormatLongFn.js";

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
if (!module_2004) {
  const obj1 = { default: null };
  obj1[0] = module_2004;
  let tmp9 = obj1;
} else {
  tmp9 = module_2004;
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