// === Module 16190: set ===

// Module 16190 (set)
import _fetchProfileAll from "_fetchProfile" /* 8116 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import set from "set" /* 2 */;

let set = new Set();
const map = new Map();
let result = set.fileFinishedImporting("modules/vibegrations/lib/vibegrationsMessageAuthors.tsx");

export const resolveMessageAuthor = function resolveMessageAuthor(arg0, user, currentUser) {
  if (null == arg0) {
    let tmp2 = currentUser;
    if (currentUser == null) {
      tmp2 = null;
    }
    let tmp = tmp2;
  } else {
    tmp = user;
    if (user == null) {
      tmp = null;
    }
  }
  return tmp;
};
export const requestMessageAuthor = function requestMessageAuthor(userId) {
  importAll = userId;
  if (null != userId) {
    if (!set.has(userId)) {
      if (null == user.getUser(userId)) {
        let num = map.get(userId);
        if (num == null) {
          num = 0;
        }
        if (num < 3) {
          const result = obj3.set(userId, num + 1);
          obj2.add(userId);
          user = _fetchProfileAll.getUser(userId);
          const obj = _fetchProfileAll;
          user.finally(() => closure_1_3.delete(closure_0)).catch(() => {

          });
          const cleanupPromise = user.finally(() => closure_1_3.delete(closure_0));
        }
        obj3 = map;
      }
    }
    obj2 = set;
  }
};