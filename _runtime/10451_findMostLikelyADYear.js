// _runtime/10451_findMostLikelyADYear.js
import addDuration from "10452_addDuration.js";

require = arg1;
const dependencyMap = arg6;
arg5.findMostLikelyADYear = function findMostLikelyADYear(parsed) {
  let sum = parsed;
  if (parsed < 100) {
    let num2 = 2000;
    if (parsed > 50) {
      num2 = 1900;
    }
    sum = parsed + num2;
  }
  return sum;
};
arg5.findYearClosestToRef = function findYearClosestToRef(refDate, result, parsed) {
  const date = new Date(refDate);
  date.setMonth(parsed - 1);
  date.setDate(result);
  let addDurationResult = addDuration.addDuration(date, { year: 1 });
  const addDurationResult1 = addDuration.addDuration(date, { year: -1 });
  const time = addDurationResult.getTime();
  const absolute = Math.abs(time - refDate.getTime());
  const time1 = date.getTime();
  if (absolute >= Math.abs(time1 - refDate.getTime())) {
    const _Math = Math;
    const time2 = addDurationResult1.getTime();
    const _Math2 = Math;
    const absolute1 = Math.abs(time2 - refDate.getTime());
    const time3 = date.getTime();
    addDurationResult = date;
    if (absolute1 < Math.abs(time3 - refDate.getTime())) {
      addDurationResult = addDurationResult1;
    }
  }
  return addDurationResult.getFullYear();
};
