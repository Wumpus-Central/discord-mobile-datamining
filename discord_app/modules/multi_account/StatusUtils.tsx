// === Module 10092: StatusUtils ===

// Module 10092 (StatusUtils)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/multi_account/StatusUtils.tsx");

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
  const data = util.intl.data;
  const formatTimeResult = data.formatTime(date, { format: "short" });
  if (tmp2) {
    let obj = { kind: "today", dateString: null, timeString: null };
    const data4 = tmp10(1114).intl.data;
    obj.dateString = data4.formatRelativeTime(0, "day", { numeric: "auto" });
    obj.timeString = formatTimeResult;
    let obj1 = obj;
  } else if (tmp7) {
    obj = { kind: "tomorrow", dateString: null, timeString: null };
    const data3 = tmp10(1114).intl.data;
    obj.dateString = data3.formatRelativeTime(1, "day", { numeric: "auto" });
    obj.timeString = formatTimeResult;
    obj1 = obj;
  } else {
    obj1 = { kind: "date", dateString: null, timeString: null };
    const data2 = tmp10(1114).intl.data;
    obj1.dateString = data2.formatDate(date, { dateStyle: "short" });
    obj1.timeString = formatTimeResult;
  }
  return obj1;
};