// === Module 4038: prop ===

// Module 4038 (prop)
if (Intl.ListFormat) {
  const _Intl = Intl;
  if (typeof Intl.ListFormat.__addLocaleData === "function") {
    const _Intl2 = Intl;
    let obj = { data: null, locale: "zh-Hans" };
    obj = { conjunction: null, disjunction: null, unit: null };
    obj = { long: null, narrow: null, short: null };
    obj[0] = { end: "{0}\u548C{1}", middle: "{0}\u3001{1}", pair: "{0}\u548C{1}", start: "{0}\u3001{1}" };
    obj[1] = { end: "{0}\u3001{1}", middle: "{0}\u3001{1}", pair: "{0}\u3001{1}", start: "{0}\u3001{1}" };
    obj[2] = { end: "{0}\u548C{1}", middle: "{0}\u3001{1}", pair: "{0}\u548C{1}", start: "{0}\u3001{1}" };
    obj[0] = obj;
    const obj1 = { long: null, narrow: null, short: null };
    obj1[0] = { end: "{0}\u6216{1}", middle: "{0}\u3001{1}", pair: "{0}\u6216{1}", start: "{0}\u3001{1}" };
    obj1[1] = { end: "{0}\u6216{1}", middle: "{0}\u3001{1}", pair: "{0}\u6216{1}", start: "{0}\u3001{1}" };
    obj1[2] = { end: "{0}\u6216{1}", middle: "{0}\u3001{1}", pair: "{0}\u6216{1}", start: "{0}\u3001{1}" };
    obj[1] = obj1;
    const obj2 = { long: null, narrow: null, short: null };
    obj2[0] = { end: "{0}{1}", middle: "{0}{1}", pair: "{0}{1}", start: "{0}{1}" };
    obj2[1] = { end: "{0}{1}", middle: "{0}{1}", pair: "{0}{1}", start: "{0}{1}" };
    obj2[2] = { end: "{0}{1}", middle: "{0}{1}", pair: "{0}{1}", start: "{0}{1}" };
    obj[2] = obj2;
    obj[0] = obj;
    ListFormat.__addLocaleData(obj);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
prop.push({ data: { conjunction: { long: { end: "{0}\u548C{1}", middle: "{0}\u3001{1}", pair: "{0}\u548C{1}", start: "{0}\u3001{1}" }, narrow: { end: "{0}\u3001{1}", middle: "{0}\u3001{1}", pair: "{0}\u3001{1}", start: "{0}\u3001{1}" }, short: { end: "{0}\u548C{1}", middle: "{0}\u3001{1}", pair: "{0}\u548C{1}", start: "{0}\u3001{1}" } }, disjunction: { long: { end: "{0}\u6216{1}", middle: "{0}\u3001{1}", pair: "{0}\u6216{1}", start: "{0}\u3001{1}" }, narrow: { end: "{0}\u6216{1}", middle: "{0}\u3001{1}", pair: "{0}\u6216{1}", start: "{0}\u3001{1}" }, short: { end: "{0}\u6216{1}", middle: "{0}\u3001{1}", pair: "{0}\u6216{1}", start: "{0}\u3001{1}" } }, unit: { long: { end: "{0}{1}", middle: "{0}{1}", pair: "{0}{1}", start: "{0}{1}" }, narrow: { end: "{0}{1}", middle: "{0}{1}", pair: "{0}{1}", start: "{0}{1}" }, short: { end: "{0}{1}", middle: "{0}{1}", pair: "{0}{1}", start: "{0}{1}" } } }, locale: "zh-Hans" });