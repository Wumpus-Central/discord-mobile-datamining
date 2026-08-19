// === Module 8291: FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS ===

// Module 8291 (FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS)
import obj132 from "obj132" /* 2 */;
import _mod3618 from "module_3618" /* 3618 */;

const result = obj132.fileFinishedImporting("modules/premium/gifting/shared/FriendAnniversaryUtils.tsx");

export const FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS = 7;
export const isFriendAnniversary = function isFriendAnniversary(date) {
  date = new Date();
  const items = [-1, 0, 1];
  const fullYear = date.getFullYear();
  const obj2 = items[Symbol.iterator]();
  while (obj2 !== undefined) {
    let obj3 = _mod3618;
    let setYearResult = obj3.setYear(date, fullYear + tmp2);
    let tmp6 = setYearResult;
    let obj4 = _mod3618;
    if (!obj4.isSameDay(setYearResult, date)) {
      let _Math = Math;
      let tmp3Result = _mod3618;
      if (Math.abs(tmp3Result.differenceInDays(date, tmp6)) <= 7) {
        obj2.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export const yearsSince = function yearsSince(friendsSince) {
  const obj = _mod3618;
  return Math.round(obj.differenceInMonths(new Date(), friendsSince) / 12);
};
export const categorizeFriendAnniversariesByAffinity = function categorizeFriendAnniversariesByAffinity(closure_11, fn, flag) {
  const highestAffinity = new Set();
  const highAffinity = new Set();
  if (flag) {
    const _Math = Math;
    const substr = arr.slice(0, Math.ceil(arr.length / 2));
    const item = substr.forEach((item, index) => {
      highestAffinity.add(item);
    });
    const item1 = arr.forEach((item, index) => {
      highAffinity.add(item);
    });
  } else {
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let tmp7 = fn(nextResult);
      let tmp8 = tmp7;
      let tmp9 = null != tmp7;
      if (tmp9) {
        tmp9 = tmp8 > 0.7;
      }
      if (tmp9) {
        let addResult = highestAffinity.add(tmp6);
      }
      let tmp14 = null != tmp8;
      if (tmp14) {
        tmp14 = tmp8 > 0.5;
      }
      if (tmp14) {
        let addResult1 = highAffinity.add(tmp6);
      }
      continue;
    }
  }
  return { highestAffinity, highAffinity };
};
export const pruneTimestampMap = function pruneTimestampMap(messageGiftIntentLastShownMap, currentTime, arg2) {
  const obj = {};
  for (const key10006 in arg0) {
    let tmp2 = arg0[key10006];
    if (arg1 - tmp2 > arg2) {
      continue;
    } else {
      obj[key10006] = tmp2;
      continue;
    }
    continue;
  }
  return obj;
};