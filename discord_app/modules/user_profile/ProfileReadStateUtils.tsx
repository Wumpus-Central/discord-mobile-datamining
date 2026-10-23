// === Module 7712: ProfileReadStateUtils ===

// Module 7712 (ProfileReadStateUtils)
import ProfileReadStateConstants from "ProfileReadStateConstants" /* 7713 */;
import size from "module_2" /* 2 */;

function parseTimestamp(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const _Date = Date;
    const parsed = Date.parse(arg0);
    const _Number = Number;
    let tmp3 = null;
    if (!Number.isNaN(parsed)) {
      tmp3 = parsed;
    }
    return tmp3;
  }
}
const ProfileReadStateSection = ProfileReadStateConstants.ProfileReadStateSection;
const result = size.fileFinishedImporting("modules/user_profile/ProfileReadStateUtils.tsx");

export const parseProfileReadState = function parseProfileReadState(profile_read_state) {
  if (null != profile_read_state) {
    const obj = {};
    const _Object = Object;
    const values = Object.values(ProfileReadStateSection);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp10 = profile_read_state.sections[nextResult];
      let acked_at;
      let tmp8 = nextResult;
      if (tmp10 != null) {
        acked_at = tmp10.acked_at;
      }
      let tmp9Result = parseTimestamp(acked_at);
      if (null != tmp9Result) {
        obj[tmp8] = tmp13;
      }
      continue;
    }
    return obj;
  }
};
export const getWishlistUpdatedAtTimestamp = function getWishlistUpdatedAtTimestamp(updated_at) {
  updated_at = undefined;
  if (updated_at != null) {
    updated_at = updated_at.updated_at;
  }
  let tmp2 = null;
  if (null != updated_at) {
    const _Date = Date;
    const parsed = Date.parse(updated_at);
    const _Number = Number;
    let tmp5 = null;
    if (!Number.isNaN(parsed)) {
      tmp5 = parsed;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
export const isWishlistItemNew = function isWishlistItemNew(arg0, arg1) {
  let tmp = null;
  if (null != arg0) {
    const _Date = Date;
    const parsed = Date.parse(arg0);
    const _Number = Number;
    let tmp4 = null;
    if (!Number.isNaN(parsed)) {
      tmp4 = parsed;
    }
    tmp = tmp4;
  }
  return null != tmp && null != arg1 && tmp > arg1;
};
export const hasWishlistBeenUpdatedSinceLastViewed = function hasWishlistBeenUpdatedSinceLastViewed(updated_at, lastViewedAt) {
  if (null == lastViewedAt) {
    return false;
  } else {
    updated_at = undefined;
    if (updated_at != null) {
      updated_at = updated_at.updated_at;
    }
    let tmp3 = null;
    if (null != updated_at) {
      const _Date = Date;
      const parsed = Date.parse(updated_at);
      const _Number = Number;
      let tmp6 = null;
      if (!Number.isNaN(parsed)) {
        tmp6 = parsed;
      }
      tmp3 = tmp6;
    }
    return null != tmp3 && tmp3 > lastViewedAt.lastViewedAt;
  }
};