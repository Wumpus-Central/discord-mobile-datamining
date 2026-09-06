// _runtime/metro/03773__.js
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
    matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
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
obj2 = { matchPatterns: { narrow: /^((до )?н\.?\s?э\.?)/i, abbreviated: /^((до )?н\.?\s?э\.?)/i, wide: /^(до нашей эры|нашей эры|наша эра)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/^д/i, /^н/i];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i, wide: /^[1234](-?[ыои]?й?)? квартал/i },
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
const obj6 = { matchPatterns: { narrow: /^[яфмаисонд]/i, abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i, wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items2 = [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i];
obj7.narrow = items2;
const items3 = [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i];
obj7.any = items3;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[впсч]/i, short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i, abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i, wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null };
const items4 = [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i];
obj9.narrow = items4;
const items5 = [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i];
obj9.any = items5;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i, abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i, wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i }, defaultMatchWidth: "wide", parsePatterns: { any: { am: /^дп/i, pm: /^пп/i, midnight: /^полн/i, noon: /^полд/i, morning: /^у/i, afternoon: /^д[ен]/i, evening: /^в/i, night: /^н/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;