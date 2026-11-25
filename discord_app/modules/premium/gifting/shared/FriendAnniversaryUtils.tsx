// === Module 11972: FriendAnniversaryUtils ===

// Module 11972 (FriendAnniversaryUtils)
import _modDef2168 from "module_2168" /* 2168 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/shared/FriendAnniversaryUtils.tsx");

export const FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS = 7;
export function isFriendAnniversary(date) {
  date = new Date();
  items = [-1, 0, 1];
  const fullYear = date.getFullYear();
  const obj2 = items[Symbol.iterator]();
  while (obj2 !== undefined) {
    let _Date = Date;
    let tmp3 = new.target;
    let tmp4 = new.target;
    let date1 = new Date(date);
    let tmp7 = date1;
    let setFullYearResult = date1.setFullYear(fullYear + tmp2);
    let obj4 = _modDef2168(date1);
    if (!obj4.isSame(date, "day")) {
      let _Math = Math;
      let obj5 = _modDef2168(date);
      if (Math.abs(obj5.diff(tmp7, "days")) <= 7) {
        obj2.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
}
export function yearsSince(friendsSince) {
  return Math.round(_modDef2168().diff(friendsSince, "months") / 12);
}
export function categorizeFriendAnniversariesByAffinity(arr, fn, flag) {
  const highestAffinity = new Set();
  const highAffinity = new Set();
  if (flag) {
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
}
export function pruneTimestampMap(messageGiftIntentLastShownMap, currentTime, arg2) {
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
}