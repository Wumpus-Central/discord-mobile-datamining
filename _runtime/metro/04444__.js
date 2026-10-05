// === Module 4444: ? ===

// Module 4444
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
if (Intl.ListFormat) {
  const _Intl = Intl;
  if (typeof Intl.ListFormat.__addLocaleData === "function") {
    const _Intl2 = Intl;
    const obj2 = { data: obj3, locale: "lt" };
    obj3 = { conjunction: obj4, disjunction: obj5, unit: obj6 };
    obj4 = { long: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" }, narrow: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" }, short: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" } };
    obj5 = { long: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" }, narrow: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" }, short: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" } };
    obj6 = { long: { end: "{0} ir {1}", middle: "{0} {1}", pair: "{0} ir {1}", start: "{0} {1}" }, narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" }, short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" } };
    ListFormat.__addLocaleData(obj2);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
const _globalThis = globalThis;
if (!prop) {
  prop = [];
}
_globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
const obj = { data: obj7, locale: "lt" };
obj7 = { conjunction: { long: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" }, narrow: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" }, short: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" } }, disjunction: { long: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" }, narrow: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" }, short: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" } }, unit: { long: { end: "{0} ir {1}", middle: "{0} {1}", pair: "{0} ir {1}", start: "{0} {1}" }, narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" }, short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" } } };
prop.push(obj);