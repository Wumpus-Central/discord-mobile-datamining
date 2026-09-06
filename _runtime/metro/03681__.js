// _runtime/metro/03681__.js
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
    matchPattern: /^(\d+)(ος|η|ο)?/i,
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
obj2 = { matchPatterns: { narrow: /^(πΧ|μΧ)/i, abbreviated: /^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i, wide: /^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/^π/i, /^(μ|κ)/i];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^τ[1234]/i, wide: /^[1234]ο? τρ(ί|ι)μηνο/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj5.any = items1;
obj4.parsePatterns = obj5;
date.quarter = obj.default(obj4);
const obj6 = { matchPatterns: { narrow: /^[ιφμαμιιασονδ]/i, abbreviated: /^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i, wide: /^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items2 = [/^ι/i, /^φ/i, /^μ/i, /^α/i, /^μ/i, /^ι/i, /^ι/i, /^α/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i];
obj7.narrow = items2;
const items3 = [/^ια/i, /^φ/i, /^μ[άα]ρ/i, /^απ/i, /^μ[άα][ιΐ]/i, /^ιο[ύυ]ν/i, /^ιο[ύυ]λ/i, /^α[ύυ]/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i];
obj7.any = items3;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[κδτπσ]/i, short: /^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i, abbreviated: /^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i, wide: /^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null };
const items4 = [/^κ/i, /^δ/i, /^τ/i, /^τ/i, /^π/i, /^π/i, /^σ/i];
obj9.narrow = items4;
const items5 = [/^κ/i, /^δ/i, /^τρ/i, /^τε/i, /^π[εέ]/i, /^π[αά]/i, /^σ/i];
obj9.any = items5;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i, any: /^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^πμ|π\.\s?μ\./i, pm: /^μμ|μ\.\s?μ\./i, midnight: /^μεσάν/i, noon: /^μεσημ(έ|ε)/i, morning: /πρω(ί|ι)/i, afternoon: /απ(ό|ο)γευμα/i, evening: /βρ(ά|α)δυ/i, night: /ν(ύ|υ)χτα/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;