// === Module 4176: ? ===

// Module 4176
import module_2035 from "module_2035" /* 2035 */;
import module_2036 from "module_2036" /* 2036 */;

if (!module_2035) {
  const obj2 = { default: module_2035 };
  let obj = obj2;
} else {
  obj = module_2035;
}
if (!module_2036) {
  const obj4 = { default: module_2036 };
  let obj3 = obj4;
} else {
  obj3 = module_2036;
}
const date = {
  ordinalNumber: obj3.default({
    matchPattern: /^(\d+)/i,
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
const obj6 = { matchPatterns: { narrow: /^(tcn|scn)/i, abbreviated: /^(trước CN|sau CN)/i, wide: /^(trước Công Nguyên|sau Công Nguyên)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items = [/^t/i, /^s/i];
obj7.any = items;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^([1234]|i{1,3}v?)/i, abbreviated: /^q([1234]|i{1,3}v?)/i, wide: /^quý ([1234]|i{1,3}v?)/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items1 = [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i];
obj9.any = items1;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(0?[2-9]|10|11|12|0?1)/i, abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i, wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "wide" };
const obj11 = { narrow: null, abbreviated: null, wide: null };
const items2 = [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/];
obj11.narrow = items2;
const items3 = [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i];
obj11.abbreviated = items3;
const items4 = [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i];
obj11.wide = items4;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i, short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i, abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i, wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "wide" };
const obj13 = { narrow: null, short: null, abbreviated: null, wide: null };
const items5 = [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i];
obj13.narrow = items5;
const items6 = [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i];
obj13.short = items6;
const items7 = [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i];
obj13.abbreviated = items7;
const items8 = [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i];
obj13.wide = items8;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i, abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i, wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i }, defaultMatchWidth: "wide", parsePatterns: { any: { am: /^(a|sa)/i, pm: /^(p|ch[^i]*)/i, midnight: /nửa đêm/i, noon: /trưa/i, morning: /sáng/i, afternoon: /chiều/i, evening: /tối/i, night: /^đêm/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;