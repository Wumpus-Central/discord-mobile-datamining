// _runtime/metro/03707__.js
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
    matchPattern: /^(\d+)\./i,
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
obj2 = { matchPatterns: { narrow: /^(pr\.n\.e\.|AD)/i, abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i, wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/^pr/i, /^(po|nova)/i];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?kv\.?/i, wide: /^[1234]\. kvartal/i },
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
const obj6 = { matchPatterns: { narrow: /^(10|11|12|[123456789])\./i, abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i, wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "wide" };
const obj7 = { narrow: null, abbreviated: null, wide: null };
const items2 = [/1/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i, /8/i, /9/i, /10/i, /11/i, /12/i];
obj7.narrow = items2;
const items3 = [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i];
obj7.abbreviated = items3;
const items4 = [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i];
obj7.wide = items4;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[npusčc]/i, short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i, abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i, wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null };
const items5 = [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i];
obj9.narrow = items5;
const items6 = [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i];
obj9.any = items6;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^pono/i, noon: /^pod/i, morning: /jutro/i, afternoon: /(poslije\s|po)+podne/i, evening: /(navece|naveče)/i, night: /(nocu|noću)/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;