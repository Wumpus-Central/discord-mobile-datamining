// === Module 7859: ProfileReadStateUtils ===

// Module 7859 (ProfileReadStateUtils)
import ProfileReadStateSection from "ProfileReadStateSection" /* 7860 */;
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
const result = size.fileFinishedImporting("modules/user_profile/ProfileReadStateUtils.tsx");

export function parseProfileReadState(body) {
  if (null != body) {
    const obj = {};
    const _Object = Object;
    const values = Object.values(ProfileReadStateSection.ProfileReadStateSection);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp11 = body.sections[nextResult];
      let acked_at;
      let tmp9 = nextResult;
      if (tmp11 != null) {
        acked_at = tmp11.acked_at;
      }
      let tmp10Result = parseTimestamp(acked_at);
      if (null != tmp10Result) {
        obj[tmp9] = tmp14;
      }
      continue;
    }
    return obj;
  }
}
export function getWishlistUpdatedAtTimestamp(updated_at) {
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
}
export function isWishlistItemNew(addedAt, profileReadStateSectionAckedAt) {
  let tmp = null;
  if (null != addedAt) {
    const _Date = Date;
    const parsed = Date.parse(addedAt);
    const _Number = Number;
    let tmp4 = null;
    if (!Number.isNaN(parsed)) {
      tmp4 = parsed;
    }
    tmp = tmp4;
  }
  return null != tmp && null != profileReadStateSectionAckedAt && tmp > profileReadStateSectionAckedAt;
}
export function hasWishlistBeenUpdatedSinceAcked(wishlistSettings, profileReadStateSectionAckedAt) {
  if (null == profileReadStateSectionAckedAt) {
    return false;
  } else {
    let updated_at;
    if (wishlistSettings != null) {
      updated_at = wishlistSettings.updated_at;
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
    return null != tmp3 && tmp3 > profileReadStateSectionAckedAt;
  }
}
export function mergeProfileReadState(profileReadState, ackedAt) {
  let tmp = ackedAt;
  if (null != profileReadState) {
    if (null != tmp) {
      const obj = {};
      const merged = Object.assign(profileReadState);
      const _Object = Object;
      const values = Object.values(ProfileReadStateSection.ProfileReadStateSection);
      for (const item10007 of values) {
        let tmp4 = tmp[item10007];
        let tmp5 = tmp4;
        let tmp6 = null != tmp4;
        if (tmp6) {
          let num = obj[item10007];
          if (num == null) {
            num = 0;
          }
          tmp6 = tmp5 > num;
        }
        if (tmp6) {
          obj[item10007] = tmp5;
        }
        continue;
      }
      return obj;
    }
  }
  if (tmp == null) {
    tmp = profileReadState;
  }
  return tmp;
}
export function shouldAckWishlist(wishlistSettings, profileReadState) {
  if (null == profileReadState) {
    return false;
  } else {
    const tmp11 = profileReadState[ProfileReadStateSection.ProfileReadStateSection.WISHLIST];
    let tmp8 = null == tmp11;
    if (!tmp8) {
      let flag = false;
      if (null != tmp11) {
        let updated_at;
        if (wishlistSettings != null) {
          updated_at = wishlistSettings.updated_at;
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
        flag = null != tmp3 && tmp3 > tmp11;
        const tmp7 = null != tmp3 && tmp3 > tmp11;
      }
      tmp8 = flag;
    }
    return tmp8;
  }
}