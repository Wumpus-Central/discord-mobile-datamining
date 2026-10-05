// _runtime/metro/04063__.js
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
    narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
    abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
    wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj7,
  defaultParseWidth: "any",
};
obj7 = { any: items };
items = [/^p/i, /^n/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^(I|II|III|IV)\s*kw\.?/i, wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  },
};
obj9 = { narrow: items1, any: items2 };
items1 = [/1/i, /2/i, /3/i, /4/i];
items2 = [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i];
obj10 = {
  matchPatterns: {
    narrow: /^[slmkcwpg]/i,
    abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
    wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj11,
  defaultParseWidth: "any",
};
obj11 = { narrow: items3, any: items4 };
items3 = [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i];
items4 = [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i];
obj12 = {
  matchPatterns: {
    narrow: /^[npwścs]/i,
    short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
    abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
    wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj13,
  defaultParseWidth: "any",
};
obj13 = { narrow: items5, abbreviated: items6, any: items7 };
items5 = [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i];
items6 = [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i];
items7 = [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i];
obj14 = {
  matchPatterns: {
    narrow:
      /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
    any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i,
  },
  defaultMatchWidth: "any",
  parsePatterns: obj15,
  defaultParseWidth: "any",
};
obj15 = {
  narrow: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i,
  },
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i,
  },
};
obj5 = {
  matchPattern: /^(\d+)?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  },
};

export default date;
