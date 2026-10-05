// _runtime/04189_endOfYesterday.js

export default function endOfYesterday() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const date1 = date.getDate();
  const date2 = new Date(0);
  date2.setFullYear(fullYear, month, date1 - 1);
  date2.setHours(23, 59, 59, 999);
  return date2;
}
