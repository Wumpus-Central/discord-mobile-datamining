import { getSystemLocale } from "../../../intl/index.native.tsx";
import { resetCache } from "../../../utils/DateUtils.tsx";
import { set } from "../../../utils/Durations.tsx";
import { isDiscordFrontendDevelopment } from "../../../utils/GlobalUtils.tsx";
// discord_app/modules/custom_status/utils/formatClearAfterOption.tsx
import { ClearAfterValues } from "StatusTypes";

let result = require("getSystemLocale").fileFinishedImporting("modules/custom_status/utils/formatClearAfterOption.tsx");

export default function formatClearAfterOption(arg0) {
  if (ClearAfterValues.TODAY === arg0) {
    const intl8 = getSystemLocale /* getSystemLocale */.intl;
    const formatToPlainStringResult = intl8.formatToPlainString(getSystemLocale /* getSystemLocale */.t.Rea2gR, { hours: 24 });
    const _Date10 = Date;
    const sum = Date.now() + set.Millis.DAY;
    const _Date11 = Date;
    const date = new Date();
    const _Date12 = Date;
    const date1 = new Date(sum);
    const obj8 = resetCache /* resetCache */;
    const intl9 = getSystemLocale /* getSystemLocale */.intl;
    if (isSameDayResult) {
      const data8 = intl9.data;
      let formatTimeResult = data8.formatTime(sum, { format: "short" });
    } else {
      let obj = { time: null };
      const data7 = tmp66(1236).intl.data;
      obj[0] = data7.formatTime(sum, { format: "short" });
      formatTimeResult = intl9.formatToPlainString(tmp66(1236).t.DN91Jz, obj);
    }
    const _HermesInternal4 = HermesInternal;
    return "" + formatToPlainStringResult + " (" + formatTimeResult + ")";
  } else if (tmp.HOURS_4 === arg0) {
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    const formatToPlainStringResult1 = intl6.formatToPlainString(getSystemLocale /* getSystemLocale */.t.Rea2gR, { hours: 4 });
    const _Date7 = Date;
    const result = 4 * set.Millis.HOUR;
    const sum1 = Date.now() + result;
    const _Date8 = Date;
    const date2 = new Date();
    const _Date9 = Date;
    const date3 = new Date(sum1);
    const obj6 = resetCache /* resetCache */;
    const intl7 = getSystemLocale /* getSystemLocale */.intl;
    if (isSameDayResult1) {
      const data6 = intl7.data;
      let formatTimeResult1 = data6.formatTime(sum1, { format: "short" });
    } else {
      obj = { time: null };
      const data5 = tmp46(1236).intl.data;
      obj[0] = data5.formatTime(sum1, { format: "short" });
      formatTimeResult1 = intl7.formatToPlainString(tmp46(1236).t.DN91Jz, obj);
    }
    const _HermesInternal3 = HermesInternal;
    return "" + formatToPlainStringResult1 + " (" + formatTimeResult1 + ")";
  } else if (tmp.HOURS_1 === arg0) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    const formatToPlainStringResult2 = intl4.formatToPlainString(getSystemLocale /* getSystemLocale */.t.Rea2gR, { hours: 1 });
    const _Date4 = Date;
    const sum2 = Date.now() + set.Millis.HOUR;
    const _Date5 = Date;
    const date4 = new Date();
    const _Date6 = Date;
    const date5 = new Date(sum2);
    const obj4 = resetCache /* resetCache */;
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    if (isSameDayResult2) {
      const data4 = intl5.data;
      let formatTimeResult2 = data4.formatTime(sum2, { format: "short" });
    } else {
      let obj1 = { time: null };
      const data3 = tmp27(1236).intl.data;
      obj1[0] = data3.formatTime(sum2, { format: "short" });
      formatTimeResult2 = intl5.formatToPlainString(tmp27(1236).t.DN91Jz, obj1);
    }
    const _HermesInternal2 = HermesInternal;
    return "" + formatToPlainStringResult2 + " (" + formatTimeResult2 + ")";
  } else if (tmp.MINUTES_30 === arg0) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    const formatToPlainStringResult3 = intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t.TS3eJb, { minutes: 30 });
    const _Date = Date;
    const result1 = 30 * set.Millis.MINUTE;
    const sum3 = Date.now() + result1;
    obj1 = resetCache /* resetCache */;
    const _Date2 = Date;
    const date6 = new Date();
    const _Date3 = Date;
    const date7 = new Date(sum3);
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    if (isSameDayResult3) {
      const data2 = intl3.data;
      let formatTimeResult3 = data2.formatTime(sum3, { format: "short" });
    } else {
      const obj2 = { time: null };
      const data = tmp7(1236).intl.data;
      obj2[0] = data.formatTime(sum3, { format: "short" });
      formatTimeResult3 = intl3.formatToPlainString(tmp7(1236).t.DN91Jz, obj2);
    }
    const _HermesInternal = HermesInternal;
    return "" + formatToPlainStringResult3 + " (" + formatTimeResult3 + ")";
  } else if (tmp.DONT_CLEAR === arg0) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.bRn8cq);
  } else {
    obj = isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */;
    obj.assertNever(arg0);
  }
};