// _runtime/metro/04051__.js
import buildMatchFn from "../02126_buildMatchFn.js";
import buildMatchPatternFn from "../02127_buildMatchPatternFn.js";

let items;
let items1;
let items2;
let items3;
let items4;
let items5;
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
  matchPatterns: { narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?Chr\.?)/, wide: /^((voor|na) Christus)/ },
  defaultMatchWidth: "wide",
  parsePatterns: obj7,
  defaultParseWidth: "any",
};
obj7 = { any: items };
items = [/^v/, /^n/];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e kwartaal/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  },
};
obj9 = { any: items1 };
items1 = [/1/i, /2/i, /3/i, /4/i];
obj10 = {
  matchPatterns: {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
    wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj11,
  defaultParseWidth: "any",
};
obj11 = { narrow: items2, any: items3 };
items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
items3 = [
  /^jan/i,
  /^feb/i,
  /^m(r|a)/i,
  /^apr/i,
  /^mei/i,
  /^jun/i,
  /^jul/i,
  /^aug/i,
  /^sep/i,
  /^okt/i,
  /^nov/i,
  /^dec/i,
];
obj12 = {
  matchPatterns: {
    narrow: /^[zmdwv]/i,
    short: /^(zo|ma|di|wo|do|vr|za)/i,
    abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
    wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj13,
  defaultParseWidth: "any",
};
obj13 = { narrow: items4, any: items5 };
items4 = [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i];
items5 = [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i];
obj14 = {
  matchPatterns: { any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i },
  defaultMatchWidth: "any",
  parsePatterns: obj15,
  defaultParseWidth: "any",
};
obj15 = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^middernacht/i,
    noon: /^het middaguur/i,
    morning: /ochtend/i,
    afternoon: /middag/i,
    evening: /avond/i,
    night: /nacht/i,
  },
};
obj5 = {
  matchPattern: /^(\d+)e?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  },
};

export default date;
