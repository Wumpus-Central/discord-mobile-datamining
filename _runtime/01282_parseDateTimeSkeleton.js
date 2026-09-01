// _runtime/01282_parseDateTimeSkeleton.js
arg5.parseDateTimeSkeleton = undefined;
const re0 =
  /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
arg5.parseDateTimeSkeleton = function parseDateTimeSkeleton(str) {
  const obj = {};
  const replaced = str.replace(obj, (arg0) => {
    const rangeError = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    throw rangeError;
  });
  return obj;
};
