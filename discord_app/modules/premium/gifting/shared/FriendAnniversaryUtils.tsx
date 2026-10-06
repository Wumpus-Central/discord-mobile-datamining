// === Module 7760: FriendAnniversaryUtils ===

// Module 7760 (FriendAnniversaryUtils)
import _mod4110 from "module_4110" /* 4110 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/shared/FriendAnniversaryUtils.tsx");

export const FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS = 7;
export const isFriendAnniversary = function isFriendAnniversary(date) {
  date = new Date();
  const items = [-1, 0, 1];
  const fullYear = date.getFullYear();
  const obj2 = items[Symbol.iterator]();
  while (obj2 !== undefined) {
    let obj3 = _mod4110;
    let setYearResult = obj3.setYear(date, fullYear + tmp2);
    let tmp6 = setYearResult;
    let obj4 = _mod4110;
    if (!obj4.isSameDay(setYearResult, date)) {
      let _Math = Math;
      let tmp3Result = _mod4110;
      if (abs(tmp3Result.differenceInDays(date, tmp6)) <= 7) {
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
  const differenceInMonths = _mod4110.differenceInMonths;
  _mod4110;
  const date = new Date();
  return round(differenceInMonths(date, friendsSince) / 12);
};
export const categorizeFriendAnniversariesByAffinity = function categorizeFriendAnniversariesByAffinity(arr, fn, flag) {
  const highestAffinity = new Set();
  const highAffinity = new Set();
  const tmp = flag;
  if (tmp) {
    const _Math = Math;
    const substr = arr.slice(0, Math.ceil(arr.length / 2));
    const item = substr.forEach((item) => {
      highestAffinity.add(item);
    });
    const item1 = arr.forEach((item) => {
      highAffinity.add(item);
    });
  } else {
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let tmp8 = fn(nextResult);
      let tmp9 = tmp8;
      let tmp10 = null != tmp8;
      if (tmp10) {
        tmp10 = tmp9 > 0.7;
      }
      if (tmp10) {
        let addResult = highestAffinity.add(tmp7);
      }
      let tmp15 = null != tmp9;
      if (tmp15) {
        tmp15 = tmp9 > 0.5;
      }
      if (tmp15) {
        let addResult1 = highAffinity.add(tmp7);
      }
      continue;
    }
  }
  return { highestAffinity, highAffinity };
};
export const pruneTimestampMap = function pruneTimestampMap(messageGiftIntentLastShownMap, currentTime, arg2) {
  const obj = {};
  for (const key10006 in messageGiftIntentLastShownMap) {
    let tmp2 = messageGiftIntentLastShownMap[key10006];
    if (currentTime - tmp2 > arg2) {
      continue;
    } else {
      obj[key10006] = tmp2;
      continue;
    }
    continue;
  }
  return obj;
};