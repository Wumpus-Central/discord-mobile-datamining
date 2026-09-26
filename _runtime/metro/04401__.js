// _runtime/metro/04401__.js
if (Intl.ListFormat) {
  const _Intl = Intl;
  if (typeof Intl.ListFormat.__addLocaleData === "function") {
    const _Intl2 = Intl;
    const obj2 = { data: null, locale: "it" };
    const obj3 = { conjunction: null, disjunction: null, unit: null };
    const obj4 = {
      long: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
      narrow: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
      short: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
    };
    obj3.conjunction = obj4;
    const obj5 = {
      long: { end: "{0} o {1}", middle: "{0}, {1}", pair: "{0} o {1}", start: "{0}, {1}" },
      narrow: { end: "{0} o {1}", middle: "{0}, {1}", pair: "{0} o {1}", start: "{0}, {1}" },
      short: { end: "{0} o {1}", middle: "{0}, {1}", pair: "{0} o {1}", start: "{0}, {1}" },
    };
    obj3.disjunction = obj5;
    const obj6 = {
      long: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
      narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
      short: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
    };
    obj3.unit = obj6;
    obj2.data = obj3;
    ListFormat.__addLocaleData(obj2);
  }
}
let prop = globalThis.__FORMATJS_LISTFORMAT_DATA__;
if (!prop) {
  prop = [];
}
globalThis.__FORMATJS_LISTFORMAT_DATA__ = prop;
const obj = {
  data: {
    conjunction: {
      long: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
      narrow: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
      short: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
    },
    disjunction: {
      long: { end: "{0} o {1}", middle: "{0}, {1}", pair: "{0} o {1}", start: "{0}, {1}" },
      narrow: { end: "{0} o {1}", middle: "{0}, {1}", pair: "{0} o {1}", start: "{0}, {1}" },
      short: { end: "{0} o {1}", middle: "{0}, {1}", pair: "{0} o {1}", start: "{0}, {1}" },
    },
    unit: {
      long: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
      narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
      short: { end: "{0} e {1}", middle: "{0}, {1}", pair: "{0} e {1}", start: "{0}, {1}" },
    },
  },
  locale: "it",
};
prop.push(obj);
