// === Module 11825: UserProfileEmbedUsers ===

// Module 11825 (UserProfileEmbedUsers)
import CodedLink from "CodedLink" /* 5639 */;
import UserProfileEmbedCard from "UserProfileEmbedCard" /* 11826 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const items = [];
let map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEmbedUsers.tsx");

export const NO_USER_PROFILE_EMBED_USER_IDS = items;
export const NO_USER_PROFILE_EMBED_USERS = map;
export function collectUserProfileEmbedUserIds(arr) {
  set = new Set();
  const item = arr.forEach((item) => {
    for (const item10009 of tmp) {
      let code = item10009.code;
      if (item10009.type === CodedLink.CodedLinkType.USER_PROFILE) {
        let addResult = set.add(code);
      }
      continue;
    }
  });
  if (0 === set.size) {
    arr = items;
  } else {
    const _Array = Array;
    arr = Array.from(set);
  }
  return arr;
}
export function getUserProfileEmbedUsers(arg0, guild_id, id) {
  if (0 === arg0.length) {
    return map;
  } else {
    const _Map = Map;
    map = new Map();
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj2 = UserProfileEmbedCard;
      let result = map.set(nextResult, obj2.userProfileEmbedCardKey(nextResult, guild_id, id));
      continue;
    }
    return map;
  }
}
export function areUserProfileEmbedUsersEqual(size, size2) {
  if (size === size2) {
    return true;
  } else if (size.size !== size2.size) {
    return false;
  } else {
    const obj = size[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp6 = _slicedToArray(tmp3, 2);
      if (size2.get(tmp6[0]) !== tmp6[1]) {
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}