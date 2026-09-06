// === Module 4136: ? ===

// Module 4136
if (Intl.ListFormat) {
  const _Intl = Intl;
  if (typeof Intl.ListFormat.__addLocaleData === "function") {
    const _Intl2 = Intl;
    let obj = { data: null, locale: "lt" };
    obj = { conjunction: null, disjunction: null, unit: null };
    const obj1 = { long: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" }, narrow: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" }, short: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" } };
    obj.conjunction = obj1;
    const obj2 = { long: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" }, narrow: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" }, short: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" } };
    obj.disjunction = obj2;
    const obj3 = { long: { end: "{0} ir {1}", middle: "{0} {1}", pair: "{0} ir {1}", start: "{0} {1}" }, narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" }, short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" } };
    obj.unit = obj3;
    obj.data = obj;
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
obj = { data: { conjunction: { long: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" }, narrow: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" }, short: { end: "{0} ir {1}", middle: "{0}, {1}", pair: "{0} ir {1}", start: "{0}, {1}" } }, disjunction: { long: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" }, narrow: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" }, short: { end: "{0} ar {1}", middle: "{0}, {1}", pair: "{0} ar {1}", start: "{0}, {1}" } }, unit: { long: { end: "{0} ir {1}", middle: "{0} {1}", pair: "{0} ir {1}", start: "{0} {1}" }, narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" }, short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" } } }, locale: "lt" };
prop.push(obj);