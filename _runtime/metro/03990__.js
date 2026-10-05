// _runtime/metro/03990__.js
import formatDistance from "../02119_formatDistance.js";
import formatRelative from "../02122_formatRelative.js";
import date_mod from "02123__.js";
import date_mod2 from "02125__.js";
import buildFormatLongFn from "../03991_buildFormatLongFn.js";

let tmp11;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
if (!formatDistance) {
  tmp3 = { default: formatDistance };
  const obj = { default: formatDistance };
} else {
  tmp3 = formatDistance;
}
if (!formatRelative) {
  tmp5 = { default: formatRelative };
  const obj2 = { default: formatRelative };
} else {
  tmp5 = formatRelative;
}
let date = date_mod2;
if (!date) {
  tmp7 = { default: date };
  const obj3 = { default: date };
} else {
  tmp7 = date;
}
date = date_mod2;
if (!date) {
  tmp9 = { default: date };
  const obj4 = { default: date };
} else {
  tmp9 = date;
}
if (!buildFormatLongFn) {
  tmp11 = { default: buildFormatLongFn };
  const obj5 = { default: buildFormatLongFn };
} else {
  tmp11 = buildFormatLongFn;
}

export default {
  code: "en-GB",
  formatDistance: tmp3.default,
  formatLong: tmp11.default,
  formatRelative: tmp5.default,
  localize: tmp7.default,
  match: tmp9.default,
  options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
