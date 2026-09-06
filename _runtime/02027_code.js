// _runtime/02027_code.js
import formatDistance from "02028_formatDistance.js";
import buildFormatLongFn from "02029_buildFormatLongFn.js";
import formatRelative from "02031_formatRelative.js";
import buildLocalizeFn from "02032_buildLocalizeFn.js";
import 02034__ from "metro/02034__.js";

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
if (!module_2034) {
  const obj2 = { default: null };
  obj2[0] = module_2034;
  let tmp11 = obj2;
} else {
  tmp11 = module_2034;
}

export default { code: "en-US", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };
export default exports.default;