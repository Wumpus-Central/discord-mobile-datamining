// === Module 10994: formatClearAfterOption ===

// Module 10994 (formatClearAfterOption)
import DurationsDefault from "Durations" /* 1102 */;
import intl10 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import DateUtils from "DateUtils" /* 4558 */;
import Constants from "Constants" /* 10843 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants.ClearAfterValues;
let result = size.fileFinishedImporting("modules/custom_status/utils/formatClearAfterOption.tsx");

export default function formatClearAfterOption(type) {
  let data;
  let data3;
  let data5;
  let data7;
  if (ClearAfterValues.TODAY === type) {
    let formatTimeResult;
    const intl8 = intl10.intl;
    const _Date10 = Date;
    const formatToPlainStringResult = intl8.formatToPlainString(intl10.t.Rea2gR, { hours: 24 });
    const sum = Date.now() + DurationsDefault.Millis.DAY;
    const _Date11 = Date;
    const self13 = this;
    const self14 = this;
    const isSameDay4 = DateUtils.isSameDay;
    DateUtils;
    const _Date12 = Date;
    const self15 = this;
    const self16 = this;
    const date = new Date();
    const date1 = new Date(sum);
    const isSameDay4Result = isSameDay4(date, date1);
    const intl9 = intl10.intl;
    if (isSameDay4Result) {
      const data8 = intl9.data;
      formatTimeResult = data8.formatTime(sum, { format: "short" });
    } else {
      const formatToPlainString4 = intl9.formatToPlainString;
      const obj2 = { time: data7.formatTime(sum, { format: "short" }) };
      const DN91Jz4 = intl10.t.DN91Jz;
      data7 = intl10.intl.data;
      formatTimeResult = formatToPlainString4(DN91Jz4, obj2);
    }
    const _HermesInternal4 = HermesInternal;
    return "" + formatToPlainStringResult + " (" + formatTimeResult + ")";
  } else if (ClearAfterValues.HOURS_4 === type) {
    let formatTimeResult1;
    const intl6 = intl10.intl;
    const _Date7 = Date;
    const formatToPlainStringResult1 = intl6.formatToPlainString(intl10.t.Rea2gR, { hours: 4 });
    const result = 4 * DurationsDefault.Millis.HOUR;
    const sum1 = Date.now() + result;
    const _Date8 = Date;
    const self9 = this;
    const self10 = this;
    const isSameDay3 = DateUtils.isSameDay;
    DateUtils;
    const _Date9 = Date;
    const self11 = this;
    const self12 = this;
    const date2 = new Date();
    const date3 = new Date(sum1);
    const isSameDay3Result = isSameDay3(date2, date3);
    const intl7 = intl10.intl;
    if (isSameDay3Result) {
      const data6 = intl7.data;
      formatTimeResult1 = data6.formatTime(sum1, { format: "short" });
    } else {
      const formatToPlainString3 = intl7.formatToPlainString;
      const obj3 = { time: data5.formatTime(sum1, { format: "short" }) };
      const DN91Jz3 = intl10.t.DN91Jz;
      data5 = intl10.intl.data;
      formatTimeResult1 = formatToPlainString3(DN91Jz3, obj3);
    }
    const _HermesInternal3 = HermesInternal;
    return "" + formatToPlainStringResult1 + " (" + formatTimeResult1 + ")";
  } else if (ClearAfterValues.HOURS_1 === type) {
    let formatTimeResult2;
    const intl4 = intl10.intl;
    const _Date4 = Date;
    const formatToPlainStringResult2 = intl4.formatToPlainString(intl10.t.Rea2gR, { hours: 1 });
    const sum2 = Date.now() + DurationsDefault.Millis.HOUR;
    const _Date5 = Date;
    const self5 = this;
    const self6 = this;
    const isSameDay2 = DateUtils.isSameDay;
    DateUtils;
    const _Date6 = Date;
    const self7 = this;
    const self8 = this;
    const date4 = new Date();
    const date5 = new Date(sum2);
    const isSameDay2Result = isSameDay2(date4, date5);
    const intl5 = intl10.intl;
    if (isSameDay2Result) {
      const data4 = intl5.data;
      formatTimeResult2 = data4.formatTime(sum2, { format: "short" });
    } else {
      const formatToPlainString2 = intl5.formatToPlainString;
      const obj4 = { time: data3.formatTime(sum2, { format: "short" }) };
      const DN91Jz2 = intl10.t.DN91Jz;
      data3 = intl10.intl.data;
      formatTimeResult2 = formatToPlainString2(DN91Jz2, obj4);
    }
    const _HermesInternal2 = HermesInternal;
    return "" + formatToPlainStringResult2 + " (" + formatTimeResult2 + ")";
  } else if (ClearAfterValues.MINUTES_30 === type) {
    let formatTimeResult3;
    const intl2 = intl10.intl;
    const _Date = Date;
    const formatToPlainStringResult3 = intl2.formatToPlainString(intl10.t.TS3eJb, { minutes: 30 });
    const result1 = 30 * DurationsDefault.Millis.MINUTE;
    const sum3 = Date.now() + result1;
    const _Date2 = Date;
    const self = this;
    const self2 = this;
    const isSameDay = DateUtils.isSameDay;
    DateUtils;
    const _Date3 = Date;
    const self3 = this;
    const self4 = this;
    const date6 = new Date();
    const date7 = new Date(sum3);
    const isSameDayResult = isSameDay(date6, date7);
    const intl3 = intl10.intl;
    if (isSameDayResult) {
      const data2 = intl3.data;
      formatTimeResult3 = data2.formatTime(sum3, { format: "short" });
    } else {
      const formatToPlainString = intl3.formatToPlainString;
      const obj5 = { time: data.formatTime(sum3, { format: "short" }) };
      const DN91Jz = intl10.t.DN91Jz;
      data = intl10.intl.data;
      formatTimeResult3 = formatToPlainString(DN91Jz, obj5);
    }
    const _HermesInternal = HermesInternal;
    return "" + formatToPlainStringResult3 + " (" + formatTimeResult3 + ")";
  } else if (ClearAfterValues.DONT_CLEAR === type) {
    const intl = intl10.intl;
    return intl.string(intl10.t.bRn8cq);
  } else {
    const obj = GlobalUtils;
    obj.assertNever(type);
  }
};