// _runtime/03732_code.js
import translateSeconds from "03733_translateSeconds.js";
import buildFormatLongFn from "03734_buildFormatLongFn.js";
import formatRelative from "03735_formatRelative.js";
import buildLocalizeFn from "03736_buildLocalizeFn.js";
import 03737__ from "metro/03737__.js";

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
if (!module_3737) {
  const obj2 = { default: null };
  obj2[0] = module_3737;
  let tmp11 = obj2;
} else {
  tmp11 = module_3737;
}

export default { code: "lt", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;