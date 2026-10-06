// === Module 16674: conjureMessageAuthors ===

// Module 16674 (conjureMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 7863 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let importAll;

const set = new Set();
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMessageAuthors.tsx");

export const resolveMessageAuthor = function resolveMessageAuthor(arg0, user, currentUser) {
  let tmp;
  if (null == arg0) {
    let tmp2 = currentUser;
    if (currentUser == null) {
      tmp2 = null;
    }
    tmp = tmp2;
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
      if (null == UserStore.getUser(userId)) {
        let num = map.get(userId);
        if (num == null) {
          num = 0;
        }
        if (num < 3) {
          const result = map.set(userId, num + 1);
          set.add(userId);
          const obj = UserActionCreatorsAll;
          const user = obj.getUser(userId);
          const cleanupPromise = user.finally(() => set.delete(userId));
          cleanupPromise.catch(() => {

          });
        }
      }
    }
  }
};