// _runtime/10162_findMostLikelyADYear.js
import EmptyDuration from "10163_EmptyDuration.js";

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
  const abs2 = Math.abs;
  const absResult = abs(time - refDate.getTime());
  const time1 = date.getTime();
  if (absResult >= abs2(time1 - refDate.getTime())) {
    const _Math = Math;
    const abs3 = Math.abs;
    const time2 = addDurationResult1.getTime();
    const _Math2 = Math;
    const abs4 = Math.abs;
    const abs3Result = abs3(time2 - refDate.getTime());
    const time3 = date.getTime();
    addDurationResult = date;
    if (abs3Result < abs4(time3 - refDate.getTime())) {
      addDurationResult = addDurationResult1;
    }
  }
  return addDurationResult.getFullYear();
};
