// _runtime/metro/03833__.js
import 02036__ from "02036__.js";
import 02037__ from "02037__.js";

if (!module_2036) {
  const obj2 = { default: module_2036 };
  let obj = obj2;
} else {
  obj = module_2036;
}
if (!module_2037) {
  const obj4 = { default: module_2037 };
  let obj3 = obj4;
} else {
  obj3 = module_2037;
}
const date = {
  ordinalNumber: obj3.default({
    matchPattern: /^(\d+)?/i,
    parsePattern: /\d+/i,
    valueCallback(match) {
      return parseInt(match, 10);
    }
  }),
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
const obj6 = { matchPatterns: { narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i, abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i, wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items = [/^p/i, /^n/i];
obj7.any = items;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^(I|II|III|IV)\s*kw\.?/i, wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { narrow: null, any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj9.narrow = items1;
const items2 = [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i];
obj9.any = items2;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^[slmkcwpg]/i, abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i, wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { narrow: null, any: null };
const items3 = [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i];
obj11.narrow = items3;
const items4 = [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i];
obj11.any = items4;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^[npwścs]/i, short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i, abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i, wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { narrow: null, abbreviated: null, any: null };
const items5 = [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i];
obj13.narrow = items5;
const items6 = [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i];
obj13.abbreviated = items6;
const items7 = [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i];
obj13.any = items7;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i, any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i }, defaultMatchWidth: "any", parsePatterns: { narrow: { am: /^a$/i, pm: /^p$/i, midnight: /pó(ł|l)n/i, noon: /po(ł|l)/i, morning: /rano/i, afternoon: /po\s*po(ł|l)/i, evening: /wiecz/i, night: /noc/i }, any: { am: /^am/i, pm: /^pm/i, midnight: /pó(ł|l)n/i, noon: /po(ł|l)/i, morning: /rano/i, afternoon: /po\s*po(ł|l)/i, evening: /wiecz/i, night: /noc/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;