// === Module 4409: ? ===

// Module 4409
import buildMatchFn from "buildMatchFn" /* 2126 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2127 */;

let items;
let items1;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
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
const date = { ordinalNumber: obj3.default(obj5), era: obj.default(obj6), quarter: obj.default(obj8), month: obj.default(obj10), day: obj.default(obj12), dayPeriod: obj.default(obj14) };
obj6 = { matchPatterns: { narrow: /^(tcn|scn)/i, abbreviated: /^(trước CN|sau CN)/i, wide: /^(trước Công Nguyên|sau Công Nguyên)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items };
items = [/^t/i, /^s/i];
obj8 = {
  matchPatterns: { narrow: /^([1234]|i{1,3}v?)/i, abbreviated: /^q([1234]|i{1,3}v?)/i, wide: /^quý ([1234]|i{1,3}v?)/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items1 };
items1 = [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i];
obj10 = { matchPatterns: { narrow: /^(0?[2-9]|10|11|12|0?1)/i, abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i, wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "wide" };
obj11 = { narrow: items2, abbreviated: items3, wide: items4 };
items2 = [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/];
items3 = [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i];
items4 = [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i];
obj12 = { matchPatterns: { narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i, short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i, abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i, wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "wide" };
obj13 = { narrow: items5, short: items6, abbreviated: items7, wide: items8 };
items5 = [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i];
items6 = [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i];
items7 = [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i];
items8 = [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i];
obj14 = { matchPatterns: { narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i, abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i, wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i }, defaultMatchWidth: "wide", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^(a|sa)/i, pm: /^(p|ch[^i]*)/i, midnight: /nửa đêm/i, noon: /trưa/i, morning: /sáng/i, afternoon: /chiều/i, evening: /tối/i, night: /^đêm/i } };
obj5 = {
  matchPattern: /^(\d+)/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;