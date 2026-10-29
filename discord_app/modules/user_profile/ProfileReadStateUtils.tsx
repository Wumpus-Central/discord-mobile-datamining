// discord_app/modules/user_profile/ProfileReadStateUtils.tsx
import ProfileReadStateConstants from "ProfileReadStateConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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

export function parseProfileReadState(profile_read_state) {
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
export function isWishlistItemNew(arg0, arg1) {
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
}
export function hasWishlistBeenUpdatedSinceAcked(updated_at, arg1) {
  if (null == arg1) {
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
    return null != tmp3 && tmp3 > arg1;
  }
}
export function mergeProfileReadState(profileReadState, ackedAt) {
  let tmp = ackedAt;
  if (null != profileReadState) {
    if (null != tmp) {
      const obj = {};
      const merged = Object.assign(profileReadState);
      const _Object = Object;
      const values = Object.values(ProfileReadStateSection);
      for (const item10018 of values) {
        let tmp11 = tmp[item10018];
        let tmp12 = tmp11;
        let tmp13 = null != tmp11;
        if (tmp13) {
          let num = obj[item10018];
          if (num == null) {
            num = 0;
          }
          tmp13 = tmp12 > num;
        }
        if (tmp13) {
          obj[item10018] = tmp12;
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
export function shouldAckWishlist(updated_at, arg1) {
  let tmp = null == arg1;
  if (!tmp) {
    let flag = false;
    if (null != arg1) {
      updated_at = undefined;
      if (updated_at != null) {
        updated_at = updated_at.updated_at;
      }
      let tmp4 = null;
      if (null != updated_at) {
        const _Date = Date;
        const parsed = Date.parse(updated_at);
        const _Number = Number;
        let tmp7 = null;
        if (!Number.isNaN(parsed)) {
          tmp7 = parsed;
        }
        tmp4 = tmp7;
      }
      flag = null != tmp4 && tmp4 > arg1;
      const tmp8 = null != tmp4 && tmp4 > arg1;
    }
    tmp = flag;
  }
  return tmp;
}
