// _runtime/metro/03767__.js
import 02035__ from "02035__.js";
import 02036__ from "02036__.js";

if (!module_2035) {
  let obj = { default: module_2035 };
} else {
  obj = module_2035;
}
if (!module_2036) {
  obj = { default: module_2036 };
  let obj2 = obj;
} else {
  obj2 = module_2036;
}
const date = {
  ordinalNumber: obj2.default({
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
obj2 = { matchPatterns: { narrow: /^(Î|D)/i, abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i, wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null, wide: null };
const items = [/^ÎC/i, /^DC/i];
obj3.any = items;
const items1 = [/^(Înainte de Cristos|Înaintea erei noastre)/i, /^(După Cristos|Era noastră)/i];
obj3.wide = items1;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^trimestrul [1234]/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { any: null };
const items2 = [/1/i, /2/i, /3/i, /4/i];
obj5.any = items2;
obj4.parsePatterns = obj5;
date.quarter = obj.default(obj4);
const obj6 = { matchPatterns: { narrow: /^[ifmaasond]/i, abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i, wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items3 = [/^i/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj7.narrow = items3;
const items4 = [/^ia/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^iun/i, /^iul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj7.any = items4;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[dlmjvs]/i, short: /^(d|l|ma|mi|j|v|s)/i, abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i, wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null };
const items5 = [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i];
obj9.narrow = items5;
const items6 = [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i];
obj9.any = items6;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i, any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /amiaza/i, morning: /dimineaţa/i, afternoon: /după-amiaza/i, evening: /seara/i, night: /noaptea/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;