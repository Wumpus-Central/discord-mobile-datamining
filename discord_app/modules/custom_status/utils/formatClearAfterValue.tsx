// === Module 11203: formatClearAfterValue ===

// Module 11203 (formatClearAfterValue)
import DurationsDefault from "Durations" /* 1090 */;
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import DateUtils from "DateUtils" /* 4242 */;
import Constants from "Constants" /* 11115 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants.ClearAfterValues;
let result = size.fileFinishedImporting("modules/custom_status/utils/formatClearAfterValue.tsx");

export default function formatClearAfterValue(arg0) {
  if (ClearAfterValues.TODAY === arg0) {
    const _Date10 = Date;
    const sum = Date.now() + DurationsDefault.Millis.DAY;
    const _Date11 = Date;
    const date = new Date();
    const _Date12 = Date;
    const date1 = new Date(sum);
    const intl5 = util.intl;
    if (isSameDayResult) {
      const data8 = intl5.data;
      let formatTimeResult = data8.formatTime(sum, { format: "short" });
    } else {
      let obj = { time: null };
      const data7 = tmp61(1114).intl.data;
      obj.time = data7.formatTime(sum, { format: "short" });
      formatTimeResult = intl5.formatToPlainString(tmp61(1114).t.bI7n9i, obj);
    }
    return formatTimeResult;
  } else if (tmp.HOURS_4 === arg0) {
    const _Date7 = Date;
    const result = 4 * DurationsDefault.Millis.HOUR;
    const sum1 = Date.now() + result;
    const _Date8 = Date;
    const date2 = new Date();
    const _Date9 = Date;
    const date3 = new Date(sum1);
    const intl4 = util.intl;
    if (isSameDayResult1) {
      const data6 = intl4.data;
      let formatTimeResult1 = data6.formatTime(sum1, { format: "short" });
    } else {
      obj = { time: null };
      const data5 = tmp45(1114).intl.data;
      obj.time = data5.formatTime(sum1, { format: "short" });
      formatTimeResult1 = intl4.formatToPlainString(tmp45(1114).t.bI7n9i, obj);
    }
    return formatTimeResult1;
  } else if (tmp.HOURS_1 === arg0) {
    const _Date4 = Date;
    const sum2 = Date.now() + DurationsDefault.Millis.HOUR;
    const _Date5 = Date;
    const date4 = new Date();
    const _Date6 = Date;
    const date5 = new Date(sum2);
    const intl3 = util.intl;
    if (isSameDayResult2) {
      const data4 = intl3.data;
      let formatTimeResult2 = data4.formatTime(sum2, { format: "short" });
    } else {
      let obj1 = { time: null };
      const data3 = tmp28(1114).intl.data;
      obj1.time = data3.formatTime(sum2, { format: "short" });
      formatTimeResult2 = intl3.formatToPlainString(tmp28(1114).t.bI7n9i, obj1);
    }
    return formatTimeResult2;
  } else if (tmp.MINUTES_30 === arg0) {
    const _Date = Date;
    const result1 = 30 * DurationsDefault.Millis.MINUTE;
    const sum3 = Date.now() + result1;
    obj1 = DateUtils;
    const _Date2 = Date;
    const date6 = new Date();
    const _Date3 = Date;
    const date7 = new Date(sum3);
    const intl2 = util.intl;
    if (isSameDayResult3) {
      const data2 = intl2.data;
      let formatTimeResult3 = data2.formatTime(sum3, { format: "short" });
    } else {
      const obj2 = { time: null };
      const data = tmp12(1114).intl.data;
      obj2.time = data.formatTime(sum3, { format: "short" });
      formatTimeResult3 = intl2.formatToPlainString(tmp12(1114).t.bI7n9i, obj2);
    }
    return formatTimeResult3;
  } else if (tmp.DONT_CLEAR === arg0) {
    const intl = util.intl;
    return intl.string(util.t.bRn8cq);
  } else {
    obj = GlobalUtils;
    obj.assertNever(arg0);
  }
};