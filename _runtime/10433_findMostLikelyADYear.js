// === Module 10433: findMostLikelyADYear ===

// Module 10433 (findMostLikelyADYear)
import EmptyDuration from "EmptyDuration" /* 10434 */;

require = arg1;
const dependencyMap = arg6;

export const findMostLikelyADYear = function findMostLikelyADYear(parsed) {
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
export const findYearClosestToRef = function findYearClosestToRef(refDate, parsed, parsed2) {
  const date = new Date(refDate);
  date.setMonth(parsed2 - 1);
  date.setDate(parsed);
  let addDurationResult = EmptyDuration.addDuration(date, { year: 1 });
  const addDurationResult1 = EmptyDuration.addDuration(date, { year: -1 });
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