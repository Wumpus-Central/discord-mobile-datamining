// _runtime/metro/04051__.js
import buildMatchFn from "../02126_buildMatchFn.js";
import buildMatchPatternFn from "../02127_buildMatchPatternFn.js";

let items;
let items1;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let obj;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj3;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
if (!buildMatchFn) {
  obj = { default: buildMatchFn };
  const obj2 = { default: buildMatchFn };
} else {
  obj = buildMatchFn;
}
if (!buildMatchPatternFn) {
  obj3 = { default: buildMatchPatternFn };
  const obj4 = { default: buildMatchPatternFn };
} else {
  obj3 = buildMatchPatternFn;
}
const date = {
  ordinalNumber: obj3.default(obj5),
  era: obj.default(obj6),
  quarter: obj.default(obj8),
  month: obj.default(obj10),
  day: obj.default(obj12),
  dayPeriod: obj.default(obj14),
};
obj6 = {
  matchPatterns: {
    narrow: /^p(r|o)\.?\s?(kr\.?|me)/i,
    abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,
    wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj7,
  defaultParseWidth: "any",
};
obj7 = { wide: items, any: items1 };
items = [/prieš/i, /(po|mūsų)/i];
items1 = [/^pr/i, /^(po|m)/i];
obj8 = {
  matchPatterns: {
    narrow: /^([1234])/i,
    abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i,
    wide: /^(I|II|III|IV)\s?ketvirtis/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  },
};
obj9 = { narrow: items2, any: items3 };
items2 = [/1/i, /2/i, /3/i, /4/i];
items3 = [/I$/i, /II$/i, /III/i, /IV/i];
obj10 = {
  matchPatterns: {
    narrow: /^[svkbglr]/i,
    abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,
    wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj11,
  defaultParseWidth: "any",
};
obj11 = { narrow: items4, any: items5 };
items4 = [/^s/i, /^v/i, /^k/i, /^b/i, /^g/i, /^b/i, /^l/i, /^r/i, /^r/i, /^s/i, /^l/i, /^g/i];
items5 = [
  /^saus/i,
  /^vas/i,
  /^kov/i,
  /^bal/i,
  /^geg/i,
  /^birž/i,
  /^liep/i,
  /^rugp/i,
  /^rugs/i,
  /^spal/i,
  /^lapkr/i,
  /^gruod/i,
];
obj12 = {
  matchPatterns: {
    narrow: /^[spatkš]/i,
    short: /^(sk|pr|an|tr|kt|pn|št)/i,
    abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i,
    wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj13,
  defaultParseWidth: "any",
};
obj13 = { narrow: items6, wide: items7, any: items8 };
items6 = [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i];
items7 = [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i];
items8 = [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i];
obj14 = {
  matchPatterns: {
    narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
    any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
  },
  defaultMatchWidth: "any",
  parsePatterns: obj15,
  defaultParseWidth: "any",
};
obj15 = {
  narrow: {
    am: /^pr/i,
    pm: /^pop./i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i,
  },
  any: {
    am: /^pr/i,
    pm: /^popiet$/i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i,
  },
};
obj5 = {
  matchPattern: /^(\d+)(-oji)?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  },
};

export default date;
