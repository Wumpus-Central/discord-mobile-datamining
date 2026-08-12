// _runtime/03603_getTimezoneOffsetInMilliseconds.js

export default function getTimezoneOffsetInMilliseconds(getFullYear) {
  const fullYear = getFullYear.getFullYear();
  const month = getFullYear.getMonth();
  const hours = getFullYear.getHours();
  const minutes = getFullYear.getMinutes();
  const seconds = getFullYear.getSeconds();
  const date1 = new Date(Date.UTC(fullYear, month, getFullYear.getDate(), hours, minutes, seconds, getFullYear.getMilliseconds()));
  date1.setUTCFullYear(getFullYear.getFullYear());
  const time = getFullYear.getTime();
  return time - date1.getTime();
};
export default exports.default;