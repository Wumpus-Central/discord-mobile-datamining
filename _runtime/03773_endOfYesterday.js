// _runtime/03773_endOfYesterday.js

export default function endOfYesterday() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const date2 = new Date(0);
  date2.setFullYear(fullYear, month, date.getDate() - 1);
  date2.setHours(23, 59, 59, 999);
  return date2;
};
export default exports.default;