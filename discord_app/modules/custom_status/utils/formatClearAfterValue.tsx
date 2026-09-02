// discord_app/modules/custom_status/utils/formatClearAfterValue.tsx
import set from "../../../../_runtime/00002_set.js";
import setDefault from "../../../utils/Durations.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import resetCache from "../../../utils/DateUtils.tsx";
import StatusTypes from "../Constants.tsx";

const ClearAfterValues = StatusTypes.ClearAfterValues;
let result = set.fileFinishedImporting("modules/custom_status/utils/formatClearAfterValue.tsx");

export default function formatClearAfterValue(arg0) {
  if (ClearAfterValues.TODAY === arg0) {
    const _Date10 = Date;
    const sum = Date.now() + setDefault.Millis.DAY;
    const _Date11 = Date;
    const date = new Date();
    const _Date12 = Date;
    const date1 = new Date(sum);
    const obj8 = resetCache;
    const intl5 = getSystemLocale.intl;
    if (isSameDayResult) {
      const data8 = intl5.data;
      let formatTimeResult = data8.formatTime(sum, { format: "short" });
    } else {
      let obj = { time: null };
      const data7 = tmp61(1233).intl.data;
      obj[0] = data7.formatTime(sum, { format: "short" });
      formatTimeResult = intl5.formatToPlainString(tmp61(1233).t.bI7n9i, obj);
    }
    return formatTimeResult;
  } else if (tmp.HOURS_4 === arg0) {
    const _Date7 = Date;
    const result = 4 * setDefault.Millis.HOUR;
    const sum1 = Date.now() + result;
    const _Date8 = Date;
    const date2 = new Date();
    const _Date9 = Date;
    const date3 = new Date(sum1);
    const obj6 = resetCache;
    const intl4 = getSystemLocale.intl;
    if (isSameDayResult1) {
      const data6 = intl4.data;
      let formatTimeResult1 = data6.formatTime(sum1, { format: "short" });
    } else {
      obj = { time: null };
      const data5 = tmp45(1233).intl.data;
      obj[0] = data5.formatTime(sum1, { format: "short" });
      formatTimeResult1 = intl4.formatToPlainString(tmp45(1233).t.bI7n9i, obj);
    }
    return formatTimeResult1;
  } else if (tmp.HOURS_1 === arg0) {
    const _Date4 = Date;
    const sum2 = Date.now() + setDefault.Millis.HOUR;
    const _Date5 = Date;
    const date4 = new Date();
    const _Date6 = Date;
    const date5 = new Date(sum2);
    const obj4 = resetCache;
    const intl3 = getSystemLocale.intl;
    if (isSameDayResult2) {
      const data4 = intl3.data;
      let formatTimeResult2 = data4.formatTime(sum2, { format: "short" });
    } else {
      obj1 = { time: null };
      const data3 = tmp28(1233).intl.data;
      obj1[0] = data3.formatTime(sum2, { format: "short" });
      formatTimeResult2 = intl3.formatToPlainString(tmp28(1233).t.bI7n9i, obj1);
    }
    return formatTimeResult2;
  } else if (tmp.MINUTES_30 === arg0) {
    const _Date = Date;
    const result1 = 30 * setDefault.Millis.MINUTE;
    const sum3 = Date.now() + result1;
    obj1 = resetCache;
    const _Date2 = Date;
    const date6 = new Date();
    const _Date3 = Date;
    const date7 = new Date(sum3);
    const intl2 = getSystemLocale.intl;
    if (isSameDayResult3) {
      const data2 = intl2.data;
      let formatTimeResult3 = data2.formatTime(sum3, { format: "short" });
    } else {
      const obj2 = { time: null };
      const data = tmp12(1233).intl.data;
      obj2[0] = data.formatTime(sum3, { format: "short" });
      formatTimeResult3 = intl2.formatToPlainString(tmp12(1233).t.bI7n9i, obj2);
    }
    return formatTimeResult3;
  } else if (tmp.DONT_CLEAR === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.bRn8cq);
  } else {
    obj = isDiscordFrontendDevelopment;
    obj.assertNever(arg0);
  }
}
