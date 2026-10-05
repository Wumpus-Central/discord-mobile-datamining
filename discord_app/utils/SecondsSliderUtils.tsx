// === Module 16987: SecondsSliderUtils ===

// Module 16987 (SecondsSliderUtils)
import intl7 from "intl" /* 1126 */;
import _modDef4461 from "module_4461" /* 4461 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/SecondsSliderUtils.tsx");

export const getSecondsSliderLabel = function getSecondsSliderLabel(rateLimitPerUser, arg1) {
  let intl;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let stringResult = intl;
  if (intl === undefined) {
    intl = intl7.intl;
    stringResult = intl.string(intl7.t.Yl1D84);
  }
  const obj = _modDef4461;
  const time = obj.duration(rateLimitPerUser, "seconds");
  if (time.days() > 0) {
    const intl6 = intl7.intl;
    const formatToPlainString4 = intl6.formatToPlainString;
    const t4 = intl7.t;
    const obj2 = { days: time.days() };
    const tmp13 = flag ? t4.GBLpQ8 : t4["k2UNz+"];
    stringResult = formatToPlainString4(tmp13, obj2);
  } else if (time.hours() > 0) {
    const intl5 = intl7.intl;
    const formatToPlainString3 = intl5.formatToPlainString;
    const t3 = intl7.t;
    const obj3 = { hours: time.hours() };
    const tmp11 = flag ? t3.rhY1Rs : t3.xCjYxK;
    stringResult = formatToPlainString3(tmp11, obj3);
  } else if (time.minutes() > 0) {
    const intl4 = intl7.intl;
    const formatToPlainString2 = intl4.formatToPlainString;
    const t2 = intl7.t;
    const obj4 = { minutes: time.minutes() };
    const tmp9 = flag ? t2["XIGt+W"] : t2.iXLF9W;
    stringResult = formatToPlainString2(tmp9, obj4);
  } else if (rateLimitPerUser > 0) {
    const intl3 = intl7.intl;
    const formatToPlainString = intl3.formatToPlainString;
    const t = intl7.t;
    const obj5 = { seconds: time.seconds() };
    const tmp7 = flag ? t.pyvjRp : t.geSp4K;
    stringResult = formatToPlainString(tmp7, obj5);
  } else if (flag) {
    const intl2 = intl7.intl;
    stringResult = intl2.string(intl7.t.Yl1D84);
  }
  return stringResult;
};