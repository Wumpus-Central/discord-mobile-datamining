// === Module 4127: getTimezoneOffsetInMilliseconds ===

// Module 4127 (getTimezoneOffsetInMilliseconds)

export default function getTimezoneOffsetInMilliseconds(getFullYear) {
  const fullYear = getFullYear.getFullYear();
  const month = getFullYear.getMonth();
  const date = getFullYear.getDate();
  const hours = getFullYear.getHours();
  const minutes = getFullYear.getMinutes();
  const seconds = getFullYear.getSeconds();
  const date1 = new Date(UTC(fullYear, month, date, hours, minutes, seconds, getFullYear.getMilliseconds()));
  date1.setUTCFullYear(getFullYear.getFullYear());
  const time = getFullYear.getTime();
  return time - date1.getTime();
};