// === Module 16658: conjureMessageAuthors ===

// Module 16658 (conjureMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 7852 */;
import UserStore from "UserStore" /* 1377 */;

const set = new Set();
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMessageAuthors.tsx");

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
      if (null == UserStore.getUser(userId)) {
        let num = map.get(userId);
        if (num == null) {
          num = 0;
        }
        if (num < 3) {
          const result = map.set(userId, num + 1);
          set.add(userId);
          const user = UserActionCreatorsAll.getUser(userId);
          user.finally(() => set.delete(closure_0)).catch(() => {

          });
          const cleanupPromise = user.finally(() => set.delete(closure_0));
        }
      }
    }
  }
};