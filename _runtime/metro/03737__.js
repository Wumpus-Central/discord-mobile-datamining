// _runtime/metro/03737__.js
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
    matchPattern: /^(\d+)(-oji)?/i,
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
obj2 = { matchPatterns: { narrow: /^p(r|o)\.?\s?(kr\.?|me)/i, abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i, wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { wide: null, any: null };
const items = [/prieš/i, /(po|mūsų)/i];
obj3.wide = items;
const items1 = [/^pr/i, /^(po|m)/i];
obj3.any = items1;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^([1234])/i, abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i, wide: /^(I|II|III|IV)\s?ketvirtis/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { narrow: null, any: null };
const items2 = [/1/i, /2/i, /3/i, /4/i];
obj5.narrow = items2;
const items3 = [/I$/i, /II$/i, /III/i, /IV/i];
obj5.any = items3;
obj4.parsePatterns = obj5;
date.quarter = obj.default(obj4);
const obj6 = { matchPatterns: { narrow: /^[svkbglr]/i, abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i, wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items4 = [/^s/i, /^v/i, /^k/i, /^b/i, /^g/i, /^b/i, /^l/i, /^r/i, /^r/i, /^s/i, /^l/i, /^g/i];
obj7.narrow = items4;
const items5 = [/^saus/i, /^vas/i, /^kov/i, /^bal/i, /^geg/i, /^birž/i, /^liep/i, /^rugp/i, /^rugs/i, /^spal/i, /^lapkr/i, /^gruod/i];
obj7.any = items5;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[spatkš]/i, short: /^(sk|pr|an|tr|kt|pn|št)/i, abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i, wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, wide: null, any: null };
const items6 = [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i];
obj9.narrow = items6;
const items7 = [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i];
obj9.wide = items7;
const items8 = [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i];
obj9.any = items8;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i, any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i }, defaultMatchWidth: "any", parsePatterns: { narrow: { am: /^pr/i, pm: /^pop./i, midnight: /^vidurnaktis/i, noon: /^(vidurdienis|perp)/i, morning: /rytas/i, afternoon: /(die|popietė)/i, evening: /vakaras/i, night: /naktis/i }, any: { am: /^pr/i, pm: /^popiet$/i, midnight: /^vidurnaktis/i, noon: /^(vidurdienis|perp)/i, morning: /rytas/i, afternoon: /(die|popietė)/i, evening: /vakaras/i, night: /naktis/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;