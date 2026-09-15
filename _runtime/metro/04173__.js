// _runtime/metro/04173__.js
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
    matchPattern: /^(\d+)(-?(е|й|є|а|я))?/i,
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
const obj6 = { matchPatterns: { narrow: /^((до )?н\.?\s?е\.?)/i, abbreviated: /^((до )?н\.?\s?е\.?)/i, wide: /^(до нашої ери|нашої ери|наша ера)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items = [/^д/i, /^н/i];
obj7.any = items;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234](-?[иі]?й?)? кв.?/i, wide: /^[1234](-?[иі]?й?)? квартал/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj9.any = items1;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^[слбктчвжг]/i, abbreviated: /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i, wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { narrow: null, any: null };
const items2 = [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i];
obj11.narrow = items2;
const items3 = [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i];
obj11.any = items3;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^[нпвсч]/i, short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i, abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i, wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { narrow: null, any: null };
const items4 = [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i];
obj13.narrow = items4;
const items5 = [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i];
obj13.any = items5;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i, abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i, wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i }, defaultMatchWidth: "wide", parsePatterns: { any: { am: /^дп/i, pm: /^пп/i, midnight: /^півн/i, noon: /^пол/i, morning: /^р/i, afternoon: /^д[ен]/i, evening: /^в/i, night: /^н/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;