// === Module 4099: ? ===

// Module 4099
import buildMatchFn from "buildMatchFn" /* 2126 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2127 */;

let items;
let items1;
let items2;
let items3;
let items4;
let items5;
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
obj6 = { matchPatterns: { narrow: /^([bB]|[aA]|คศ)/i, abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i, wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items };
items = [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^ไตรมาส(ที่)? ?[1234]/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items1 };
items1 = [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i];
obj10 = { matchPatterns: { narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i, abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i, wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { wide: items2, any: items3 };
items2 = [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i];
items3 = [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i];
obj12 = { matchPatterns: { narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i, short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i, abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i, wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { wide: items4, any: items5 };
items4 = [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i];
items5 = [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i];
obj14 = { matchPatterns: { any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^ก่อนเที่ยง/i, pm: /^หลังเที่ยง/i, midnight: /^เที่ยงคืน/i, noon: /^เที่ยง/i, morning: /เช้า/i, afternoon: /บ่าย/i, evening: /เย็น/i, night: /กลางคืน/i } };
obj5 = {
  matchPattern: /^\d+/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;