// === Module 7988: FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS ===

// Module 7988 (FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS)
import set from "set" /* 2 */;
import _mod3718 from "module_3718" /* 3718 */;

const result = set.fileFinishedImporting("modules/premium/gifting/shared/FriendAnniversaryUtils.tsx");

export const FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS = 7;
export const isFriendAnniversary = function isFriendAnniversary(date) {
  date = new Date();
  const items = [-1, 0, 1];
  const fullYear = date.getFullYear();
  const obj2 = items[Symbol.iterator]();
  while (obj2 !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let obj3 = _mod3718;
    let setYearResult = obj3.setYear(date, fullYear + tmp2);
    let tmp6 = setYearResult;
    let obj4 = _mod3718;
    if (!obj4.isSameDay(setYearResult, date)) {
      let _Math = Math;
      let tmp3Result = tmp3(3718);
      let tmp7 = setYearResult;
      if (Math.abs(tmp3Result.differenceInDays(date, tmp6)) <= 7) {
        let tmp8 = obj2;
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
  const obj = _mod3718;
  return Math.round(obj.differenceInMonths(new Date(), friendsSince) / 12);
};
export const categorizeFriendAnniversariesByAffinity = function categorizeFriendAnniversariesByAffinity(closure_11, arg1, flag) {
  const highestAffinity = new Set();
  const highAffinity = new Set();
  if (flag) {
    const _Math = Math;
    const substr = closure_11.slice(0, Math.ceil(closure_11.length / 2));
    const item = substr.forEach((arg0) => {
      highestAffinity.add(arg0);
    });
    const item1 = closure_11.forEach((arg0) => {
      highAffinity.add(arg0);
    });
  } else {
    const iter = closure_11[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let tmp7 = arg1(nextResult);
      let tmp8 = tmp7;
      let tmp9 = null != tmp7;
      if (tmp9) {
        let tmp10 = tmp7;
        tmp9 = tmp8 > 0.7;
      }
      if (tmp9) {
        let tmp11 = nextResult;
        let addResult = highestAffinity.add(tmp6);
      }
      let tmp13 = tmp7;
      let tmp14 = null != tmp8;
      if (tmp14) {
        let tmp15 = tmp7;
        tmp14 = tmp8 > 0.5;
      }
      if (tmp14) {
        let tmp16 = nextResult;
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
    let tmp = key10006;
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