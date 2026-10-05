// === Module 12475: StatusUtils ===

// Module 12475 (StatusUtils)
import intl from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/multi_account/StatusUtils.tsx");

export const getStatusExpiryParts = function getStatusExpiryParts(arg0) {
  let data2;
  let data3;
  let data4;
  let obj3;
  const date = new Date(Number(arg0));
  const date1 = new Date();
  const fullYear = date.getFullYear();
  let tmp2 = fullYear === date1.getFullYear();
  if (tmp2) {
    const month = date.getMonth();
    tmp2 = month === date1.getMonth();
  }
  if (tmp2) {
    const date2 = date.getDate();
    tmp2 = date2 === date1.getDate();
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
    const date4 = date.getDate();
    tmp7 = date4 === date3.getDate();
  }
  const data = intl.intl.data;
  const formatTimeResult = data.formatTime(date, { format: "short" });
  if (tmp2) {
    const obj = { kind: "today", dateString: data4.formatRelativeTime(0, "day", { numeric: "auto" }), timeString: formatTimeResult };
    data4 = intl.intl.data;
    obj3 = obj;
  } else if (tmp7) {
    const obj2 = { kind: "tomorrow", dateString: data3.formatRelativeTime(1, "day", { numeric: "auto" }), timeString: formatTimeResult };
    data3 = intl.intl.data;
    obj3 = obj2;
  } else {
    obj3 = { kind: "date", dateString: data2.formatDate(date, { dateStyle: "short" }), timeString: formatTimeResult };
    data2 = intl.intl.data;
  }
  return obj3;
};