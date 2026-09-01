// discord_app/modules/multi_account/StatusUtils.tsx
import set from "../../../_runtime/00002_set.js";
import getSystemLocale from "../../intl/index.native.tsx";

const result = set.fileFinishedImporting("modules/multi_account/StatusUtils.tsx");

export const getStatusExpiryParts = function getStatusExpiryParts(arg0) {
  const date = new Date(Number(arg0));
  const date1 = new Date();
  const fullYear = date.getFullYear();
  let tmp2 = fullYear === date1.getFullYear();
  if (tmp2) {
    const month = date.getMonth();
    tmp2 = month === date1.getMonth();
  }
  if (tmp2) {
    tmp2 = date.getDate() === date1.getDate();
    const date2 = date.getDate();
  }
  const date3 = new Date();
  date3.setDate(date3.getDate() + 1);
  const fullYear1 = date.getFullYear();
  let tmp7 = fullYear1 === date3.getFullYear();
  if (tmp7) {
    const month1 = date.getMonth();
    tmp7 = month1 === date3.getMonth();
  }
  if (tmp7) {
    tmp7 = date.getDate() === date3.getDate();
    const date4 = date.getDate();
  }
  const data = getSystemLocale.intl.data;
  const formatTimeResult = data.formatTime(date, { format: "short" });
  if (tmp2) {
    let obj = { kind: "today", dateString: null, timeString: null };
    const data4 = tmp10(1236).intl.data;
    obj[1] = data4.formatRelativeTime(0, "day", { numeric: "auto" });
    obj[2] = formatTimeResult;
    obj1 = obj;
  } else if (tmp7) {
    obj = { kind: "tomorrow", dateString: null, timeString: null };
    const data3 = tmp10(1236).intl.data;
    obj[1] = data3.formatRelativeTime(1, "day", { numeric: "auto" });
    obj[2] = formatTimeResult;
    obj1 = obj;
  } else {
    obj1 = { kind: "date", dateString: null, timeString: null };
    const data2 = tmp10(1236).intl.data;
    obj1[1] = data2.formatDate(date, { dateStyle: "short" });
    obj1[2] = formatTimeResult;
  }
  return obj1;
};
